/**
 * Formspree & Pushover Integration Configuration
 * 
 * To connect your website forms to your client's Pushover notifications:
 * 1. Create a free form at https://formspree.io
 * 2. In Formspree form settings -> Notifications, set target email to the client's Pushover email
 *    (e.g., your_pushover_user_key@pomail.net or a Pushover email alias).
 * 3. Add your Formspree Form ID in .env (or paste below):
 *    VITE_FORMSPREE_BOOKING_ID=your_form_id
 *    VITE_FORMSPREE_CONTACT_ID=your_form_id
 */

export const FORMSPREE_CONFIG = {
  // If you use separate forms for bookings and general contact:
  bookingFormId: import.meta.env.VITE_FORMSPREE_BOOKING_ID || import.meta.env.VITE_FORMSPREE_FORM_ID || '',
  contactFormId: import.meta.env.VITE_FORMSPREE_CONTACT_ID || import.meta.env.VITE_FORMSPREE_FORM_ID || '',
};

/**
 * Sends form data to Formspree with structured fields optimized for Pushover mobile alerts.
 * 
 * @param {'booking' | 'contact'} formType 
 * @param {Record<string, any>} rawData 
 * @returns {Promise<{ success: boolean; simulated?: boolean }>}
 */
export async function submitFormspree(formType, rawData) {
  const formId = formType === 'booking' 
    ? (FORMSPREE_CONFIG.bookingFormId || FORMSPREE_CONFIG.contactFormId)
    : (FORMSPREE_CONFIG.contactFormId || FORMSPREE_CONFIG.bookingFormId);

  // Build clean, human-readable payload formatted specifically for instant Pushover notification readability
  let payload = {};

  if (formType === 'booking') {
    payload = {
      _subject: `🚨 [Mr. Lube Booking] ${rawData.name || 'New Request'} - ${rawData.vehicleMakeModel || 'Vehicle'}`,
      'Customer Name': rawData.name,
      'Phone Number': rawData.phone,
      'Email Address': rawData.email || 'Not provided',
      'Vehicle': rawData.vehicleMakeModel,
      'Service Requested': rawData.service,
      'Preferred Date': rawData.preferredDate || 'Earliest Available',
      'Preferred Time': rawData.preferredTime || 'Any Time',
      'Notes & Symptoms': rawData.notes || 'None',
      _replyto: rawData.email || undefined,
    };
  } else {
    payload = {
      _subject: `💬 [Mr. Lube Contact] ${rawData.name || 'Website Inquiry'} - ${rawData.subject || 'General'}`,
      'Customer Name': rawData.name,
      'Phone Number': rawData.phone,
      'Email Address': rawData.email || 'Not provided',
      'Subject': rawData.subject,
      'Message': rawData.message,
      _replyto: rawData.email || undefined,
    };
  }

  // If no Formspree ID is configured yet, simulate success in dev so the UI behaves gracefully
  if (!formId || formId === 'YOUR_FORMSPREE_BOOKING_ID' || formId === 'YOUR_FORMSPREE_CONTACT_ID') {
    console.warn(
      `[Formspree Notice] No Formspree ID configured for "${formType}". ` +
      `Set VITE_FORMSPREE_${formType.toUpperCase()}_ID in your .env file to deliver live Pushover alerts to the shop owner.`
    );
    // Simulate brief network delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { success: true, simulated: true };
  }

  const endpoint = `https://formspree.io/f/${formId.replace(/^https:\/\/formspree\.io\/f\//, '')}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    let errorMessage = 'Failed to submit form. Please call the shop directly.';
    try {
      const errorData = await response.json();
      if (errorData.errors && errorData.errors.length > 0) {
        errorMessage = errorData.errors.map(err => err.message).join(', ');
      }
    } catch {
      // Use default fallback error message
    }
    throw new Error(errorMessage);
  }

  return { success: true };
}

export const businessInfo = {
  name: "Mr. Lube",
  partnerBrand: "Valvoline",
  affiliation: "Authorized Valvoline Service Center",
  tagline: "Vandalia's Authorized Valvoline Quick Lube & Automotive Specialists",
  phone: "(618) 699-4003",
  phoneAlt: "(618) 283-9161",
  phoneRaw: "6186994003",
  address: {
    street: "725 School St",
    city: "Vandalia",
    state: "IL",
    zip: "62471",
    full: "725 School St, Vandalia, IL 62471"
  },
  coordinates: {
    lat: 38.9606,
    lng: -89.0945,
    display: "38°57'38\"N 89°05'40\"W"
  },
  email: "service@mrlubevandalia.com",
  hours: [
    { day: "Monday", opens: "8:00 AM", closes: "5:00 PM", openHour: 8.0, closeHour: 17.0 },
    { day: "Tuesday", opens: "8:00 AM", closes: "5:00 PM", openHour: 8.0, closeHour: 17.0 },
    { day: "Wednesday", opens: "8:00 AM", closes: "5:00 PM", openHour: 8.0, closeHour: 17.0 },
    { day: "Thursday", opens: "8:00 AM", closes: "5:00 PM", openHour: 8.0, closeHour: 17.0 },
    { day: "Friday", opens: "8:00 AM", closes: "5:00 PM", openHour: 8.0, closeHour: 17.0 },
    { day: "Saturday", opens: "8:00 AM", closes: "12:00 PM", openHour: 8.0, closeHour: 12.0 },
    { day: "Sunday", opens: "Closed", closes: "Closed", openHour: null, closeHour: null }
  ],
  serviceAreas: [
    "Vandalia, IL",
    "Brownstown, IL",
    "Ramsey, IL",
    "Mulberry Grove, IL",
    "St. Elmo, IL",
    "Greenville, IL",
    "Bingham, IL",
    "Patoka, IL"
  ],
  stats: [
    { label: "Oil Changes Completed", value: "25,000+" },
    { label: "Average Quick-Lube Time", value: "15 Mins" },
    { label: "Verified Rating", value: "4.6 / 5.0" },
    { label: "Valvoline Motor Oil", value: "100%" }
  ]
};

// Check if open in real-time
export const checkIsOpen = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
  const currentHour = now.getHours() + now.getMinutes() / 60;

  if (day === 0) return false; // Sunday closed
  if (day === 6) {
    // Saturday 8:00 AM - 12:00 PM
    return currentHour >= 8.0 && currentHour < 12.0;
  }
  // Monday - Friday 8:00 AM - 5:00 PM
  return currentHour >= 8.0 && currentHour < 17.0;
};

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "oil", label: "Valvoline Oil & Lube" },
  { id: "tires", label: "Tires & Balancing" },
  { id: "brakes", label: "Brake Service & Repair" },
  { id: "maintenance", label: "Auto Maintenance" }
];

export const servicesData = [
  // OIL SERVICES (FEATURING VALVOLINE)
  {
    id: "valvoline-full-synthetic",
    category: "oil",
    title: "Valvoline™ Advanced Full Synthetic",
    popular: true,
    badge: "Most Popular",
    price: "From $79.95",
    priceNote: "Up to 5 qts & filter • Call for quote",
    duration: "15 - 20 Mins",
    appointmentRequired: false,
    image: "/images/oil-change.jpg",
    description: "Our premier motor oil service featuring genuine Valvoline Advanced Full Synthetic. Engineered for modern turbocharged, GDI, hybrid, and high-performance engines, delivering 24X stronger protection against engine-killing contaminants and severe heat.",
    features: [
      "Up to 5 quarts of Valvoline™ Advanced Full Synthetic (Dexos1 Gen 3 / API-SP)",
      "New premium OEM-grade oil filter replacement",
      "Full 21-Point Courtesy Safety Inspection",
      "All under-hood vital fluids checked & topped off with Valvoline fluids",
      "Digital tire pressure check and adjustment to factory PSI",
      "Chassis and steering grease fitting lubrication"
    ]
  },
  {
    id: "valvoline-high-mileage",
    category: "oil",
    title: "Valvoline™ High Mileage with MaxLife™",
    popular: false,
    badge: "For 75k+ Miles",
    price: "From $69.95",
    priceNote: "Up to 5 qts & filter • Call for quote",
    duration: "15 - 20 Mins",
    appointmentRequired: false,
    image: "/images/oil-change.jpg",
    description: "The world's first high-mileage oil specially formulated for vehicles with over 75,000 miles. Features proprietary MaxLife seal conditioners to rejuvenate aging engine seals, prevent oil leaks, and reduce oil burn-off.",
    features: [
      "Up to 5 quarts Valvoline™ MaxLife™ Synthetic Blend or Full Synthetic",
      "Premium anti-wear additives for high-mileage engines",
      "Special seal conditioners that prevent leaks and oil consumption",
      "New spin-on or cartridge oil filter replacement",
      "Comprehensive 21-Point Courtesy Inspection",
      "All vital fluid levels checked and topped off"
    ]
  },
  {
    id: "valvoline-synthetic-blend",
    category: "oil",
    title: "Valvoline™ Daily Protection Synthetic Blend",
    popular: false,
    badge: null,
    price: "From $59.95",
    priceNote: "Up to 5 qts & filter • Call for quote",
    duration: "15 - 20 Mins",
    appointmentRequired: false,
    image: "/images/oil-change.jpg",
    description: "The dependable everyday choice for commuter vehicles and light duty trucks. Formulated with Valvoline's proven additive technology to resist thermal breakdown, prevent deposit buildup, and keep your engine running smoothly.",
    features: [
      "Up to 5 quarts Valvoline™ Daily Protection Synthetic Blend",
      "New OEM-grade oil filter installation",
      "Full 21-Point Courtesy Safety Inspection",
      "Windshield washer fluid, power steering, and coolant top-off",
      "Tire tread depth inspection and air pressure set",
      "Battery health and charging voltage check"
    ]
  },
  {
    id: "valvoline-diesel-service",
    category: "oil",
    title: "Valvoline™ Premium Blue™ Heavy-Duty Diesel",
    popular: false,
    badge: "Cummins Endorsed",
    price: "From $129.95",
    priceNote: "Heavy duty diesel oil & filter • Call for quote",
    duration: "25 - 35 Mins",
    appointmentRequired: false,
    image: "/images/oil-change.jpg",
    description: "The 'Only One' endorsed and recommended by Cummins. Specially formulated for Powerstroke, Duramax, and Cummins diesel work trucks, agricultural equipment, and commercial haulers facing heavy towing and soot stress.",
    features: [
      "Valvoline™ Premium Blue™ CJ-4 / CK-4 heavy-duty diesel motor oil",
      "Heavy-duty high-capacity commercial diesel filter",
      "Chassis lubrication and front-end grease points service",
      "Dual battery terminal condition & charging check",
      "Fuel-water separator inspection and drain",
      "Differential and transfer case fluid level verification"
    ]
  },

  // TIRE SERVICES
  {
    id: "tire-rotation-balance",
    category: "tires",
    title: "Computerized Tire Rotation & Balance",
    popular: true,
    badge: "Drive-In Ready",
    price: "$39.95",
    priceNote: "Complete 4-wheel rotation & dynamic balance",
    duration: "20 - 30 Mins",
    appointmentRequired: false,
    image: "/images/tire-service.jpg",
    description: "Maximize your tire life and eliminate high-speed steering wheel vibrations with our computerized high-precision dynamic balancing and 4-wheel rotation pattern.",
    features: [
      "Front-to-rear or cross pattern rotation per OEM spec",
      "Digital dynamic wheel balancing on laser-guided equipment",
      "Accurate digital tread wear depth measurement across all 4 tires",
      "Brake pad thickness visual check while wheels are off",
      "TPMS tire sensor recalibration & reset",
      "Torqued precisely to manufacturer spec with calibrated torque wrench"
    ]
  },
  {
    id: "tire-sales-installation",
    category: "tires",
    title: "Tire Mounting & Special Order Tires",
    popular: false,
    badge: "Order on Request",
    price: "Call for Quote",
    priceNote: "Mounting, balance & tire orders",
    duration: "30 - 60 Mins",
    appointmentRequired: true,
    image: "/images/tire-service.jpg",
    description: "Need replacement tires mounted or have your own set you need installed? We provide professional tire dismounting, mounting, and dynamic computerized wheel balancing. We can also special-order major tire brands for your vehicle upon request.",
    features: [
      "Professional tire dismounting and precision mounting",
      "Computerized dynamic wheel balancing",
      "New rubber valve stem or TPMS service kit installation",
      "Tire sourcing upon request for cars, pickups, and SUVs",
      "Torqued to manufacturer spec"
    ]
  },
  {
    id: "tire-repair-tpms",
    category: "tires",
    title: "Tire Puncture Repair & TPMS Diagnosis",
    popular: false,
    badge: null,
    price: "$24.95",
    priceNote: "Per tire puncture repair",
    duration: "15 - 20 Mins",
    appointmentRequired: false,
    image: "/images/tire-service.jpg",
    description: "Picked up a nail or screw on Route 51 or I-70? We perform Rubber Manufacturers Association (RMA) compliant two-piece plug/patch repairs from the inside out to ensure lasting safety.",
    features: [
      "Internal tire inspection for hidden internal belt damage",
      "Permanent RMA-certified combination patch/plug repair",
      "Tire re-balancing and bead seal inspection",
      "TPMS electronic sensor scanning and battery testing"
    ]
  },

  // BRAKE SERVICES
  {
    id: "ceramic-brake-pads",
    category: "brakes",
    title: "Premium Ceramic Brake Pad Service",
    popular: true,
    badge: "12k-Mile Warranty",
    price: "From $149.95",
    priceNote: "Per axle (front or rear)",
    duration: "45 - 60 Mins",
    appointmentRequired: true,
    image: "/images/brake-service.jpg",
    description: "Eliminate brake squeal and unsightly black brake dust. Our ultra-quiet ceramic pads deliver instant, confident stopping power with longer rotor life and superior fade resistance.",
    features: [
      "Premium low-dust, noise-free ceramic brake pad set",
      "Caliper slider pins cleaned, lubricated, and booted",
      "Stainless steel hardware and anti-rattle clip replacement",
      "Hydraulic lines, master cylinder, and brake fluid moisture test",
      "Road test verification to ensure factory pedal firmness",
      "12-Month / 12,000-Mile Parts & Labor Guarantee"
    ]
  },
  {
    id: "complete-pad-rotor-package",
    category: "brakes",
    title: "Complete Brake Pad & Rotor Replacement",
    popular: false,
    badge: null,
    price: "From $249.95",
    priceNote: "Per axle (pads + new coated rotors)",
    duration: "60 - 75 Mins",
    appointmentRequired: true,
    image: "/images/brake-service.jpg",
    description: "The complete stopping overhaul. Includes brand new rust-resistant coated rotors and matched ceramic pads to permanently cure pulsating brake pedals, shuddering, and deep grooving.",
    features: [
      "New precision-machined, rust-inhibited coated rotors",
      "Matched premium ceramic brake pads",
      "Complete caliper bracket service and hardware replacement",
      "Wheel hub mating surface rust cleaning to prevent lateral runout",
      "Brake caliper piston compression and seal inspection"
    ]
  },
  {
    id: "brake-fluid-flush",
    category: "brakes",
    title: "Valvoline™ Brake Fluid Exchange",
    popular: false,
    badge: null,
    price: "$89.95",
    priceNote: "Complete hydraulic system exchange",
    duration: "25 - 35 Mins",
    appointmentRequired: false,
    image: "/images/brake-service.jpg",
    description: "Brake fluid absorbs moisture over time, lowering its boiling point and causing spongy brake pedals or internal ABS rust. We pressure-bleed your entire hydraulic system with fresh Valvoline DOT 3/4 fluid.",
    features: [
      "Evacuation of contaminated, moisture-laden old fluid",
      "Fresh high-temp Valvoline™ synthetic brake fluid flush",
      "All four caliper bleeder valves serviced and pressure-bled",
      "Restores firm pedal feel and protects expensive ABS modules"
    ]
  },

  // PREVENTIVE MAINTENANCE
  {
    id: "21-point-inspection",
    category: "maintenance",
    title: "21-Point Courtesy Vehicle Inspection",
    popular: false,
    badge: "Included Free",
    price: "FREE",
    priceNote: "Included with every Valvoline oil service",
    duration: "Included",
    appointmentRequired: false,
    image: "/images/shop-exterior.jpg",
    description: "Every car that pulls into Mr. Lube receives our honest digital vehicle inspection. We check vital safety items and report findings clearly without pressure or deceptive upselling.",
    features: [
      "Engine oil level & Valvoline quality verification",
      "Transmission, power steering, and brake fluid health check",
      "Coolant level and freeze protection temperature testing",
      "Engine air filter and cabin allergy filter condition",
      "Serpentine drive belts and radiator hose integrity",
      "Exterior lighting check (headlights, brake lights, turn signals)",
      "Battery cold-cranking amp (CCA) load test and terminal check",
      "Windshield wiper blade tear & streak inspection"
    ]
  },
  {
    id: "transmission-fluid-exchange",
    category: "maintenance",
    title: "Valvoline™ Transmission & Drivetrain Care",
    popular: false,
    badge: null,
    price: "From $119.95",
    priceNote: "Automatic, CVT or manual systems",
    duration: "35 - 45 Mins",
    appointmentRequired: false,
    image: "/images/shop-exterior.jpg",
    description: "Keep your gears shifting smoothly and protect against premature transmission failure with our specialized fluid exchanges using Valvoline MaxLife ATF or vehicle-specific synthetic fluids.",
    features: [
      "Fluid exchange with Valvoline™ MaxLife™ Multi-Vehicle ATF or OEM CVT fluid",
      "Pan gasket and transmission filter inspection where applicable",
      "Differential and transfer case fluid level / condition verification",
      "Thermal protection restore for heavy towing and highway driving"
    ]
  },
  {
    id: "battery-test-replacement",
    category: "maintenance",
    title: "Battery Diagnostic & Quick Replacement",
    popular: false,
    badge: null,
    price: "From $139.95",
    priceNote: "Free testing, premium batteries in stock",
    duration: "15 Mins",
    appointmentRequired: false,
    image: "/images/shop-exterior.jpg",
    description: "Never get stranded in an Illinois winter. We provide free computerized battery load testing and fast replacement with nationwide-warranted premium batteries.",
    features: [
      "Instant computerized conductance load and cold-crank amp test",
      "Alternator output and starter motor draw diagnosis",
      "Terminal post anti-corrosion cleaning and protective seal coating",
      "Fresh battery memory-saver connection to retain vehicle settings",
      "Environmentally safe disposal of old lead-acid batteries"
    ]
  },
  {
    id: "cooling-water-pump",
    category: "maintenance",
    title: "Cooling System & Water Pump Service",
    popular: false,
    badge: null,
    price: "From $99.95",
    priceNote: "Free cooling system check, honest quote",
    duration: "45 - 90 Mins",
    appointmentRequired: true,
    image: "/images/shop-exterior.jpg",
    description: "Prevent roadside overheating and engine damage. We provide complete water pump replacement, radiator leak diagnostics, thermostat verification, and Valvoline ZEREX™ extended life coolant flush.",
    features: [
      "Water pump mechanical seal and bearing inspection & replacement",
      "Radiator pressure test for hairline leaks and hose integrity",
      "Thermostat function and operating temperature verification",
      "Valvoline™ ZEREX™ anti-freeze/coolant complete system flush",
      "Heater core circulation and cabin temperature performance check"
    ]
  }
];

export const featuredSpecialties = [
  {
    id: "specialty-valvoline-oil",
    category: "oil",
    title: "15-Minute Valvoline™ Oil Service",
    badge: "Drive-Thru Ready",
    price: "From $59.95",
    priceNote: "Synthetic Blend, Full Synthetic & Diesel",
    duration: "15 - 20 Mins",
    image: "/images/oil-change.jpg",
    description: "Drive right in for genuine Valvoline motor oil (Advanced Full Synthetic, MaxLife 75k+, or Heavy-Duty Diesel). Includes our free 21-point courtesy safety check and fluid top-off with no appointment needed.",
    features: [
      "Up to 5 qts genuine Valvoline™ motor oil",
      "New premium OEM-grade oil filter",
      "Complimentary 21-Point Courtesy Safety Inspection",
      "All under-hood vital fluids checked & topped off free"
    ],
    bookingService: "Valvoline™ Advanced Full Synthetic"
  },
  {
    id: "specialty-brakes",
    category: "brakes",
    title: "Complete Brake Service & Rotors",
    badge: "12k-Mi Warranty",
    price: "From $149.95",
    priceNote: "Per axle • Pads, rotors & hardware",
    duration: "45 - 60 Mins",
    image: "/images/brake-service.jpg",
    description: "Eliminate brake squeal and restore firm pedal response. Ultra-quiet ceramic pads, rust-inhibited coated rotors, hardware lube, and Valvoline brake fluid exchange backed by our warranty.",
    features: [
      "Premium low-dust ceramic brake pads",
      "Precision-machined coated brake rotors",
      "Caliper slider pins cleaned & lubricated",
      "12-Month / 12,000-Mile Parts & Labor Guarantee"
    ],
    bookingService: "Ceramic Brake Pad Service"
  },
  {
    id: "specialty-tires",
    category: "tires",
    title: "Computerized Tire Rotation & Balance",
    badge: "Drive-In Ready",
    price: "$39.95",
    priceNote: "Complete 4-wheel rotation & dynamic balance",
    duration: "20 - 30 Mins",
    image: "/images/tire-service.jpg",
    description: "Extend tire lifespan and eliminate highway vibrations. High-precision laser dynamic balancing, manufacturer-specified rotation pattern, digital tread depth scan, and TPMS sensor recalibration.",
    features: [
      "Laser dynamic balancing on all 4 wheels",
      "Front-to-rear or cross pattern rotation per OEM spec",
      "Digital tread wear measurement across all 4 tires",
      "TPMS tire sensor recalibration & reset"
    ],
    bookingService: "Computerized Tire Rotation & Balance"
  },
  {
    id: "specialty-maintenance",
    category: "maintenance",
    title: "Auto Care, Water Pumps & Diagnostics",
    badge: "Hometown Honesty",
    price: "Free Check / Custom",
    priceNote: "Water pumps, batteries, flushes & checks",
    duration: "15 - 60 Mins",
    image: "/images/shop-exterior.jpg",
    description: "Complete routine automotive care without big-chain pressure tactics. From water pumps and cooling system repairs to battery load testing, transmission service, and digital vehicle inspections.",
    features: [
      "Complimentary 21-Point Digital Vehicle Inspection",
      "Water pump, cooling system & radiator repairs",
      "Free computerized battery load testing",
      "Valvoline™ transmission & drivetrain fluid service"
    ],
    bookingService: "21-Point Courtesy Inspection / Other"
  }
];

export const pricingDisclaimer = "Please note: Service prices shown represent starting estimates for standard passenger vehicles (up to 5 quarts of Valvoline motor oil and standard filter). Actual prices vary depending on your vehicle's engine oil capacity, specialty viscosity requirements (e.g. Dexos1, Euro, 0W-16), and filter type. Call our service desk at (618) 699-4003 or (618) 283-9161 for an exact estimate for your vehicle.";

export const trustPoints = [
  {
    title: "Proudly Featuring Valvoline",
    description: "Dispensing genuine Valvoline motor oils, fluids, and lubricants trusted by American motorists for over 150 years."
  },
  {
    title: "15-Minute Drive-Thru",
    description: "No appointment needed for oil changes. Drive right into our heated bays at 725 School St and stay comfortably in your car."
  },
  {
    title: "Hometown Pricing & Honesty",
    description: "We are your independent hometown neighbors in Vandalia. We tell you what your car actually needs today, and what can wait."
  },
  {
    title: "Warranty Approved",
    description: "Our Valvoline services strictly meet all factory warranty requirements, keeping your new car warranty 100% intact."
  }
];

export const faqs = [
  {
    q: "What brand of oil and fluids do you use at Mr. Lube?",
    a: "We proudly feature genuine Valvoline motor oils! We stock and install Valvoline Advanced Full Synthetic, Valvoline High Mileage with MaxLife Technology, Valvoline Daily Protection Synthetic Blend, and Cummins-endorsed Valvoline Premium Blue for heavy-duty diesel engines."
  },
  {
    q: "Do I need an appointment for an oil change?",
    a: "No appointment is needed for oil changes, tire rotations, or battery checks! You can drive right in to our service bays at 725 School St during business hours. For brake repairs, water pumps, or more extensive mechanical work, we recommend calling ahead at (618) 699-4003 or submitting an online bay request so we can ensure parts are on hand."
  },
  {
    q: "Do you accept corporate or national Valvoline website coupons?",
    a: "Because Mr. Lube in Vandalia is an independently owned and operated local service center rather than a corporate franchise, we set our own honest, competitive everyday rates and run local in-house shop promotions rather than accepting corporate third-party internet coupons. Call us at (618) 699-4003 or (618) 283-9161 for today's current shop rates and specials!"
  },
  {
    q: "Where is Mr. Lube located in Vandalia, IL?",
    a: "We are located at 725 School St, Vandalia, IL 62471 (directly across from Vandalia High School). You can reach us directly at (618) 699-4003 or (618) 283-9161."
  },
  {
    q: "How often should I change synthetic vs blend oil?",
    a: "Vehicles using Valvoline Advanced Full Synthetic typically travel 5,000 to 7,500 miles between changes. Synthetic blends and high-mileage formulations typically run 3,000 to 5,000 miles. We check and follow your specific vehicle manufacturer recommendations."
  },
  {
    q: "Will servicing my car at Mr. Lube void my new vehicle warranty?",
    a: "Not at all. Under the federal Magnuson-Moss Warranty Act, you have the legal right to have routine maintenance performed by any qualified independent automotive shop using OEM-approved parts and Valvoline manufacturer-certified lubricants."
  },
  {
    q: "What are the warning signs that my brakes need attention?",
    a: "Common warning signs include high-pitched squealing or metal grinding when braking, a spongy brake pedal that sinks toward the floor, steering wheel vibration when slowing down, or your vehicle pulling to one side."
  }
];

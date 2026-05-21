export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  images: string[];
  description: string;
  shortDescription: string;
  rating: number;
  reviews: Review[];
  specs: {
    engine: string;
    horsepower: string;
    mileage: string;
    transmission: string;
    fuelType: string;
    topSpeed: string;
    acceleration: string;
  };
  colors: Color[];
  features: string[];
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Color {
  name: string;
  hex: string;
}

export const cars: Car[] = [
  {
    id: "1",
    name: "TOYOTA LAND CRUISER(300 Series)",
    brand: "Toyota",
    model: "LAND CRUISER",
    year: 2024,
    price: 6000000,
    image: carImages['toyota-land-cruiser'],
    images: [
      carImages['toyota-land-cruiser-1'],
      carImages['toyota-land-cruiser-2'],
      carImages['toyota-land-cruiser-3'],
      carImages['toyota-land-cruiser-4'],
      carImages['toyota-land-cruiser-5'],
      carImages['toyota-land-cruiser-6'],
      carImages['toyota-land-cruiser-7']
    ],
    shortDescription: "Ultimate luxury off-road driving machine",
    description: "The Toyota Land Cruiser is a legendary SUV known for its reliability, durability, and exceptional off-road performance. With advanced 4WD systems and premium comfort features, it's perfect for both urban driving and adventure.",
    rating: 4.9,
    reviews: [
      {
        id: "r1",
        username: "Kenyan Driver",
        rating: 5,
        comment: "The power delivery is insane for a car this size. It feels like a luxury lounge that can climb a mountain.",
        date: "2024-03-15"
      },
      {
        id: "r2",
        username: "Business Owner",
        rating: 5,
        comment: "The 10-speed transmission is buttery smooth. Best investment for Kenyan roads.",
        date: "2024-03-10"
      }
    ],
    specs: {
      engine: "3.3L Twin-Turbo V6 Diesel",
      horsepower: "304 hp",
      mileage: "11.2 km/L",
      transmission: "10-Speed Automatic",
      fuelType: "Diesel",
      topSpeed: "210 km/h",
      acceleration: "0-60 in 6.7s"
    },
    colors: [
      { name: "Precious White", hex: "#F8F8F8" },
      { name: "Attitude Black", hex: "#1C1C1C" },
      { name: "Dark Red Mica", hex: "#8B0000" }
    ],
    features: ["Multi-Terrain Select", "12.3-inch Infotainment", "Kinetic Dynamic Suspension (E-KDSS)"]
  },
  {
    id: "2",
    name: "TOYOTA HARRIER",
    brand: "Toyota",
    model: "Harrier",
    year: 2024,
    price: 4000000,
    image: carImages['toyota-harrier'],
    images: [
      carImages['toyota-harrier-1'],
      carImages['toyota-harrier-2'],
      carImages['toyota-harrier-3'],
      carImages['toyota-harrier-4'],
      carImages['toyota-harrier-5'],
      carImages['toyota-harrier-6'],
      carImages['toyota-harrier-7']
    ],
    shortDescription: "Sleek urban crossover, premium feel",
    description: "The Toyota Harrier combines elegant design with practical functionality. Featuring a spacious interior, advanced safety features, and smooth performance, it's perfect for modern urban families.",
    rating: 4.8,
    reviews: [
      {
        id: "r3",
        username: "Nairobi Commuter",
        rating: 5,
        comment: "Interior quality is basically Lexus-level. Fuel economy in Nairobi traffic is a lifesaver.",
        date: "2024-03-18"
      },
      {
        id: "r3b",
        username: "Tech Enthusiast",
        rating: 5,
        comment: "Quiet, sleek, and very tech-forward. The hybrid transition is seamless.",
        date: "2024-03-17"
      }
    ],
    specs: {
      engine: "2.5L 4-Cylinder Hybrid",
      horsepower: "219 hp (Combined)",
      mileage: "22.1 km/L",
      transmission: "eCVT",
      fuelType: "Hybrid",
      topSpeed: "190 km/h",
      acceleration: "0-60 in 7.5s"
    },
    colors: [
      { name: "Slate Grey", hex: "#708090" },
      { name: "Pearl White", hex: "#F8F8FF" },
      { name: "Deep Blue", hex: "#00008B" }
    ],
    features: ["Panoramic Sunroof with Frosted Mode", "Toyota Safety Sense", "Digital Rearview Mirror"]
  },
  {
    id: "3",
    name: "TOYOTA RAV4",
    brand: "Toyota",
    model: "RAV4",
    year: 2024,
    price: 3700000,
    image: carImages['toyota-rav4'],
    images: [
      carImages['toyota-rav4-1'],
      carImages['toyota-rav4-2'],
      carImages['toyota-rav4-3'],
      carImages['toyota-rav4-4'],
    ],
    shortDescription: "Versatile, reliable family adventure SUV",
    description: "The Toyota RAV4 is a versatile compact SUV that offers the perfect balance of efficiency, comfort, and capability. With advanced hybrid options and Toyota Safety Sense, it's ideal for active lifestyles.",
    rating: 4.7,
    reviews: [
      {
        id: "r4",
        username: "Safari Driver",
        rating: 5,
        comment: "Extremely reliable. I've taken it to the Mara and back without a single rattle.",
        date: "2024-03-12"
      },
      {
        id: "r4b",
        username: "Family Parent",
        rating: 5,
        comment: "Spacious cabin and very safe. The adaptive cruise control works perfectly.",
        date: "2024-03-11"
      }
    ],
    specs: {
      engine: "2.5L 4-Cylinder",
      horsepower: "203 hp",
      mileage: "14.5 km/L",
      transmission: "8-Speed Automatic",
      fuelType: "Petrol",
      topSpeed: "200 km/h",
      acceleration: "0-60 in 8.1s"
    },
    colors: [
      { name: "Magnetic Gray", hex: "#4A4A4A" },
      { name: "Cavalry Blue", hex: "#1E3A8A" },
      { name: "Super White", hex: "#F8F8F8" }
    ],
    features: ["All-Wheel Drive with Intelligence (AWD-i)", "Power Tailgate", "Apple CarPlay/Android Auto"]
  },
  {
    id: "4",
    name: "HONDA VEEZEL(RV Series)",
    brand: "Honda",
    model: "Vezel",
    year: 2024,
    price: 2600000,
    image: carImages['honda-veezel'],
    images: [
      carImages['honda-veezel-1'],
      carImages['honda-veezel-2'],
      carImages['honda-veezel-3'],
      carImages['honda-veezel-4'],
    ],
    shortDescription: "Stylish, tech-packed modern compact SUV",
    description: "The Honda Vezel offers exceptional fuel economy and versatile performance in a stylish package. With Honda's renowned reliability and advanced safety features, it's perfect for urban commuting.",
    rating: 4.8,
    reviews: [
      {
        id: "r5",
        username: "Interior Designer",
        rating: 5,
        comment: "Beautiful minimalist interior. The cargo space is so flexible.",
        date: "2024-03-20"
      },
      {
        id: "r5b",
        username: "Premium Car Owner",
        rating: 5,
        comment: "Very smooth drive. It feels more premium than its Toyota rivals.",
        date: "2024-03-19"
      }
    ],
    specs: {
      engine: "1.5L i-VTEC",
      horsepower: "117 hp",
      mileage: "17.0 km/L",
      transmission: "CVT",
      fuelType: "Petrol",
      topSpeed: "180 km/h",
      acceleration: "0-60 in 9.5s"
    },
    colors: [
      { name: "Sand Khaki", hex: "#C2B280" },
      { name: "Platinum White", hex: "#F8F8F8" },
      { name: "Crystal Black", hex: "#000000" }
    ],
    features: ["Magic Seats", "Honda Sensing", "Hill Descent Control"]
  },
  {
    id: "5",
    name: "MAZDA AXELA SEDAN",
    brand: "Mazda",
    model: "Axela",
    year: 2024,
    price: 1800000,
    image: carImages['mazda-axela'],
    images: [
      carImages['mazda-axela-1'],
      carImages['mazda-axela-2'],
      carImages['mazda-axela-3'],
      carImages['mazda-axela-4'],
    ],
    shortDescription: "Driver-focused design, premium interior finish",
    description: "The Mazda Axela combines sophisticated design with engaging driving dynamics. Featuring Mazda's KODO design philosophy and Skyactiv technology, it offers both style and efficiency.",
    rating: 5.0,
    reviews: [
      {
        id: "r6",
        username: "Design Lover",
        rating: 5,
        comment: "The most beautiful hatchback ever made. Inside and out.",
        date: "2024-03-22"
      },
      {
        id: "r6b",
        username: "Driving Enthusiast",
        rating: 5,
        comment: "Driving dynamics are fantastic. You feel connected to the car.",
        date: "2024-03-21"
      }
    ],
    specs: {
      engine: "2.0L SkyActiv-G",
      horsepower: "153 hp",
      mileage: "16.0 km/L",
      transmission: "Automatic",
      fuelType: "Petrol",
      topSpeed: "205 km/h",
      acceleration: "0-60 in 8.2s"
    },
    colors: [
      { name: "Soul Red Crystal", hex: "#E4002B" },
      { name: "Machine Gray", hex: "#4A4A4A" },
      { name: "Polymetal Gray", hex: "#6B6B6B" }
    ],
    features: ["Kodo Design", "G-Vectoring Control Plus", "8.8-inch Display"]
  },
  {
    id: "6",
    name: "LANDROVER RANGEOVER AUTOBIOGRAPHY",
    brand: "Land Rover",
    model: "Range Rover Autobiography",
    year: 2024,
    price: 10000000,
    image: carImages['land-rover'],
    images: [
      carImages['land-rover-1'],
      carImages['land-rover-2'],
      carImages['land-rover-3'],
      carImages['land-rover-4'],
    ],
    shortDescription: "Peak luxury and off-road capability.",
    description: "The Land Rover Range Rover Autobiography represents the pinnacle of luxury SUVs. With premium materials, advanced technology, and exceptional off-road capability, it offers unparalleled comfort and prestige.",
    rating: 4.9,
    reviews: [
      {
        id: "r7",
        username: "Luxury Connoisseur",
        rating: 5,
        comment: "The absolute pinnacle of luxury. Nothing else rides this smoothly.",
        date: "2024-03-16"
      },
      {
        id: "r7b",
        username: "Executive Driver",
        rating: 5,
        comment: "The rear-wheel steering makes this huge car feel as nimble as a hatchback.",
        date: "2024-03-15"
      }
    ],
    specs: {
      engine: "3.0L 6-Cylinder MHEV (Mild Hybrid)",
      horsepower: "395 hp",
      mileage: "9.5 km/L",
      transmission: "Automatic",
      fuelType: "Hybrid",
      topSpeed: "225 km/h",
      acceleration: "0-60 in 5.8s"
    },
    colors: [
      { name: "Santorini Black", hex: "#000000" },
      { name: "Eiger Grey", hex: "#4A4A4A" },
      { name: "Lantau Bronze", hex: "#8B4513" }
    ],
    features: ["Executive Class Rear Seating", "All-Wheel Steering", "Pivi Pro Infotainment"]
  },
  {
    id: "7",
    name: "TOYOTA HILUX",
    brand: "Toyota",
    model: "Hilux",
    year: 2024,
    price: 6500000,
    image: carImages['toyota-hilux'],
    images: [
      carImages['toyota-hilux-1'],
      carImages['toyota-hilux-2'],
      carImages['toyota-hilux-3'],
      carImages['toyota-hilux-4'],
      carImages['toyota-hilux-5'],
    ],
    shortDescription: "Toughest workhorse for any terrain",
    description: "The Toyota Hilux is renowned worldwide for its exceptional durability and reliability. Built to handle the toughest conditions, it combines powerful performance with practical utility for work and adventure.",
    rating: 4.9,
    reviews: [
      {
        id: "r8",
        username: "African Driver",
        rating: 5,
        comment: "The workhorse of Africa. It takes a beating and keeps going.",
        date: "2024-03-14"
      },
      {
        id: "r8b",
        username: "Daily Commuter",
        rating: 5,
        comment: "The new suspension makes it much more comfortable for daily driving than older models.",
        date: "2024-03-13"
      }
    ],
    specs: {
      engine: "2.8L GD-6 Turbodiesel",
      horsepower: "201 hp",
      mileage: "12.8 km/L",
      transmission: "Automatic",
      fuelType: "Diesel",
      topSpeed: "180 km/h",
      acceleration: "0-60 in 10.1s"
    },
    colors: [
      { name: "Oxide Bronze", hex: "#8B4513" },
      { name: "Nebula Blue", hex: "#4B70DD" },
      { name: "Silver Metallic", hex: "#C0C0C0" }
    ],
    features: ["3.5-ton Towing Capacity", "Rear Differential Lock", "8-inch Touchscreen"]
  },
  {
    id: "8",
    name: "TOYOTA CROWN",
    brand: "Toyota",
    model: "Crown",
    year: 2024,
    price: 4300000,
    image: carImages['toyota-crown'],
    images: [
      carImages['toyota-crown-1'],
      carImages['toyota-crown-2'],
      carImages['toyota-crown-3'],
    ],
    shortDescription: "Bold design meets hybrid efficiency",
    description: "The Toyota Crown represents the pinnacle of Toyota's sedan lineup. Combining elegant design with advanced technology and hybrid efficiency, it offers a sophisticated driving experience for discerning customers.",
    rating: 4.8,
    reviews: [
      {
        id: "r9",
        username: "Style Enthusiast",
        rating: 5,
        comment: "Turns heads everywhere. It's like a sedan and an SUV had a very fast baby.",
        date: "2024-03-11"
      },
      {
        id: "r9b",
        username: "Performance Driver",
        rating: 5,
        comment: "The Hybrid Max engine is surprisingly quick. A very unique driving experience.",
        date: "2024-03-10"
      }
    ],
    specs: {
      engine: "2.4L Turbo Hybrid (MAX)",
      horsepower: "340 hp",
      mileage: "15.0 km/L",
      transmission: "6-Speed Direct Shift Automatic",
      fuelType: "Hybrid",
      topSpeed: "210 km/h",
      acceleration: "0-60 in 5.7s"
    },
    colors: [
      { name: "Bronze Age", hex: "#8B4513" },
      { name: "Black", hex: "#000000" },
      { name: "Oxygen White", hex: "#F8F8F8" }
    ],
    features: ["Raised Ride Height", "Quad-LED Headlights", "Bird's Eye View Camera"]
  },
  // Daihatsu Move
  {
    id: "9",
    name: "DAIHATSU MOVE",
    brand: "Daihatsu",
    model: "Move",
    year: 2024,
    price: 1200000,
    image: carImages['daihatsu-move-1'],
    images: [
      carImages['daihatsu-move-1'],
      carImages['daihatsu-move-2'],
      carImages['daihatsu-move-3'],
      carImages['daihatsu-move-4'],
      carImages['daihatsu-move-5'],
    ],
    shortDescription: "Efficient, roomy, small city hatchback",
    description: "The Daihatsu Move is a practical and fuel-efficient compact car perfect for urban driving. With its small footprint and excellent maneuverability, it's ideal for city dwellers.",
    rating: 4.2,
    reviews: [
      {
        id: "r10",
        username: "Urban Commuter",
        rating: 5,
        comment: "The doors open to 90 degrees, making it so easy to get in and out.",
        date: "2024-03-25"
      },
      {
        id: "r10b",
        username: "Student Driver",
        rating: 5,
        comment: "Perfect for a student or small business errands. Reliability is 10/10.",
        date: "2024-03-24"
      }
    ],
    specs: {
      engine: "660cc 3-Cylinder",
      horsepower: "52 hp",
      mileage: "27.5 km/L",
      transmission: "Automatic",
      fuelType: "Petrol",
      topSpeed: "135 km/h",
      acceleration: "0-60 in 15.0s"
    },
    colors: [
      { name: "Fire Quartz Red", hex: "#CC0000" },
      { name: "Plum Brown", hex: "#8B4513" }
    ],
    features: ["Smart Assist III", "Crash Avoidance System", "Flexible Seating"]
  },
  // Ford Ranger
  {
    id: "10",
    name: "FORD RANGER XLT DOUBLE CAB",
    brand: "Ford",
    model: "Ranger XLT",
    year: 2024,
    price: 4500000,
    image: carImages['ford-ranger-1'],
    images: [
      carImages['ford-ranger-1'],
      carImages['ford-ranger-2'],
      carImages['ford-ranger-3'],
      carImages['ford-ranger-4'],
    ],
    shortDescription: "Powerful pickup with modern technology",
    description: "The Ford Ranger XLT Double Cab offers the perfect blend of rugged capability and everyday comfort. With its powerful engine and spacious interior, it's ready for any challenge.",
    rating: 4.6,
    reviews: [
      {
        id: "r11",
        username: "Towing Expert",
        rating: 5,
        comment: "The 10-speed box is great for towing. Technology is years ahead of the competition.",
        date: "2024-03-20"
      },
      {
        id: "r11b",
        username: "Truck Enthusiast",
        rating: 5,
        comment: "Very aggressive look. It feels like a small F-150.",
        date: "2024-03-19"
      }
    ],
    specs: {
      engine: "2.0L Bi-Turbo Diesel",
      horsepower: "210 hp",
      mileage: "12.0 km/L",
      transmission: "Automatic",
      fuelType: "Diesel",
      topSpeed: "180 km/h",
      acceleration: "0-60 in 9.2s"
    },
    colors: [
      { name: "Arctic White", hex: "#F8F8F8" },
      { name: "Meteor Grey", hex: "#6B6B6B" },
      { name: "Blue Lightning", hex: "#1E90FF" }
    ],
    features: ["SYNC 4 with 10-inch Screen", "800mm Wading Depth", "e-Shifter"]
  },
  // Honda Civic
  {
    id: "11",
    name: "HONDA CIVIC(11th Gen)",
    brand: "Honda",
    model: "Civic",
    year: 2024,
    price: 2800000,
    image: carImages['honda-civic-1'],
    images: [
      carImages['honda-civic-1'],
      carImages['honda-civic-2'],
      carImages['honda-civic-3'],
      carImages['honda-civic-4'],
      carImages['honda-civic-5'],
    ],
    shortDescription: "Sporty handling meets everyday practicality",
    description: "The Honda Civic continues to set the standard for compact sedans with its blend of reliability, efficiency, and modern technology. Perfect for daily commuting and weekend drives.",
    rating: 4.7,
    reviews: [
      {
        id: "r12",
        username: "Performance Driver",
        rating: 5,
        comment: "Handling is best-in-class. It feels like it's on rails.",
        date: "2024-03-18"
      },
      {
        id: "r12b",
        username: "Style Enthusiast",
        rating: 5,
        comment: "The turbo engine has a great kick. Best looking sedan on the market.",
        date: "2024-03-17"
      }
    ],
    specs: {
      engine: "1.5L Turbocharged",
      horsepower: "180 hp",
      mileage: "15.2 km/L",
      transmission: "Automatic",
      fuelType: "Petrol",
      topSpeed: "210 km/h",
      acceleration: "0-60 in 7.3s"
    },
    colors: [
      { name: "Rallye Red", hex: "#CC0000" },
      { name: "Sonic Gray", hex: "#6B6B6B" },
      { name: "Aegean Blue", hex: "#1E90FF" }
    ],
    features: ["Bose Premium Sound", "Honeycomb Dashboard Design", "Wireless Charging"]
  },
  // Honda N-Wagon
  {
    id: "12",
    name: "HONDA N-WAGON",
    brand: "Honda",
    model: "N-Wagon",
    year: 2024,
    price: 1500000,
    image: carImages['honda-n-wagon-1'],
    images: [
      carImages['honda-n-wagon-1'],
      carImages['honda-n-wagon-2'],
      carImages['honda-n-wagon-3'],
      carImages['honda-n-wagon-4'],
      carImages['honda-n-wagon-5'],
    ],
    shortDescription: "Practical and spacious mini wagon",
    description: "The Honda N-Wagon offers exceptional space and versatility in a compact package. Perfect for small families and urban living with its flexible seating arrangement.",
    rating: 4.3,
    reviews: [
      {
        id: "r13",
        username: "Safety Conscious",
        rating: 5,
        comment: "For a Kei car, the safety tech is incredible. It even has adaptive cruise!",
        date: "2024-03-22"
      },
      {
        id: "r13b",
        username: "Urban Driver",
        rating: 5,
        comment: "Perfect for running errands. The interior feels much bigger than the exterior looks.",
        date: "2024-03-21"
      }
    ],
    specs: {
      engine: "660cc Turbocharged",
      horsepower: "63 hp",
      mileage: "23.0 km/L",
      transmission: "Automatic",
      fuelType: "Petrol",
      topSpeed: "140 km/h",
      acceleration: "0-60 in 14.5s"
    },
    colors: [
      { name: "Horizon Sea Blue", hex: "#1E90FF" },
      { name: "Garden Green", hex: "#228B22" }
    ],
    features: ["Honda Sensing (Standard)", "Low Floor for Cargo", "Smart Entry"]
  },
  // Honda Vezel Hybrid
  {
    id: "13",
    name: "HONDA VEZEL HYBRID Z HONDA SENSING",
    brand: "Honda",
    model: "Vezel Hybrid Z",
    year: 2024,
    price: 3200000,
    image: carImages['honda-veezel-hybrid-1'],
    images: [
      carImages['honda-veezel-hybrid-1'],
      carImages['honda-veezel-hybrid-2'],
      carImages['honda-veezel-hybrid-3'],
      carImages['honda-veezel-hybrid-4'],
      carImages['honda-veezel-hybrid-5'],
      carImages['honda-veezel-hybrid-6'],
    ],
    shortDescription: "Efficient hybrid crossover with advanced safety",
    description: "The Honda Vezel Hybrid Z with Honda Sensing combines hybrid efficiency with advanced safety features. Perfect for eco-conscious drivers who don't want to compromise on technology.",
    rating: 4.8,
    reviews: [
      {
        id: "r14",
        username: "Hybrid Driver",
        rating: 5,
        comment: "The hybrid system is very smart; it stays in EV mode a lot in traffic.",
        date: "2024-03-19"
      },
      {
        id: "r14b",
        username: "Luxury Buyer",
        rating: 5,
        comment: "Z trim interior is very classy with the leather accents. Highly recommended.",
        date: "2024-03-18"
      }
    ],
    specs: {
      engine: "1.5L e:HEV Hybrid",
      horsepower: "129 hp (Combined)",
      mileage: "25.0 km/L",
      transmission: "Automatic",
      fuelType: "Hybrid",
      topSpeed: "185 km/h",
      acceleration: "0-60 in 8.9s"
    },
    colors: [
      { name: "Meteoroid Gray", hex: "#6B6B6B" },
      { name: "Premium Sunlight White", hex: "#F8F8F8" }
    ],
    features: ["Hands-free Power Tailgate", "Sequential Turn Signals", "e:HEV Drive Modes"]
  },
  // Mazda CX-3
  {
    id: "14",
    name: "MAZDA CX-3",
    brand: "Mazda",
    model: "CX-3",
    year: 2024,
    price: 2200000,
    image: carImages['mazda-cx3-1'],
    images: [
      carImages['mazda-cx3-1'],
      carImages['mazda-cx3-2'],
      carImages['mazda-cx3-3'],
      carImages['mazda-cx3-4'],
    ],
    shortDescription: "Stylish compact crossover SUV",
    description: "The Mazda CX-3 combines sleek design with practical SUV versatility. Featuring Mazda's KODO design philosophy and Skyactiv technology, it offers both style and efficiency in a compact package.",
    rating: 4.5,
    reviews: [
      {
        id: "r15",
        username: "City Driver",
        rating: 5,
        comment: "Small and punchy. Great for city driving and occasional highway trips.",
        date: "2024-03-21"
      },
      {
        id: "r15b",
        username: "Value Seeker",
        rating: 5,
        comment: "The interior feels very high-end for the price point.",
        date: "2024-03-20"
      }
    ],
    specs: {
      engine: "2.0L SkyActiv-G",
      horsepower: "148 hp",
      mileage: "15.5 km/L",
      transmission: "Automatic",
      fuelType: "Petrol",
      topSpeed: "190 km/h",
      acceleration: "0-60 in 8.8s"
    },
    colors: [
      { name: "Snowflake White", hex: "#F8F8F8" },
      { name: "Jet Black", hex: "#000000" },
      { name: "Eternal Blue", hex: "#1E3A8A" }
    ],
    features: ["Blind Spot Monitoring", "Smart City Brake Support", "Sport Mode"]
  },
  // Mazda Demio
  {
    id: "15",
    name: "MAZDA DEMIO",
    brand: "Mazda",
    model: "Demio",
    year: 2024,
    price: 1600000,
    image: carImages['mazda-demio-1'],
    images: [
      carImages['mazda-demio-1'],
      carImages['mazda-demio-2'],
      carImages['mazda-demio-3'],
      carImages['mazda-demio-4'],
      carImages['mazda-demio-5'],
      carImages['mazda-demio-6'],
    ],
    shortDescription: "Punchy performance in small frame",
    description: "The Mazda Demio offers premium design and technology in an efficient compact package. With its upscale interior and excellent fuel economy, it's perfect for modern urban lifestyles.",
    rating: 4.4,
    reviews: [
      {
        id: "r16",
        username: "Diesel Fan",
        rating: 5,
        comment: "The diesel torque in this little car makes it fly! Very fun.",
        date: "2024-03-23"
      },
      {
        id: "r16b",
        username: "Economy Driver",
        rating: 5,
        comment: "Excellent fuel economy and it doesn't feel cheap like other hatchbacks.",
        date: "2024-03-22"
      }
    ],
    specs: {
      engine: "1.5L SkyActiv-D (Diesel)",
      horsepower: "104 hp",
      mileage: "26.0 km/L",
      transmission: "Automatic",
      fuelType: "Diesel",
      topSpeed: "180 km/h",
      acceleration: "0-60 in 10.5s"
    },
    colors: [
      { name: "Deep Crimson", hex: "#8B0000" },
      { name: "Ceramic Metallic", hex: "#C0C0C0" }
    ],
    features: ["Head-up Display", "i-Stop Technology", "Premium Cloth Seats"]
  },
  // Subaru Outback
  {
    id: "16",
    name: "SUBARU LEGACY OUTBACK",
    brand: "Subaru",
    model: "Legacy Outback",
    year: 2024,
    price: 3800000,
    image: carImages['subaru-outback-1'],
    images: [
      carImages['subaru-outback-1'],
      carImages['subaru-outback-2'],
      carImages['subaru-outback-3'],
      carImages['subaru-outback-4'],
      carImages['subaru-outback-5'],
      carImages['subaru-outback-6'],
      carImages['subaru-outback-7'],
      carImages['subaru-outback-8'],
    ],
    shortDescription: "All-wheel drive wagon for adventure seekers",
    description: "The Subaru Legacy Outback combines wagon practicality with SUV capability. With standard Symmetrical All-Wheel Drive and rugged design, it's perfect for both daily commuting and outdoor adventures.",
    rating: 4.6,
    reviews: [
      {
        id: "r17",
        username: "Safety Conscious",
        rating: 5,
        comment: "The safest car I've ever owned. EyeSight has saved me twice already.",
        date: "2024-03-24"
      },
      {
        id: "r17b",
        username: "Adventure Driver",
        rating: 5,
        comment: "Great ground clearance without the bulk of a full SUV. Very stable.",
        date: "2024-03-23"
      }
    ],
    specs: {
      engine: "2.5L Boxer 4-Cylinder",
      horsepower: "182 hp",
      mileage: "13.5 km/L",
      transmission: "Automatic",
      fuelType: "Petrol",
      topSpeed: "200 km/h",
      acceleration: "0-60 in 8.7s"
    },
    colors: [
      { name: "Autumn Green", hex: "#556B2F" },
      { name: "Crystal White", hex: "#F8F8F8" },
      { name: "Abyss Blue", hex: "#000080" }
    ],
    features: ["Symmetrical AWD", "EyeSight Driver Assist", "11.6-inch Vertical Screen"]
  },
  // Toyota Hiace
  {
    id: "17",
    name: "TOYOTA HIACE VAN 2020",
    brand: "Toyota",
    model: "Hiace Van",
    year: 2024,
    price: 3500000,
    image: carImages['toyota-hiace-1'],
    images: [
      carImages['toyota-hiace-1'],
      carImages['toyota-hiace-2'],
      carImages['toyota-hiace-3'],
    ],
    shortDescription: "Spacious, dependable commercial transport leader",
    description: "The Toyota Hiace Van is the trusted choice for businesses requiring reliable transportation. With its durable construction and efficient performance, it's perfect for cargo and passenger transport.",
    rating: 4.5,
    reviews: [
      {
        id: "r18",
        username: "Business Owner",
        rating: 5,
        comment: "The most reliable van for business. High resale value is a huge plus.",
        date: "2024-03-26"
      },
      {
        id: "r18b",
        username: "Fleet Manager",
        rating: 5,
        comment: "Visibility is great, and the new engine has plenty of torque for heavy loads.",
        date: "2024-03-25"
      }
    ],
    specs: {
      engine: "2.8L Diesel",
      horsepower: "174 hp",
      mileage: "11.5 km/L",
      transmission: "6-Speed Automatic",
      fuelType: "Diesel",
      topSpeed: "160 km/h",
      acceleration: "0-60 in 12.5s"
    },
    colors: [
      { name: "French Vanilla", hex: "#F5E6D3" },
      { name: "Quicksilver", hex: "#C0C0C0" }
    ],
    features: ["Dual Sliding Doors", "Lane Departure Alert", "Massive Cargo Space"]
  },
  // Toyota Passo
  {
    id: "18",
    name: "TOYOTA PASSO XL PACKAGE S",
    brand: "Toyota",
    model: "Passo",
    year: 2024,
    price: 1400000,
    image: carImages['toyota-passo-1'],
    images: [
      carImages['toyota-passo-1'],
      carImages['toyota-passo-2'],
      carImages['toyota-passo-3'],
      carImages['toyota-passo-4'],
      carImages['toyota-passo-5'],
    ],
    shortDescription: "Compact hatchback with excellent efficiency",
    description: "The Toyota Passo XL Package S offers exceptional value with its compact size and efficient performance. Perfect for city driving with its easy maneuverability and low running costs.",
    rating: 4.1,
    reviews: [
      {
        id: "r19",
        username: "City Driver",
        rating: 5,
        comment: "The perfect city car. I can park it anywhere and it barely sips petrol.",
        date: "2024-03-27"
      },
      {
        id: "r19b",
        username: "First-time Driver",
        rating: 5,
        comment: "Tiny but surprisingly roomy inside. Perfect for a first-time driver.",
        date: "2024-03-26"
      }
    ],
    specs: {
      engine: "1.0L 3-Cylinder",
      horsepower: "68 hp",
      mileage: "24.0 km/L",
      transmission: "CVT",
      fuelType: "Petrol",
      topSpeed: "150 km/h",
      acceleration: "0-60 in 13.5s"
    },
    colors: [
      { name: "Powder Blue", hex: "#B0E0E6" },
      { name: "Magenta", hex: "#FF00FF" },
      { name: "Pearl White", hex: "#F8F8FF" }
    ],
    features: ["Smart Entry", "Compact Turning Radius", "Start-Stop System"]
  },
  // Toyota Premio
  {
    id: "19",
    name: "TOYOTA PREMIO 2019",
    brand: "Toyota",
    model: "Premio",
    year: 2024,
    price: 2500000,
    image: carImages['toyota-premio-1'],
    images: [
      carImages['toyota-premio-1'],
      carImages['toyota-premio-2'],
      carImages['toyota-premio-3'],
      carImages['toyota-premio-4'],
      carImages['toyota-premio-5'],
    ],
    shortDescription: "Elegant sedan with premium comfort",
    description: "The Toyota Premio combines elegant styling with reliable performance. With its comfortable interior and smooth ride, it's perfect for professionals and families seeking sophistication.",
    rating: 4.4,
    reviews: [
      {
        id: "r20",
        username: "Comfort Seeker",
        rating: 5,
        comment: "The ride quality is so soft. It's the ultimate 'comfortable' sedan.",
        date: "2024-03-28"
      },
      {
        id: "r20b",
        username: "Kenyan Driver",
        rating: 5,
        comment: "Elegant design that doesn't age. Very cheap to maintain in Kenya.",
        date: "2024-03-27"
      }
    ],
    specs: {
      engine: "1.8L 4-Cylinder",
      horsepower: "141 hp",
      mileage: "15.4 km/L",
      transmission: "CVT",
      fuelType: "Petrol",
      topSpeed: "185 km/h",
      acceleration: "0-60 in 9.8s"
    },
    colors: [
      { name: "Wine Red", hex: "#722F37" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Frosty White", hex: "#F8F8F8" }
    ],
    features: ["Wood-grain Interior Trim", "Comfortable Fabric Seats", "Large Trunk"]
  },
  // Toyota Corolla Fielder
  {
    id: "20",
    name: "TOYOTA COROLLA FIELDER HYBRID",
    brand: "Toyota",
    model: "Corolla Fielder",
    year: 2024,
    price: 2900000,
    image: carImages['toyota-corolla-fielder-1'],
    images: [
      carImages['toyota-corolla-fielder-1'],
      carImages['toyota-corolla-fielder-2'],
      carImages['toyota-corolla-fielder-3'],
      carImages['toyota-corolla-fielder-4'],
    ],
    shortDescription: "Efficient wagon for practical families",
    description: "The Toyota Corolla Fielder Hybrid combines hybrid efficiency with wagon practicality. Perfect for families needing extra space while maintaining excellent fuel economy.",
    rating: 4.6,
    reviews: [
      {
        id: "r21",
        username: "Fuel Saver",
        rating: 5,
        comment: "33km per liter? My fuel bill has dropped by 60%.",
        date: "2024-03-29"
      },
      {
        id: "r21b",
        username: "Family Driver",
        rating: 5,
        comment: "Practicality of a wagon with the efficiency of a scooter. Great for families.",
        date: "2024-03-28"
      }
    ],
    specs: {
      engine: "1.5L Hybrid",
      horsepower: "100 hp (Combined)",
      mileage: "33.0 km/L",
      transmission: "eCVT",
      fuelType: "Hybrid",
      topSpeed: "175 km/h",
      acceleration: "0-60 in 11.0s"
    },
    colors: [
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Black Mica", hex: "#1C1C1C" },
      { name: "White Pearl", hex: "#F8F8FF" }
    ],
    features: ["Flat-folding Rear Seats", "EV Mode", "Hybrid Synergy Drive"]
  },
  // Toyota Pixis
  {
    id: "21",
    name: "TOYOTA PIXIS EPOCH",
    brand: "Toyota",
    model: "Pixis Epoch",
    year: 2024,
    price: 1100000,
    image: carImages['toyota-pixis-1'],
    images: [
      carImages['toyota-pixis-1'],
      carImages['toyota-pixis-2'],
      carImages['toyota-pixis-3'],
      carImages['toyota-pixis-4'],
      carImages['toyota-pixis-5'],
    ],
    shortDescription: "Tiny car with massive efficiency",
    description: "The Toyota Pixis Epoch offers modern technology in a compact kei car package. Perfect for urban driving with its small size and excellent maneuverability.",
    rating: 4.0,
    reviews: [
      {
        id: "r22",
        username: "Urban Commuter",
        rating: 5,
        comment: "It's essentially a fuel-efficient pod. Great for short commutes.",
        date: "2024-03-30"
      },
      {
        id: "r22b",
        username: "City Driver",
        rating: 5,
        comment: "Surprising amount of legroom for such a tiny car. Very nimble in traffic.",
        date: "2024-03-29"
      }
    ],
    specs: {
      engine: "660cc 3-Cylinder",
      horsepower: "48 hp",
      mileage: "30.0 km/L",
      transmission: "CVT",
      fuelType: "Petrol",
      topSpeed: "130 km/h",
      acceleration: "0-60 in 15.5s"
    },
    colors: [
      { name: "Sky Blue", hex: "#87CEEB" },
      { name: "Bright Silver", hex: "#C0C0C0" },
      { name: "Rose Pink", hex: "#FFB6C1" }
    ],
    features: ["Eco-IDLE", "Lightweight Body", "High Fuel Efficiency"]
  },
  // Toyota Probox
  {
    id: "22",
    name: "TOYOTA PROBOX 2020",
    brand: "Toyota",
    model: "Probox",
    year: 2024,
    price: 1800000,
    image: carImages['toyota-probox-1'],
    images: [
      carImages['toyota-probox-1'],
      carImages['toyota-probox-2'],
      carImages['toyota-probox-3'],
      carImages['toyota-probox-4'],
      carImages['toyota-probox-5'],
    ],
    shortDescription: "Durable business utility cargo carrier",
    description: "The Toyota Probox is a versatile wagon perfect for both business and family use. With its spacious cargo area and reliable performance, it's a practical choice for many needs.",
    rating: 4.2,
    reviews: [
      {
        id: "r23",
        username: "Business Owner",
        rating: 5,
        comment: "Unbeatable for business. You can carry anything in this.",
        date: "2024-03-31"
      },
      {
        id: "r23b",
        username: "Practical Driver",
        rating: 5,
        comment: "It's not pretty, but it's a tank. It never breaks down.",
        date: "2024-03-30"
      }
    ],
    specs: {
      engine: "1.5L 4-Cylinder",
      horsepower: "107 hp",
      mileage: "18.0 km/L",
      transmission: "CVT",
      fuelType: "Petrol",
      topSpeed: "170 km/h",
      acceleration: "0-60 in 11.5s"
    },
    colors: [
      { name: "White", hex: "#F8F8F8" },
      { name: "Silver", hex: "#C0C0C0" }
    ],
    features: ["Heavy-duty Suspension", "Flat Loading Floor", "High Reliability"]
  },
  // Toyota Sienta
  {
    id: "23",
    name: "TOYOTA SIENTA",
    brand: "Toyota",
    model: "Sienta",
    year: 2024,
    price: 2100000,
    image: carImages['toyota-sienta-1'],
    images: [
      carImages['toyota-sienta-1'],
      carImages['toyota-sienta-2'],
      carImages['toyota-sienta-3'],
      carImages['toyota-sienta-4'],
      carImages['toyota-sienta-5'],
      carImages['toyota-sienta-6'],
      carImages['toyota-sienta-7'],
      carImages['toyota-sienta-8'],
    ],
    shortDescription: "Spacious minivan with sliding doors",
    description: "The Toyota Sienta is a practical minivan perfect for families. With its sliding doors and flexible seating, it offers excellent accessibility and versatility for modern family life.",
    rating: 4.3,
    reviews: [
      {
        id: "r24",
        username: "Family Parent",
        rating: 5,
        comment: "The sliding doors are a game changer for kids in tight parking spots.",
        date: "2024-04-01"
      },
      {
        id: "r24b",
        username: "Large Family",
        rating: 5,
        comment: "Versatile seating and amazing fuel economy for a family van.",
        date: "2024-03-31"
      }
    ],
    specs: {
      engine: "1.5L Hybrid",
      horsepower: "114 hp",
      mileage: "25.0 km/L",
      transmission: "eCVT",
      fuelType: "Hybrid",
      topSpeed: "170 km/h",
      acceleration: "0-60 in 11.8s"
    },
    colors: [
      { name: "Urban Khaki", hex: "#8B7355" },
      { name: "Scarlet", hex: "#FF2400" },
      { name: "Blueish", hex: "#1E90FF" }
    ],
    features: ["Dual Electric Sliding Doors", "7-Seater Option", "Low Step-in Height"]
  },
  // Toyota Spade
  {
    id: "24",
    name: "TOYOTA SPADE G",
    brand: "Toyota",
    model: "Spade",
    year: 2024,
    price: 1300000,
    image: carImages['toyota-spade-1'],
    images: [
      carImages['toyota-spade-1'],
      carImages['toyota-spade-2'],
      carImages['toyota-spade-3'],
      carImages['toyota-spade-4'],
      carImages['toyota-spade-5'],
      carImages['toyota-spade-6'],
      carImages['toyota-spade-7'],
      carImages['toyota-spade-8'],
    ],
    shortDescription: "Unique door, easy cabin access.",
    description: "The Toyota Spade G offers a higher driving position and premium features in a compact package. Perfect for urban drivers who want better visibility and style.",
    rating: 4.1,
    reviews: [
      {
        id: "r25",
        username: "City Driver",
        rating: 5,
        comment: "Unique design with that huge side door. It makes loading groceries so easy.",
        date: "2024-04-02"
      },
      {
        id: "r25b",
        username: "Practical Owner",
        rating: 5,
        comment: "Great visibility and very easy to drive. The interior layout is very clever.",
        date: "2024-04-01"
      }
    ],
    specs: {
      engine: "1.5L 4-Cylinder",
      horsepower: "107 hp",
      mileage: "20.2 km/L",
      transmission: "CVT",
      fuelType: "Petrol",
      topSpeed: "165 km/h",
      acceleration: "0-60 in 12.0s"
    },
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Yellow", hex: "#FFFF00" },
      { name: "Light Blue", hex: "#ADD8E6" }
    ],
    features: ["Large Power Sliding Passenger Door", "Multiple Storage Compartments"]
  },
  // Toyota Vitz
  {
    id: "25",
    name: "TOYOTA VITZ 2020",
    brand: "Toyota",
    model: "Vitz",
    year: 2024,
    price: 1500000,
    image: carImages['toyota-vitz-1'],
    images: [
      carImages['toyota-vitz-1'],
      carImages['toyota-vitz-2'],
      carImages['toyota-vitz-3'],
      carImages['toyota-vitz-4'],
      carImages['toyota-vitz-5'],
      carImages['toyota-vitz-6'],
    ],
    shortDescription: "Popular, agile, and fuel-efficient hatchback",
    description: "The Toyota Vitz is a proven reliable hatchback with modern features and excellent fuel economy. Perfect for first-time car buyers and daily commuters.",
    rating: 4.2,
    reviews: [
      {
        id: "r26",
        username: "First Car Owner",
        rating: 5,
        comment: "A classic for a reason. Dependable and very easy on the pocket.",
        date: "2024-04-03"
      },
      {
        id: "r26b",
        username: "Safety Conscious",
        rating: 5,
        comment: "Good safety features for a small hatchback. It feels solid on the road.",
        date: "2024-04-02"
      }
    ],
    specs: {
      engine: "1.0L or 1.3L 4-Cylinder",
      horsepower: "98 hp (1.3L)",
      mileage: "21.0 km/L",
      transmission: "CVT",
      fuelType: "Petrol",
      topSpeed: "175 km/h",
      acceleration: "0-60 in 11.2s"
    },
    colors: [
      { name: "Cherry Pearl", hex: "#8B3A3A" },
      { name: "Metallic Silver", hex: "#C0C0C0" },
      { name: "Vivid Blue", hex: "#1E90FF" }
    ],
    features: ["Tight Turning Radius", "Touchscreen Audio", "Anti-lock Braking"]
  },
  // Volvo XC4
  {
    id: "26",
    name: "VOLVO XC4",
    brand: "Volvo",
    model: "XC4",
    year: 2024,
    price: 4200000,
    image: carImages['volvo-xc4-1'],
    images: [
      carImages['volvo-xc4-1'],
      carImages['volvo-xc4-2'],
      carImages['volvo-xc4-3'],
      carImages['volvo-xc4-4'],
      carImages['volvo-xc4-5'],
    ],
    shortDescription: "Safe, Swedish, and sophisticated SUVLuxury compact SUV with Scandinavian design",
    description: "The Volvo XC4 combines Scandinavian design excellence with advanced safety technology. With its premium interior and confident driving dynamics, it offers luxury without compromise.",
    rating: 4.7,
    reviews: [
      {
        id: "r27",
        username: "Comfort Seeker",
        rating: 5,
        comment: "The seats are the most comfortable in the industry. Design is so clean.",
        date: "2024-04-04"
      },
      {
        id: "r27b",
        username: "Minimalist Lover",
        rating: 5,
        comment: "Feels incredibly safe. The minimalist Swedish design is very relaxing.",
        date: "2024-04-03"
      }
    ],
    specs: {
      engine: "2.0L B4 Mild Hybrid",
      horsepower: "197 hp",
      mileage: "14.2 km/L",
      transmission: "Automatic",
      fuelType: "Hybrid",
      topSpeed: "180 km/h (Electronically Limited)",
      acceleration: "0-60 in 7.4s"
    },
    colors: [
      { name: "Sage Green", hex: "#9CAF88" },
      { name: "Fjord Blue", hex: "#4B6B8C" },
      { name: "Crystal White", hex: "#F8F8F8" }
    ],
    features: ["Google Built-in", "CleanZone Air Purification", "Pilot Assist"]
  }
];

import { carImages } from '../../assets/images/cars';

export const brands = ["Toyota", "Honda", "Mazda", "Land Rover", "Daihatsu", "Ford", "Subaru", "Volvo"];
export const fuelTypes = ["Petrol", "Hybrid", "Diesel"];
export const transmissions = ["Automatic", "Manual"];

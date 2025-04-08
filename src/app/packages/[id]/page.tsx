import React from 'react';
import { notFound } from 'next/navigation';
import { PackageDetails } from '@/components/packages/PackageDetails';

// Define interface for params
interface PackagePageProps {
  params: {
    id: string;
  };
}

interface PackageDetailsProps {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  isPrivate: boolean;
  bannerImage: string;
  overview: string;
  route: string[];
  itinerary: { day: number; title: string; description: string[]; }[];
  inclusions: string[];
  exclusions: string[];
  faqs: { question: string; answer: string; }[];
}

// Define package data
const packageData: Record<string, PackageDetailsProps> = {
  '7-days-6-nights': {
    id: '7-days-6-nights',
    title: '7 Days 6 Nights Private Trip',
    subtitle: 'Immerse yourself in Bhutan\'s culture, landscapes, and adventures',
    duration: '7 Days 6 Nights',
    price: 'Custom pricing',
    isPrivate: true,
    bannerImage: '/images/packages/5-days-banner.jpg',
    overview: "Travel with We Go Authentic on this 7-day Bhutan adventure for an immersive, hassle-free experience that blends breathtaking landscapes, cultural treasures, and thrilling activities. From the moment you land, we handle the logistics so you can fully savor Bhutan's beauty—from serene monasteries and vibrant cityscapes to heart-pounding hikes and scenic drives.",
    route: [
      'Day 1: Bagdogra → Phuentsholing',
      'Day 2: Phuentsholing → Thimphu',
      'Day 3: Thimphu → Punakha → Thimphu',
      'Day 4: Thimphu → Paro',
      "Day 5: Paro (Tiger's Nest hike)",
      'Day 6: Paro → Phuentsholing',
      'Day 7: Phuentsholing → Bagdogra (Departure)',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Bhutan – Phuentsholing Awaits!',
        description: [
          "📍 Arrival & Meet-up:",
          "• Land at Bagdogra Airport where our friendly driver greets you",
          "• Drive to Jiagaon, the Indian border town",
          "• Cross through Pedestrian Terminal with our team's assistance",
          
          "📍 Welcome to Bhutan:",
          "• Enter Phuentsholing, your gateway to the Kingdom of Bhutan",
          "• Complete immigration formalities with our help",
          
          "📍 Evening Activities:",
          "• Visit Zangtopelri Lhakhang temple in town center",
          "• Try authentic Bhutanese coffee at Kizom Café or Mountain Café",
          "• Optional: Experience nightlife at Samsara Club or The Lions Club",
          "• Alternative: Enjoy peaceful dinner at Hungrella Restaurant",
          
          "📍 Overnight stay in Phuentsholing"
        ],
      },
      {
        day: 2,
        title: 'Road Trip to Thimphu – The Capital With Character',
        description: [
          "📍 Morning Departure:",
          "• Enjoy breakfast at your hotel",
          "• Complete immigration formalities",
          "• Begin journey to Thimphu, Bhutan's capital",
          
          "📍 Scenic Stops Along the Way:",
          "• Gedu Stupa: Lucky blessings and photo opportunities",
          "• Wangkha Waterfalls: Natural beauty stop",
          "• Chuzom Junction: See three different styles of chortens where rivers meet",
          
          "📍 Evening in Thimphu:",
          "• Explore Clock Tower Square",
          "• Try local momos at Zombala 2 Restaurant",
          "• Optional: Visit Mojo Park or Space 34 for live music",
          
          "📍 Overnight stay in Thimphu (Meal Plan: MAP)"
        ],
      },
      {
        day: 3,
        title: 'Day Trip to Punakha – Adventure & Legends',
        description: [
          "📍 Morning Departure:",
          "• Pack your day bag and set off for Punakha",
          
          "📍 Exciting Stops Along the Way:",
          "• Dochula Pass: Stunning viewpoint with 108 chortens",
          "• Chimi Lhakhang: Fertility temple with unique symbols",
          "• Punakha Dzong: Majestic fortress with vibrant festivals",
          "• Suspension Bridge: Walk across this prayer-flag-covered marvel",
          
          "📍 Optional Thrill:",
          "• Mo Chhu River Rafting: 10 km stretch with 10 rapids (Direct pay basis)",
          
          "📍 Evening Return:",
          "• Head back to Thimphu for a restful night",
          
          "📍 Overnight stay in Thimphu (Meal Plan: MAP)"
        ],
      },
      {
        day: 4,
        title: 'Thimphu Sightseeing & The Magical Road to Paro',
        description: [
          "📍 Morning Exploration:",
          "• Buddha Dordenma: Giant Buddha statue with city views",
          "• Takin Preservation Centre: Meet Bhutan's national animal",
          "• Simply Bhutan Museum: Interactive museum with local wine tasting",
          "• National Memorial Chorten: Sacred site for blessings",
          
          "📍 Evening in Paro:",
          "• Rinpung Dzong: Watch the fortress light up at night",
          "• Dress in traditional Bhutanese attire for photos",
          
          "📍 Overnight stay in Paro (Meal Plan: MAP)"
        ],
      },
      {
        day: 5,
        title: "The Legendary Tiger's Nest Hike",
        description: [
          "📍 Morning Hike:",
          "• Fuel up with breakfast and prepare for the iconic hike",
          "• Taktsang Monastery: 3,120m-high monastery perched on a cliff",
          
          "📍 Afternoon Relaxation:",
          "• Traditional Hot Stone Bath: Soothing soak in heated river stones (Direct pay basis)",
          
          "📍 Evening Activities:",
          "• Wander through Paro Market or relax at your hotel",
          
          "📍 Overnight stay in Paro (Meal Plan: MAP)"
        ],
      },
      {
        day: 6,
        title: 'Return to Phuentsholing – The Scenic Farewell Drive',
        description: [
          "📍 Morning Departure:",
          "• Start your journey back to Phuentsholing",
          
          "📍 Road Trip Highlights:",
          "• Paro Market: Handicrafts and souvenirs",
          "• Paro Airport Viewpoint: Stunning mountain views",
          "• Iron Bridge (Tamchog Zam): Historic chain-link bridge",
          
          "📍 Evening in Phuentsholing:",
          "• Enjoy last-minute shopping and relax",
          
          "📍 Overnight stay in Phuentsholing (Meal Plan: MAP)"
        ],
      },
      {
        day: 7,
        title: 'Goodbye, Bhutan!',
        description: [
          "📍 Morning Farewell:",
          "• Enjoy breakfast and check out",
          "• Transfer to Bagdogra Airport",
          
          "📍 Final Thought:",
          "• Carry memories, pictures, and Bhutanese snacks",
          "• Reflect on Bhutan's happiness and charm",
          
          "📍 Departure:"
        ],
      },
    ],
    inclusions: [
      "Sustainable Development Fee (SDF): A fee of 1200.00 per night that supports local development initiatives.",
      "Certified Bhutanese Tour Guide: Enjoy the insights of a certified local guide who enhances your travel experience with authentic knowledge of Bhutanese culture and heritage.",
      "Accommodation (6 Nights): Phuentsholing: 2 nights, Thimphu: 2 nights, Paro: 2 nights. All accommodations include both breakfast and dinner.",
      "Bhutan Sightseeing with Private Vehicle: Travel throughout Bhutan in a dedicated private vehicle, available daily from 9 AM to 6 PM.",
      "Driver Allowances: Daily allowances for the driver are provided.",
      "Additional Vehicle-Related Charges: Toll Taxes, Parking Charges, State Taxes. All these charges are covered as part of your private vehicle service.",
      "Bagdogra Airport (IXB) Pickup and Drop: Convenient transfers from Bagdogra Airport to your accommodation and back.",
    ],
    exclusions: [
      "Airfare/Train Fare: The cost of your flights or train journeys to and from Bhutan is not included.",
      "Entry Fees to Monuments: Admission charges for monuments or attractions are not covered.",
      "Lunch: While breakfast and dinner are provided, lunch is not included in the package.",
      "Additional Expenses: Costs incurred due to flight cancellations, rescheduling, weather conditions, medical evacuations, strikes, or any other expenses not explicitly mentioned in the inclusions must be paid directly by the traveler.",
    ],
    faqs: [
      {
        question: "For couples, do we need to share a room?",
        answer: "No—you can enjoy a private double occupancy room without having to share it with other travelers."
      },
      {
        question: "I'm traveling solo. How will my accommodation be arranged?",
        answer: "Solo travelers will be placed in a twin-sharing room with another guest of the same gender."
      },
      {
        question: "What currency is used in Bhutan?",
        answer: "Bhutan's official currency is the Ngultrum (BTN), but Indian Rupees are widely accepted, so you don't need to exchange your INR."
      },
      {
        question: "Are ATMs and credit cards available in Bhutan?",
        answer: "ATMs are available, but it's best to carry sufficient cash since credit cards are not commonly accepted. Only a few establishments accept VISA, often with a 5% surcharge."
      },
      {
        question: "How much cash can I bring into Bhutan?",
        answer: "You are permitted to bring cash up to the equivalent of US $10,000."
      },
      {
        question: "Is Bhutan safe for solo travelers?",
        answer: "Yes, Bhutan is considered one of the safest destinations for solo travelers, offering a welcoming and secure environment. Joining a group may also help reduce travel costs."
      },
      {
        question: "Are there any dress restrictions?",
        answer: "There are no strict rules on attire for visitors; however, when visiting religious sites, it is appreciated if you wear respectful clothing that covers from your shoulders to your knees."
      },
      {
        question: "What is the weather like in Bhutan, and when is the best time to visit?",
        answer: "Bhutan is a year-round destination with a varied climate due to its diverse altitudes and the influence of the North Indian monsoons. The four seasons—summer (June–August), autumn (September–November), winter (December–February), and spring (March–May)—each offer their own unique charm."
      },
    ],
  },
  'group-trip': {
    id: 'group-trip',
    title: '7 Days 6 Nights Group Trip',
    subtitle: 'Experience the best of Bhutan with like-minded travelers',
    duration: '7 Days 6 Nights',
    price: '₹27,999',
    isPrivate: false,
    bannerImage: '/images/packages/group-trip-banner.jpg',
    overview: "Travel with We Go Authentic on this 7-day Bhutan adventure for an immersive, hassle-free experience that blends breathtaking landscapes, cultural treasures, and thrilling activities. From the moment you land, we handle the logistics so you can fully savor Bhutan's beauty—from serene monasteries and vibrant cityscapes to heart-pounding hikes and scenic drives.",
    route: [
      'Day 1: Bagdogra → Phuentsholing',
      'Day 2: Phuentsholing → Thimphu',
      'Day 3: Thimphu → Punakha → Thimphu',
      'Day 4: Thimphu → Paro',
      "Day 5: Paro (Tiger's Nest hike)",
      'Day 6: Paro → Phuentsholing',
      'Day 7: Phuentsholing → Bagdogra (Departure)',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Bhutan – Phuentsholing Awaits!',
        description: [
          "📍 Arrival & Meet-up:",
          "• Land at Bagdogra Airport where our friendly driver greets you",
          "• Drive to Jiagaon, the Indian border town",
          "• Cross through Pedestrian Terminal with our team's assistance",
          
          "📍 Welcome to Bhutan:",
          "• Enter Phuentsholing, your gateway to the Kingdom of Bhutan",
          "• Complete immigration formalities with our help",
          
          "📍 Evening Activities:",
          "• Visit Zangtopelri Lhakhang temple in town center",
          "• Try authentic Bhutanese coffee at Kizom Café or Mountain Café",
          "• Optional: Experience nightlife at Samsara Club or The Lions Club",
          "• Alternative: Enjoy peaceful dinner at Hungrella Restaurant",
          
          "📍 Overnight stay in Phuentsholing"
        ],
      },
      {
        day: 2,
        title: 'Road Trip to Thimphu – The Capital With Character',
        description: [
          "📍 Morning Departure:",
          "• Enjoy breakfast at your hotel",
          "• Complete immigration formalities",
          "• Begin journey to Thimphu, Bhutan's capital",
          
          "📍 Scenic Stops Along the Way:",
          "• Gedu Stupa: Lucky blessings and photo opportunities",
          "• Wangkha Waterfalls: Natural beauty stop",
          "• Chuzom Junction: See three different styles of chortens where rivers meet",
          
          "📍 Evening in Thimphu:",
          "• Explore Clock Tower Square",
          "• Try local momos at Zombala 2 Restaurant",
          "• Optional: Visit Mojo Park or Space 34 for live music",
          
          "📍 Overnight stay in Thimphu (Meal Plan: MAP)"
        ],
      },
      {
        day: 3,
        title: 'Day Trip to Punakha – Adventure & Legends',
        description: [
          "📍 Morning Departure:",
          "• Pack your day bag and set off for Punakha",
          
          "📍 Exciting Stops Along the Way:",
          "• Dochula Pass: Stunning viewpoint with 108 chortens",
          "• Chimi Lhakhang: Fertility temple with unique symbols",
          "• Punakha Dzong: Majestic fortress with vibrant festivals",
          "• Suspension Bridge: Walk across this prayer-flag-covered marvel",
          
          "📍 Optional Thrill:",
          "• Mo Chhu River Rafting: 10 km stretch with 10 rapids (Direct pay basis)",
          
          "📍 Evening Return:",
          "• Head back to Thimphu for a restful night",
          
          "📍 Overnight stay in Thimphu (Meal Plan: MAP)"
        ],
      },
      {
        day: 4,
        title: 'Thimphu Sightseeing & The Magical Road to Paro',
        description: [
          "📍 Morning Exploration:",
          "• Buddha Dordenma: Giant Buddha statue with city views",
          "• Takin Preservation Centre: Meet Bhutan's national animal",
          "• Simply Bhutan Museum: Interactive museum with local wine tasting",
          "• National Memorial Chorten: Sacred site for blessings",
          
          "📍 Evening in Paro:",
          "• Rinpung Dzong: Watch the fortress light up at night",
          "• Dress in traditional Bhutanese attire for photos",
          
          "📍 Overnight stay in Paro (Meal Plan: MAP)"
        ],
      },
      {
        day: 5,
        title: "The Legendary Tiger's Nest Hike",
        description: [
          "📍 Morning Hike:",
          "• Fuel up with breakfast and prepare for the iconic hike",
          "• Taktsang Monastery: 3,120m-high monastery perched on a cliff",
          
          "📍 Afternoon Relaxation:",
          "• Traditional Hot Stone Bath: Soothing soak in heated river stones (Direct pay basis)",
          
          "📍 Evening Activities:",
          "• Wander through Paro Market or relax at your hotel",
          
          "📍 Overnight stay in Paro (Meal Plan: MAP)"
        ],
      },
      {
        day: 6,
        title: 'Return to Phuentsholing – The Scenic Farewell Drive',
        description: [
          "📍 Morning Departure:",
          "• Start your journey back to Phuentsholing",
          
          "📍 Road Trip Highlights:",
          "• Paro Market: Handicrafts and souvenirs",
          "• Paro Airport Viewpoint: Stunning mountain views",
          "• Iron Bridge (Tamchog Zam): Historic chain-link bridge",
          
          "📍 Evening in Phuentsholing:",
          "• Enjoy last-minute shopping and relax",
          
          "📍 Overnight stay in Phuentsholing (Meal Plan: MAP)"
        ],
      },
      {
        day: 7,
        title: 'Goodbye, Bhutan!',
        description: [
          "📍 Morning Farewell:",
          "• Enjoy breakfast and check out",
          "• Transfer to Bagdogra Airport",
          
          "📍 Final Thought:",
          "• Carry memories, pictures, and Bhutanese snacks",
          "• Reflect on Bhutan's happiness and charm",
          
          "📍 Departure:"
        ],
      },
    ],
    inclusions: [
      "Sustainable Development Fee (SDF): A fee of 1200.00 per night that supports local development initiatives.",
      "Certified Bhutanese Tour Guide: Enjoy the insights of a certified local guide who enhances your travel experience with authentic knowledge of Bhutanese culture and heritage.",
      "Accommodation (6 Nights): Phuentsholing: 2 nights, Thimphu: 2 nights, Paro: 2 nights. All accommodations include both breakfast and dinner.",
      "Bhutan Sightseeing with Private Vehicle: Travel throughout Bhutan in a dedicated private vehicle, available daily from 9 AM to 6 PM.",
      "Driver Allowances: Daily allowances for the driver are provided.",
      "Additional Vehicle-Related Charges: Toll Taxes, Parking Charges, State Taxes. All these charges are covered as part of your private vehicle service.",
      "Bagdogra Airport (IXB) Pickup and Drop: Convenient transfers from Bagdogra Airport to your accommodation and back.",
    ],
    exclusions: [
      "Airfare/Train Fare: The cost of your flights or train journeys to and from Bhutan is not included.",
      "Entry Fees to Monuments: Admission charges for monuments or attractions are not covered.",
      "Lunch: While breakfast and dinner are provided, lunch is not included in the package.",
      "Additional Expenses: Costs incurred due to flight cancellations, rescheduling, weather conditions, medical evacuations, strikes, or any other expenses not explicitly mentioned in the inclusions must be paid directly by the traveler.",
    ],
    faqs: [
      {
        question: "For couples, do we need to share a room?",
        answer: "No—you can enjoy a private double occupancy room without having to share it with other travelers."
      },
      {
        question: "I'm traveling solo. How will my accommodation be arranged?",
        answer: "Solo travelers will be placed in a twin-sharing room with another guest of the same gender."
      },
      {
        question: "What currency is used in Bhutan?",
        answer: "Bhutan's official currency is the Ngultrum (BTN), but Indian Rupees are widely accepted, so you don't need to exchange your INR."
      },
      {
        question: "Are ATMs and credit cards available in Bhutan?",
        answer: "ATMs are available, but it's best to carry sufficient cash since credit cards are not commonly accepted. Only a few establishments accept VISA, often with a 5% surcharge."
      },
      {
        question: "How much cash can I bring into Bhutan?",
        answer: "You are permitted to bring cash up to the equivalent of US $10,000."
      },
      {
        question: "Is Bhutan safe for solo travelers?",
        answer: "Yes, Bhutan is considered one of the safest destinations for solo travelers, offering a welcoming and secure environment. Joining a group may also help reduce travel costs."
      },
      {
        question: "Are there any dress restrictions?",
        answer: "There are no strict rules on attire for visitors; however, when visiting religious sites, it is appreciated if you wear respectful clothing that covers from your shoulders to your knees."
      },
      {
        question: "What is the weather like in Bhutan, and when is the best time to visit?",
        answer: "Bhutan is a year-round destination with a varied climate due to its diverse altitudes and the influence of the North Indian monsoons. The four seasons—summer (June–August), autumn (September–November), winter (December–February), and spring (March–May)—each offer their own unique charm."
      },
    ],
  },
  '5-days-4-nights': {
    id: '5-days-4-nights',
    title: '5 Days 4 Nights Private Trip',
    subtitle: "A quick but immersive journey through Bhutan's highlights",
    duration: '5 Days 4 Nights',
    price: 'Custom pricing',
    isPrivate: true,
    bannerImage: '/images/packages/5-days-banner.jpg',
    overview: "Explore the beauty of Bhutan with We Go Authentic as you journey through its stunning landscapes and cultural treasures. This compact 5-day itinerary is perfect for travelers with limited time who still want to experience the essence of Bhutan, including the legendary Tiger's Nest hike, Thimphu city exploration, and scenic valley tours.",
    route: [
      'Day 1: Bagdogra → Jaigaon → Phuentsholing → Thimphu',
      'Day 2: Thimphu → Paro',
      "Day 3: Paro (Tiger's Nest Hike)",
      'Day 4: Paro → Phuentsholing',
      'Day 5: Phuentsholing → Bagdogra',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Bhutan – Road Trip to Thimphu',
        description: [
          "📍 Arrival & Meet-up:",
          "• Land at Bagdogra Airport where our friendly driver greets you",
          "• Drive to Jiagaon, the Indian border town",
          "• Cross through Pedestrian Terminal with our team's assistance",
          
          "📍 Scenic Road Trip:",
          "• Gedu Stupa: Stop for blessings and selfies",
          "• Lunch Break: Enjoy countryside views",
          "• Wangkha Waterfalls: Nature's welcome",
          "• Chuzom Junction: Watch rivers meet",
          
          "📍 Evening in Thimphu:",
          "• Explore Clock Tower Square",
          "• Try Bhutanese fast food at Zombala 2 Restaurant",
          "• Optional: Visit Mojo Park or Space 34 for nightlife",
          
          "📍 Overnight stay in Thimphu (Meal Plan: MAP)"
        ],
      },
      {
        day: 2,
        title: 'Discovering Thimphu – Culture & Views',
        description: [
          "📍 Morning Exploration:",
          "• Buddha Dordenma: Giant Buddha statue with city views",
          "• National Memorial Chorten: Sacred site for blessings",
          
          "📍 Afternoon Activities:",
          "• Takin Zoo: Meet Bhutan's quirky national animal",
          "• Changangkha Lhakhang: Old temple with city views",
          "• Simply Bhutan Museum: Try local wine and archery",
          
          "📍 Evening in Paro:",
          "• Dochula Pass: Stunning mountain pass with 108 stupas",
          "• Arrive in Paro and check into your hotel",
          
          "📍 Overnight stay in Paro (Meal Plan: MAP)"
        ],
      },
      {
        day: 3,
        title: "The Epic Tiger's Nest Hike",
        description: [
          "📍 Morning Hike:",
          "• Fuel up with breakfast and prepare for the iconic hike",
          "• Taktsang Monastery: 3,120m-high monastery perched on a cliff",
          
          "📍 Afternoon Relaxation:",
          "• Traditional Hot Stone Bath: Soothing soak in heated river stones (Direct pay basis)",
          
          "📍 Evening Activities:",
          "• Wander through Paro Market or relax at your hotel",
          
          "📍 Overnight stay in Paro (Meal Plan: MAP)"
        ],
      },
      {
        day: 4,
        title: 'Scenic Drive Back to Phuentsholing',
        description: [
          "📍 Morning Activities:",
          "• Paro Market: Handicrafts and souvenirs",
          "• Paro Airport Viewpoint: Stunning mountain views",
          
          "📍 Afternoon Stops:",
          "• Iron Bridge (Tamchog Zam): Historic chain-link bridge",
          "• Drive back to Phuentsholing",
          
          "📍 Evening in Phuentsholing:",
          "• Shop for local treasures and relax",
          
          "📍 Overnight stay in Phuentsholing (Meal Plan: MAP)"
        ],
      },
      {
        day: 5,
        title: 'Farewell Bhutan – Until We Meet Again!',
        description: [
          "📍 Morning Farewell:",
          "• Enjoy breakfast and check out",
          "• Transfer to Bagdogra Airport",
          
          "📍 Final Thoughts:",
          "• Reflect on Bhutan's magic and charm",
          "• Carry memories, pictures, and Bhutanese snacks",
          
          "📍 Departure:"
        ],
      },
    ],
    inclusions: [
      "Sustainable Development Fee (SDF): A fee of 1200.00 per night that supports local development initiatives.",
      "Certified Bhutanese Tour Guide: Enjoy the insights of a certified local guide who enhances your travel experience with authentic knowledge of Bhutanese culture and heritage.",
      "Accommodation (4 Nights): Phuentsholing: 1 night, Thimphu: 1 night, Paro: 2 nights. All accommodations include both breakfast and dinner.",
      "Bhutan Sightseeing with Private Vehicle: Travel throughout Bhutan in a dedicated private vehicle, available daily from 9 AM to 6 PM.",
      "Driver Allowances: Daily allowances for the driver are provided.",
      "Additional Vehicle-Related Charges: Toll Taxes, Parking Charges, State Taxes. All these charges are covered as part of your private vehicle service.",
      "Bagdogra Airport (IXB) Pickup and Drop: Convenient transfers from Bagdogra Airport to your accommodation and back.",
    ],
    exclusions: [
      "Airfare/Train Fare: The cost of your flights or train journeys to and from Bhutan is not included.",
      "Entry Fees to Monuments: Admission charges for monuments or attractions are not covered.",
      "Lunch: While breakfast and dinner are provided, lunch is not included in the package.",
      "Additional Expenses: Costs incurred due to flight cancellations, rescheduling, weather conditions, medical evacuations, strikes, or any other expenses not explicitly mentioned in the inclusions must be paid directly by the traveler.",
    ],
    faqs: [
      {
        question: "For couples, do we need to share a room?",
        answer: "No—you can enjoy a private double occupancy room without having to share it with other travelers."
      },
      {
        question: "What currency is used in Bhutan?",
        answer: "Bhutan's official currency is the Ngultrum (BTN), but Indian Rupees are widely accepted, so you don't need to exchange your INR."
      },
      {
        question: "Are ATMs and credit cards available in Bhutan?",
        answer: "ATMs are available, but it's best to carry sufficient cash since credit cards are not commonly accepted. Only a few establishments accept VISA, often with a 5% surcharge."
      },
      {
        question: "How much cash can I bring into Bhutan?",
        answer: "You are permitted to bring cash up to the equivalent of US $10,000."
      },
      {
        question: "Is this package customizable?",
        answer: "Yes, as this is a private trip, we can adjust the itinerary based on your preferences and interests. Feel free to discuss your requirements with us."
      },
      {
        question: "How physically demanding is the Tiger's Nest hike?",
        answer: "The hike is moderately challenging, taking about 5 hours round-trip with an elevation gain of about 900 meters. However, you can go at your own pace, and there's an option to ride a horse halfway up (coming down is only by foot)."
      },
      {
        question: "Are there any dress restrictions?",
        answer: "There are no strict rules on attire for visitors; however, when visiting religious sites, it is appreciated if you wear respectful clothing that covers from your shoulders to your knees."
      },
      {
        question: "What is the weather like in Bhutan, and when is the best time to visit?",
        answer: "Bhutan is a year-round destination with a varied climate due to its diverse altitudes and the influence of the North Indian monsoons. The four seasons—summer (June–August), autumn (September–November), winter (December–February), and spring (March–May)—each offer their own unique charm."
      },
    ],
  },
  '8-days-7-nights': {
    id: '8-days-7-nights',
    title: '8 Days 7 Nights Private Trip',
    subtitle: "Our most comprehensive Bhutan journey",
    duration: '8 Days 7 Nights',
    price: 'Custom pricing',
    isPrivate: true,
    bannerImage: '/images/packages/8-days-banner.jpg',
    overview: "Travel with We Go Authentic on an 8-day adventure through Bhutan. Here's a simple look at the city routes each day: Day 1: Bagdogra Airport → Jiagaon → Phuentsholing, Day 2: Phuentsholing → Thimphu, Day 3: Thimphu → Punakha, Day 4: Punakha → (Explore Phobjikha Valley) → Punakha, Day 5: Punakha → Paro, Day 6: Paro (with the famous Tiger's Nest hike), Day 7: Paro → Phuentsholing, Day 8: Phuentsholing → Bagdogra Airport. Get ready for a journey filled with breathtaking views, rich culture, and authentic experiences in Bhutan!",
    route: [
      'Day 1: Bagdogra Airport → Jiagaon → Phuentsholing',
      'Day 2: Phuentsholing → Thimphu',
      'Day 3: Thimphu → Punakha',
      'Day 4: Punakha → (Explore Phobjikha Valley) → Punakha',
      'Day 5: Punakha → Paro',
      'Day 6: Paro (with the famous Tiger\'s Nest hike)',
      'Day 7: Paro → Phuentsholing',
      'Day 8: Phuentsholing → Bagdogra Airport'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Welcome to Bhutan – Let the Fun Begin!',
        description: [
          "📍 Arrival & Meet-up:",
          "• Land at Bagdogra Airport where our friendly driver greets you",
          "• Drive to Jiagaon, the Indian border town",
          "• Cross through Pedestrian Terminal with our team's assistance",
          
          "📍 Welcome to Bhutan:",
          "• Enter Phuentsholing, your gateway to the Kingdom of Bhutan",
          "• Complete immigration formalities with our help",
          
          "📍 Evening Activities:",
          "• Visit Zangtopelri Lhakhang temple in town center",
          "• Try authentic Bhutanese coffee at Kizom Café or Mountain Café",
          "• Optional: Experience nightlife at Samsara Club or The Lions Club",
          "• Alternative: Enjoy peaceful dinner at Hungrella Restaurant",
          
          "📍 Overnight stay in Phuentsholing"
        ],
      },
      {
        day: 2,
        title: 'Road Trip to Thimphu – Scenic, Sassy, and a Bit Silly',
        description: [
          "📍 Morning Departure:",
          "• Enjoy breakfast at your hotel",
          "• Complete immigration formalities",
          "• Begin journey to Thimphu, Bhutan's capital",
          
          "📍 Scenic Stops Along the Way:",
          "• Gedu Stupa: Lucky blessings and photo opportunities",
          "• Wangkha Waterfalls: Natural beauty stop",
          "• Chuzom Junction: See three different styles of chortens where rivers meet",
          
          "📍 Evening in Thimphu:",
          "• Explore Clock Tower Square",
          "• Try local momos at Zombala 2 Restaurant",
          "• Optional: Visit Mojo Park or Space 34 for live music",
          
          "📍 Overnight stay in Thimphu (Meal Plan: MAP)"
        ],
      },
      {
        day: 3,
        title: 'From Thimphu to Punakha – Culture, Curiosity, and a Dash of Quirk',
        description: [
          "📍 Morning Exploration:",
          "• Buddha Dordenma: Giant Buddha statue with city views",
          "• Takin Preservation Centre: Meet Bhutan's national animal",
          
          "📍 Afternoon Activities:",
          "• Simply Bhutan Museum: Interactive museum with local wine tasting",
          "• Jungshi Handmade Paper Factory: Watch traditional paper-making",
          "• BBS Tower: Stunning viewpoint for city views",
          
          "📍 Evening in Punakha:",
          "• Dochula Pass: Stunning mountain pass with 108 stupas",
          "• Arrive in Punakha and check into your hotel",
          
          "📍 Overnight stay in Punakha (Meal Plan: MAP)"
        ],
      },
      {
        day: 4,
        title: 'Phobjikha Valley – Bhutan\'s Own Slice of Paradise',
        description: [
          "📍 Morning Adventure:",
          "• Travel to Phobjikha Valley",
          "• Gangtey Natural Trail Trek: 2-hour trek through meadows and forests",
          
          "📍 Afternoon Activities:",
          "• Lunch in nature",
          "• Black Necked Crane Center: Learn about these graceful birds",
          
          "📍 Evening Return:",
          "• Head back to Punakha",
          
          "📍 Overnight stay in Punakha (Meal Plan: MAP)"
        ],
      },
      {
        day: 5,
        title: 'Punakha Dzong & Paper Factory – Fortress and Craft',
        description: [
          "📍 Morning Exploration:",
          "• Punakha Dzong: Majestic fortress with vibrant festivals",
          "• Jungshi Handmade Paper Factory: Watch traditional paper-making",
          
          "📍 Afternoon Journey:",
          "• Optional: Mo Chhu River Rafting (Direct pay basis)",
          "• Dochula Pass: Stunning mountain pass with 108 stupas",
          
          "📍 Evening in Paro:",
          "• Rinpung Dzong: Watch the fortress light up at night",
          
          "📍 Overnight stay in Paro (Meal Plan: MAP)"
        ],
      },
      {
        day: 6,
        title: 'Tiger\'s Nest Challenge – Hike, Laugh, and Relax',
        description: [
          "📍 Morning Hike:",
          "• Fuel up with breakfast and prepare for the iconic hike",
          "• Taktsang Monastery: 3,120m-high monastery perched on a cliff",
          
          "📍 Afternoon Relaxation:",
          "• Traditional Hot Stone Bath: Soothing soak in heated river stones (Direct pay basis)",
          
          "📍 Evening Activities:",
          "• Wander through Paro Market or relax at your hotel",
          
          "📍 Overnight stay in Paro (Meal Plan: MAP)"
        ],
      },
      {
        day: 7,
        title: 'Souvenir Safari & Scenic Return',
        description: [
          "📍 Morning Activities:",
          "• Paro Market: Handicrafts and souvenirs",
          "• Paro Airport Viewpoint: Stunning mountain views",
          
          "📍 Afternoon Stops:",
          "• Iron Bridge (Tamchog Zam): Historic chain-link bridge",
          "• Drive back to Phuentsholing",
          
          "📍 Evening in Phuentsholing:",
          "• Shop for local treasures and relax",
          
          "📍 Overnight stay in Phuentsholing (Meal Plan: MAP)"
        ],
      },
      {
        day: 8,
        title: 'Farewell Bhutan – Until We Meet Again',
        description: [
          "📍 Morning Farewell:",
          "• Enjoy breakfast and check out",
          "• Transfer to Bagdogra Airport",
          
          "📍 Final Thoughts:",
          "• Reflect on Bhutan's magic and charm",
          "• Carry memories, pictures, and Bhutanese snacks",
          
          "📍 Departure:"
        ],
      }
    ],
    inclusions: [
      "Sustainable Development Fee (SDF): A fee of 1200.00 per night that supports local development initiatives.",
      "Certified Bhutanese Tour Guide: Enjoy the insights of a certified local guide who enhances your travel experience with authentic knowledge of Bhutanese culture and heritage.",
      "Accommodation (7 Nights): Various accommodations throughout the itinerary, including breakfast and dinner.",
      "Bhutan Sightseeing with Private Vehicle: Travel throughout Bhutan in a dedicated private vehicle, available daily from 9 AM to 6 PM.",
      "Driver Allowances: Daily allowances for the driver are provided.",
      "Additional Vehicle-Related Charges: Toll Taxes, Parking Charges, State Taxes. All these charges are covered as part of your private vehicle service.",
      "Bagdogra Airport (IXB) Pickup and Drop: Convenient transfers from Bagdogra Airport to your accommodation and back.",
    ],
    exclusions: [
      "Airfare/Train Fare: The cost of your flights or train journeys to and from Bhutan is not included.",
      "Entry Fees to Monuments: Admission charges for monuments or attractions are not covered.",
      "Lunch: While breakfast and dinner are provided, lunch is not included in the package.",
      "Additional Expenses: Costs incurred due to flight cancellations, rescheduling, weather conditions, medical evacuations, strikes, or any other expenses not explicitly mentioned in the inclusions must be paid directly by the traveler.",
    ],
    faqs: [
      {
        question: "For couples, do we need to share a room?",
        answer: "No—you can enjoy a private double occupancy room without having to share it with other travelers."
      },
      {
        question: "What currency is used in Bhutan?",
        answer: "Bhutan's official currency is the Ngultrum (BTN), but Indian Rupees are widely accepted, so you don't need to exchange your INR."
      },
      {
        question: "Are ATMs and credit cards available in Bhutan?",
        answer: "ATMs are available, but it's best to carry sufficient cash since credit cards are not commonly accepted. Only a few establishments accept VISA, often with a 5% surcharge."
      },
      {
        question: "How much cash can I bring into Bhutan?",
        answer: "You are permitted to bring cash up to the equivalent of US $10,000."
      },
      {
        question: "Is this package customizable?",
        answer: "Yes, as this is a private trip, we can adjust the itinerary based on your preferences and interests. Feel free to discuss your requirements with us."
      },
      {
        question: "Are there any dress restrictions?",
        answer: "There are no strict rules on attire for visitors; however, when visiting religious sites, it is appreciated if you wear respectful clothing that covers from your shoulders to your knees."
      },
      {
        question: "What is the weather like in Bhutan, and when is the best time to visit?",
        answer: "Bhutan is a year-round destination with a varied climate due to its diverse altitudes and the influence of the North Indian monsoons. The four seasons—summer (June–August), autumn (September–November), winter (December–February), and spring (March–May)—each offer their own unique charm."
      },
    ],
  },
  // Add more packages here as needed
};

// Generate static params for all package IDs
export function generateStaticParams() {
  return Object.keys(packageData).map(id => ({
    id,
  }));
}

export default function PackagePage({ params }: PackagePageProps) {
  const { id } = params;
  
  // Check if id exists in packageData
  if (!id || !packageData[id]) {
    return notFound();
  }

  return <PackageDetails packageData={packageData[id]} />;
}

import React from 'react';
import { PackageDetails } from '@/components/packages/PackageDetails';

// Data for 7 days 6 nights private trip
const packageData = {
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
        "Your journey begins at Bagdogra Airport, where our friendly driver will greet you. From here, we drive towards Jiagaon, the Indian town bordering Bhutan. But hold on! Before you enter Bhutan, you'll pass through the Pedestrian Terminal, where our team will assist with formalities.",
        "And just like that—you've arrived in Bhutan! Welcome to Phuentsholing, the bustling gateway to this mystical kingdom.",
        "Evening Shenanigans: Visit Zangtopelri Lhakhang, a beautiful little temple in the middle of town. It's peaceful, spiritual, and a great warm-up for the Bhutanese vibes ahead. Sip on authentic Bhutanese coffee at Kizom Café or Mountain Café—because coffee is life, even in the Himalayas.",
        "If you're feeling adventurous (or just curious), check out Samsara Club or The Lions Club for a taste of Bhutan's nightlife. If clubbing isn't your thing, Hungrella Restaurant offers a cozy, laid-back atmosphere.",
        "Overnight stay in Phuentsholing.",
      ],
    },
    {
      day: 2,
      title: 'Road Trip to Thimphu – The Capital With Character',
      description: [
        "Rise and shine! After breakfast, it's time to pack your bags, complete immigration formalities, and hit the road towards Thimphu, Bhutan's charming capital.",
        "Epic Pit Stops Along the Way: Gedu Stupa – A quick stop for some good luck and Instagram-worthy clicks. Wangkha Waterfalls – Because road trips without waterfalls are just… drives. Chuzom Junction – Witness the meeting point of the Paro and Thimphu rivers, where three different chortens (stupas) stand, each built in a unique architectural style.",
        "Evening Fun in Thimphu: Take a leisurely city walk around Clock Tower Square. People-watch, explore, and maybe grab a local snack. Craving something quick and tasty? Zombala 2 Restaurant serves up some mean momos! Feeling the party spirit? Check out Mojo Park or Space 34, where live music, good vibes, and dancing await!",
        "Overnight stay in Thimphu. (Meal Plan: MAP)",
      ],
    },
    {
      day: 3,
      title: 'Day Trip to Punakha – Adventure & Legends',
      description: [
        "Today, grab your day bag, put on your best explorer mindset, and set off for a full-day adventure to Punakha.",
        "Exciting Stops on the Way: Dochula Pass (3,988m) – A jaw-dropping viewpoint featuring 108 chortens. You'll probably feel on top of the world—because you kind of are. Chimi Lhakhang (Fertility Temple) – Dedicated to Lama Drukpa Kuenley, also known as the Divine Madman (yes, really). If you see… ahem unique fertility-related symbols here, just go with it. Punakha Dzong – This fortress is so majestic it looks straight out of a fantasy novel. If you're visiting during the Punakha Festival (Tsechu), prepare for an explosion of colors, mask dances, and celebrations! Suspension Bridge – Walk across this prayer-flag-covered marvel, and if you don't take a dramatic photo here, did you even go to Bhutan?",
        "Optional Thrill: River Rafting! Mo Chhu River Rafting – A 10 km stretch featuring 10 rapids! The ride lasts about an hour, but the stories? Those last a lifetime. (Direct pay basis.)",
        "Return to Thimphu in the evening for a well-earned rest. (Meal Plan: MAP)",
      ],
    },
    {
      day: 4,
      title: 'Thimphu Sightseeing & The Magical Road to Paro',
      description: [
        "Time to explore Thimphu before heading to Paro for the night!",
        "Thimphu's Must-See Gems: Buddha Dordenma – This gargantuan Buddha statue watches over the city, bringing peace, wisdom, and excellent photo ops. Takin Preservation Centre – Meet Bhutan's national animal, the Takin! It looks like a cross between a cow and a goat… and yes, it's real. Simply Bhutan Museum – A fun interactive museum where you can shoot a bow & arrow, dance in Bhutanese attire, and try local wine (Aara). National Memorial Chorten – A sacred site where locals circumambulate for blessings.",
        "Evening Enchantment in Paro: Rinpung Dzong at Night – Watch this fortress light up like a scene from a fairytale. Dress in traditional Bhutanese attire and take some epic photos.",
        "Overnight stay in Paro. (Meal Plan: MAP)",
      ],
    },
    {
      day: 5,
      title: "The Legendary Tiger's Nest Hike",
      description: [
        "Wake up early, fuel up with breakfast, and mentally prepare for the most iconic hike of your life.",
        "Hike to Taktsang Monastery (Tiger's Nest): A 3,120m-high monastery perched on a cliff. How did they build it? Nobody really knows. The hike takes around 5 hours round-trip, with stunning forest trails, breathtaking views, and plenty of \"Why did I sign up for this?\" moments. But once you reach the top? PURE MAGIC.",
        "Post-Hike Relaxation: Traditional Hot Stone Bath (Direct pay basis.) – A soothing, mineral-rich soak in heated river stones. You'll feel like a new person. Wander through Paro Market or just chill at your hotel.",
        "Overnight stay in Paro. (Meal Plan: MAP)",
      ],
    },
    {
      day: 6,
      title: 'Return to Phuentsholing – The Scenic Farewell Drive',
      description: [
        "After breakfast, start your journey back to Phuentsholing, stopping at a few gems along the way.",
        "Road Trip Highlights: Paro Market – Pick up handicrafts, souvenirs, and last-minute gifts. Paro Airport Viewpoint – The only international airport in Bhutan, surrounded by breathtaking mountain views. Iron Bridge (Tamchog Zam) – A historic chain-link bridge with stunning photo opportunities.",
        "Back in Phuentsholing, enjoy some last-minute shopping before one final night in Bhutan. (Meal Plan: MAP)",
      ],
    },
    {
      day: 7,
      title: 'Goodbye, Bhutan!',
      description: [
        "Enjoy a leisurely breakfast, check out, and bid farewell to this magical kingdom. Your driver will transfer you to Bagdogra Airport, where you'll board your flight—carrying a heart full of memories, a camera full of pictures, and possibly a bag full of Bhutanese snacks.",
        "Final Thought: If Bhutan taught you anything, it's that happiness isn't just a goal—it's a way of life. Until next time!",
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
};

// Required for static site generation with Next.js
export function generateStaticParams() {
  return [];
}

export default function PrivateSevenDaysPackagePage() {
  return <PackageDetails packageData={packageData} />;
}

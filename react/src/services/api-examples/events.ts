// Get the current date/time for startDate
const startDate = new Date();

// Generate a random number of hours to add, between 3 and 7 inclusive
const randomHoursToAdd = Math.floor(Math.random() * 5) + 3; // [3, 7]

// Create a new Date object for endDate by adding the random hours to the startDate
const endDate = new Date(
  startDate.getTime() + randomHoursToAdd * 60 * 60 * 1000
); // 1 hour = 60 * 60 * 1000 milliseconds

export const events = [
  {
    eventId: 1,
    img: "https://cdn.pixabay.com/photo/2017/08/03/21/48/drinks-2578446_1280.jpg",
    avgRating: 4.92,
    reviewCounts: 51,
    address: {
      country: "Sweden",
      street: "14 Hypoteksvägen",
      postalCode: "129 30",
      area: "Hägersten",
      city: "Stockholm",
    },
    title: "Sunday Brunch",
    minGuests: 10,
    maxGuests: 50,
    desc: "Lose yourself to the mellifluous rhythms of jazz as the sun sets. Cocktail attire recommended.",
    offers: [
      "Drinks included",
      "Dinner included",
      "City view",
      "Friendly staffs",
    ],
    startDate: new Date(),
    endDate: endDate,
    eventType: "Club",
    reviews: [
      {
        rating: 5,
        reviewId: 1,
        reviewDesc:
          "A great place to go for the weekend. The cottage is very small but well-designed. I was worried about if it is going to be fun, but it was amazing.",
        user: {
          img: "https://via.placeholder.com/50?text=S",
          name: "Sabina",
        },
        reviewDate: new Date(),
      },
      {
        rating: 5,
        reviewId: 2,
        reviewDesc: "Host is an awesome person, would go again!",
        user: {
          img: "https://via.placeholder.com/50?text=E",
          name: "Eric",
        },
        reviewDate: new Date(),
      },
    ],
    currency: "SEK",
    updatedAt: new Date(),
    createdAt: new Date(),
    price: 100,
    hostName: "John Doe",
    hostProfilePhoto: "https://via.placeholder.com/50?text=J",
    cancellationPolicy: "strict",
    eventRules: [
      "need to respect the environments",
      "no smoking indoor of party area",
    ],
    safety: ["Smoke alarm installed", "No carbon monoxide alarm"],
  },
  {
    eventId: 2,
    img: "https://cdn.pixabay.com/photo/2018/07/04/00/19/champagne-3515140_1280.jpg",
    avgRating: 4.5,
    reviewCounts: 25,
    address: {
      country: "Sweden",
      street: "22 Vine St",
      postalCode: "45678",
      area: "Placeholder",
      city: "Placeholder",
    },
    title: "Vintage Wine Gala",
    minGuests: 5,
    maxGuests: 40,
    desc: "For the wine aficionados! Come taste rare and exotic wines from around the globe.",
    offers: ["Free wine tasting", "Music and dance floor"],
    startDate: new Date(),
    endDate: endDate,
    eventType: "Outdoor",
    reviews: [
      {
        rating: 5,
        reviewId: 3,
        reviewDesc: "Amazing wine selection!",
        user: {
          img: "https://via.placeholder.com/50?text=L",
          name: "Lucy",
        },
        reviewDate: new Date(),
      },
    ],
    currency: "SEK",
    updatedAt: new Date(),
    createdAt: new Date(),
    price: 150,
    hostName: "Jane Smith",
    hostProfilePhoto: "https://via.placeholder.com/50?text=JS",
    cancellationPolicy: "moderate",
    eventRules: ["No outside drinks", "Respect the venue"],
    safety: ["Fire extinguisher", "First aid kit"],
  },
  {
    eventId: 3,
    img: "https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_1280.jpg",
    avgRating: 4.3,
    reviewCounts: 20,
    address: {
      country: "Sweden",
      street: "33 Tech Avenue",
      postalCode: "78901",
      area: "Placeholder",
      city: "Placeholder",
    },
    title: "Smooth Electronics & Conversations",
    minGuests: 8,
    maxGuests: 40,
    desc: "Mingle with fellow beer lovers, and let the conversations flow as smoothly as our on-tap selections.",
    offers: ["Free entry", "DJ set"],
    startDate: new Date(),
    endDate: endDate,
    eventType: "Club",
    reviews: [
      {
        rating: 5,
        reviewId: 4,
        reviewDesc: "Incredible vibe and atmosphere!",
        user: {
          img: "https://via.placeholder.com/50?text=R",
          name: "Riley",
        },
        reviewDate: new Date(),
      },
    ],
    currency: "SEK",
    updatedAt: new Date(),
    createdAt: new Date(),
    price: 90,
    hostName: "Mike Johnson",
    hostProfilePhoto: "https://via.placeholder.com/50?text=MJ",
    cancellationPolicy: "flexible",
    eventRules: ["No loud noises after 10pm", "Respect other guests"],
    safety: ["Security on-site", "Emergency exits"],
  },
  {
    eventId: 4,
    img: "https://cdn.pixabay.com/photo/2016/11/23/13/45/celebration-1852926_1280.jpg",
    avgRating: 4.7,
    reviewCounts: 35,
    address: {
      country: "Sweden",
      street: "44 Masquerade Way",
      postalCode: "10112",
      area: "Placeholder",
      city: "Placeholder",
    },
    title: "Masquerade Mystique",
    minGuests: 10,
    maxGuests: 60,
    desc: "A night of secrets and allure. Don your masks and let the mystery ensue.",
    offers: ["Mask provided", "Live performances"],
    startDate: new Date(),
    endDate: endDate,
    eventType: "Club",
    reviews: [
      {
        rating: 5,
        reviewId: 5,
        reviewDesc: "A magical night I won't forget.",
        user: {
          img: "https://via.placeholder.com/50?text=T",
          name: "Tom",
        },
        reviewDate: new Date(),
      },
    ],
    currency: "SEK",
    updatedAt: new Date(),
    createdAt: new Date(),
    price: 120,
    hostName: "Emily Brown",
    hostProfilePhoto: "https://via.placeholder.com/50?text=EB",
    cancellationPolicy: "strict",
    eventRules: ["Mask required", "No outside drinks"],
    safety: ["Staff trained in first aid", "Well-lit pathways"],
  },
  {
    eventId: 5,
    img: "https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_1280.jpg",
    avgRating: 4.6,
    reviewCounts: 45,
    address: {
      country: "Sweden",
      street: "55 Art Lane",
      postalCode: "12345",
      area: "Placeholder",
      city: "Placeholder",
    },
    title: "Art & Aperitifs",
    minGuests: 7,
    maxGuests: 30,
    desc: "For the love of art and wine. Explore handpicked art exhibits while sipping on curated cocktails.",
    offers: ["Complimentary snacks", "Art pieces for sale"],
    startDate: new Date(),
    endDate: endDate,
    eventType: "Club",
    reviews: [
      {
        rating: 5,
        reviewId: 6,
        reviewDesc: "Loved the art! Such a unique event.",
        user: {
          img: "https://via.placeholder.com/50?text=W",
          name: "Wendy",
        },
        reviewDate: new Date(),
      },
    ],
    currency: "SEK",
    updatedAt: new Date(),
    createdAt: new Date(),
    price: 80,
    hostName: "Chris White",
    hostProfilePhoto: "https://via.placeholder.com/50?text=CW",
    cancellationPolicy: "moderate",
    eventRules: [
      "Don't touch the artwork",
      "Keep your drinks away from exhibits",
    ],
    safety: ["Surveillance cameras", "Security personnel"],
  },
  {
    eventId: 6,
    img: "https://cdn.pixabay.com/photo/2019/12/18/04/11/dj-4702977_1280.jpg",
    avgRating: 4.9,
    reviewCounts: 60,
    address: {
      country: "Sweden",
      street: "66 Beat Street",
      postalCode: "67890",
      area: "Placeholder",
      city: "Placeholder",
    },
    title: "Electro Nights",
    minGuests: 10,
    maxGuests: 100,
    desc: "Feel the beat drop and let the electronic vibes take over. Perfect for EDM enthusiasts.",
    offers: ["Free entry before 9pm", "VIP tables available"],
    startDate: new Date(),
    endDate: endDate,
    eventType: "Club",
    reviews: [
      {
        rating: 5,
        reviewId: 7,
        reviewDesc: "Best party I've been to this year!",
        user: {
          img: "https://via.placeholder.com/50?text=D",
          name: "Danny",
        },
        reviewDate: new Date(),
      },
    ],
    currency: "SEK",
    updatedAt: new Date(),
    createdAt: new Date(),
    price: 170,
    hostName: "Ashley Black",
    hostProfilePhoto: "https://via.placeholder.com/50?text=AB",
    cancellationPolicy: "strict",
    eventRules: ["No aggressive behavior", "Age limit: 18+"],
    safety: ["On-site medical staff", "Security checkpoints"],
  },
  {
    eventId: 7,
    img: "https://via.placeholder.com/150?text=Party+7",
    avgRating: 4.2,
    reviewCounts: 22,
    address: {
      country: "Sweden",
      street: "77 Beach Blvd",
      postalCode: "11223",
      area: "Placeholder",
      city: "Placeholder",
    },
    title: "Tropical Beach Bash",
    minGuests: 15,
    maxGuests: 200,
    desc: "Bring out the beachwear! Groove to tropical tunes and sip on exotic tiki cocktails.",
    offers: ["Beachfront location", "Specialty cocktails"],
    startDate: new Date(),
    endDate: endDate,
    eventType: "Club",
    reviews: [
      {
        rating: 5,
        reviewId: 8,
        reviewDesc: "A beach party to remember!",
        user: {
          img: "https://via.placeholder.com/50?text=N",
          name: "Nina",
        },
        reviewDate: new Date(),
      },
    ],
    currency: "SEK",
    updatedAt: new Date(),
    createdAt: new Date(),
    price: 110,
    hostName: "Matthew Green",
    hostProfilePhoto: "https://via.placeholder.com/50?text=MG",
    cancellationPolicy: "flexible",
    eventRules: ["Swim at your own risk", "No outside drinks"],
    safety: ["Life guards on duty", "First aid available"],
  },
];
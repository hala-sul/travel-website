export const tripsData = [
  // === الرحلات السابقة ===
  {
    id: 1,
    title: "Paris Adventure",
    description: "Experience the romance of Paris with Eiffel Tower and Louvre Museum visits. Enjoy croissants, art, and the beautiful Seine river cruise.",
    type: "air",
    price: 899,
    duration: 5,
    seats: 20,
    places: ["Eiffel Tower", "Louvre Museum", "Notre Dame", "Champs-Élysées"],
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
      "https://images.unsplash.com/photo-1511739001486-6bfe0ce38fdb?w=800",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800"
    ],
    comments: [
      { id: 101, user: "Sarah M.", text: "Absolutely amazing! The Eiffel Tower at night was breathtaking! ✨", date: "2024-01-15", rating: 5 },
      { id: 102, user: "John D.", text: "Best trip ever! The food, the culture, everything was perfect.", date: "2024-01-10", rating: 5 },
      { id: 103, user: "Emma W.", text: "The Louvre was incredible. Would definitely recommend!", date: "2024-01-05", rating: 4 }
    ]
  },
  {
    id: 2,
    title: "Mediterranean Cruise",
    description: "Luxury cruise across the beautiful Mediterranean Sea. Visit Greece, Italy, and Spain in one amazing journey.",
    type: "sea",
    price: 1499,
    duration: 7,
    seats: 50,
    places: ["Santorini", "Mykonos", "Amalfi Coast", "Barcelona"],
    images: [
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1200",
      "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=800",
      "https://images.unsplash.com/photo-1551244072-5e6c75e8d5d5?w=800",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800"
    ],
    comments: [
      { id: 201, user: "Mike R.", text: "The sunset in Santorini was magical! 🌅", date: "2024-01-12", rating: 5 },
      { id: 202, user: "Lisa K.", text: "Amazing cruise, great food, wonderful staff!", date: "2024-01-08", rating: 5 }
    ]
  },
  {
    id: 3,
    title: "Swiss Alps Expedition",
    description: "Hiking and skiing adventure in the magnificent Swiss Alps. Breathtaking views and pure mountain air.",
    type: "land",
    price: 1299,
    duration: 6,
    seats: 15,
    places: ["Jungfraujoch", "Matterhorn", "Interlaken", "Grindelwald"],
    images: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a6?w=1200",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?w=800"
    ],
    comments: [
      { id: 301, user: "David L.", text: "The views are out of this world! Best hiking experience ever! 🏔️", date: "2024-01-14", rating: 5 },
      { id: 302, user: "Anna S.", text: "Perfect for nature lovers. So peaceful and beautiful.", date: "2024-01-09", rating: 4 }
    ]
  },
  {
    id: 4,
    title: "Tokyo Discovery",
    description: "Explore the vibrant culture and technology of Tokyo. From ancient temples to futuristic skyscrapers.",
    type: "air",
    price: 1099,
    duration: 5,
    seats: 25,
    places: ["Shibuya", "Shinjuku", "Asakusa", "Tokyo Tower"],
    images: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800"
    ],
    comments: [
      { id: 401, user: "Kenji T.", text: "Tokyo exceeded all expectations! The food is incredible! 🍜", date: "2024-01-13", rating: 5 },
      { id: 402, user: "Maria G.", text: "Amazing blend of traditional and modern. Loved every moment!", date: "2024-01-07", rating: 5 }
    ]
  },
  {
    id: 5,
    title: "Caribbean Paradise",
    description: "Relax on pristine beaches and crystal clear waters. Perfect for families and couples seeking sun and fun.",
    type: "sea",
    price: 1599,
    duration: 8,
    seats: 40,
    places: ["Bahamas", "Jamaica", "Cuba", "Dominican Republic"],
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200",
      "https://images.unsplash.com/photo-1540202404-5f9fca6b1f1d?w=800",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800"
    ],
    comments: [
      { id: 501, user: "Tom B.", text: "Best beach vacation ever! Crystal clear water! 🏖️", date: "2024-01-11", rating: 5 },
      { id: 502, user: "Julie P.", text: "Perfect relaxation. The staff was amazing!", date: "2024-01-06", rating: 4 }
    ]
  },
  {
    id: 6,
    title: "African Safari",
    description: "Witness amazing wildlife in their natural habitat. Lions, elephants, giraffes and more!",
    type: "land",
    price: 1899,
    duration: 7,
    seats: 12,
    places: ["Serengeti", "Masai Mara", "Kilimanjaro", "Zanzibar"],
    images: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200",
      "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=800",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01ec9?w=800",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800"
    ],
    comments: [
      { id: 601, user: "James W.", text: "Saw the Big Five! Unforgettable experience! 🦁", date: "2024-01-14", rating: 5 },
      { id: 602, user: "Patricia N.", text: "Life-changing trip. The guides were excellent.", date: "2024-01-08", rating: 5 }
    ]
  },

  // === رحلات جديدة ===
  {
    id: 7,
    title: "New York Explorer",
    description: "The city that never sleeps! Times Square, Central Park, and Broadway shows.",
    type: "air",
    price: 999,
    duration: 4,
    seats: 30,
    places: ["Times Square", "Central Park", "Statue of Liberty", "Brooklyn Bridge"],
    images: [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200",
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800",
      "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=800",
      "https://images.unsplash.com/photo-1534352956036-cd5f1d7eefa3?w=800"
    ],
    comments: [
      { id: 701, user: "Alex K.", text: "NYC is amazing! So much energy! 🗽", date: "2024-01-10", rating: 5 },
      { id: 702, user: "Sophie L.", text: "Broadway shows are a must-see!", date: "2024-01-05", rating: 5 },
      { id: 703, user: "Michael B.", text: "Central Park in autumn is beautiful.", date: "2024-01-01", rating: 4 }
    ]
  },
  {
    id: 8,
    title: "Bali Retreat",
    description: "Spiritual retreat in the Island of Gods. Rice terraces, temples, and beaches.",
    type: "land",
    price: 799,
    duration: 6,
    seats: 20,
    places: ["Ubud", "Tanah Lot", "Kuta Beach", "Mount Batur"],
    images: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=800",
      "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800"
    ],
    comments: [
      { id: 801, user: "Linda Y.", text: "Most peaceful place on earth! 🧘‍♀️", date: "2024-01-12", rating: 5 },
      { id: 802, user: "Robert C.", text: "The rice terraces are stunning!", date: "2024-01-07", rating: 5 }
    ]
  },
  {
    id: 9,
    title: "Dubai Luxury",
    description: "Experience the epitome of luxury in Dubai. Burj Khalifa, Palm Jumeirah, and desert safaris.",
    type: "air",
    price: 2199,
    duration: 5,
    seats: 25,
    places: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall", "Desert Safari"],
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800",
      "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800"
    ],
    comments: [
      { id: 901, user: "Omar H.", text: "Absolutely luxurious! Burj Khalifa is incredible! 🏙️", date: "2024-01-11", rating: 5 },
      { id: 902, user: "Jennifer M.", text: "Desert safari was the highlight!", date: "2024-01-06", rating: 5 }
    ]
  },
  {
    id: 10,
    title: "Iceland Adventure",
    description: "Land of fire and ice. Northern lights, glaciers, and hot springs.",
    type: "land",
    price: 1699,
    duration: 6,
    seats: 18,
    places: ["Blue Lagoon", "Golden Circle", "Jokulsarlon", "Reykjavik"],
    images: [
      "https://images.unsplash.com/photo-1504196606672-30b4c6ef8d67?w=1200",
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800"
    ],
    comments: [
      { id: 1001, user: "Chris P.", text: "Northern lights were magical! 🌌", date: "2024-01-13", rating: 5 },
      { id: 1002, user: "Amy R.", text: "Blue Lagoon is a must-visit!", date: "2024-01-08", rating: 5 }
    ]
  },

  // === رحلات جديدة إضافية ===
  {
    id: 11,
    title: "Rome Historical Tour",
    description: "Walk through ancient history in the Eternal City. Colosseum, Vatican, and Roman Forum.",
    type: "land",
    price: 849,
    duration: 4,
    seats: 25,
    places: ["Colosseum", "Vatican City", "Trevi Fountain", "Pantheon"],
    images: [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200",
      "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800",
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800"
    ],
    comments: [
      { id: 1101, user: "Marco P.", text: "History comes alive in Rome! 🏛️", date: "2024-01-14", rating: 5 },
      { id: 1102, user: "Sophia R.", text: "The Colosseum is breathtaking!", date: "2024-01-09", rating: 5 },
      { id: 1103, user: "Thomas L.", text: "Best pasta I've ever had!", date: "2024-01-04", rating: 4 }
    ]
  },
  {
    id: 12,
    title: "Bangkok Street Food Tour",
    description: "A culinary adventure through Thailand's vibrant capital. Taste exotic fruits and authentic Thai dishes.",
    type: "air",
    price: 699,
    duration: 4,
    seats: 20,
    places: ["Chinatown", "Khao San Road", "Floating Market", "Grand Palace"],
    images: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200",
      "https://images.unsplash.com/photo-1575268393040-3af15fc8a3dd?w=800",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
      "https://images.unsplash.com/photo-1508009603884-50cf7c579365?w=800"
    ],
    comments: [
      { id: 1201, user: "Lisa T.", text: "Best street food ever! So flavorful! 🍜", date: "2024-01-12", rating: 5 },
      { id: 1202, user: "David C.", text: "Mango sticky rice is life-changing!", date: "2024-01-07", rating: 5 }
    ]
  },
  {
    id: 13,
    title: "Machu Picchu Trek",
    description: "Hike the ancient Inca trail to the lost city of Machu Picchu. A once-in-a-lifetime adventure.",
    type: "land",
    price: 1499,
    duration: 5,
    seats: 12,
    places: ["Machu Picchu", "Cusco", "Sacred Valley", "Rainbow Mountain"],
    images: [
      "https://images.unsplash.com/photo-1526392060635-2902103a96fd?w=1200",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800",
      "https://images.unsplash.com/photo-1577760258779-e787a1733016?w=800",
      "https://images.unsplash.com/photo-1553406830-ef2513450b14?w=800"
    ],
    comments: [
      { id: 1301, user: "Carlos M.", text: "Incredible experience! Worth every step! 🏔️", date: "2024-01-10", rating: 5 },
      { id: 1302, user: "Elena W.", text: "The views are beyond words.", date: "2024-01-05", rating: 5 }
    ]
  },
  {
    id: 14,
    title: "Greek Islands Hopping",
    description: "Island hop through the most beautiful Greek islands. White buildings, blue domes, and crystal waters.",
    type: "sea",
    price: 1299,
    duration: 7,
    seats: 30,
    places: ["Santorini", "Mykonos", "Crete", "Rhodes"],
    images: [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
      "https://images.unsplash.com/photo-1519294036561-c45c19a95e52?w=800",
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800"
    ],
    comments: [
      { id: 1401, user: "Nikos A.", text: "Santorini sunset is magical! 💙", date: "2024-01-11", rating: 5 },
      { id: 1402, user: "Maria K.", text: "Beautiful islands, amazing food!", date: "2024-01-06", rating: 5 }
    ]
  },
  {
    id: 15,
    title: "Costa Rica Adventure",
    description: "Explore rainforests, volcanoes, and beaches in this eco-paradise. Ziplining and wildlife watching.",
    type: "land",
    price: 1399,
    duration: 6,
    seats: 18,
    places: ["Monteverde", "Arenal Volcano", "Manuel Antonio", "Tamarindo"],
    images: [
      "https://images.unsplash.com/photo-1585116528780-5b9d5f1c63a1?w=1200",
      "https://images.unsplash.com/photo-1538005387652-718e33fb4614?w=800",
      "https://images.unsplash.com/photo-1516466723877-e4ec1d363c58?w=800",
      "https://images.unsplash.com/photo-1505548122913-b2024db3f71b?w=800"
    ],
    comments: [
      { id: 1501, user: "Ryan B.", text: "So much wildlife! Saw sloths and monkeys! 🦥", date: "2024-01-09", rating: 5 },
      { id: 1502, user: "Jessica F.", text: "Ziplining was amazing! Pura vida!", date: "2024-01-04", rating: 5 }
    ]
  },
  {
    id: 16,
    title: "Cairo & Pyramids",
    description: "Discover ancient Egyptian wonders. Pyramids of Giza, Sphinx, and Nile River cruise.",
    type: "air",
    price: 1199,
    duration: 5,
    seats: 22,
    places: ["Pyramids of Giza", "Sphinx", "Egyptian Museum", "Nile River"],
    images: [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=1200",
      "https://images.unsplash.com/photo-1535546183201-1e5c36c9f380?w=800",
      "https://images.unsplash.com/photo-1544444792-e481d9e50e58?w=800",
      "https://images.unsplash.com/photo-1567262908304-103ced572f9b?w=800"
    ],
    comments: [
      { id: 1601, user: "Ahmed K.", text: "The pyramids are unbelievable! 🐪", date: "2024-01-13", rating: 5 },
      { id: 1602, user: "Sara L.", text: "Egyptian Museum is incredible!", date: "2024-01-08", rating: 5 }
    ]
  },
  {
    id: 17,
    title: "Amalfi Coast Tour",
    description: "Drive along one of the world's most beautiful coastlines. Colorful villages and Mediterranean views.",
    type: "land",
    price: 1099,
    duration: 5,
    seats: 16,
    places: ["Positano", "Amalfi", "Ravello", "Capri"],
    images: [
      "https://images.unsplash.com/photo-1505775561242-727b7fba20f0?w=1200",
      "https://images.unsplash.com/photo-1516319858552-7e37db6e956e?w=800",
      "https://images.unsplash.com/photo-1520342868574-1fa3805cf6b9?w=800",
      "https://images.unsplash.com/photo-1544985361-e2b3a0c6a7f5?w=800"
    ],
    comments: [
      { id: 1701, user: "Giulia R.", text: "Positano is a dream! 🌊", date: "2024-01-10", rating: 5 },
      { id: 1702, user: "Mark T.", text: "Best pasta with lemon!", date: "2024-01-05", rating: 4 }
    ]
  },
  {
    id: 18,
    title: "South Africa Safari",
    description: "Experience the best of South Africa. Cape Town, wine lands, and incredible safari.",
    type: "land",
    price: 1999,
    duration: 8,
    seats: 14,
    places: ["Cape Town", "Kruger Park", "Table Mountain", "Stellenbosch"],
    images: [
      "https://images.unsplash.com/photo-1534951009808-766178b47d4f?w=1200",
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800",
      "https://images.unsplash.com/photo-1586500036706-acf3a5f4ceaa?w=800",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800"
    ],
    comments: [
      { id: 1801, user: "Daniel B.", text: "Cape Town is beautiful!", date: "2024-01-12", rating: 5 },
      { id: 1802, user: "Rachel G.", text: "Best safari experience!", date: "2024-01-07", rating: 5 }
    ]
  },
  {
    id: 19,
    title: "Northern Lights Norway",
    description: "Chase the magical Aurora Borealis in the Arctic Circle. Tromsø and fjord cruises.",
    type: "air",
    price: 1799,
    duration: 5,
    seats: 20,
    places: ["Tromsø", "Alta", "North Cape", "Fjords"],
    images: [
      "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=1200",
      "https://images.unsplash.com/photo-1516072140622-6c1a3ea5ac69?w=800",
      "https://images.unsplash.com/photo-1556414428-9b2bd1b1c66b?w=800",
      "https://images.unsplash.com/photo-1557909906-2414ab8b6ab1?w=800"
    ],
    comments: [
      { id: 1901, user: "Emma N.", text: "Northern lights exceeded all expectations! 🌠", date: "2024-01-11", rating: 5 },
      { id: 1902, user: "Liam S.", text: "Magical experience of a lifetime!", date: "2024-01-06", rating: 5 }
    ]
  },
  {
    id: 20,
    title: "Vietnam Adventure",
    description: "From Hanoi to Ho Chi Minh City. Halong Bay, rice terraces, and delicious pho.",
    type: "land",
    price: 899,
    duration: 8,
    seats: 24,
    places: ["Halong Bay", "Hanoi", "Hoi An", "Mekong Delta"],
    images: [
      "https://images.unsplash.com/photo-1528127269322-539801ae1a5d?w=1200",
      "https://images.unsplash.com/photo-1558394323-5b6e98107f87?w=800",
      "https://images.unsplash.com/photo-1518617998505-377e8c8a8572?w=800",
      "https://images.unsplash.com/photo-1518941622321-2a9d41c32a5a?w=800"
    ],
    comments: [
      { id: 2001, user: "Minh N.", text: "Halong Bay is paradise! 🛶", date: "2024-01-09", rating: 5 },
      { id: 2002, user: "Olivia P.", text: "Best pho in the world!", date: "2024-01-04", rating: 5 }
    ]
  }
];
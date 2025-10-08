export interface Tour {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  groupSize: string;
  price: string;
  itinerary: {
    day: number;
    locations: {
      name: string;
      description: string;
      image: string;
    }[];
  }[];
  imageSeed: string;
  featured?: boolean;
  tags?: string[];
  filters?: string[];
  seasonality?: string;
  activityLevel?: string;
  accessibility?: string;
  whatsIncluded?: string[];
  whatsNotIncluded?: string[];
  yourDayYourWay?: string;
}

export const tours: Tour[] = [
  {
    id: "fuji-day-trip",
    title: "Day Trip to Fuji",
    tagline: "Experience Japan's iconic mountain with a local perspective",
    duration: "1 Day",
    groupSize: "2-9 pax",
    price: "From $300",
    featured: true,
    imageSeed: "fuji-mountain-cherry",
    tags: ["First-timer", "Nature", "Family-friendly"],
    filters: ["spring", "autumn", "near-tokyo", "day-trip", "family", "budget", "nature"],
    seasonality: "Year-round (best Mar-May, Sep-Nov)",
    activityLevel: "Easy to Moderate",
    accessibility: "Mostly accessible with some walking",
    yourDayYourWay: "This itinerary is a starting point. See a shop you want to explore? Want more time at a viewpoint? Tell us on the day—we'll flex the plan to your interests.",
    whatsIncluded: [
      "Private vehicle with driver",
      "Expert guide for the full day",
      "Admission to selected attractions",
      "Bottled water"
    ],
    whatsNotIncluded: [
      "Meals (We'll recommend great local spots)",
      "Personal expenses",
      "Optional shopping stops"
    ],
    itinerary: [
      {
        day: 1,
        locations: [
          {
            name: "Chureito Pagoda",
            description: "We'll leave the bustle of Tokyo and head for Yamanashi. We'll take you to the classic Chureito Pagoda viewpoint—we'll time it right to skip the crowds.",
            image: "/placeholder.svg"
          },
          {
            name: "Houtou Noodle Lunch",
            description: "For lunch, We'll introduce you to our favorite houtou noodle spot that warms you right up.",
            image: "/placeholder.svg"
          },
          {
            name: "Five Lakes",
            description: "At the Five Lakes, We'll share the story behind the view on the ¥1,000 bill. Want to stop at Shiraito Falls or check out a local farm stand? Just let us know—it's your day.",
            image: "/placeholder.svg"
          }
        ]
      }
    ]
  },
  {
    id: "kansai",
    title: "The Heart of the Country: Kansai",
    tagline: "Culture, temples, and hidden corners of Kyoto and Osaka",
    duration: "5 Days",
    groupSize: "4-9 pax",
    price: "From $1,200",
    featured: true,
    imageSeed: "kyoto-temple",
    tags: ["First-timer", "Food & Craft", "Culture"],
    filters: ["spring", "autumn", "multi-day", "culture", "foodie", "family"],
    seasonality: "Year-round (especially beautiful in spring & fall)",
    activityLevel: "Moderate",
    accessibility: "Some temple stairs; alternatives available",
    yourDayYourWay: "This itinerary is a starting point. If something catches your eye—an artisan shop, a scenic path, a café—we'll adjust on the spot. The day is yours.",
    whatsIncluded: [
      "5 days with expert guide",
      "Private vehicle throughout",
      "Admission to selected attractions",
      "Local recommendations for dining"
    ],
    whatsNotIncluded: [
      "Accommodation",
      "Meals",
      "Personal expenses",
      "Optional activities"
    ],
    itinerary: [
      {
        day: 1,
        locations: [
          {
            name: "Osaka Castle",
            description: "We'll meet you in Osaka and we'll explore the city's energy together. We can visit Osaka Castle or head straight to Kuromon Market where We'll introduce you to the best stall vendors.",
            image: "/placeholder.svg"
          },
          {
            name: "Dotonbori",
            description: "At Dotonbori, We'll help you get that perfect Glico Man photo without the crowds. Hungry? We know exactly where to find the city's best takoyaki and okonomiyaki—this is the kitchen of Japan, after all.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 2,
        locations: [
          {
            name: "Nara Deer Park",
            description: "Set off from Osaka, and see the historic former capital of Nara. Home of the famous Nara Deer Park where you can feed the local fauna, eager to greet tourists.",
            image: "/placeholder.svg"
          },
          {
            name: "Todaiji, Kofuku-ji, Horyu-ji",
            description: "See some of the oldest standing buildings in Japan like Todaiji, Kofuku-ji, Horyu-ji, and immerse yourself spiritually while appreciating the traditional architecture rich in history.",
            image: "/placeholder.svg"
          },
          {
            name: "Shinsekai",
            description: "Return to Osaka in the evening, to see less-explored attractions like the Minoo Falls or Nipponbashi, then cap off the evening enjoying more of Osaka's famous delights under the bright billboards in Shinsekai.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 3,
        locations: [
          {
            name: "Fushimi Inari Shrine",
            description: "Set off from Osaka to Kyoto, Japan's cultural capital. See the world-famous Fushimi Inari Shrine, Kiyomizu Temple, the Geisha district of Gion, and some lesser-known but nevertheless remarkable locations like Uji, renowned for their high quality green tea and the Nintendo Museum.",
            image: "/placeholder.svg"
          },
          {
            name: "Kamo River",
            description: "Enjoy the calming breeze at Kamo River as the evening falls, then discover Kyoto's unexpected nightlife at Karasuma and Nishiki Market. Enjoy the city's refined dining offerings at Pontocho or Demachiyanagi.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 4,
        locations: [
          {
            name: "Arashiyama Bamboo Grove",
            description: "Continue your exploration of Kyoto. See Arashiyama Bamboo Grove, the Golden Pavilion, Nijo Castle, or let your guide take you to some of the city's secret attractions less crowded with tourists, such as Kokedera, Toji Temple, Toei Kyoto Studio Park, Railway Museum or the Former Imperial Grounds.",
            image: "/placeholder.svg"
          },
          {
            name: "Amanohashidate",
            description: "Alternatively, stretch your legs and venture further north to see one the vaunted '3 Great Views of Japan', Amanohashidate, and take in Kyoto's unique countryside seaside landscape at Ine, including a boat tour.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 5,
        locations: [
          {
            name: "Lake Biwa",
            description: "Wrap things up with something memorable, and venture further outwards. Choose to take in Japan's natural beauty at Lake Biwa in nearby Shiga prefecture, immerse in the storied cityscape of Kobe and enjoy its world-famous wagyu dishes, or explore the hidden gems in the mountains such as Yoshino, famous for cherry blossoms, or Koyasan, a sacred town steeped in mystery and religion.",
            image: "/placeholder.svg"
          }
        ]
      }
    ]
  },
  {
    id: "kyushu",
    title: "Hidden Wonders of Kyushu",
    tagline: "The raw beauty of southern Japan's natural features",
    duration: "5 Days",
    groupSize: "4-9 pax",
    price: "$1000-$1600/pax",
    imageSeed: "kyushu-nature",
    filters: ["summer", "autumn", "multi-day", "nature", "onsen", "foodie"],
    itinerary: [
      {
        day: 1,
        locations: [
          {
            name: "Fukuoka City",
            description: "Basing in Fukuoka, start off by exploring the city itself. Enjoy the world-renowned Hakata-style tonkotsu ramen, then tour the myriad sights such as Ohori Park, Uminonakamichi Seaside Park, Futamigaura Couple Stones, or the 1:1 scale Gundam statue.",
            image: "/placeholder.svg"
          },
          {
            name: "Nakasu District",
            description: "Enjoy some retail therapy at the massive Canal City mall, Tenjin district, or the Hakata station area. At night, tuck into some hearty street cart food at one of Fukuoka's popular 'yatai' along the Naka river, at the heart of the city's nightlife, Nakasu district.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 2,
        locations: [
          {
            name: "Saga Prefecture",
            description: "Set off from Fukuoka and venture westwards, to the hidden gem of Saga prefecture. Take in Japan's countryside places of interest like Karatsu Castle, the various terraced rice fields, purchase unique porcelain wares at Imari or sample high-quality sencha and enjoy relaxing hot spring baths at Ureshino, then arrive at Nagasaki city at night.",
            image: "/placeholder.svg"
          },
          {
            name: "Mt Inasa",
            description: "View one of Japan's Three Best Night Views from the top of Mt Inasa, and enjoy the city's famous chanpon noodles.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 3,
        locations: [
          {
            name: "Nagasaki City",
            description: "Spend the day touring Nagasaki's attractions and learn more of Nagasaki's special history, like the former overseas trading post of Dejima, Glover Garden, Oura Catholic Church, Atomic Bomb Peace Park, Chinatown, or even take a boat tour to Battleship Island.",
            image: "/placeholder.svg"
          },
          {
            name: "Unzen",
            description: "Or, head east to Nagasaki's favourite hot spring resort of Unzen, and see Shimabara Castle or go dolphin viewing off the coast of Minamishimabara. In the evening, take the ferry service across the Ariake Sea to arrive in the modern city of Kumamoto.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 4,
        locations: [
          {
            name: "Aso Caldera",
            description: "Leave the city of Kumamoto to explore the rest of the prefecture. See the expansive vistas and unforgettable sights of the Aso Caldera, in places such as Kusasenrigahama and Daikanbo Lookout, and sample its rich bounty such as beef, dairy, rice, and produce.",
            image: "/placeholder.svg"
          },
          {
            name: "Takachiho Gorge",
            description: "Get up close and personal with the active volcano at the heart of Mt Aso by helicopter tour. Try the fresh spring water at Shirakawa Spring, venture through the spiritual grounds of Kumanoimasu Shrine shrouded in lush cedar forest, then discover the beauty of Takachiho Gorge.",
            image: "/placeholder.svg"
          },
          {
            name: "Beppu",
            description: "Cross into Oita prefecture in the evening and reach Beppu, Japan's most famous onsen town, and enjoy a relaxing stay at one of their many hot spring resorts.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 5,
        locations: [
          {
            name: "Hells of Beppu",
            description: "See the unusual sights at the Hells of Beppu, an eclectic collection of super-hot natural springs turned into unique tourist attractions. Sample Oita prefecture's signature cuisine like dangojiru stew, then head northwards back into Fukuoka.",
            image: "/placeholder.svg"
          },
          {
            name: "Moji Port",
            description: "At Moji port city beside the picturesque strait of Shimonoseki, admire the western industrial-age architecture that defines the Meiji revolution and presents a unique perspective of Japan, while enjoying the delicious seafood of the region. Return to Fukuoka city at night for more good food and shopping.",
            image: "/placeholder.svg"
          }
        ]
      }
    ]
  },
  {
    id: "hokkaido-winter",
    title: "Hokkaido Winter Wonderland",
    tagline: "Snow festivals, hot springs, and magical winter landscapes",
    duration: "5 Days",
    groupSize: "4-9 pax",
    price: "From $1,350",
    featured: true,
    imageSeed: "hokkaido-snow",
    tags: ["Winter", "Nature", "Family-friendly"],
    filters: ["winter", "multi-day", "nature", "onsen", "family"],
    seasonality: "December to March (best Jan-Feb)",
    activityLevel: "Easy to Moderate",
    accessibility: "Winter conditions; warm clothing required",
    yourDayYourWay: "This itinerary is flexible. Want to spend more time soaking in hot springs? Prefer more time for photos in the snow? Just say the word—We'll make it happen.",
    whatsIncluded: [
      "5 days with expert guide",
      "Private vehicle with winter tires",
      "Admission to selected attractions",
      "Hot spring resort recommendations"
    ],
    whatsNotIncluded: [
      "Accommodation",
      "Meals",
      "Winter gear rental",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        locations: [
          {
            name: "Sapporo Snow Festival",
            description: "We'll meet you in Sapporo and we'll dive right into winter magic. We'll explore Odori Park and the Snow Festival sculptures—We'll show you the best photo spots and share stories behind the ice art.",
            image: "/placeholder.svg"
          },
          {
            name: "Mt Moiwa",
            description: "For lunch, We'll take you to our go-to spot for Hokkaido's famous soup curry. As evening falls, we'll ride the gondola up Mt Moiwa for the city lights—one of Japan's best night views, and we'll have it without the tour bus crowds.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 2,
        locations: [
          {
            name: "Hill of the Buddha",
            description: "Take a day trip out of Sapporo to an up-and-coming, undeniably interesting place of interest, the memorial garden Hill of the Buddha. Constructed by world-famous Japanese architect Tadao Ando, take some truly unique photos of replicas of Moai statues and Stonehenge, shrouded in snow.",
            image: "/placeholder.svg"
          },
          {
            name: "Lake Toya",
            description: "After that, venture forth into the deep countryside to see the picturesque nature views of Hokkaido, starting with the region's very own Mt Fuji, Mt Yotei, then the unique winterscape of Lake Toya.",
            image: "/placeholder.svg"
          },
          {
            name: "Jigokudani Valley",
            description: "As evening falls, head further south to see Jigokudani Valley in Noboribetsu, and warm up in one of their popular hot springs.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 3,
        locations: [
          {
            name: "Otaru Canal",
            description: "Visit the port town of Otaru by day. Feast on its proud seafood offerings, and be wowed by its many sights like Otaru Canal, Otaru Aquarium, and enjoy some light shopping in the Sakaimachi area.",
            image: "/placeholder.svg"
          },
          {
            name: "Nikka Distillery",
            description: "Whiskey enjoyers can opt to take a tour of the Nikka Distillery in nearby Yoichi. Enjoy the sunset seaside view from the top of Tenguyama, which can be reached by ropeway, then return to Sapporo at night for more shopping and good food at Susukino district or Mitsui Outlet Park.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 4,
        locations: [
          {
            name: "Furano and Biei",
            description: "Set off eastwards, to see the enchanting winter landscape of Furano and Biei, the mountain vistas of Tokachidake, tranquil river views at Sorachi River and Shirahige Waterfalls, and the cosy crafts market Ningle Terrace.",
            image: "/placeholder.svg"
          },
          {
            name: "Asahikawa Zoo",
            description: "Alternatively, see the famous penguin march at Asahikawa zoo. As night falls, check into a hotel or hot spring resort at Sounkyo, then check out the dazzling illumination displays and ice sculptures and carvings at the Suonkyo Ice Festival.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 5,
        locations: [
          {
            name: "Monbetsu Drift Ice",
            description: "Continue your journey east till you reach the coastline at Monbetsu, where you can ride a special icebreaker ship cruise to watch the drift ice flowing down from Russia, a truly unique sight to behold in the world.",
            image: "/placeholder.svg"
          },
          {
            name: "Lake Akan",
            description: "Try their delicious crab and shellfish cuisine, after which you can choose to arrive at the eastern city of Abashiri, home of the famous Abashiri Prison, or see more stunning nature views at Lake Akan and Lake Mashu, where you can also learn more about Hokkaido's unique Ainu culture at the Lake Akan Ainu Kotan. Conclude the trip by returning to Sapporo at night.",
            image: "/placeholder.svg"
          }
        ]
      }
    ]
  },
  {
    id: "chubu",
    title: "Off the Beaten Path: Chubu",
    tagline: "Discover a different side of Japan in the Chubu region",
    duration: "4 Days",
    groupSize: "4-9 pax",
    price: "$800-$1400/pax",
    imageSeed: "chubu-mountains",
    filters: ["spring", "autumn", "multi-day", "nature", "onsen"],
    itinerary: [
      {
        day: 1,
        locations: [
          {
            name: "Nagoya",
            description: "Begin in Nagoya, the fourth largest city in Japan and capital of Chubu. Check out Nagoya Castle, the upscale Sakae downtown area popular for its nightlife, and the fancy Osu shopping district frequented by subculture enthusiasts that also features the famous Osu Kannon Temple. Those interested could also walk through Japan's long history of rail transport at the Railway Museum. Sample the city's many specialties like chicken wings, kishimen, hitsumabushi, miso tonkatsu or miso nikomi udon.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 2,
        locations: [
          {
            name: "Shirakawa-go",
            description: "Venture northwards into lands less frequented by travelers, to Gifu prefecture. Surrounded in lush greenery and lined with gorgeous mountain ranges, immerse yourself in nature and take in the sights of Monet's Pond on the way to Shirakawa-go, the world-famous gassho-zukuri thatched straw roof village.",
            image: "/placeholder.svg"
          },
          {
            name: "Takayama",
            description: "Admire the historical exhibits and grand views, then travel to the humble cities of Furukawa and Takayama to walk through the old townscapes and preserved buildings. Try their delicious ramen, sake, and Hida wagyu beef, then enjoy a luxurious traditional hot spring resort stay in Gero at night.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 3,
        locations: [
          {
            name: "Shinhotaka Ropeway",
            description: "Set off from Gero and head westwards, towards Nagano prefecture. Check out the Hida Great Limestone Cave, then take the Shinhotaka Ropeway to the top of Mt Hotaka and take in the stunning elevated scenery of the Japanese alps.",
            image: "/placeholder.svg"
          },
          {
            name: "Matsumoto",
            description: "After crossing the prefectural border into Matsumoto city, you may choose to see Matsumoto Castle, or continue southwards to Suwa city and admire the evening view of Suwa Lake.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 4,
        locations: [
          {
            name: "Komagane",
            description: "Moving southwards, make a quick stop at Komagane city to see the beautiful Hoshakuzan Kozenji Temple, one of the oldest temples in Japan nestled amidst verdant cedar forest. Go up the Komagatake ropeway to Senjojiki Cirque for more breathtaking views of the Kiso mountains and central alps.",
            image: "/placeholder.svg"
          },
          {
            name: "Magome-juku",
            description: "Afterwards, venture to the historical post town of Magome-juku, and enjoy a short hike through the most popular and scenic portion of the old Nakasendo trail to the post town of Tsumago-juku. Cap off the trip with a return to Nagoya.",
            image: "/placeholder.svg"
          }
        ]
      }
    ]
  },
  {
    id: "tohoku-1",
    title: "Autumn Getaway in Tohoku (Part 1)",
    tagline: "Pleasant weather and unforgettable fall colours up north",
    duration: "4 Days",
    groupSize: "4-9 pax",
    price: "$800-$1400/pax",
    imageSeed: "tohoku-autumn",
    filters: ["autumn", "winter", "multi-day", "nature", "onsen", "culture"],
    itinerary: [
      {
        day: 1,
        locations: [
          {
            name: "Sendai",
            description: "Take the Shinkansen from Tokyo and arrive at Sendai. Sample the local delicacy of grilled beef tongue, see notable landmarks such as the massive Sendai Kannon statue and Rairai Gorge, admire the view of the city from Sendai Castle ruins, then take a sightseeing cruise around the Matsushima islands, vaunted as one of the three great views of Japan.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 2,
        locations: [
          {
            name: "Genbikei gorge",
            description: "Head north and cross into Iwate prefecture, stopping first at Genbikei gorge when you can experience the unique flying dango experience. After that, travel to the historic town of Hiraizumi, which gained prominence in the 11th century and was then poised to rival the grandeur of Kyoto, with its historical sites such as Bishamondo and Chusonji. Afterwards, take a pleasure barge down the lush Geibikei gorge. Spend the night at a grand traditional hot spring resort in Hanamaki.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 3,
        locations: [
          {
            name: "Oirase Gorge",
            description: "Continue northwards through Iwate, stopping for lunch briefly at Morioka, before entering Aomori prefecture at Towada Lake and Oirase Gorge, to see the beautiful natural scenery. Crossing the spectacular Hakkoda mountains, optionally going up the Hakkoda Ropeway for more grand mountaintop views, before coming into Aomori city by nightfall.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 4,
        locations: [
          {
            name: "Aomori",
            description: "Start the day off at Aomori's famous fish market for Nokkedon, before visiting the Nebuta Museum and feasting on the region's popular apple-based treats. Set off west to see the massive Kitakanegasawa giant gingko decked in yellow during autumn, then immerse in nature amidst the Twelve Lakes, a reclusive site that nevertheless boasts some of the best nature in Tohoku. Return to Aomori at night and take the Shinkansen back to Tokyo.",
            image: "/placeholder.svg"
          }
        ]
      }
    ]
  },
  {
    id: "tohoku-2",
    title: "Autumn Getaway in Tohoku (Part 2)",
    tagline: "Pleasant weather and unforgettable fall colours up north",
    duration: "5 Days",
    groupSize: "4-9 pax",
    price: "$1000-$1600/pax",
    imageSeed: "tohoku-mountains",
    filters: ["autumn", "winter", "multi-day", "nature", "culture", "onsen"],
    itinerary: [
      {
        day: 1,
        locations: [
          {
            name: "Ouchi-juku",
            description: "Take the Shinkansen from Tokyo to Shin-Shirakawa station. From there, venture into the countryside wilderness to To no Hetsuri, a popular spot for autumn colours. Head to Ouchi-juku in the afternoon to see the remarkably preserved thatched straw roof village. Before nightfall, check into a luxurious hot spring resort at Ashinomaki onsen to unwind and enjoy a kaiseki dinner offering many local specialties.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 2,
        locations: [
          {
            name: "Aizuwakatsu",
            description: "Enter the historic city of Aizuwakatsu, Fukushima's cultural capital, and see Tsurugajo Castle, Aizu Bukeyashiki, and try your hand at painting the local Akabekko craft. Then, take in more nature sights at Inawashiro Lake and the Goshikinuma Ponds. By night, travel northwards into Yamagata prefecture and stay in Yonezawa, being sure to try their Yonezawa wagyu cuisine.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 3,
        locations: [
          {
            name: "Yamadera",
            description: "Head to the Zao mountains and take the Zao Skycable up to Dokko Marsh. After that, drop by Yamadera, a culturally significant place of worship nestled amidst scenic mountains, then continue to Tsuruoka to immerse in the spiritual 'power spot' of Mt Haguro, where the famous five-storey pagoda of Dewasanzan stands in the middle of lush cedar forest. Be sure to also sample Tsuruoka's delicious seafood, mountain vegetables, shojin ryori vegan cuisine, and locally produced sake.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 4,
        locations: [
          {
            name: "Kakunodate",
            description: "Enter Akita prefecture, and walk through the beautifully preserved samurai district of Kakunodate. Take a stroll along Tazawa Lake to see Gozanoishi Shrine and the curious statue of Tatsuko, based on a local fairy tale. Enjoy the autumn sights on the drive through the mountainous region of Hachimantai, optionally taking the chance to dip in one of their numerous natural volcanic hot springs, and arrive at Odate by nightfall.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 5,
        locations: [
          {
            name: "Oga peninsula",
            description: "Start the day off viewing Akita's autumn colours in a unique way, on an Odate-Kosaka Railbike adventure. After that, head to Oga city, first for the Mt Kampu revolving lookout that offers panoramic vista views, then the Namahage museum to learn more about the area's unique culture and history. Take the time to explore the Oga peninsula's dramatic coastline scenery, with unusual sights such as the Godzilla Rock and King Kong Rock. Watch the sun set from the seaside, before proceeding to Akita city to take the Shinkansen back to Tokyo.",
            image: "/placeholder.svg"
          }
        ]
      }
    ]
  },
  {
    id: "shikoku",
    title: "Henro: Spiritual Journey in Shikoku",
    tagline: "Find refreshment in Japan's most esoteric region",
    duration: "5-6 Days",
    groupSize: "4-9 pax",
    price: "$800-$1400/pax",
    imageSeed: "shikoku-temple",
    filters: ["summer", "multi-day", "culture", "nature", "onsen"],
    itinerary: [
      {
        day: 1,
        locations: [
          {
            name: "Naruto whirlpools",
            description: "Set off from Osaka and head westwards, crossing the Akashi Kaikyo Bridge, the second-longest suspension bridge in the world, into Awaji island. Tuck into a delightful lunch at the gorgeous Seikaiha Aonoya sushi and tempura restaurant, then continue into Shikoku, crossing the Naruto Bridge. You can walk under the bridge to view the Naruto whirlpools below, or take a boat cruise to get up and personal to the natural phenomenon.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 2,
        locations: [
          {
            name: "Ryozenji",
            description: "Begin your truncated pilgrimage at the first temple of the Henro route, Ryozenji, before walking to the second temple, Gokurakuji. Enjoy a bowl of Tokushima ramen for lunch, check out Tokushima's native culture at the Awa Odori museum, before riding the ropeway to the top of Mt Bizan to enjoy the view from Bizan Park. See the 14th and 15th temples on the pilgrimage trail, Joraku-ji and Awa Kokubunji, then venture west into the heart of Shikoku, stopping for the night at a hot spring resort at Oboke.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 3,
        locations: [
          {
            name: "Iya Valley",
            description: "Explore Oboke Gorge itself via sightseeing boat, then try crossing the famous vine bridge of Iya Valley. Continue south and cross into Kochi prefecture, visiting temples #30 and #31, Zenrakuji and the beautiful Chikurinji, before arriving at Katsurahama beach just in time for sunset. Spend the night sampling Kochi's famed seared bonito at Hirome Market.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 4,
        locations: [
          {
            name: "Dogo Onsen",
            description: "See the unique submersible bridges of western Kochi, and take a stroll along Nakatsu Gorge. Enter Ehime prefecture and stop by the midpoint temple of the Henro pilgrimage, the 44th temple Daihoji, before proceeding to Matsuyama to see Matsuyama Castle and Dogo Onsen, the oldest and most vaunted hot spring establishment in Japan, with an optional detour to the picturesque Shimonada station with a direct view of the Seto Inland Sea.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 5,
        locations: [
          {
            name: "Zentsuji",
            description: "Pay a visit to the 61st, 62nd and 63rd temples in Saijo city, Koonji, Hojuji, and Kichijoji, then continue east into the final prefecture of Shikoku, Kagawa. Divert briefly from the Buddhist pilgrimage theme to visit the famous Kotohira Shrine, and enjoy some of the renowned local delights like Sanuki udon or broiled chicken leg. Conclude your pilgrimage at temple #75, Zentsuji, also the birthplace of Kobo Daishi, a monk of preeminent importance to Buddhism in Japan and the Henro trail, before watching the sunset from the photogenic reflection beach of Chichibugahama.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 6,
        locations: [
          {
            name: "Shodoshima",
            description: "Continue to soak in the beautiful countryside atmosphere of Shikoku by taking a ferry off the coast of Kagawa, to either the artsy island of Naoshima, or the popular getaway location of Shodoshima, with unique sights such as Angel Road, Kankakei Ropeway, Shodoshima Olive Park, Marukin Soy Sauce Museum, and the nostalgic-looking Twenty-Four Eyes Movie Studio. End the trip with a return to the mainland and back to Osaka.",
            image: "/placeholder.svg"
          }
        ]
      }
    ]
  },
  {
    id: "okinawa",
    title: "Okinawa: Another Side of Japan",
    tagline: "Take in a different culture truly unique to the rest of the country",
    duration: "4 Days",
    groupSize: "3-7 pax",
    price: "$800-$1200/pax",
    imageSeed: "okinawa-beach",
    filters: ["summer", "multi-day", "family", "beach", "foodie"],
    itinerary: [
      {
        day: 1,
        locations: [
          {
            name: "Shuri Castle",
            description: "Upon arrival at Naha airport, commence the sightseeing journey at the picturesque Naminoue shrine facing the sea from above a dramatic cliffside. Visit Shuri Castle and surrounding attractions like the Kinjo stone-paved road, Tamaudun tombs, Shureimon gate. As evening begins to fall, check out the lively Kokusai street area and sample all kinds of Okinawa's native cuisine like Okinawa soba, yukishio ice cream, and pork tamago onigiri.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 2,
        locations: [
          {
            name: "Cape Maeda",
            description: "Venture northwards to Chatan to see the glamourous American Village and sunset beach, then continue to Onna and admire the natural beauty at places such as Cape Maeda or Manzamo, with optional snorkeling activities at the Blue Cave. Spend the night at a modest hotel in Nago city.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 3,
        locations: [
          {
            name: "Churaumi Aquarium",
            description: "Spend the day at the renowned Churaumi Aquarium and nearby Bisezaki, then proceed to Kouri Island to see the Heart Rock and Kouri Ocean Tower. Heading back south, stop by Katsuren Castle or Nakagusuku Castle before it gets dark, then return to Naha at night.",
            image: "/placeholder.svg"
          }
        ]
      },
      {
        day: 4,
        locations: [
          {
            name: "Sefa Utaki",
            description: "Take a trip down south to Nanjo, to see the spiritual 'power spot' of Sefa Utaki, and the stunning Nirai Kanai bridge. After that, visit Okinawa World to experience more of Okinawa's unique culture and the Gyokusendo Cave, or walk in serenity around the Peace Memorial Park and Himeyuri Cenotaph. Watch the sun set from the Gushikawa Castle ruins at the southern tip of Okinawa island, before going back to Naha.",
            image: "/placeholder.svg"
          }
        ]
      }
    ]
  }
];
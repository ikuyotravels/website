const baseImageMap: Record<string, string> = {
  "fuji-day-trip": "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65",
  "kansai": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
  "kyushu": "https://images.unsplash.com/photo-1528164344705-47542687000d",
  "hokkaido-winter": "https://images.unsplash.com/photo-1611348524140-53c9a25263d6",
  "chubu": "https://images.unsplash.com/photo-1542640244-7e672d6cef4e",
  "tohoku-1": "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
  "tohoku-2": "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
  "shikoku": "https://images.unsplash.com/photo-1480796927426-f609979314bd",
  "okinawa": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b",
};

const DEFAULT_IMAGE = baseImageMap["fuji-day-trip"];

const buildImageUrl = (base: string, params: string) => `${base}?${params}`;

const getBaseImage = (tourId: string) => baseImageMap[tourId] ?? DEFAULT_IMAGE;

const itineraryImageKeywords: Record<string, Record<number, string[]>> = {
  "fuji-day-trip": {
    1: [
      "mount fuji",
      "chureito pagoda",
      "lake kawaguchi"
    ]
  },
  "kansai": {
    1: ["osaka castle", "kuromon market", "dotonbori night"],
    2: ["nara deer park", "todai-ji temple", "osaka street food"],
    3: ["fushimi inari", "kiyomizu temple", "uji tea"],
    4: ["arashiyama bamboo", "golden pavilion", "kyoto nightlife"],
    5: ["kyoto sunrise", "kobe harbor", "osaka skyline"]
  },
  "kyushu": {
    1: ["fukuoka city", "canal city", "hakata ramen"],
    2: ["kumamoto castle", "mount aso", "kurokawa onsen"],
    3: ["nagasaki skyline", "dejima port", "dogo onsen"],
    4: ["aso caldera", "takachiho gorge", "beppu onsen"],
    5: ["beppu jigoku", "moji port", "fukuoka night"],
    6: ["yufuin village", "kitsuki castle", "kamado shrine"]
  },
  "hokkaido-winter": {
    1: ["sapporo snow festival", "odori park", "sapporo soup curry"],
    2: ["hill of buddha", "lake toya winter", "noboribetsu onsen"],
    3: ["otaru canal winter", "nikka distillery", "susukino lights"],
    4: ["biei blue pond", "furano snow", "sounkyo ice festival"],
    5: ["monbetsu drift ice", "lake akan", "ainu culture"]
  },
  "chubu": {
    1: ["nagoya castle", "sakae skyline", "osu shopping street"],
    2: ["shirakawa-go", "takayama old town", "hida beef"],
    3: ["shinhotaka ropeway", "matsumoto castle", "lake suwa"],
    4: ["kozenji temple", "senjojiki cirque", "magome post town"]
  },
  "tohoku-1": {
    1: ["matsushima bay", "sendai city", "gyutan cuisine"],
    2: ["genbikei gorge", "chuson-ji temple", "hanamaki onsen"],
    3: ["oirase gorge", "hakkoda mountains", "aomori city"],
    4: ["aomori fish market", "nebuta museum", "juniko lakes"]
  },
  "tohoku-2": {
    1: ["to no hetsuri", "ouchi-juku", "ashinomaki onsen"],
    2: ["aizuwakamatsu castle", "goshikinuma ponds", "yonezawa beef"],
    3: ["zao mountains", "yamadera temple", "dewasanzan shrine"],
    4: ["kakunodate samurai", "lake tazawa", "hachiman tai"],
    5: ["oga peninsula", "namahage museum", "akita coastline"]
  },
  "shikoku": {
    1: ["naruto whirlpool", "awaji island", "tokushima sushi"],
    2: ["ryozenji temple", "awa odori museum", "mt bizan"],
    3: ["iya valley", "oboke gorge", "koch ice bonito"],
    4: ["matsuyama castle", "dogo onsen", "shimonada station"],
    5: ["konpira shrine", "sanuki udon", "chichibugahama sunset"],
    6: ["naoshima art", "shodoshima olive park", "angel road"]
  },
  "okinawa": {
    1: ["naminoue shrine", "shuri castle", "kokusaidori street"],
    2: ["american village okinawa", "cape manzamo", "blue cave snorkeling"],
    3: ["churaumi aquarium", "kouri bridge", "nakagusuku castle"],
    4: ["sefa utaki", "okinawa world", "peace memorial park"]
  }
};

const formatLabel = (keyword: string) => {
  return keyword
    .replace(/[-_]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map(word => word[0].upper() + word.slice(1))
    .join(' ');
};

export const getTourCardImage = (tourId: string) =>
  buildImageUrl(getBaseImage(tourId), "w=800&h=600&fit=crop&q=80");

export const getTourHeroImage = (tourId: string) =>
  buildImageUrl(getBaseImage(tourId), "w=1400&h=650&fit=crop&q=80");

export const getTourThumbnailImage = (tourId: string) =>
  buildImageUrl(getBaseImage(tourId), "w=200&h=150&fit=crop&q=80");

export const getItineraryImages = (tourId: string, day: number) => {
  const keywords = itineraryImageKeywords[tourId]?.[day] ?? [];

  return keywords.map(keyword => ({
    label: formatLabel(keyword),
    url: `https://source.unsplash.com/400x280/?${encodeURIComponent(keyword)}`,
  }));
};

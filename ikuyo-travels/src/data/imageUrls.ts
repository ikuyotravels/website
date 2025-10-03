// Curated Unsplash images for different tour types and pages
export const tourImages: Record<string, string> = {
  'fuji-day-trip': 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop&q=80', // Mt Fuji
  'kansai-heart': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop&q=80', // Kyoto temple
  'kyushu-hidden': 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop&q=80', // Hot springs
  'hokkaido-winter': 'https://images.unsplash.com/photo-1547481887-a26e2cec3b43?w=800&h=600&fit=crop&q=80', // Snow scene
  'chubu-beaten-path': 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=600&fit=crop&q=80', // Shirakawa-go
  'tohoku-autumn-1': 'https://images.unsplash.com/photo-1571503568896-5d4b9cd0e28e?w=800&h=600&fit=crop&q=80', // Autumn colors
  'tohoku-autumn-2': 'https://images.unsplash.com/photo-1565508442145-7d6e1c49e25c?w=800&h=600&fit=crop&q=80', // Japanese garden
  'shikoku-henro': 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=600&fit=crop&q=80', // Temple
  'okinawa': 'https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?w=800&h=600&fit=crop&q=80', // Beach
};

export const getImageUrl = (imageSeed: string, width: number = 800, height: number = 600): string => {
  // If we have a specific image for this tour, use it
  if (tourImages[imageSeed]) {
    return tourImages[imageSeed];
  }

  // Otherwise, use a fallback with the imageSeed
  return `https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=${width}&h=${height}&fit=crop&q=80`;
};

// Page hero images
export const heroImages = {
  home: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1920&h=1080&fit=crop&q=80', // Mt Fuji
  tours: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&h=1080&fit=crop&q=80', // Kyoto
  about: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=800&fit=crop&q=80', // Guide
  stories: 'https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?w=800&h=600&fit=crop&q=80', // Happy travelers
  blog: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=600&fit=crop&q=80', // Travel scene
};

// Gallery images for tour pages
export const getGalleryImages = (tourId: string): string[] => {
  const basePhotos = [
    'photo-1493976040374-85c8e12f0c0e', // Kyoto temple
    'photo-1480796927426-f609979314bd', // Temple
    'photo-1565508442145-7d6e1c49e25c', // Garden
    'photo-1571503568896-5d4b9cd0e28e', // Autumn
  ];

  return basePhotos.map((photo, index) =>
    `https://images.unsplash.com/${photo}?w=400&h=400&fit=crop&q=80&sig=${tourId}-${index}`
  );
};

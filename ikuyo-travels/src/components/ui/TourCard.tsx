import { Tour } from "@/data/tourData";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, DollarSign } from "lucide-react";

interface TourCardProps {
  tour: Tour;
}

// Map tour IDs to specific Unsplash images
const getTourImage = (tourId: string): string => {
  const imageMap: Record<string, string> = {
    "fuji-day-trip": "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop&q=80", // Mt Fuji with pagoda
    "kansai": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop&q=80", // Fushimi Inari shrine, Kyoto
    "kyushu": "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop&q=80", // Japanese garden/nature
    "hokkaido-winter": "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=600&fit=crop&q=80", // Hokkaido winter/snow
    "chubu": "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&h=600&fit=crop&q=80", // Japanese Alps/mountains
    "tohoku-1": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&q=80", // Autumn foliage
    "tohoku-2": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&q=80", // Autumn foliage
    "shikoku": "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&h=600&fit=crop&q=80", // Temple
    "okinawa": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&h=600&fit=crop&q=80", // Tropical beach/ocean
  };

  return imageMap[tourId] || "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop&q=80";
};

export const TourCard = ({ tour }: TourCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate("/tours");
  };

  return (
    <article
      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-smooth cursor-pointer focus-ring"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${tour.title}`}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={getTourImage(tour.id)}
          alt={tour.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
          {tour.title}
        </h3>

        {/* Tagline */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {tour.tagline}
        </p>

        {/* Tags */}
        {tour.tags && tour.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tour.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta row with icons */}
        <div className="grid grid-cols-3 gap-3 mb-4 py-4 border-t border-b border-border">
          <div className="flex flex-col items-center text-center">
            <Calendar className="w-4 h-4 text-accent mb-1" aria-hidden="true" />
            <span className="text-xs text-muted-foreground">Duration</span>
            <span className="text-sm font-semibold text-foreground">{tour.duration}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-4 h-4 text-accent mb-1" aria-hidden="true" />
            <span className="text-xs text-muted-foreground">Group</span>
            <span className="text-sm font-semibold text-foreground">{tour.groupSize}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <DollarSign className="w-4 h-4 text-accent mb-1" aria-hidden="true" />
            <span className="text-xs text-muted-foreground">From</span>
            <span className="text-sm font-semibold text-primary">{tour.price}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center text-primary font-medium">
          View Details →
        </div>
      </div>
    </article>
  );
};

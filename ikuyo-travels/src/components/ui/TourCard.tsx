import { Tour } from "@/data/tourData";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, DollarSign } from "lucide-react";
import { getTourCardImage } from "@/lib/tourMedia";

interface TourCardProps {
  tour: Tour;
  to?: string;
}

export const TourCard = ({ tour, to }: TourCardProps) => {
  const navigate = useNavigate();
  const destination = to ?? `/tours/${tour.id}`;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(destination);
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
          src={getTourCardImage(tour.id)}
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


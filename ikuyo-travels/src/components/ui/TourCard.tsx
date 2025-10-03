import { Tour } from "@/data/tourData";
import { Button } from "./Button";
import { Link } from "react-router-dom";

interface TourCardProps {
  tour: Tour;
}

export const TourCard = ({ tour }: TourCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-smooth">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={`https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&h=600&fit=crop&q=80`}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold mb-2">{tour.title}</h3>
        <p className="text-muted-foreground mb-4">{tour.tagline}</p>
        <div className="flex items-center justify-between mb-4 text-sm">
          <span className="text-muted-foreground">{tour.duration}</span>
          <span className="text-accent font-semibold">{tour.price}</span>
        </div>
        <Link to="/tours">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

import { Tour } from "@/data/tourData";
import { TourCard } from "@/components/ui/TourCard";
import { cn } from "@/lib/utils";

interface TourCardGridProps {
  tours: Tour[];
  className?: string;
  getCardHref?: (tour: Tour) => string | undefined;
}

export const TourCardGrid = ({ tours, className, getCardHref }: TourCardGridProps) => {
  return (
    <div className={cn("grid gap-6 md:grid-cols-2 lg:grid-cols-3", className)}>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} to={getCardHref?.(tour)} />
      ))}
    </div>
  );
};

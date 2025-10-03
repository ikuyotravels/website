import { Link } from 'react-router-dom';
import type { Tour } from '../../data/tourData';
import { getImageUrl } from '../../data/imageUrls';

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <div className="aspect-[4/3] bg-secondary overflow-hidden">
        <img
          src={getImageUrl(tour.id)}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-text-primary mb-2">
          {tour.title}
        </h3>
        <p className="text-text-secondary mb-4">{tour.tagline}</p>
        <div className="flex justify-between items-center text-sm text-text-secondary mb-4">
          <span>{tour.duration}</span>
          <span className="font-semibold text-accent">{tour.price}</span>
        </div>
        <Link
          to={`/tours#${tour.id}`}
          className="text-accent hover:text-accent-hover font-medium transition-colors duration-200"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default TourCard;

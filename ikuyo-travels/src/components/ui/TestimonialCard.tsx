interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating?: number;
}

const TestimonialCard = ({ quote, author, location, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-xl">
      {rating && (
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-accent text-xl">⭐</span>
          ))}
        </div>
      )}
      <p className="text-text-primary mb-4 italic">"{quote}"</p>
      <div className="border-t border-secondary pt-4">
        <p className="font-semibold text-text-primary">{author}</p>
        <p className="text-sm text-text-secondary">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

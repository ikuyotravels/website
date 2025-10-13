import { Navigate, Link, useParams } from "react-router-dom";

import { TourCardGrid } from "@/components/tours/TourCardGrid";
import { TourItinerary } from "@/components/tours/TourItinerary";
import { tours } from "@/data/tourData";

const TourDetailPage = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const tour = tours.find((item) => item.id === tourId);

  if (!tour) {
    return <Navigate to="/tours" replace />;
  }

  const relatedTours = tours.filter((item) => item.id !== tour.id).slice(0, 3);

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container-editorial space-y-12 md:space-y-16">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/tours" className="font-medium text-accent hover:underline">
                Journeys
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">{tour.title}</li>
          </ol>
        </nav>

        <TourItinerary tour={tour} />

        {relatedTours.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif">Other journeys to explore</h2>
            <TourCardGrid tours={relatedTours} />
          </section>
        )}
      </div>
    </div>
  );
};

export default TourDetailPage;



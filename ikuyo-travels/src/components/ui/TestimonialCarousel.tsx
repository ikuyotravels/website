import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./Button";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  country: string;
  tripType?: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const TestimonialCarousel = ({
  testimonials,
  autoPlay = false,
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const liveRegionRef = useRef<HTMLDivElement>(null);

  // Determine items per view based on screen size
  const getItemsPerView = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 3; // lg screens
    if (window.innerWidth >= 768) return 2;  // md screens
    return 1; // mobile
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, isPaused, autoPlayInterval, goToNext]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    }
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div
      ref={carouselRef}
      className="relative"
      aria-label="Guest testimonials"
      role="region"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
    >
      {/* Live region for screen readers */}
      <div
        ref={liveRegionRef}
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        Showing testimonials {currentIndex + 1} to {Math.min(currentIndex + itemsPerView, testimonials.length)} of {testimonials.length}
      </div>

      {/* Main testimonial display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial, idx) => (
          <div key={testimonial.id} className="bg-card rounded-lg shadow-md p-6 md:p-8 flex flex-col justify-between min-h-[280px]">
            <div className="text-center">
              {/* Stars */}
              {testimonial.rating && (
                <div className="flex items-center justify-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonial.rating! ? "fill-accent text-accent" : "text-muted"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              )}

              {/* Quote */}
              <blockquote className="text-base md:text-lg text-foreground mb-4 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col items-center gap-2">
                <cite className="not-italic font-semibold text-foreground">
                  {testimonial.name}
                </cite>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{testimonial.country}</span>
                  {testimonial.tripType && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        {testimonial.tripType}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          aria-label="Previous testimonials"
          className="focus-ring"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Dot pagination */}
        <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-label={`Go to testimonials ${index + 1}`}
              aria-selected={currentIndex === index}
              aria-controls={`testimonial-${index}`}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all focus-ring ${
                currentIndex === index
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          aria-label="Next testimonials"
          className="focus-ring"
          disabled={currentIndex >= maxIndex}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

import { useState, useEffect, useRef } from "react";
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

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, isPaused, autoPlayInterval, currentIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    }
  };

  const currentTestimonial = testimonials[currentIndex];

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
        Testimonial {currentIndex + 1} of {testimonials.length}: {currentTestimonial.quote} - {currentTestimonial.name}, {currentTestimonial.country}
      </div>

      {/* Main testimonial display */}
      <div className="bg-card rounded-lg shadow-md p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto">
          {/* Stars */}
          {currentTestimonial.rating && (
            <div className="flex items-center justify-center gap-1 mb-4" aria-label={`${currentTestimonial.rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < currentTestimonial.rating! ? "fill-accent text-accent" : "text-muted"}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}

          {/* Quote */}
          <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground mb-6 italic leading-relaxed">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col items-center gap-2">
            <cite className="not-italic font-semibold text-foreground">
              {currentTestimonial.name}
            </cite>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{currentTestimonial.country}</span>
              {currentTestimonial.tripType && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                    {currentTestimonial.tripType}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          aria-label="Previous testimonial"
          className="focus-ring"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Dot pagination */}
        <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-label={`Go to testimonial ${index + 1}`}
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
          aria-label="Next testimonial"
          className="focus-ring"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Progress indicator */}
      <div className="text-center mt-4 text-sm text-muted-foreground">
        {currentIndex + 1} / {testimonials.length}
      </div>
    </div>
  );
};

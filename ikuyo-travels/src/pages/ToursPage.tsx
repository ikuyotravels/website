import { useMemo, useState } from "react";

import { tours } from "@/data/tourData";
import { TourCardGrid } from "@/components/tours/TourCardGrid";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

type FilterOption = {
  key: string;
  label: string;
};

const FILTER_OPTIONS: FilterOption[] = [
  { key: "spring", label: "🌸 Spring" },
  { key: "summer", label: "☀️ Summer" },
  { key: "autumn", label: "🍁 Autumn" },
  { key: "winter", label: "❄️ Winter" },
  { key: "near-tokyo", label: "🗼 Tokyo" },
  { key: "day-trip", label: "🚆 Day Trip" },
  { key: "multi-day", label: "🗓️ Multi-day" },
  { key: "family", label: "👨‍👩‍👧 Family" },
  { key: "budget", label: "💰 Budget" },
  { key: "foodie", label: "🍣 Foodie" },
  { key: "culture", label: "🏯 Culture" },
  { key: "nature", label: "🏞️ Nature" },
  { key: "onsen", label: "♨️ Onsen" },
  { key: "beach", label: "🏖️ Beach" },
];

const ToursPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const availableFilters = useMemo(
    () =>
      FILTER_OPTIONS.filter(option =>
        tours.some(tour => (tour.filters ?? []).includes(option.key))
      ),
    []
  );

  const filteredTours = useMemo(() => {
    if (!activeFilter) {
      return tours;
    }

    return tours.filter(tour => {
      const tourFilters = tour.filters ?? [];
      return tourFilters.includes(activeFilter);
    });
  }, [activeFilter]);

  const toggleFilter = (filterKey: string) => {
    setActiveFilter(prev => (prev === filterKey ? null : filterKey));
  };

  const clearFilter = () => setActiveFilter(null);

  return (
    <div className="min-h-screen">
      <PageHero
        backgroundImage="/ryokan.avif"
        title="Find inspiration for your custom trip to Japan"
        description="Every itinerary you see here is a starting point. Click through to explore the day-by-day flow, then reach out and we will tailor the experience around your interests, pace, and must-see list."
      />

      <section className="pt-8 pb-4">
        <div className="container-editorial">
          <div className="flex overflow-x-auto space-x-3 pb-4 scrollbar-hide">
            {availableFilters.map(option => {
              const isActive = activeFilter === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => toggleFilter(option.key)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full border transition-smooth text-sm font-medium whitespace-nowrap ${
                    isActive
                      ? "bg-accent text-accent-foreground border-accent shadow-sm"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted border-border"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}

            {activeFilter && (
              <button
                type="button"
                onClick={clearFilter}
                className="px-3 py-2 text-sm font-medium text-accent hover:text-accent/80 transition-smooth"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="pt-4 pb-12 md:pb-16">
        <div className="container-editorial">
          {filteredTours.length > 0 ? (
            <TourCardGrid tours={filteredTours} className="lg:grid-cols-3" />
          ) : (
            <p className="text-center text-muted-foreground py-12">
              We don't have journeys that match those filters yet. Try adjusting your selection.
            </p>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container-editorial text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Want something completely bespoke?
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg opacity-95 leading-relaxed mb-6">
            Ikuyo Travels will build a personalised itinerary around what you love—from food and culture to
            family-friendly adventures. Let's plan a journey that feels like it was designed just for you.
          </p>
          <Link to="/contact" className="focus-ring inline-block">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Your Custom Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ToursPage;

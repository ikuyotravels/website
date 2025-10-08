import { Link } from "react-router-dom";
import { Calendar, Users, DollarSign, CheckCircle2, XCircle } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Tour } from "@/data/tourData";
import { getTourHeroImage, getTourThumbnailImage } from "@/lib/tourMedia";

const SEASON_LABELS: Record<string, string> = {
  spring: "Spring",
  summer: "Summer",
  autumn: "Autumn",
  winter: "Winter",
};

const KEYWORD_TO_SEASON: Record<string, string> = {
  spring: "spring",
  summer: "summer",
  autumn: "autumn",
  fall: "autumn",
  winter: "winter",
};

const MONTH_TO_SEASON: Record<string, string> = {
  jan: "winter",
  january: "winter",
  feb: "winter",
  february: "winter",
  mar: "spring",
  march: "spring",
  apr: "spring",
  april: "spring",
  may: "spring",
  jun: "summer",
  june: "summer",
  jul: "summer",
  july: "summer",
  aug: "summer",
  august: "summer",
  sep: "autumn",
  sept: "autumn",
  september: "autumn",
  oct: "autumn",
  october: "autumn",
  nov: "autumn",
  november: "autumn",
  dec: "winter",
  december: "winter",
};

const formatSeasonality = (seasonality?: string) => {
  if (!seasonality) {
    return undefined;
  }

  const lower = seasonality.toLowerCase();

  if (lower.includes("year-round")) {
    return "Year-round";
  }

  const seasons = new Set<string>();

  Object.entries(KEYWORD_TO_SEASON).forEach(([keyword, season]) => {
    if (lower.includes(keyword)) {
      seasons.add(season);
    }
  });

  const monthRegex = /(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|sept|october|oct|november|nov|december|dec)/g;
  let match: RegExpExecArray | null;

  while ((match = monthRegex.exec(lower)) !== null) {
    const monthKey = match[0] as keyof typeof MONTH_TO_SEASON;
    const season = MONTH_TO_SEASON[monthKey];
    if (season) {
      seasons.add(season);
    }
  }

  if (seasons.size === 0) {
    return `Year-round (${seasonality})`;
  }

  const order: Array<keyof typeof SEASON_LABELS> = ["spring", "summer", "autumn", "winter"];
  const labels = order
    .filter(season => seasons.has(season))
    .map(season => SEASON_LABELS[season]);

  return labels.length ? labels.join(" / ") : `Year-round (${seasonality})`;
};

interface TourItineraryProps {
  tour: Tour;
}

export const TourItinerary = ({ tour }: TourItineraryProps) => {
  const { itinerary, whatsIncluded, whatsNotIncluded, seasonality } = tour;
  const seasonLabel = formatSeasonality(seasonality);
  const isSingleDay = itinerary.length === 1;

  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-64 md:h-80 lg:h-96">
        <img
          src={getTourHeroImage(tour.id)}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-3 text-white">
                {tour.title}
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed">
                {tour.tagline}
              </p>
              {tour.tags && tour.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {tour.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/15 text-xs uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <img
              src={getTourThumbnailImage(tour.id)}
              alt=""
              className="w-28 h-20 object-cover rounded-lg shadow-lg hidden sm:block"
            />
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10 space-y-12">
        <section className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4 p-4 bg-muted/40 rounded-lg">
              <Calendar className="w-6 h-6 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Duration</p>
                <p className="text-lg font-semibold text-foreground">{tour.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/40 rounded-lg">
              <Users className="w-6 h-6 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Group Size</p>
                <p className="text-lg font-semibold text-foreground">{tour.groupSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-muted/40 rounded-lg">
              <DollarSign className="w-6 h-6 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">Price</p>
                <p className="text-lg font-semibold text-accent">{tour.price}</p>
              </div>
            </div>
          </div>

          {seasonLabel && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-center gap-4 p-4 bg-muted/40 rounded-lg">
                <span role="img" aria-hidden="true" className="text-xl">🌤️</span>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Best Seasons</p>
                  <p className="text-lg font-semibold text-foreground">{seasonLabel}</p>
                </div>
              </div>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-6">Itinerary Highlights</h2>
          <div className="relative">
            {!isSingleDay && (
              <div className="absolute left-6 top-3 bottom-3 w-px bg-accent/30" aria-hidden="true" />
            )}
            <div className="space-y-6">
              {itinerary.map((day, index) => (
                <div key={`${tour.id}-day-${day.day}-${index}`} className="relative flex gap-4">
                  {!isSingleDay && (
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold shadow-md">
                        {day.day}
                      </div>
                    </div>
                  )}
                  <div className="flex-1 pt-1 space-y-5">
                    {!isSingleDay && <h3 className="text-lg font-semibold">Day {day.day}</h3>}
                    {day.locations.map((location, segmentIdx) => (
                      <div
                        key={`${tour.id}-day-${day.day}-segment-${segmentIdx}`}
                        className="flex flex-col md:flex-row md:items-start gap-4 rounded-lg"
                      >
                        <img
                          src={location.image}
                          alt={`${tour.title} day ${day.day} highlight ${location.name}`}
                          loading="lazy"
                          className="w-full md:w-52 h-32 object-cover rounded-lg shadow-sm"
                        />
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold text-foreground">{location.name}</h4>
                          <p className="text-muted-foreground leading-relaxed">{location.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {(whatsIncluded && whatsIncluded.length > 0) || (whatsNotIncluded && whatsNotIncluded.length > 0) ? (
          <section className="grid gap-8 md:grid-cols-2">
            {whatsIncluded && whatsIncluded.length > 0 && (
              <div className="p-6 bg-muted/30 rounded-xl border border-border/60">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" aria-hidden="true" />
                  What's Included
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {whatsIncluded.map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-accent mt-1">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {whatsNotIncluded && whatsNotIncluded.length > 0 && (
              <div className="p-6 bg-muted/10 rounded-xl border border-border/60">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  What's Not Included
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {whatsNotIncluded.map(item => (
                    <li key={item} className="flex gap-3">
                      <span className="text-muted-foreground mt-1">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ) : null}

        <section className="pt-6 border-t border-border text-center">
          <h2 className="text-2xl font-serif mb-4">Ready to customise this journey?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Share what you would love to see more of and we'll tailor the pace, stops, and experiences so it feels like your perfect trip.
          </p>
          <Link to="/contact" state={{ selectedTourId: tour.id }} className="focus-ring inline-block">
            <Button size="lg">Contact Us</Button>
          </Link>
        </section>
      </div>
    </article>
  );
};

export default TourItinerary;


import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  containerClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  children?: ReactNode;
  backgroundImage?: string;
}

export const PageHero = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  containerClassName,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
  children,
  backgroundImage,
}: PageHeroProps) => {
  const isCentered = align === "center";

  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
      }
    : {};

  return (
    <section
      className={cn(
        "py-14 md:py-20 relative bg-cover bg-center",
        className
      )}
      style={sectionStyle}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/50" />}
      <div
        className={cn(
          "container-editorial relative",
          isCentered ? "text-center" : "text-center md:text-left",
          containerClassName
        )}
      >
        <div className={cn("max-w-3xl", isCentered ? "mx-auto" : "mx-auto md:mx-0")}>
          {eyebrow && (
            <p
              className={cn(
                "text-sm uppercase tracking-widest font-semibold mb-4",
                backgroundImage ? "text-white/80" : "text-primary",
                eyebrowClassName
              )}
            >
              {eyebrow}
            </p>
          )}

          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif mb-6",
              backgroundImage ? "text-white" : "",
              titleClassName
            )}
          >
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                "text-base md:text-lg leading-relaxed",
                backgroundImage ? "text-white/90" : "text-muted-foreground",
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
};



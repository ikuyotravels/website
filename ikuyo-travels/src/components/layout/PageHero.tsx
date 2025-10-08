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
}: PageHeroProps) => {
  const isCentered = align === "center";

  return (
    <section className={cn("py-14 md:py-20", className)}>
      <div
        className={cn(
          "container-editorial",
          isCentered ? "text-center" : "text-center md:text-left",
          containerClassName
        )}
      >
        <div className={cn("max-w-3xl", isCentered ? "mx-auto" : "mx-auto md:mx-0")}>
          {eyebrow && (
            <p
              className={cn(
                "text-sm uppercase tracking-widest text-primary font-semibold mb-4",
                eyebrowClassName
              )}
            >
              {eyebrow}
            </p>
          )}

          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-serif mb-6",
              titleClassName
            )}
          >
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                "text-muted-foreground text-base md:text-lg leading-relaxed",
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



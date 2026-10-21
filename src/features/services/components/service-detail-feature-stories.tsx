import { Container } from "@/components/layout/container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { RevealPanel } from "@/components/ui/reveal-panel";
import {
  resolveServiceDetailImage,
  type ServiceDetailFeatureItem,
  type ServiceVisualVariant,
} from "@/features/services/service-detail-content";
import { cn } from "@/lib/utils";

type ServiceDetailFeatureStoriesProps = {
  items: ServiceDetailFeatureItem[];
  variant: ServiceVisualVariant;
};

export function ServiceDetailFeatureStories({ items, variant }: ServiceDetailFeatureStoriesProps) {
  return (
    <section className="border-t border-line bg-page-surface py-14 sm:py-20">
      <Container className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        {items.map((item, index) => {
          const isFeatured = index === 0;

          return (
            <RevealPanel
              key={`${item.title}-${index}`}
              delay={index * 80}
              className={cn(isFeatured ? "sm:col-span-2 lg:col-span-12" : "lg:col-span-6")}
            >
              <article
                className={cn(
                  "group relative flex h-full overflow-hidden rounded-[1.75rem] border border-line bg-card-deep shadow-lg transition-all duration-300 hover:border-brand/50 hover:shadow-2xl",
                  isFeatured ? "min-h-[360px] flex-col justify-end lg:min-h-[440px]" : "min-h-[320px] flex-col justify-end",
                )}
              >
                <OptimizedImage
                  src={resolveServiceDetailImage(item.imageSrc)}
                  alt={item.imageAlt}
                  sizes={isFeatured ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
                  className="absolute inset-0 h-full w-full rounded-none border-0 shadow-none"
                  imageClassName={cn(
                    "h-full w-full object-cover transition duration-700 group-hover:scale-105",
                    variant === "printing" ? "object-right" : "object-center",
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />

                <span className="absolute end-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-black/30 font-mono text-sm font-bold text-brand backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative p-6 sm:p-8">
                  <h3 className={cn("max-w-2xl font-black leading-snug text-white", isFeatured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl")}>
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{item.description}</p>
                </div>
              </article>
            </RevealPanel>
          );
        })}
      </Container>
    </section>
  );
}

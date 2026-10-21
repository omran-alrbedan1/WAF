import { Container } from "@/components/layout/container";
import { RevealPanel } from "@/components/ui/reveal-panel";
import { type ServiceDetailProcessItem } from "@/features/services/service-detail-content";

type ServiceDetailProcessProps = {
  description: string;
  eyebrow: string;
  items: ServiceDetailProcessItem[];
  title: string;
};

export function ServiceDetailProcess({ description, eyebrow, items, title }: ServiceDetailProcessProps) {
  return (
    <section className="bg-page-deep py-14 sm:py-20">
      <Container>
        <RevealPanel className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-brand sm:text-sm">
              <span className="h-px w-10 bg-brand" />
              {eyebrow}
            </p>
            <h2 className="max-w-3xl text-3xl font-black leading-[1.16] tracking-tight text-heading sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-body sm:text-base sm:leading-8">{description}</p>
        </RevealPanel>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {items.map((item, index) => (
            <RevealPanel key={item.title} delay={index * 80}>
              <li className="group relative h-full overflow-hidden rounded-[1.5rem] border border-line bg-card-deep p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl">
                <span className="text-5xl font-black leading-none text-brand/25 transition-colors group-hover:text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-black leading-snug text-heading">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-body">{item.body}</p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-start scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
              </li>
            </RevealPanel>
          ))}
        </ol>
      </Container>
    </section>
  );
}

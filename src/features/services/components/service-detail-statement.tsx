import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type ServiceDetailStatementProps = {
  description: string;
  eyebrow: string;
  locale: "ar" | "en";
  supportingCopy: string;
  title: string;
};

export function ServiceDetailStatement({
  description,
  eyebrow,
  locale,
  supportingCopy,
  title,
}: ServiceDetailStatementProps) {
  const isArabic = locale === "ar";

  return (
    <section className="border-b border-line bg-page-deep py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-8 border border-line bg-panel-solid px-6 py-8 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-10">
          <div
            dir={isArabic ? "rtl" : "ltr"}
            className={cn(
              "lg:col-span-7",
              isArabic ? "text-right" : "text-left",
            )}
          >
            <p className="tracking-kicker text-[0.68rem] font-medium uppercase text-brand sm:text-[0.74rem]">
              {eyebrow}
            </p>
            <h2 className="mt-4 max-w-[16ch] text-3xl font-black leading-tight text-heading sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>

          <div
            dir={isArabic ? "rtl" : "ltr"}
            className={cn(
              "space-y-4 border-t border-line pt-6 text-sm leading-7 text-body-strong lg:col-span-5 lg:border-t-0 lg:border-s lg:pt-0 lg:ps-8",
              isArabic ? "text-right" : "text-left",
            )}
          >
            <p>{description}</p>
            <p className="text-faint">{supportingCopy}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

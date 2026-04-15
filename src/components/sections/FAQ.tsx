import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AccordionItem } from "@/components/ui/Accordion";
import { site } from "@/content/site";

export function FAQ() {
  return (
    <section id="faq" className="container-x section-y hairline-t">
      <SectionHeading
        eyebrow={site.faq.eyebrow}
        headline={site.faq.headline}
      />
      <div className="mt-12 mx-auto max-w-4xl">
        {site.faq.items.map((item, i) => (
          <Reveal key={i} variant="up" delay={i * 0.04}>
            <AccordionItem q={item.q} a={item.a} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

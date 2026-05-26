import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { InquiryForm } from "@/components/InquiryForm";
import { brand } from "@/data/brand";
import custom from "@/assets/cat-custom.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: `Wholesale & Export — ${brand.full}` },
      { name: "description", content: "Bulk button orders, custom logo buttons, designer collaborations and export inquiries from Lahore, Pakistan." },
      { property: "og:title", content: `Wholesale & Export — ${brand.full}` },
      { property: "og:description", content: "Bulk, custom and export inquiries for buttons — UPM Group, Lahore." },
      { property: "og:url", content: "/wholesale" },
      { property: "og:image", content: custom },
    ],
    links: [{ rel: "canonical", href: "/wholesale" }],
  }),
  component: WholesalePage,
});

const services = [
  { t: "Bulk wholesale", d: "Competitive MOQs for boutiques, brands and factories — across our full catalog." },
  { t: "Custom logo buttons", d: "Your brand, your monogram — engraved or embossed in metal, resin or enamel." },
  { t: "Designer collaborations", d: "Limited-run buttons developed alongside Pakistan's emerging fashion houses." },
  { t: "Export inquiries", d: "Reliable export packaging, documentation and lead times to international buyers." },
];

function WholesalePage() {
  return (
    <>
      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-end">
        <SectionHeading
          eyebrow="Wholesale · Custom · Export"
          title={<>Built for the makers <span className="italic text-gold">behind</span> the makers.</>}
          description="Whether you're stocking a boutique, dressing a collection, or shipping containers abroad — our wholesale team makes it easy."
        />
        <div className="relative aspect-[5/4] overflow-hidden hidden lg:block">
          <img src={custom} alt="Custom logo buttons" loading="lazy" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.t} className="border border-border bg-surface/40 p-8">
            <Check size={16} className="text-gold mb-5" />
            <h3 className="font-display text-xl text-foreground">{s.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-surface/40 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-5">Start an inquiry</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.1]">
              Tell us what you're making.
            </h2>
            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
              Share a few details and our team will get back with samples, pricing and lead times — usually within one working day.
            </p>
            <div className="hairline mt-8" />
            <div className="mt-8 space-y-3 text-sm">
              <div className="text-foreground/80"><span className="text-gold">Min order:</span> Flexible — discuss with our team.</div>
              <div className="text-foreground/80"><span className="text-gold">Lead time:</span> 3–21 days depending on customisation.</div>
              <div className="text-foreground/80"><span className="text-gold">Ships:</span> Pakistan-wide & worldwide.</div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}

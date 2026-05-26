import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import craft from "@/assets/craft.jpg";
import bridal from "@/assets/bridal-styling.jpg";
import { brand } from "@/data/brand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${brand.full}` },
      { name: "description", content: "The story of UPM Group, Lahore's modern button house — generations of craft, today reimagined for designers, boutiques and global export." },
      { property: "og:title", content: `About — ${brand.full}` },
      { property: "og:description", content: "Generations of button craft from Anarkali, Lahore — reimagined for the modern fashion industry." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: craft },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { t: "Heritage", d: "Decades of trade in Lahore's iconic Anarkali / Dhani Ram garment ecosystem." },
  { t: "Catalog depth", d: "Thousands of designs across metal, fancy, shirt, coat, bridal, kids and custom." },
  { t: "Designer-first", d: "Built to be the easiest partner for boutiques, designers and small brands." },
  { t: "Export-ready", d: "Bulk capacity, custom moulds and reliable lead times for international orders." },
];

const timeline = [
  { y: "Origins", t: "Family trade in Lahore's garment market." },
  { y: "Growth", t: "Wholesale network expands across boutiques and tailors nationwide." },
  { y: "Today", t: "UPM Group launches as a modern, designer-first button brand." },
  { y: "Next", t: "Online ordering, global export and the trims ecosystem beyond buttons." },
];

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Our story"
          title={<>A family of buttons. <span className="italic text-gold">A new era</span> of craft.</>}
          description="UPM Group is the modern face of a generations-old button trade in Lahore. We built our name on the small details inside Pakistan's finest garments — and we're building the brand that will carry that craft to the world."
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={craft} alt="Hands sorting premium buttons in workshop" loading="lazy" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div>
          <div className="eyebrow mb-6">What we believe</div>
          <h3 className="font-display text-3xl md:text-4xl text-foreground leading-[1.1]">
            The smallest finishing of a garment is never small.
          </h3>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            A blazer is judged by its buttons. A bridal blouse is remembered for its closures. A child's frock comes alive with one playful detail. We exist to make those details extraordinary — so makers can put their work into the world with pride.
          </p>
          <div className="hairline mt-10" />
          <div className="mt-10 grid sm:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.t}>
                <div className="font-display text-xl text-gold">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface/40 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
          <SectionHeading eyebrow="The journey" title={<>From a market stall to a modern brand.</>} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((s, i) => (
              <div key={s.y} className="relative pl-6 border-l border-gold/40">
                <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-gold" />
                <div className="eyebrow !text-[0.6rem]">Chapter {i + 1}</div>
                <div className="mt-2 font-display text-2xl text-foreground">{s.y}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[60svh] flex items-center overflow-hidden">
        <img src={bridal} alt="Bridal couture detail" loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-xl">
            <div className="eyebrow mb-6">A note from the house</div>
            <p className="font-display text-2xl md:text-3xl text-foreground leading-[1.3] italic">
              "We don't sell buttons. We help you finish what you set out to make — beautifully, reliably, for whoever will wear it."
            </p>
            <div className="mt-6 text-sm tracking-[0.22em] uppercase text-gold">— The UPM Family</div>
          </div>
        </div>
      </section>
    </>
  );
}

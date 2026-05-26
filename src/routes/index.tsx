import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Globe2, Factory, Award } from "lucide-react";
import hero from "@/assets/hero-buttons.jpg";
import craft from "@/assets/craft.jpg";
import bridalStyling from "@/assets/bridal-styling.jpg";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/CategoryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ActionButton } from "@/components/ActionButton";
import { brand } from "@/data/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${brand.full} — Pakistan's Modern Button House` },
      { name: "description", content: brand.shortDescription },
      { property: "og:title", content: `${brand.full} — Pakistan's Modern Button House` },
      { property: "og:description", content: brand.shortDescription },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const featured = categories.filter((c) =>
  ["metal", "fancy", "bridal", "coat", "shirt", "custom"].includes(c.id),
);

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="Luxury buttons macro photography"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 lg:pb-32 pt-32 w-full">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Lahore · Est. heritage of Anarkali</div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] text-balance">
              Pakistan's <span className="gold-gradient-text italic">modern</span> button house.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
              From the heart of Lahore's garment district to the world's finest tailors and designers — UPM Group crafts the small details that define couture.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/articles"
                className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold-soft transition-colors"
              >
                Explore Articles <ArrowUpRight size={14} />
              </Link>
              <Link
                to="/wholesale"
                className="inline-flex items-center gap-3 border border-gold/60 text-gold px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold hover:text-primary-foreground transition-colors"
              >
                Bulk & Export Inquiry
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 lg:right-12 hidden md:flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-foreground/60">
          <span className="h-px w-12 bg-gold/60" /> Scroll
        </div>
      </section>

      {/* INTRO MARQUEE / PILLARS */}
      <section className="border-y border-border bg-surface/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Sparkles, label: "Designer-grade finishing" },
            { icon: Factory, label: "In-house manufacturing" },
            { icon: Globe2, label: "Export-ready quantities" },
            { icon: Award, label: "Trusted by Pakistan's boutiques" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-foreground/80">
              <Icon size={18} className="text-gold shrink-0" />
              <span className="text-xs tracking-[0.14em] uppercase">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-28 lg:py-40 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7">
          <div className="eyebrow mb-6">The House of UPM</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05] text-balance">
            Not just a button shop. <span className="italic text-muted-foreground">A fashion accessories house</span> — built in Lahore, dressed worldwide.
          </h2>
        </div>
        <div className="lg:col-span-5 lg:pl-10">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            For generations, our family has supplied buttons to Pakistan's finest tailors, boutiques and exporters. Today, UPM Group brings that craft into a new era — premium photography, modern catalog, designer-first service. Every button is small. None of them are unimportant.
          </p>
          <div className="hairline mt-10" />
        </div>
      </section>

      {/* COLLECTIONS — bento grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="The Articles"
            title={<>Buttons for <span className="italic text-gold">every</span> garment.</>}
          />
          <Link to="/articles" className="text-[0.7rem] tracking-[0.24em] uppercase text-gold hover:underline">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:auto-rows-[20rem]">
          {featured.map((c, i) => (
            <CategoryCard key={c.id} category={c} featured={i === 0} />
          ))}
        </div>
      </section>

      {/* CRAFT EDITORIAL */}
      <section className="bg-surface/40 border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/3] overflow-hidden">
            <img src={craft} alt="UPM Group craftsmanship — hands sorting buttons" loading="lazy" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="order-1 lg:order-2 max-w-xl">
            <div className="eyebrow mb-6">Our Craft</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05]">
              Every piece chosen by hand.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Each batch is sorted, inspected and finished in our Lahore workshop — the same way our family has done it for decades. We obsess over the small things because we know the finish of a garment lives in its details.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "20+", l: "Years in market" },
                { n: "1000s", l: "Designs in stock" },
                { n: "7", l: "Core categories" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gold">{s.n}</div>
                  <div className="mt-1 text-[0.65rem] tracking-[0.22em] uppercase text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRIDAL FEATURE */}
      <section className="relative min-h-[80svh] flex items-center overflow-hidden">
        <img src={bridalStyling} alt="Bridal styling with ornate gold buttons" loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40 md:to-ink/20" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="max-w-xl">
            <div className="eyebrow mb-6">Bridal & Couture</div>
            <h2 className="font-display text-4xl md:text-6xl text-foreground leading-[1.05] text-balance">
              The buttons behind <span className="italic text-gold">her</span> most important day.
            </h2>
            <p className="mt-6 text-base md:text-lg text-foreground/80 leading-relaxed">
              Hand-finished filigree, pearl and crystal buttons — designed for lehengas, sherwanis and bridal couture across South Asia.
            </p>
            <div className="mt-10">
              <ActionButton mode="inquire" productName="Bridal & Luxury collection" variant="primary">
                Request bridal catalog
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      {/* WHOLESALE CTA */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-28 lg:py-40 text-center">
        <SectionHeading
          align="center"
          eyebrow="For boutiques · brands · factories · exporters"
          title={<>Bulk orders, custom logo buttons, export inquiries.</>}
          description="Working on a brand, a collection, or a factory order? Our wholesale team will quote, customise and ship — quickly."
        />
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Link to="/wholesale" className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold-soft">
            Start an inquiry <ArrowUpRight size={14} />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-3 border border-gold/60 text-gold px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold hover:text-primary-foreground">
            Visit the showroom
          </Link>
        </div>
      </section>
    </>
  );
}

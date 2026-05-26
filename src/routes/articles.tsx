import { createFileRoute } from "@tanstack/react-router";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/CategoryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/data/brand";
import heroImg from "@/assets/cat-metal.jpg";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: `Articles — ${brand.full}` },
      { name: "description", content: "Metal, fancy, shirt, coat, bridal, kids and custom logo buttons — explore UPM Group's full button articles for designers, brands and tailors in Pakistan." },
      { property: "og:title", content: `Articles — ${brand.full}` },
      { property: "og:description", content: "Explore UPM Group's full button articles — metal, fancy, bridal, coat, shirt, kids and custom." },
      { property: "og:url", content: "/articles" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  return (
    <>
      <section className="pt-40 pb-16 max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="The Articles"
          title={<>Seven categories. <span className="italic text-gold">Thousands</span> of designs.</>}
          description="From the quiet white of a dress shirt to the bold gold of a bridal sherwani — our articles are curated for every kind of garment a maker dreams up."
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c) => (
          <CategoryCard key={c.id} category={c} />
        ))}
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="border border-border bg-surface/40 p-10 md:p-16 text-center">
          <div className="eyebrow mb-4">Can't find what you need?</div>
          <h3 className="font-display text-3xl md:text-4xl text-foreground max-w-2xl mx-auto text-balance">
            We stock thousands of designs beyond our online showcase — and manufacture custom on request.
          </h3>
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex items-center justify-center bg-gold text-primary-foreground px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold-soft"
          >
            Ask our team on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

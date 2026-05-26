import type { Category } from "@/data/categories";
import { ActionButton } from "@/components/ActionButton";
import { ArrowUpRight } from "lucide-react";

export function CategoryCard({ category, featured = false }: { category: Category; featured?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden bg-surface border border-border ${
        featured ? "lg:row-span-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 via-30% to-ink/10" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
        <div className="eyebrow !text-[0.62rem] mb-2">{category.tagline}</div>
        <h3 className="font-display text-2xl md:text-3xl text-foreground">{category.name}</h3>
        <p className="mt-3 text-sm text-foreground/75 leading-relaxed max-w-md line-clamp-2">
          {category.description}
        </p>
        <div className="mt-5 flex items-center gap-4">
          <ActionButton mode="inquire" productName={category.name} variant="ghost" className="!px-5 !py-2.5">
            Inquire
            <ArrowUpRight size={14} className="ml-2" />
          </ActionButton>
        </div>
      </div>
    </article>
  );
}

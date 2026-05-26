import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && <div className="eyebrow mb-5">{eyebrow}</div>}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
          {description}
        </p>
      )}
    </div>
  );
}

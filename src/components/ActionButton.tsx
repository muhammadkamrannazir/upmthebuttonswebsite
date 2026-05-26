import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { whatsappUrl } from "@/data/brand";

type Mode = "inquire" | "shop"; // v2: "shop" wires to add-to-cart

type Variant = "primary" | "ghost";

export function ActionButton({
  mode = "inquire",
  variant = "primary",
  productName,
  children,
  className = "",
  ...rest
}: {
  mode?: Mode;
  variant?: Variant;
  productName?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "children">) {
  const base =
    "inline-flex items-center justify-center px-7 py-3.5 text-[0.72rem] tracking-[0.24em] uppercase transition-colors";
  const styles =
    variant === "primary"
      ? "bg-gold text-primary-foreground hover:bg-gold-soft"
      : "border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground";

  // v1: inquire via WhatsApp. v2: swap to cart action on `shop` mode.
  const href =
    mode === "inquire"
      ? whatsappUrl(
          productName
            ? `Hello UPM Group, I'd like to inquire about: ${productName}.`
            : undefined
        )
      : "#";

  return (
    <a
      href={href}
      target={mode === "inquire" ? "_blank" : undefined}
      rel={mode === "inquire" ? "noreferrer noopener" : undefined}
      className={`${base} ${styles} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

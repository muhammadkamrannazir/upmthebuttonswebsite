import metal from "@/assets/cat-metal.jpg";
import fancy from "@/assets/cat-fancy.jpg";
import shirt from "@/assets/cat-shirt.jpg";
import coat from "@/assets/cat-coat.jpg";
import bridal from "@/assets/cat-bridal.jpg";
import kids from "@/assets/cat-kids.jpg";
import custom from "@/assets/cat-custom.jpg";

export type Category = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  // v2: replace with real product list
  productsPreview?: { name: string; price?: string }[];
};

export const categories: Category[] = [
  {
    id: "metal",
    name: "Metal Buttons",
    slug: "metal",
    tagline: "Engraved · Brass · Heraldic",
    description:
      "Polished brass, antique gold and gunmetal buttons with crests and engraved detail — the signature of a finely tailored blazer.",
    image: metal,
  },
  {
    id: "fancy",
    name: "Fancy Buttons",
    slug: "fancy",
    tagline: "Crystal · Pearl · Rhinestone",
    description:
      "Statement buttons in pearl, rhinestone and crystal — for boutique pieces, evening wear and couture finishing.",
    image: fancy,
  },
  {
    id: "shirt",
    name: "Shirt Buttons",
    slug: "shirt",
    tagline: "Mother-of-pearl · Polyester",
    description:
      "Classic shirt buttons in white, ivory and mother-of-pearl — the quiet foundation of every well-made shirt.",
    image: shirt,
  },
  {
    id: "coat",
    name: "Coat Buttons",
    slug: "coat",
    tagline: "Horn · Resin · Matte",
    description:
      "Substantial four-hole and shank buttons for coats, blazers and overcoats. Built for the weight of fine wool.",
    image: coat,
  },
  {
    id: "bridal",
    name: "Bridal & Luxury",
    slug: "bridal",
    tagline: "Filigree · Zardozi · Heritage",
    description:
      "Hand-finished bridal buttons with pearls and crystal filigree — designed to dress the most important day.",
    image: bridal,
  },
  {
    id: "kids",
    name: "Kids Collection",
    slug: "kids",
    tagline: "Playful · Colourful · Safe",
    description:
      "Bright, child-safe buttons in playful shapes and pastel palettes — for childrenswear that delights.",
    image: kids,
  },
  {
    id: "custom",
    name: "Custom Logo Buttons",
    slug: "custom",
    tagline: "Brand · Monogram · Private label",
    description:
      "Custom-moulded buttons with your brand monogram, engraved or embossed in metal — for fashion houses and uniform programmes.",
    image: custom,
  },
];

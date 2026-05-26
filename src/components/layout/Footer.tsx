import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { brand, whatsappUrl } from "@/data/brand";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

function TiktokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.14V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.91a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <img src={logo} alt={brand.full} width={56} height={56} className="h-14 w-14 rounded-full ring-1 ring-gold/30" />
            <div>
              <div className="font-display text-2xl text-foreground">{brand.name}</div>
              <div className="eyebrow !text-[0.65rem]">{brand.tagline}</div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            {brand.shortDescription}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href={brand.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
               className="h-10 w-10 inline-flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href={brand.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
               className="h-10 w-10 inline-flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors">
              <Facebook size={16} />
            </a>
            <a href={brand.socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"
               className="h-10 w-10 inline-flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors">
              <TiktokIcon size={16} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="eyebrow mb-5">Explore</div>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/articles" className="hover:text-gold">Articles</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/wholesale" className="hover:text-gold">Wholesale & Export</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="eyebrow mb-5">Visit & Contact</div>
          <ul className="space-y-4 text-sm text-foreground/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-1 text-gold shrink-0" />
              <a href={brand.socials.maps} target="_blank" rel="noreferrer" className="hover:text-gold">
                {brand.address.line}, {brand.address.country}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-1 text-gold shrink-0" />
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-gold">
                {brand.phoneDisplay} · WhatsApp
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-1 text-gold shrink-0" />
              <a href={`mailto:${brand.email}`} className="hover:text-gold break-all">{brand.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-wider text-muted-foreground">
          <p>© {new Date().getFullYear()} {brand.legalName}. All rights reserved.</p>
          <p className="uppercase tracking-[0.22em]">Crafted in Lahore · Worn worldwide</p>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { brand, whatsappUrl } from "@/data/brand";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${brand.full}` },
      { name: "description", content: `Visit UPM Group at ${brand.address.full}. WhatsApp ${brand.phoneDisplay} or email ${brand.email}.` },
      { property: "og:title", content: `Contact — ${brand.full}` },
      { property: "og:description", content: `Visit UPM Group, Lahore. WhatsApp, email and showroom details.` },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: brand.legalName,
          image: "/logo.png",
          telephone: brand.phoneDisplay,
          email: brand.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: brand.address.full,
            addressLocality: brand.address.city,
            postalCode: "54000",
            addressCountry: brand.address.country,
          },
          openingHours: "Mo-Sa 10:00-21:00",
          url: "/contact",
          sameAs: [brand.socials.instagram, brand.socials.facebook, brand.socials.tiktok],
        }),
      },
    ],
  }),
  component: ContactPage,
});

function TiktokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.14V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.91a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" />
    </svg>
  );
}

function ContactPage() {
  // Embed our exact showroom location on the map
  const mapQuery = encodeURIComponent(
    "UPM Centre, 10 New Anarkali Road, Anarkali Tower, Lahore 54000, Pakistan",
  );
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <>
      <section className="pt-40 pb-16 max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Visit · Call · Write"
          title={<>Come see the <span className="italic text-gold">buttons</span> in person.</>}
          description="Our showroom in Lahore's garment district is open six days a week. WhatsApp is the fastest way to reach our team."
        />
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-6">
          <InfoRow icon={MapPin} title="Showroom">
            <a href={brand.socials.maps} target="_blank" rel="noreferrer" className="hover:text-gold">
              {brand.address.full}
            </a>
          </InfoRow>
          <InfoRow icon={Phone} title="WhatsApp & Call">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hover:text-gold">
              {brand.phoneDisplay}
            </a>
          </InfoRow>
          <InfoRow icon={Mail} title="Email">
            <a href={`mailto:${brand.email}`} className="hover:text-gold break-all">{brand.email}</a>
          </InfoRow>
          <InfoRow icon={Clock} title="Hours">{brand.hours}</InfoRow>

          <div className="hairline" />

          <div>
            <div className="eyebrow mb-4">Follow the house</div>
            <div className="flex items-center gap-3">
              <SocialChip href={brand.socials.instagram} icon={Instagram} label="Instagram" />
              <SocialChip href={brand.socials.facebook} icon={Facebook} label="Facebook" />
              <SocialChip href={brand.socials.tiktok} label="TikTok"><TiktokIcon /></SocialChip>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-border overflow-hidden aspect-[4/3] bg-surface">
            <iframe
              title="UPM Group — exact showroom location"
              src={mapSrc}
              className="h-full w-full grayscale-[40%] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={brand.socials.maps}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center border border-gold/60 text-gold px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold hover:text-primary-foreground"
            >
              Open in Google Maps
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center bg-gold text-primary-foreground px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold-soft"
            >
              Start a WhatsApp chat
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 border border-border bg-surface/40 p-6">
      <div className="h-10 w-10 shrink-0 flex items-center justify-center border border-gold/40 text-gold">
        <Icon size={16} />
      </div>
      <div>
        <div className="eyebrow !text-[0.6rem] mb-1">{title}</div>
        <div className="text-foreground/90 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

function SocialChip({ href, icon: Icon, label, children }: { href: string; icon?: React.ElementType; label: string; children?: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
       className="h-11 w-11 inline-flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors text-xs font-medium">
      {Icon ? <Icon size={16} /> : children}
    </a>
  );
}

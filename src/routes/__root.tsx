import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logo from "@/assets/logo.png";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/data/brand";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4">404</div>
        <h1 className="font-display text-5xl text-foreground">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center bg-gold text-primary-foreground px-7 py-3.5 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold-soft"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-foreground">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">Something went wrong. Try refreshing.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex items-center justify-center border border-gold/60 text-gold px-7 py-3.5 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold hover:text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.legalName,
  alternateName: brand.full,
  description: brand.shortDescription,
  url: "/",
  logo: "/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address.line,
    addressLocality: brand.address.city,
    addressCountry: brand.address.country,
  },
  sameAs: [
    brand.socials.instagram,
    brand.socials.facebook,
    brand.socials.tiktok,
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:site_name", content: brand.full },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0b0b0c" },
      { title: "UPM Group the Buttons" },
      { property: "og:title", content: "UPM Group the Buttons" },
      { name: "twitter:title", content: "UPM Group the Buttons" },
      { name: "description", content: "UPM Buttons: Lahore's Finest is a professional website showcasing a premium button brand." },
      { property: "og:description", content: "UPM Buttons: Lahore's Finest is a professional website showcasing a premium button brand." },
      { name: "twitter:description", content: "UPM Buttons: Lahore's Finest is a professional website showcasing a premium button brand." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c9458be-3a7b-4a58-9703-a9878629a80d/id-preview-21c57f0e--fc657ae2-e106-4e47-b794-a8f8e879796f.lovable.app-1779730131517.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4c9458be-3a7b-4a58-9703-a9878629a80d/id-preview-21c57f0e--fc657ae2-e106-4e47-b794-a8f8e879796f.lovable.app-1779730131517.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logo, type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

import { useState } from "react";
import { whatsappUrl, brand } from "@/data/brand";

// v1: submits via WhatsApp deep link. v2: wire to Lovable Cloud + email.
export function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    category: "Metal Buttons",
    quantity: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `New bulk inquiry — ${brand.full}`,
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Category: ${form.category}`,
      `Quantity: ${form.quantity}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  const inputBase =
    "w-full bg-transparent border-0 border-b border-border focus:border-gold focus:outline-none py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors";

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <div className="grid md:grid-cols-2 gap-7">
        <label className="block">
          <span className="eyebrow !text-[0.6rem]">Your name</span>
          <input required value={form.name} onChange={update("name")} className={inputBase} placeholder="Full name" />
        </label>
        <label className="block">
          <span className="eyebrow !text-[0.6rem]">Business</span>
          <input value={form.business} onChange={update("business")} className={inputBase} placeholder="Brand / boutique / factory" />
        </label>
        <label className="block">
          <span className="eyebrow !text-[0.6rem]">Category</span>
          <select value={form.category} onChange={update("category")} className={`${inputBase} appearance-none`}>
            {["Metal Buttons","Fancy Buttons","Shirt Buttons","Coat Buttons","Bridal & Luxury","Kids Collection","Custom Logo Buttons","Other"].map((o) => (
              <option key={o} value={o} className="bg-ink text-foreground">{o}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="eyebrow !text-[0.6rem]">Estimated quantity</span>
          <input value={form.quantity} onChange={update("quantity")} className={inputBase} placeholder="e.g. 5,000 pieces" />
        </label>
      </div>
      <label className="block">
        <span className="eyebrow !text-[0.6rem]">Message</span>
        <textarea required value={form.message} onChange={update("message")} rows={4} className={inputBase} placeholder="Tell us about your project, styles, colours, timeline…" />
      </label>
      <button
        type="submit"
        className="inline-flex items-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-[0.72rem] tracking-[0.24em] uppercase hover:bg-gold-soft transition-colors"
      >
        Send via WhatsApp
      </button>
      <p className="text-xs text-muted-foreground">
        Your inquiry opens a pre-filled WhatsApp message to our team for the fastest response.
      </p>
    </form>
  );
}

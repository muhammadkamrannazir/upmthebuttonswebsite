export const brand = {
  name: "UPM Group",
  tagline: "The Buttons",
  legalName: "UPM Group®",
  full: "UPM Group — The Buttons",
  shortDescription:
    "Pakistan's modern button house — crafting premium buttons for fashion designers, boutiques, tailors, brands and exporters since generations.",
  address: {
    // Short label used in header/footer
    line: "Anarkali Tower, Lahore",
    city: "Lahore",
    country: "Pakistan",
    // Full postal address used on the Contact page
    full:
      "Anarkali Tower, near Madina Market, UPM Centre, Street 10, New Anarkali Road, Lahore, 54000, Pakistan",
  },
  // WhatsApp uses international format without leading 0
  phoneDisplay: "+92 324 6645786",
  whatsapp: "923246645786",
  email: "upm6645@gmail.com",
  hours: "Mon – Sat · 10:00 AM – 9:00 PM",
  socials: {
    instagram: "https://www.instagram.com/upmthebuttons/",
    tiktok: "https://www.tiktok.com/@lalaabuzarghaffari6362",
    facebook: "https://www.facebook.com/share/1B4accga6C/?mibextid=wwXIfr",
    maps: "https://maps.app.goo.gl/wXwnqpCRb5JaVwPN9",
  },
};

export const whatsappUrl = (msg = "Hello UPM Group, I'd like to inquire about your buttons.") =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`;

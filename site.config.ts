import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Cheeku's Cakes",
  tagline: "Custom celebration cakes, with vegan options available.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Scarborough, Toronto, ON",
  siteUrl: "https://cheekus-cakes-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#9a5a66" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Custom cakes in Scarborough",
    headline: "Celebration cakes, baked at home with care",
    subhead: "Cheeku's Cakes, by Chehak Bhatia, makes custom celebration cakes in Scarborough, with vegan options available. Send a message to order.",
    images: [
      { src: "/images/post-2.jpg", alt: "A white and gold birthday cake from Cheeku's Cakes", width: 720, height: 1280 },
      { src: "/images/post-4.jpg", alt: "A two-tier teddy bear celebration cake from Cheeku's Cakes", width: 1080, height: 1297 },
      { src: "/images/post-8.jpg", alt: "A first birthday cake with a balloon from Cheeku's Cakes", width: 1080, height: 1440 },
    ],
    primaryCta: { label: "DM to order", href: "https://ig.me/m/cheekus_cakes" },
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Custom celebration cakes in Scarborough",
    "Vegan options available",
    "Home baked, by Chehak Bhatia",
    "Order by Instagram DM",
  ],

  about: {
    title: "Welcome to Cheeku's Cakes",
    body: [
      "Cheeku's Cakes is the home bakery of Chehak Bhatia in Scarborough, also known as Cheeku's Bakery. Custom celebration cakes are baked at home with love, and vegan options are available.",
      "Send a message on Instagram to order.",
    ],
    image: { src: "/images/post-4.jpg", alt: "A two-tier teddy bear celebration cake from Cheeku's Cakes", width: 1080, height: 1297 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message for a quote on your date, flavour and design.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Custom celebration cakes", description: "Vegan options are available." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cakes",
    items: [
      { src: "/images/post-2.jpg", width: 720, height: 1280, alt: "A white and gold birthday cake from Cheeku's Cakes", caption: "A birthday cake", href: "https://www.instagram.com/reel/Dd7WDu0ipGL/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1297, alt: "A two-tier teddy bear celebration cake from Cheeku's Cakes", caption: "A two-tier cake", href: "https://www.instagram.com/p/Dd4sABtFg5Y/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1920, alt: "A London-themed celebration cake from Cheeku's Cakes", caption: "A celebration cake", href: "https://www.instagram.com/reel/Ddy3zBoq1Nn/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1440, alt: "A first birthday cake with a balloon from Cheeku's Cakes", caption: "A first birthday cake", href: "https://www.instagram.com/p/DdslYzHlrKs/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1917, alt: "Chocolate cake pops from Cheeku's Cakes", caption: "Cake pops", href: "https://www.instagram.com/reel/Dd4sKpPILnA/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "cheekus_cakes",
    embeds: ["https://www.instagram.com/reel/Dd7WDu0ipGL/", "https://www.instagram.com/p/Dd4sABtFg5Y/", "https://www.instagram.com/p/DdslYzHlrKs/"],
  },

  order: {
    label: "How to order",
    title: "Order in a DM",
    intro: "Send a message on Instagram with your date, flavour and design.",
    dmMessage: "Hi Cheeku's Cakes! I would like to order.\nDate needed:\nFlavour and design:",
    headerCtaLabel: "DM to order",
    links: [
      { label: "DM to order", href: "https://ig.me/m/cheekus_cakes" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a message on Instagram with your date, flavour and design." },
    { q: "Do you offer vegan cakes?", a: "Yes. Vegan options are available." },
    { q: "Where are you based?", a: "Cheeku's Cakes is a home bakery in Scarborough, by Chehak Bhatia." },
  ],

  contact: {
    title: "Contact",
    area: "Scarborough, Toronto, Ontario",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/cheekus_cakes/" }],
  },

  seo: {
    title: "Cheeku's Cakes | Custom cakes in Scarborough",
    description: "Custom celebration cakes in Scarborough by Chehak Bhatia, with vegan options available. Home baked with love. Send an Instagram DM to order.",
    keywords: ["custom cakes Scarborough", "vegan cakes Toronto", "Cheeku's Cakes"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

// Work that isn't an MDX post. Posts are pulled from GraphQL alongside these.

export const featured = {
  title: `ANS`,
  tagline: `A wholesale nail and beauty supply store for NYC salons, rebuilt as a
custom Hydrogen storefront instead of a pre-built Liquid theme.`,
  role: `Co-founder · whole online build`,
  period: `2025 — present`,
  url: `https://www.angelinanailsupply.com`,
  stack: [`Shopify Hydrogen`, `React`, `GraphQL`, `Storefront API`, `Oxygen`],
  highlights: [
    `Custom storefront rather than a configured theme — routing, rendering and data fetching are all application code.`,
    `Server-side rendered on Oxygen, with caching and asset delivery tuned per route.`,
    `Bilingual English and Vietnamese, built for the Brooklyn wholesale customers the store actually serves.`,
    `Product discovery, collections, product pages, cart, wishlist and merchandising designed as one flow.`,
  ],
  next: `A mobile app on the same Storefront API foundation, in development.`,
}

// Measured against the legacy Liquid storefront, and still moving.
export const results = [
  {
    label: `Largest Contentful Paint`,
    from: null,
    to: `under 1.5s`,
    progress: 0.78,
    note: `Server-side rendered on Oxygen, with caching and asset delivery tuned per route.`,
  },
  {
    label: `Page-load performance`,
    from: `legacy theme`,
    to: `50–70% faster`,
    progress: 0.6,
    note: `Compared with the pre-built Liquid storefront.`,
  },
  {
    label: `Bounce rate`,
    from: `90.1%`,
    to: `70–80%`,
    progress: 0.45,
    note: `Rebuilt product discovery, collection navigation and mobile UX.`,
  },
  {
    label: `Conversion rate`,
    from: `baseline`,
    to: `+20–50%`,
    progress: 0.5,
    note: `Cart, wishlist and merchandising designed as one flow.`,
  },
  {
    label: `Average order value`,
    from: `$71.30`,
    to: `$75–$85`,
    progress: 0.35,
    note: `Recommendations, bundles and Seguno email integration.`,
  },
]

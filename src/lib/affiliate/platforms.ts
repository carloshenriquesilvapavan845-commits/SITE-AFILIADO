export const affiliatePlatforms = {
  MERCADO_LIVRE: {
    label: "Mercado Livre",
    ctaLabel: "Ver oferta no Mercado Livre",
    textClassName: "text-yellow-400",
  },
  SHOPEE: {
    label: "Shopee",
    ctaLabel: "Ver oferta na Shopee",
    textClassName: "text-orange-400",
  },
  AMAZON: {
    label: "Amazon",
    ctaLabel: "Ver oferta na Amazon",
    textClassName: "text-amber-400",
  },
} as const;

export type AffiliatePlatform = keyof typeof affiliatePlatforms;

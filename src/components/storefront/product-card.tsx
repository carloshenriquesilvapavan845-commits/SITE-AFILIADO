import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { affiliatePlatforms, type AffiliatePlatform } from "@/lib/affiliate/platforms";

type ProductCardProps = {
  product: {
    name: string;
    category: string;
    price: string;
    previousPrice?: string;
    image: string;
    affiliateUrl?: string;
    affiliateLabel?: string;
    marketplace?: AffiliatePlatform;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  const platform = product.marketplace
    ? affiliatePlatforms[product.marketplace]
    : null;

  return (
    <article className="group border border-border bg-surface transition-colors hover:border-muted-foreground/50">
      <Link href="/produtos" className="block">
        <div className="relative aspect-square overflow-hidden bg-surface-elevated">
          <Image
            src={product.image}
            alt=""
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 23vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <p className="text-xs text-muted-foreground">{product.category}</p>
        <div className="mt-2 flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium leading-5 text-foreground">
            {product.name}
          </h3>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            aria-hidden="true"
          />
        </div>
        <div className="mt-4 flex items-baseline gap-2">
          <strong className="text-base font-semibold">{product.price}</strong>
          {product.previousPrice ? (
            <span className="text-xs text-muted-foreground line-through">
              {product.previousPrice}
            </span>
          ) : null}
        </div>
        {platform ? (
          <p className={`mt-4 text-xs font-medium ${platform.textClassName}`}>
            Oferta via {platform.label}
          </p>
        ) : null}
        {product.affiliateUrl ? (
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noreferrer sponsored"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-red-600"
          >
            {product.affiliateLabel ?? platform?.ctaLabel ?? "Ver oferta"}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        ) : null}
        {product.affiliateUrl ? (
          <p className="mt-2 text-xs text-muted-foreground">
            Link de parceiro{platform ? ` ${platform.label}` : ""}
          </p>
        ) : null}
      </div>
    </article>
  );
}

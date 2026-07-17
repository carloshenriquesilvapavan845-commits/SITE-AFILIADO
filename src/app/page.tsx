import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Truck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ProductCard } from "@/components/storefront/product-card";
import {
  categories,
  featuredProducts,
  shopeeFeaturedProducts,
} from "@/lib/catalog";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Compatibilidade clara",
    description: "Encontre a peça certa para a sua moto.",
  },
  {
    icon: Truck,
    title: "Envio para todo o Brasil",
    description: "Acompanhe cada etapa do seu pedido.",
  },
  {
    icon: ShieldCheck,
    title: "Compra com confiança",
    description: "Informação técnica antes de decidir.",
  },
];

const categoryTextures = {
  Freios: "/categories/freios-texture.png",
  Motor: "/categories/motor-texture.png",
  Suspensão: "/categories/suspensao-texture.png",
  Transmissão: "/categories/transmissao-texture.png",
  Elétrica: "/categories/eletrica-texture.png",
  Pneus: "/categories/pneus-texture.png",
} as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative isolate min-h-[580px] overflow-hidden border-b border-border">
          <Image
            src="/hero/pavan-motoparts-rider.png"
            alt="Motociclista ao lado de uma moto esportiva"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-black/65" />
          <div className="mx-auto flex min-h-[580px] max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-primary">
                RR14 Marketplace
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">Peças para a sua moto.</h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
                Produtos, compatibilidade e conteúdo técnico para você comprar
                com mais segurança.
              </p>
              <Link
                href="/produtos"
                className="mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-red-600"
              >
                Explorar produtos
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-primary">
                  Comprar por categoria
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  O que a sua moto precisa
                </h2>
              </div>
              <Link
                href="/categorias"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Ver todas
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => {
                const texture =
                  categoryTextures[
                    category as keyof typeof categoryTextures
                  ];

                return (
                  <Link
                    key={category}
                    href="/categorias"
                    className="relative isolate min-h-24 overflow-hidden border-b border-r border-border p-4 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {texture ? (
                      <Image
                        src={texture}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                        className="-z-10 scale-110 object-cover opacity-[0.14] blur-[3px]"
                      />
                    ) : null}
                    <span className="relative z-10">{category}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-primary">Em destaque</p>
              <h2 className="mt-2 text-2xl font-semibold">
                Ofertas imperdíveis via Mercado Livre
              </h2>
            </div>
            <Link
              href="/produtos"
              className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              Ver catálogo <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-surface/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-orange-400">
                  Em destaque
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Ofertas imperdíveis via Shopee
                </h2>
              </div>
              <Link
                href="/produtos"
                className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
              >
                Ver catálogo <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {shopeeFeaturedProducts.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <Icon
                  size={23}
                  className="mt-0.5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-base font-semibold">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

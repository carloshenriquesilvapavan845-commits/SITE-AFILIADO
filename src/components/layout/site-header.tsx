import Image from "next/image";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag } from "lucide-react";

const navigation = [
  { href: "/produtos", label: "Produtos" },
  { href: "/categorias", label: "Categorias" },
  { href: "/ofertas", label: "Ofertas" },
  { href: "/lancamentos", label: "Lançamentos" },
  { href: "/conteudos", label: "Conteúdos" },
];

const iconLinks = [
  { href: "/busca", label: "Buscar", icon: Search },
  { href: "/favoritos", label: "Favoritos", icon: Heart },
  { href: "/carrinho", label: "Carrinho", icon: ShoppingBag },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="RR14 Marketplace" className="shrink-0">
          <Image
            src="/brand/rr14-motoparts-logo.png"
            alt="RR14 Motoparts"
            width={106}
            height={47}
            priority
            className="h-auto w-[106px]"
          />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {iconLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              title={label}
              className="grid size-10 place-items-center text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          ))}
          <details className="relative lg:hidden">
            <summary
              aria-label="Abrir navegação"
              title="Abrir navegação"
              className="grid size-10 cursor-pointer list-none place-items-center text-muted-foreground [&::-webkit-details-marker]:hidden"
            >
              <Menu size={21} strokeWidth={1.8} aria-hidden="true" />
            </summary>
            <nav
              className="absolute right-0 top-12 z-20 grid w-52 border border-border bg-surface p-2 shadow-elevated"
              aria-label="Navegação móvel"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

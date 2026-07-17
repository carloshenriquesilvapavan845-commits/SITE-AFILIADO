import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/contato", label: "Contato" },
  { href: "/sobre", label: "Sobre" },
  { href: "/politica-de-privacidade", label: "Privacidade" },
  { href: "/termos-de-uso", label: "Termos de uso" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="max-w-sm">
          <Image
            src="/brand/pavan-motoparts-logo.png"
            alt="Pavan Motoparts"
            width={144}
            height={80}
            className="h-20 w-36 object-cover object-top"
          />
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            Uma parceria oficial com Pavan Motoparts.
          </p>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            Alguns links deste site podem gerar comissao. Como associado da
            Amazon, eu ganho com compras qualificadas.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

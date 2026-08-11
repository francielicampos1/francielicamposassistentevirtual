import { Link } from "@tanstack/react-router";
import logo from "../assets/logo-francieli.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <img
            src={logo.url}
            alt="Logo Francieli Campos"
            width={56}
            height={56}
            loading="lazy"
            className="size-14 object-contain"
          />
          <p className="mt-3 font-display text-xl">Francieli Campos</p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Apoio administrativo remoto para quem quer voltar a cuidar do próprio negócio.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:items-end">
          <Link to="/servicos" className="hover:text-foreground">
            Serviços
          </Link>
          <Link to="/contato" className="hover:text-foreground">
            Contato
          </Link>
          <span className="text-xs">
            © {new Date().getFullYear()} Francieli Campos · Atendimento 100% remoto
          </span>
        </div>
      </div>
    </footer>
  );
}

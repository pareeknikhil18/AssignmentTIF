import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import { MammothzyBrand } from "./header"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-12">
      <div className="flex flex-col items-center py-10 gap-4">
        <MammothzyBrand size="lg" />
        <p className="text-sm text-muted-foreground text-center">
          Marketplace for searching, filtering and instantly booking team activities
        </p>
        <div className="flex items-center gap-4 mt-1">
          <a href="#" aria-label="Facebook" className="text-foreground hover:text-foreground/70 transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Instagram" className="text-foreground hover:text-foreground/70 transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-foreground/70 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Email" className="text-foreground hover:text-foreground/70 transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center">
        <p className="text-sm text-muted-foreground">Copyright &copy; 2024</p>
      </div>
    </footer>
  )
}

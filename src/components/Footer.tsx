import { Diamond } from "lucide-react";

const sitemap = ["Home", "About us", "Services", "Work", "Pricing", "FAQ"];
const other = ["Privacy Policy", "Terms of Service", "Careers"];

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <a href="#" className="flex items-center gap-2 text-foreground font-bold text-xl">
            <Diamond className="w-5 h-5" />
            Awake
          </a>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Crafting bold digital experiences for forward-thinking brands since 2009.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Sitemap</h4>
          <ul className="space-y-2">
            {sitemap.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Other Pages</h4>
          <ul className="space-y-2">
            {other.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>123 Design Street, NY 10001</li>
            <li>hello@awake.studio</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Awake. All rights reserved.
      </div>
    </footer>
  );
}

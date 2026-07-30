import { FileText, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

const socials = [
  { label: "Resume", href: "#", Icon: FileText },
  { label: "GitHub", href: "https://github.com", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Email", href: "mailto:hello@vansh.dev", Icon: Mail },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <ul className="flex items-center gap-6 text-sm text-foreground/85">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="transition-opacity hover:opacity-60">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-5">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="block text-foreground/85 transition-opacity hover:opacity-60"
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

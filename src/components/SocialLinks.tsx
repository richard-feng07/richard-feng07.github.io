import { LINKS } from "../content";

type SocialIcon = "email" | "github" | "linkedin";

type SocialLink = {
  label: string;
  href: string;
  icon: SocialIcon;
};

const SOCIAL_LINKS: SocialLink[] = [
  { label: "Email Richard", href: LINKS.email, icon: "email" },
  { label: "Richard on GitHub", href: LINKS.github, icon: "github" },
  { label: "Richard on LinkedIn", href: LINKS.linkedin, icon: "linkedin" },
];

function Icon({ name }: { name: SocialIcon }) {
  if (name === "email") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .6a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.3 1.8 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.3-3.3c-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3a11.7 11.7 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.7 1.7.2 3 .1 3.3a4.7 4.7 0 0 1 1.3 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .6Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 8a2.2 2.2 0 0 1 0-4.5ZM3.4 9.8h3.6v10.7H3.4V9.8Zm5.8 0h3.5v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5v5.6h-3.6v-5c0-1.2 0-2.8-1.8-2.8s-2.1 1.3-2.1 2.7v5.1H9.2V9.8Z" />
    </svg>
  );
}

export default function SocialLinks() {
  return (
    <ul className="mt-8 flex gap-2">
      {SOCIAL_LINKS.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={link.label}
            title={link.label}
            className="flex h-9 w-9 items-center justify-center border border-rule text-muted transition-colors hover:border-terracotta hover:bg-terracotta hover:text-ivory"
          >
            <span className="h-4 w-4">
              <Icon name={link.icon} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

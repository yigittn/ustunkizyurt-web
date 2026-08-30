import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Yazı beyaz değil lacivert: beyaz, gül zeminde 2.65:1 ile okunmuyordu.
  // Lacivert ile 5.36:1 — palet aynı kalırken WCAG AA sağlanıyor.
  primary:
    "bg-rose-400 text-ink shadow-soft hover:bg-rose-300 hover:shadow-card active:bg-rose-200",
  outline:
    "border border-ink/15 bg-transparent text-ink hover:border-rose-400 hover:bg-rose-50 hover:text-rose-700",
  ghost: "text-ink hover:bg-rose-50 hover:text-rose-700",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-8 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps & {
  href?: never;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...linkProps } = rest as ButtonAsLink;
    const external = /^(https?:|tel:|mailto:)/.test(href);

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

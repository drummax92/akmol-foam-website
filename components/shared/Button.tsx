import type { ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "whatsapp"
  | "darkOutline";
export type ButtonSize = "sm" | "md" | "mobile";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  target?: string;
  rel?: string;
};

const variantClasses = {
  primary:
    "bg-gradient-to-r from-[#1E6BFF] to-[#4B8DFF] text-white shadow-lg shadow-[#1E6BFF]/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1E6BFF]/30",
  secondary:
    "border border-[#D8E3EE] bg-white/80 text-[#10202E] shadow-sm shadow-[#10202E]/5 backdrop-blur hover:-translate-y-0.5 hover:bg-white hover:shadow-md",
  whatsapp:
    "bg-gradient-to-r from-[#25D366] to-[#1DB954] text-white shadow-lg shadow-[#25D366]/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30",
  darkOutline:
    "border border-white/20 bg-white/5 text-white lg:backdrop-blur hover:-translate-y-0.5 hover:bg-white/10",
};

const sizeClasses = {
  sm: "px-4 py-3 text-sm",
  md: "px-6 py-4",
  mobile: "px-3 py-3 text-xs",
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-2xl text-center font-semibold transition-all duration-200",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

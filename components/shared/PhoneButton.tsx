import type { ReactNode } from "react";
import { siteConfig } from "../../lib/site";
import { Button, type ButtonSize, type ButtonVariant } from "./Button";

type PhoneButtonProps = {
  children?: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function PhoneButton({
  children = "Позвонить",
  className = "",
  variant = "secondary",
  size = "md",
}: PhoneButtonProps) {
  const href = siteConfig.phoneNumber
    ? `tel:${siteConfig.phoneNumber}`
    : "#contacts";

  return (
    <Button href={href} variant={variant} size={size} className={className}>
      {children}
    </Button>
  );
}

import type { ReactNode } from "react";
import { siteConfig } from "../../lib/site";
import { Button, type ButtonSize, type ButtonVariant } from "./Button";

type WhatsAppButtonProps = {
  children?: ReactNode;
  className?: string;
  message?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function WhatsAppButton({
  children = "Написать в WhatsApp",
  className = "",
  message,
  variant = "whatsapp",
  size = "md",
}: WhatsAppButtonProps) {
  const encodedMessage = message ? encodeURIComponent(message) : "";

  const href = siteConfig.whatsappNumber
    ? `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}${
        encodedMessage ? `&text=${encodedMessage}` : ""
      }`
    : "#calculator";

  return (
    <Button href={href} variant={variant} size={size} className={className}>
      {children}
    </Button>
  );
}

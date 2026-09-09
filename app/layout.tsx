import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Акмолинские пенопласты | Пенополистирол ППС в Астане",
  description:
    "Производство и продажа пенополистирола ППС в Астане. ППС-15-Т, ППС-20-Р, ППС-25-Р, ППС-35-Р, крошка, доставка, самовывоз и расчёт через WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBottomBar } from "./MobileBottomBar";

type SiteLayoutProps = {
  children: ReactNode;
};

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Header />

      <main className="relative min-h-screen overflow-hidden text-[#10202E] pb-20 lg:pb-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#F2F7FF_0%,#F7F9FB_36%,#FFFFFF_72%,#F7FBFF_100%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(30,107,255,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(37,211,102,0.07),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(30,107,255,0.05),transparent_22%)]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#10202E_1px,transparent_1px),linear-gradient(to_bottom,#10202E_1px,transparent_1px)] [background-size:42px_42px]" />

        <div className="relative z-10">{children}</div>
      </main>

      <Footer />
      <MobileBottomBar />
    </>
  );
}

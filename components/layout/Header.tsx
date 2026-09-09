"use client";

import { useState } from "react";
import { navItems, siteConfig } from "../../lib/site";
import { Button } from "../shared/Button";
import { PhoneButton } from "../shared/PhoneButton";
import { WhatsAppButton } from "../shared/WhatsAppButton";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#CFE0F5]/90 bg-[linear-gradient(90deg,rgba(230,241,255,0.94),rgba(245,249,255,0.88),rgba(232,255,243,0.82))] shadow-sm shadow-[#10202E]/5 lg:backdrop-blur-xl lg:backdrop-saturate-150">
      <div className="mx-auto max-w-7xl px-5 py-3 lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E6BFF] to-[#8CB8FF] text-sm font-black text-white shadow-lg shadow-[#1E6BFF]/20">
              АП
            </div>

            <div className="leading-tight">
              <p className="text-sm font-black text-[#10202E] sm:text-base">
                {siteConfig.companyName}
              </p>
              <p className="hidden text-xs font-medium text-[#7A8793] sm:block">
                Пенополистирол ППС в Астане
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-bold text-[#4A5A68] lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#1E6BFF]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="/calculator" variant="primary" size="sm">
              Рассчитать
            </Button>

            <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>

            <PhoneButton size="sm">Позвонить</PhoneButton>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex items-center gap-2 rounded-2xl border border-[#D8E3EE] bg-white/80 px-4 py-3 text-sm font-black text-[#10202E] shadow-sm lg:backdrop-blur transition hover:bg-white lg:hidden"
            aria-label="Открыть меню"
            aria-expanded={isMenuOpen}
          >
            <span>Меню</span>
            <span
              className={`text-lg leading-none transition-transform duration-300 ${
                isMenuOpen ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-4 rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-[0_20px_50px_rgba(16,32,46,0.10)] lg:backdrop-blur">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-black text-[#10202E] transition hover:bg-[#EEF5FF] hover:text-[#1E6BFF]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

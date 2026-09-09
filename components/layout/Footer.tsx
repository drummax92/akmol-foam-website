import { siteConfig } from "../../lib/site";

const footerLinks = [
  { label: "Главная", href: "/" },
  { label: "Продукция и цены", href: "/products" },
  { label: "Калькулятор", href: "/calculator" },
  { label: "Доставка и контакты", href: "/delivery" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#D8E3EE]/80 bg-[linear-gradient(90deg,rgba(238,245,255,0.92),rgba(255,255,255,0.9),rgba(236,255,245,0.86))]">
      <div className="mx-auto max-w-7xl px-6 pt-5 pb-28 lg:py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-black text-[#10202E]">
              {siteConfig.companyName}
            </h2>

            <p className="mt-1 text-sm text-[#7A8793]">
              Пенополистирол ППС в Астане
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#4A5A68]">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#1E6BFF]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-[#4A5A68]">
            <a href="/calculator" className="transition hover:text-[#1E6BFF]">
              Отправить заявку
            </a>

            <a
              href={`tel:${siteConfig.phoneNumber}`}
              className="transition hover:text-[#1E6BFF]"
            >
              Позвонить
            </a>

            <a
              href={siteConfig.twoGisUrl}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#1E6BFF]"
            >
              2ГИС
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 border-t border-[#D8E3EE]/80 pt-4 text-xs text-[#7A8793] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteConfig.companyName}</p>
          <p>Данные уточняются перед оформлением заказа.</p>
        </div>
      </div>
    </footer>
  );
}

import { Button } from "../shared/Button";
import { Container } from "../shared/Container";

const links = [
  {
    number: "01",
    title: "Продукция и цены",
    description: "Марки ППС, крошка и актуальные цены по прайсу.",
    href: "/products",
    buttonText: "Смотреть",
  },
  {
    number: "02",
    title: "Калькулятор",
    description: "Предварительный расчёт стоимости прямо на сайте.",
    href: "/calculator",
    buttonText: "Рассчитать",
  },
  {
    number: "03",
    title: "Доставка и оплата",
    description: "Платная доставка по городу, самовывоз и способы оплаты.",
    href: "/delivery",
    buttonText: "Условия",
  },
  {
    number: "04",
    title: "Контакты",
    description: "Телефон, WhatsApp, адрес, график работы и карта 2ГИС.",
    href: "/delivery#contacts",
    buttonText: "Открыть контакты",
  },
];

export function HomeLinksSection() {
  return (
    <section className="relative py-8 lg:py-10">
      <Container>
        <div className="rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(16,32,46,0.08)] lg:backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1E6BFF]">
                Разделы сайта
              </p>

              <h2 className="text-3xl font-black tracking-tight text-[#10202E] sm:text-5xl">
                Быстро найдите нужную информацию
              </h2>

              <p className="mt-5 leading-8 text-[#4A5A68]">
                Перейдите к нужному разделу: посмотрите продукцию и цены,
                рассчитайте стоимость, уточните доставку или свяжитесь с нами.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {links.map((link) => (
                <div
                  key={link.title}
                  className="group rounded-3xl border border-[#E4EAF0] bg-[#F7F9FB]/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#1E6BFF]/10"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E6BFF] to-[#8CB8FF] text-xs font-black text-white shadow-lg shadow-[#1E6BFF]/20">
                    {link.number}
                  </div>

                  <h3 className="text-lg font-bold text-[#10202E]">
                    {link.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#4A5A68]">
                    {link.description}
                  </p>

                  <Button
                    href={link.href}
                    variant="secondary"
                    size="sm"
                    className="mt-5"
                  >
                    {link.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { priceItems } from "../../lib/data";
import { siteConfig } from "../../lib/site";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";

export function PricesSection() {
  return (
    <section id="prices" className="relative pb-14 lg:pb-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(16,32,46,0.08)] lg:backdrop-blur sm:p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1E6BFF]">
              Прайс
            </p>

            <h2 className="text-3xl font-black tracking-tight text-[#10202E] sm:text-4xl">
              Марки и цены
            </h2>

            <p className="mt-5 leading-8 text-[#4A5A68]">
              Цены указаны по прайс-листу от {siteConfig.priceDate}. Финальная
              стоимость может уточняться при заказе и зависит от марки, объёма,
              резки, доставки и условий оплаты.
            </p>

            <div className="mt-6 rounded-2xl bg-[#EEF5FF] p-5">
              <h3 className="font-bold text-[#10202E]">Размеры и резка</h3>

              <p className="mt-2 text-sm leading-6 text-[#4A5A68]">
                Длина и ширина листов стандартные. Возможна резка по нужной
                толщине после уточнения параметров заказа.
              </p>
            </div>

            <Button href="/calculator" variant="primary" className="mt-6">
              Рассчитать стоимость
            </Button>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(16,32,46,0.08)] lg:backdrop-blur sm:p-8">
            <div className="grid gap-3">
              {priceItems.map((item) => (
                <div
                  key={item.name}
                  className="grid gap-4 rounded-2xl border border-[#E4EAF0] bg-[#F7F9FB]/80 px-5 py-4 sm:grid-cols-[1fr_auto_auto] sm:items-center"
                >
                  <p className="font-bold text-[#10202E]">{item.name}</p>

                  <p className="font-black text-[#1E6BFF] sm:text-right">
                    {item.price}
                  </p>

                  <Button
                    href={`/calculator?material=${encodeURIComponent(item.name)}`}
                    variant="secondary"
                    size="sm"
                  >
                    Рассчитать
                  </Button>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-[#7A8793]">
              Цены могут изменяться. Для точного расчёта уточните актуальную
              стоимость при оформлении заявки.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

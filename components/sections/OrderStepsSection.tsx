import { orderSteps } from "../../lib/data";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";

export function OrderStepsSection() {
  return (
    <section className="relative pb-14 lg:pb-20">
      <Container>
        <div className="rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(16,32,46,0.08)] lg:backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1E6BFF]">
                Как заказать
              </p>

              <h2 className="text-3xl font-black tracking-tight text-[#10202E] sm:text-5xl">
                Как оформить заказ
              </h2>

              <p className="mt-5 leading-8 text-[#4A5A68]">
                Сначала рассчитайте примерную стоимость, затем отправьте заявку
                в WhatsApp и согласуйте финальные детали: наличие, оплату,
                доставку или самовывоз.
              </p>

              <div className="mt-8 grid gap-3 sm:max-w-md">
                <Button href="/calculator" variant="primary">
                  Рассчитать стоимость
                </Button>

                <Button href="/delivery" variant="secondary">
                  Перейти к контактам
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#E4EAF0] bg-[#F7F9FB]/80 p-4 sm:p-5">
              <div className="grid gap-3">
                {orderSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="grid gap-4 rounded-2xl border border-white/80 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1E6BFF]/10 sm:grid-cols-[auto_1fr] sm:p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E6BFF] to-[#8CB8FF] text-sm font-black text-white shadow-lg shadow-[#1E6BFF]/20">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#10202E]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#4A5A68]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

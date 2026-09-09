import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { PhoneButton } from "../shared/PhoneButton";
import { WhatsAppButton } from "../shared/WhatsAppButton";

export function HeroSection() {
  const benefits = [
    "ППС-15-Т, 20-Р, 25-Р, 35-Р",
    "Резка по толщине",
    "От одного листа",
    "Доставка по городу",
  ];

  return (
    <section className="relative overflow-hidden pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pt-8 lg:pb-24">
      <div className="pointer-events-none absolute left-[-10rem] top-[-8rem] h-80 w-80 rounded-full bg-[#1E6BFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-20 h-96 w-96 rounded-full bg-[#25D366]/10 blur-3xl" />

      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-[#D8E3EE] bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#1E6BFF] shadow-sm lg:backdrop-blur">
              Акмолинские пенопласты
            </div>

            <h1 className="mt-6 max-w-full text-[44px] font-black leading-[0.98] tracking-tight text-[#10202E] sm:text-6xl lg:text-7xl">
              Пенопласт в Астане
            </h1>
            <p className="mt-6 max-w-full text-lg leading-8 text-[#4A5A68] sm:text-xl sm:leading-9">
              Листы ППС, дроблёная крошка и крошка ППС. Выберите марку, укажите
              параметры и получите предварительную стоимость прямо на сайте.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/calculator" variant="primary">
                Рассчитать стоимость
              </Button>

              <WhatsAppButton>Написать в WhatsApp</WhatsAppButton>

              <PhoneButton>Позвонить</PhoneButton>
            </div>

            <div className="mt-8 hidden gap-3 lg:grid lg:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 text-sm font-semibold text-[#10202E] shadow-sm shadow-[#10202E]/5 lg:backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#DCEBFF] via-[#EEF5FF] to-white shadow-2xl shadow-[#1E6BFF]/10" />

            <div className="relative min-w-0 overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-[#10202E]/10 lg:backdrop-blur">
              <div className="w-full min-w-0 max-w-full absolute right-0 top-0 h-32 w-32 rounded-bl-[4rem] bg-[#1E6BFF]/10" />

              <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-[#1E6BFF]">
                Доступно для заказа
              </p>

              <h2 className="mt-4 max-w-full text-4xl font-black tracking-tight text-[#10202E] sm:text-5xl">
                Пенополистирол в листах и крошка ППС
              </h2>

              <div className="relative mt-6 grid gap-4">
                <div className="rounded-2xl border border-[#E4EAF0] bg-white p-5 shadow-sm">
                  <p className="font-bold text-[#10202E]">Листовой ППС</p>
                  <p className="mt-2 text-sm leading-6 text-[#4A5A68]">
                    Стандартная длина и ширина, резка по нужной толщине после
                    уточнения параметров заказа.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E4EAF0] bg-white p-5 shadow-sm">
                  <p className="font-bold text-[#10202E]">Крошка ППС</p>
                  <p className="mt-2 text-sm leading-6 text-[#4A5A68]">
                    Дроблёная крошка и крошка ППС для пуфов, бинбегов, утепления
                    швов и других задач.
                  </p>
                </div>
              </div>

              <div className="relative mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#EEF5FF] p-4">
                  <p className="text-xl font-black text-[#10202E]">Доставка</p>
                  <p className="mt-1 text-xs font-medium text-[#4A5A68]">
                    по городу
                  </p>
                </div>

                <div className="rounded-2xl bg-[#EEF5FF] p-4">
                  <p className="text-xl font-black text-[#10202E]">Расчёт</p>
                  <p className="mt-1 text-xs font-medium text-[#4A5A68]">
                    на сайте
                  </p>
                </div>

                <div className="rounded-2xl bg-[#EEF5FF] p-4">
                  <p className="text-xl font-black text-[#10202E]">Заказ</p>
                  <p className="mt-1 text-xs font-medium text-[#4A5A68]">
                    через WhatsApp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

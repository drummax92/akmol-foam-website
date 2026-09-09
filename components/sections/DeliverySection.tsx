import { Container } from "../shared/Container";

export function DeliverySection() {
  return (
    <section id="delivery" className="relative pt-8 pb-8 lg:pt-10 lg:pb-10">
      <Container>
        <div className="rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(16,32,46,0.08)] lg:backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1E6BFF]">
                Доставка
              </p>

              <h1 className="text-4xl font-black tracking-tight text-[#10202E] sm:text-6xl">
                Доставка и самовывоз в Астане
              </h1>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-[#E4EAF0] bg-[#F7F9FB]/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#1E6BFF]/10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E6BFF] to-[#8CB8FF] text-xl shadow-lg shadow-[#1E6BFF]/20">
                  🚚
                </div>

                <h2 className="text-2xl font-black text-[#10202E]">Доставка</h2>

                <p className="mt-4 leading-7 text-[#4A5A68]">
                  Платная доставка доступна по городу Астана. Условия зависят от
                  объёма заказа, адреса и особенностей продукции.
                </p>
              </div>

              <div className="rounded-3xl border border-[#E4EAF0] bg-[#F7F9FB]/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#1E6BFF]/10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E6BFF] to-[#8CB8FF] text-xl shadow-lg shadow-[#1E6BFF]/20">
                  📍
                </div>

                <h2 className="text-2xl font-black text-[#10202E]">
                  Самовывоз
                </h2>

                <p className="mt-4 leading-7 text-[#4A5A68]">
                  Можно забрать заказ самостоятельно по адресу. Перед приездом
                  лучше заранее уточнить детали заказа и готовность продукции.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

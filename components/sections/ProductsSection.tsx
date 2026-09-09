import { products } from "../../lib/data";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";

export function ProductsSection() {
  return (
    <section id="products" className="relative pt-8 pb-12 lg:pt-10 lg:pb-14">
      <Container>
        <div className="rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(16,32,46,0.08)] lg:backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1E6BFF]">
                Продукция
              </p>

              <h1 className="text-4xl font-black tracking-tight text-[#10202E] sm:text-5xl">
                Продукция и марки ППС
              </h1>

              <p className="mt-5 leading-8 text-[#4A5A68]">
                Листовой пенополистирол ППС, марки по прайсу, дроблёная крошка и
                крошка ППС. Выберите нужный вариант и рассчитайте стоимость на
                сайте.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#D8E3EE] bg-[#EEF5FF]/80 p-4 shadow-sm">
                <p className="text-sm font-bold text-[#1E6BFF]">Листовой ППС</p>
                <p className="mt-2 text-2xl font-black text-[#10202E]">
                  от 21 000
                </p>
                <p className="mt-1 text-xs font-medium text-[#4A5A68]">тг/м³</p>
              </div>

              <div className="rounded-2xl border border-[#D8E3EE] bg-[#EEF5FF]/80 p-4 shadow-sm">
                <p className="text-sm font-bold text-[#1E6BFF]">Заказ</p>
                <p className="mt-2 text-2xl font-black text-[#10202E]">от 1</p>
                <p className="mt-1 text-xs font-medium text-[#4A5A68]">листа</p>
              </div>

              <div className="rounded-2xl border border-[#D8E3EE] bg-[#EEF5FF]/80 p-4 shadow-sm">
                <p className="text-sm font-bold text-[#1E6BFF]">Крошка ППС</p>
                <p className="mt-2 text-2xl font-black text-[#10202E]">
                  от 1 500
                </p>
                <p className="mt-1 text-xs font-medium text-[#4A5A68]">тг/кг</p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="group flex h-full flex-col rounded-3xl border border-[#E4EAF0] bg-[#F7F9FB]/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#1E6BFF]/10"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E6BFF] to-[#8CB8FF] text-white shadow-lg shadow-[#1E6BFF]/20">
                  ✓
                </div>

                <h3 className="text-xl font-bold text-[#10202E]">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#4A5A68]">
                  {product.description}
                </p>

                <div className="mt-auto pt-5">
                  <Button
                    href={product.href ?? "/calculator"}
                    variant="secondary"
                    size="sm"
                  >
                    {product.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

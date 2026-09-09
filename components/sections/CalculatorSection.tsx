"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "../shared/Button";
import { materials } from "../../lib/data";
import { siteConfig } from "../../lib/site";

type CalculatorSectionProps = {
  initialMaterial?: string;
};

function getInitialMaterial(initialMaterial?: string) {
  if (!initialMaterial) {
    return "ППС-15-Т";
  }
  return materials.some((material) => material.name === initialMaterial)
    ? initialMaterial
    : "ППС-15-Т";
}

function parseNumber(value: string) {
  const normalized = value.replace(",", ".").trim();
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : 0;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 3,
  }).format(value);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(value);
}

export function CalculatorSection({ initialMaterial }: CalculatorSectionProps) {
  const [materialName, setMaterialName] = useState(() =>
    getInitialMaterial(initialMaterial),
  );
  const [calculationMode, setCalculationMode] = useState<"sheets" | "area">(
    "sheets",
  );

  const [length, setLength] = useState("1500");
  const [width, setWidth] = useState("1200");
  const [thickness, setThickness] = useState("50");
  const [quantity, setQuantity] = useState("1");
  const [area, setArea] = useState("");
  const [weight, setWeight] = useState("");

  const [delivery, setDelivery] = useState("Пока не знаю");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const selectedMaterial =
    materials.find((material) => material.name === materialName) ??
    materials[0];

  const isCrumb = selectedMaterial.unit === "kg";

  const calculation = useMemo(() => {
    if (isCrumb) {
      const weightKg = parseNumber(weight);
      const total = weightKg * selectedMaterial.price;

      return {
        areaM2: 0,
        volumeM3: 0,
        weightKg,
        total,
      };
    }

    const thicknessMm = parseNumber(thickness);
    const thicknessM = thicknessMm / 1000;

    if (calculationMode === "area") {
      const areaM2 = parseNumber(area);
      const volumeM3 = areaM2 * thicknessM;
      const total = volumeM3 * selectedMaterial.price;

      return {
        areaM2,
        volumeM3,
        weightKg: 0,
        total,
      };
    }

    const lengthM = parseNumber(length) / 1000;
    const widthM = parseNumber(width) / 1000;
    const count = parseNumber(quantity);

    const areaM2 = lengthM * widthM * count;
    const volumeM3 = areaM2 * thicknessM;
    const total = volumeM3 * selectedMaterial.price;

    return {
      areaM2,
      volumeM3,
      weightKg: 0,
      total,
    };
  }, [
    area,
    calculationMode,
    isCrumb,
    length,
    quantity,
    selectedMaterial.price,
    thickness,
    weight,
    width,
  ]);

  const hasValidCalculation = (() => {
    if (isCrumb) {
      return parseNumber(weight) > 0;
    }

    if (calculationMode === "area") {
      return parseNumber(area) > 0 && parseNumber(thickness) > 0;
    }

    const parsedQuantity = parseNumber(quantity);

    return (
      parseNumber(length) > 0 &&
      parseNumber(width) > 0 &&
      parseNumber(thickness) > 0 &&
      parsedQuantity > 0 &&
      Number.isInteger(parsedQuantity)
    );
  })();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasValidCalculation) {
      setError("Пожалуйста, заполните параметры для расчёта стоимости.");
      return;
    }

    if (!name.trim() || !phone.trim()) {
      setError("Пожалуйста, укажите имя и телефон.");
      return;
    }

    setError("");

    const orderDetails = isCrumb
      ? `Вес: ${formatNumber(calculation.weightKg)} кг`
      : calculationMode === "area"
        ? `Площадь: ${formatNumber(calculation.areaM2)} м²
Толщина: ${thickness || "не указано"} мм
Объём: ${formatNumber(calculation.volumeM3)} м³`
        : `Размер листа: ${length || "не указано"} × ${
            width || "не указано"
          } × ${thickness || "не указано"} мм
Количество: ${quantity || "не указано"}
Площадь: ${formatNumber(calculation.areaM2)} м²
Объём: ${formatNumber(calculation.volumeM3)} м³`;

    const message = `Здравствуйте! Хочу рассчитать заказ на пенополистирол.

Материал: ${selectedMaterial.name}
Цена по прайсу: ${selectedMaterial.displayPrice}
${orderDetails}

Предварительная стоимость: ${formatCurrency(calculation.total)} тг

Способ получения: ${delivery}
Имя: ${name}
Телефон: ${phone}
Комментарий: ${comment || "нет"}

Понимаю, что финальная стоимость уточняется после проверки параметров заказа.`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsappNumber}&text=${encodedMessage}`;

    window.location.href = whatsappUrl;
  }

  return (
    <section
      id="calculator"
      className="relative px-3 pt-6 pb-10 sm:px-6 lg:pt-10 lg:pb-14"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-4 shadow-[0_20px_60px_rgba(16,32,46,0.08)] lg:backdrop-blur sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:p-10">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1E6BFF]">
            Расчёт стоимости
          </p>

          <h2 className="mt-4 max-w-full text-[38px] font-black leading-[1.05] tracking-tight text-[#10202E] sm:text-5xl">
            <span className="hidden sm:inline">
              Рассчитать стоимость пенополистирола
            </span>
            <span className="sm:hidden">Рассчитать стоимость ППС</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#4A5A68]">
            Выберите марку, укажите размеры, толщину и количество. Сайт
            рассчитает предварительную стоимость по прайсу и подготовит
            сообщение для WhatsApp.
          </p>

          <div className="mt-8 rounded-3xl border border-[#E4EAF0] bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#10202E]">
              Как считается стоимость
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#4A5A68]">
              <li>• для листов расчёт идёт по объёму в м³;</li>
              <li>• объём зависит от длины, ширины, толщины и количества;</li>
              <li>• для крошки расчёт идёт по весу в кг;</li>
              <li>• доставка и дополнительные условия уточняются отдельно;</li>
              <li>• итоговая сумма является предварительным расчётом.</li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[#E4EAF0] bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#10202E]">
                Материал
              </span>

              <select
                value={materialName}
                onChange={(event) => setMaterialName(event.target.value)}
                className="w-full min-w-0 rounded-xl border border-[#E4EAF0] bg-white px-4 py-3 text-[#10202E] outline-none transition focus:border-[#1E6BFF]"
              >
                {materials.map((material) => (
                  <option key={material.name}>{material.name}</option>
                ))}
              </select>
            </label>

            <div className="rounded-2xl bg-[#F7F9FB] p-4 text-sm font-semibold text-[#10202E]">
              Цена по прайсу:{" "}
              <span className="text-[#1E6BFF]">
                {selectedMaterial.displayPrice}
              </span>
            </div>

            {!isCrumb ? (
              <>
                <div className="grid w-full min-w-0 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setCalculationMode("sheets")}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      calculationMode === "sheets"
                        ? "border-[#1E6BFF] bg-[#EEF5FF] text-[#1E6BFF]"
                        : "border-[#E4EAF0] bg-white text-[#4A5A68]"
                    }`}
                  >
                    По размерам листов
                  </button>

                  <button
                    type="button"
                    onClick={() => setCalculationMode("area")}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      calculationMode === "area"
                        ? "border-[#1E6BFF] bg-[#EEF5FF] text-[#1E6BFF]"
                        : "border-[#E4EAF0] bg-white text-[#4A5A68]"
                    }`}
                  >
                    По площади
                  </button>
                </div>

                {calculationMode === "sheets" ? (
                  <>
                    <div className="grid gap-5 sm:grid-cols-3">
                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#10202E]">
                          Длина, мм
                        </span>
                        <input
                          value={length}
                          onChange={(event) => setLength(event.target.value)}
                          placeholder="1500"
                          className="w-full min-w-0 rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#10202E]">
                          Ширина, мм
                        </span>
                        <input
                          value={width}
                          onChange={(event) => setWidth(event.target.value)}
                          placeholder="1200"
                          className="w-full min-w-0 rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-sm font-semibold text-[#10202E]">
                          Толщина, мм
                        </span>
                        <input
                          value={thickness}
                          onChange={(event) => setThickness(event.target.value)}
                          placeholder="50"
                          className="w-full min-w-0 rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
                        />
                      </label>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-[#10202E]">
                        Количество листов
                      </span>
                      <input
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                        placeholder="Например: 20"
                        className="w-full min-w-0 rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
                      />
                    </label>
                  </>
                ) : (
                  <div className="grid w-full min-w-0 gap-3 sm:grid-cols-2">
                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-[#10202E]">
                        Площадь, м²
                      </span>
                      <input
                        value={area}
                        onChange={(event) => setArea(event.target.value)}
                        placeholder="Например: 35"
                        className="w-full min-w-0 rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
                      />
                    </label>

                    <label className="grid gap-2">
                      <span className="text-sm font-semibold text-[#10202E]">
                        Толщина, мм
                      </span>
                      <input
                        value={thickness}
                        onChange={(event) => setThickness(event.target.value)}
                        placeholder="50"
                        className="w-full min-w-0 rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
                      />
                    </label>
                  </div>
                )}
              </>
            ) : (
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[#10202E]">
                  Вес, кг
                </span>
                <input
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  placeholder="Например: 10"
                  className="w-full min-w-0 rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
                />
              </label>
            )}

            <div className="rounded-3xl border border-[#D8E3EE] bg-[#F7F9FB] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E6BFF]">
                Предварительный расчёт
              </p>

              {!hasValidCalculation ? (
                <p className="mt-3 text-sm leading-6 text-[#4A5A68]">
                  Заполните параметры, чтобы увидеть стоимость.
                </p>
              ) : (
                <div className="mt-4 grid gap-3 text-sm text-[#4A5A68]">
                  {!isCrumb ? (
                    <>
                      <div className="flex justify-between gap-4">
                        <span>Площадь:</span>
                        <strong className="text-[#10202E]">
                          {formatNumber(calculation.areaM2)} м²
                        </strong>
                      </div>

                      <div className="flex justify-between gap-4">
                        <span>Объём:</span>
                        <strong className="text-[#10202E]">
                          {formatNumber(calculation.volumeM3)} м³
                        </strong>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between gap-4">
                      <span>Вес:</span>
                      <strong className="text-[#10202E]">
                        {formatNumber(calculation.weightKg)} кг
                      </strong>
                    </div>
                  )}

                  <div className="mt-2 flex justify-between gap-4 border-t border-[#E4EAF0] pt-4 text-base">
                    <span className="font-semibold text-[#10202E]">Итого:</span>
                    <strong className="text-xl text-[#1E6BFF]">
                      {formatCurrency(calculation.total)} тг
                    </strong>
                  </div>
                </div>
              )}
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#10202E]">
                Способ получения
              </span>
              <select
                value={delivery}
                onChange={(event) => setDelivery(event.target.value)}
                className="w-full min-w-0 rounded-xl border border-[#E4EAF0] bg-white px-4 py-3 text-[#10202E] outline-none transition focus:border-[#1E6BFF]"
              >
                <option>Нужна платная доставка по городу</option>
                <option>Самовывоз</option>
                <option>Пока не знаю</option>
              </select>
            </label>

            <div className="grid w-full min-w-0 gap-3 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[#10202E]">
                  Имя *
                </span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ваше имя"
                  className="w-full min-w-0 rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[#10202E]">
                  Телефон *
                </span>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+7 ___ ___ __ __"
                  className="w-full min-w-0 rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#10202E]">
                Комментарий
              </span>
              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Например: нужен ППС для утепления стен"
                rows={4}
                className="resize-none rounded-xl border border-[#E4EAF0] px-4 py-3 outline-none transition focus:border-[#1E6BFF]"
              />
            </label>

            {error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            ) : null}

            <Button type="submit" variant="whatsapp" className="mt-2">
              Отправить расчёт в WhatsApp
            </Button>

            <p className="text-sm leading-6 text-[#7A8793]">
              Расчёт является предварительным. Финальная стоимость может
              уточняться после проверки параметров заказа, условий резки,
              доставки и оплаты.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

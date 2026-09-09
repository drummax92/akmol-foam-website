import { siteConfig } from "../../lib/site";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { WhatsAppButton } from "../shared/WhatsAppButton";
import { TwoGisMap } from "../shared/TwoGisMap";
import { PhoneButton } from "../shared/PhoneButton";

export function ContactsSection() {
  const contacts = [
    {
      label: "Телефон",
      value: siteConfig.displayPhone,
    },
    {
      label: "WhatsApp",
      value: siteConfig.displayWhatsapp,
    },
    {
      label: "Адрес",
      value: siteConfig.address,
    },
    {
      label: "График работы",
      value: siteConfig.workingHours,
    },
    {
      label: "Юридические данные",
      value: siteConfig.legalName,
    },
  ];

  return (
    <section id="contacts" className="relative pt-4 pb-14 lg:pt-6 lg:pb-20">
      <Container>
        <div className="rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(16,32,46,0.08)] lg:backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="flex flex-col">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#1E6BFF]">
                Контакты
              </p>

              <h2 className="text-4xl font-black tracking-tight text-[#10202E] sm:text-6xl">
                Свяжитесь с нами
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#4A5A68]">
                Напишите в WhatsApp, позвоните или откройте компанию на карте,
                чтобы уточнить детали заказа, доставки или самовывоза.
              </p>

              <div className="mt-8 flex flex-1 flex-col overflow-hidden rounded-[2rem] border border-[#E4EAF0] bg-white shadow-sm">
                <TwoGisMap />

                <div className="flex flex-col gap-3 border-t border-[#E4EAF0] bg-[#F7F9FB]/90 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-medium text-[#4A5A68]">
                    {siteConfig.address}
                  </p>

                  <Button
                    href={siteConfig.twoGisUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="secondary"
                    size="sm"
                  >
                    Открыть маршрут
                  </Button>
                </div>

                <div className="hidden flex-1 border-t border-[#E4EAF0] bg-[linear-gradient(135deg,#EEF5FF_0%,#FFFFFF_55%,#EAF7FF_100%)] p-5 lg:flex lg:flex-col lg:justify-end">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E6BFF]">
                    Расположение
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#4A5A68]">
                    Откройте маршрут в 2ГИС, чтобы посмотреть точку на карте и
                    выбрать удобный способ проезда.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col rounded-[2rem] border border-[#E4EAF0] bg-[#F7F9FB]/80 p-5 shadow-sm sm:p-6">
              <h3 className="text-2xl font-black text-[#10202E]">
                {siteConfig.companyName}
              </h3>

              <div className="mt-6 grid gap-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.label}
                    className="rounded-2xl border border-white/80 bg-white p-5 shadow-sm"
                  >
                    <p className="text-sm font-bold text-[#7A8793]">
                      {contact.label}
                    </p>

                    <p className="mt-2 font-black leading-7 text-[#10202E]">
                      {contact.value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-[#7A8793]">
                Контактные данные и условия заказа уточняются перед оформлением.
              </p>
              <div className="mt-6 rounded-2xl border border-white/80 bg-white p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E6BFF]">
                  Связь и оплата
                </p>

                <p className="mt-3 text-sm leading-6 text-[#4A5A68]">
                  Доступен наличный и безналичный расчёт. Перед оформлением
                  заказа можно уточнить стоимость, доставку и готовность
                  продукции.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>

                  <PhoneButton variant="secondary" size="sm">
                    Позвонить
                  </PhoneButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";

const applicationGroups = [
  {
    id: "01",
    title: "Строительство и утепление",
    items: [
      "утепление стен, полов и потолков",
      "теплоизоляция фасадов",
      "ремонтные и строительные работы",
    ],
  },
  {
    id: "02",
    title: "Шумоизоляция и интерьер",
    items: [
      "шумоизоляционные задачи",
      "внутренние работы",
      "подбор под конкретную задачу",
    ],
  },
  {
    id: "03",
    title: "Крошка и гранулы ППС",
    items: ["пуфы и бинбеги", "утепление швов", "добавка в бетон"],
  },
];

export function HomeAboutSection() {
  return (
    <section className="relative py-12 lg:py-14">
      <Container>
        <SectionHeader
          eyebrow="Применение"
          title="Где используют пенополистирол ППС"
          description="ППС подходит для утепления, строительства, шумоизоляции и других задач, где нужен лёгкий теплоизоляционный материал."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {applicationGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-[2rem] border border-white/80 bg-white/75 p-7 shadow-[0_10px_30px_rgba(16,32,46,0.06)] lg:backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(30,107,255,0.12)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1E6BFF] to-[#8CB8FF] text-sm font-black text-white shadow-lg shadow-[#1E6BFF]/20">
                {group.id}
              </div>

              <h3 className="text-2xl font-bold leading-tight text-[#10202E]">
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3 text-[#4A5A68]">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-6">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1E6BFF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

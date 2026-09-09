"use client";

import { useState } from "react";
import { faqs } from "../../lib/data";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-12 lg:py-14">
      <Container>
        <div className="rounded-[2.5rem] border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_rgba(16,32,46,0.08)] lg:backdrop-blur sm:p-8 lg:p-10">
          <SectionHeader
            eyebrow="FAQ"
            title="Частые вопросы"
            description="Собрали основные вопросы, которые могут возникнуть перед заказом пенополистирола."
            centered
          />

          <div className="mx-auto mt-10 grid max-w-5xl gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-3xl border border-[#E4EAF0] bg-[#F7F9FB]/80 shadow-sm transition duration-300 hover:bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-bold text-[#10202E]">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EEF5FF] text-xl font-bold text-[#1E6BFF] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 leading-7 text-[#4A5A68]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

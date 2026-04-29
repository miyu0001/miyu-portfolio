"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const steps = [
  {
    num: "01",
    title: "Learn",
    desc: "Exploring new ideas, languages, and perspectives.",
    color: "#FF5A3C",
    bg: "#FF5A3C0D",
  },
  {
    num: "02",
    title: "Build",
    desc: "Creating tools and content based on personal challenges.",
    color: "#FF3D8B",
    bg: "#FF3D8B10",
  },
  {
    num: "03",
    title: "Share",
    desc: "Documenting and sharing the journey publicly.",
    color: "#FF5A3C",
    bg: "#FF5A3C0D",
  },
  {
    num: "04",
    title: "Reflect",
    desc: "Improving through feedback, iteration, and continuous learning.",
    color: "#FF3D8B",
    bg: "#FF3D8B10",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-[#FFF0EC] py-8 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease }}
          className="mb-12 md:mb-14"
        >
          <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FF5A3C] mb-3">
            <span className="w-4 h-px bg-[#FF5A3C]" />
            How I Work
          </p>
          <h2
            className="font-bold text-[#111111]"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            My Process
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="group rounded-2xl p-4 md:p-7 border border-black/[0.05] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-shadow duration-500"
              style={{ background: s.bg }}
            >
              <p
                className="text-[11px] font-black tracking-[0.1em] mb-3 md:mb-5"
                style={{ color: s.color }}
              >
                {s.num}
              </p>
              <h3
                className="font-bold text-[#111] mb-2 md:mb-3 text-[1rem] md:text-[1.4rem]"
              >
                {s.title}
              </h3>
              <p className="text-[12px] md:text-[13px] text-[#888] leading-[1.65]">{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

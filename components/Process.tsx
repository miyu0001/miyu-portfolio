"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const steps = [
  {
    num: "01",
    title: "Learn",
    desc: "Dive into new ideas, languages, and perspectives.",
    color: "#FF5A3C",
    bg: "#FF5A3C0D",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Build",
    desc: "Turn ideas into real tools and content.",
    color: "#FF3D8B",
    bg: "#FF3D8B10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Share",
    desc: "Document and share the journey openly.",
    color: "#FF5A3C",
    bg: "#FF5A3C0D",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Reflect",
    desc: "Learn from feedback and iterate continuously.",
    color: "#FF3D8B",
    bg: "#FF3D8B10",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
        <path d="M3 3v5h5"/>
      </svg>
    ),
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
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[12.5%] right-[12.5%] h-px top-[52px]"
            style={{ background: "linear-gradient(90deg, #FF5A3C30, #FF3D8B30, #FF5A3C30)", zIndex: 0 }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="group rounded-2xl p-4 md:p-7 border border-black/[0.05] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-shadow duration-500 flex flex-col"
                style={{ background: s.bg }}
              >
                {/* Icon circle */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shrink-0"
                  style={{ background: s.color + "18", color: s.color }}
                >
                  {s.icon}
                </div>
                <p
                  className="text-[10px] font-black tracking-[0.14em] mb-2"
                  style={{ color: s.color + "90" }}
                >
                  STEP {s.num}
                </p>
                <h3 className="font-bold text-[#111] mb-1.5 text-[1rem] md:text-[1.25rem]">
                  {s.title}
                </h3>
                <p className="text-[11.5px] text-[#888] leading-[1.65]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

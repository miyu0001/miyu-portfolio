"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const pillars = [
  {
    color: "#FF5A3C",
    bg: "#FF5A3C0D",
    title: "Language Learning",
    desc: "French × Japanese — culture, nuance, real communication.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8M8 13h5"/>
      </svg>
    ),
  },
  {
    color: "#FF3D8B",
    bg: "#FF3D8B0D",
    title: "App Development",
    desc: "Building tools to solve problems I personally face.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <path d="M9 7h6M9 11h6M9 15h4"/>
      </svg>
    ),
  },
  {
    color: "#FF5A3C",
    bg: "#FF5A3C0D",
    title: "Content Creation",
    desc: "Documenting my journey on YouTube — raw and real.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
      </svg>
    ),
  },
  {
    color: "#FF3D8B",
    bg: "#FF3D8B0D",
    title: "Design Exploration",
    desc: "Learning UI/UX with Figma and AI, iteration by iteration.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FFF5F0] py-10 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.95, ease }}
            className="order-2 lg:order-1"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-[0_12px_52px_rgba(0,0,0,0.1)]"
              style={{ aspectRatio: "3/4", maxWidth: "500px" }}
            >
              <Image
                src="/images/miyu-about.png"
                alt="Miyu"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FF5A3C] mb-5">
              <span className="w-4 h-px bg-[#FF5A3C]" />
              About
            </p>

            <h2
              className="font-bold text-[#111111] leading-[1.06] mb-6"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 4rem)" }}
            >
              Learning.<br />
              Building.<br />
              <span className="text-[#FF3D8B] font-serif font-normal italic">Sharing.</span>
            </h2>

            <p
              className="text-[#666] leading-[1.85] mb-8"
              style={{ fontSize: "clamp(13px, 1.1vw, 15px)", maxWidth: "420px" }}
            >
              Tokyo-based creator building in public — learning languages, making apps,
              and documenting the journey on YouTube.
              I&apos;m still in the middle of it all, and I want to keep going.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                  className="rounded-xl p-4 border border-black/[0.05]"
                  style={{ background: p.bg }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: p.color + "18", color: p.color }}
                  >
                    {p.icon}
                  </div>
                  <p className="font-bold text-[#111111] text-[13px] mb-1">{p.title}</p>
                  <p className="text-[11.5px] text-[#888888] leading-[1.7]">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn btn-dark self-start">Work Together</a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

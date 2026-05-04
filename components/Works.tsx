"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const videos = [
  { thumb: "/images/thumb-vlog1.png",    tag: "French Study", title: "Learning french journey",  tagColor: "#FF3D8B" },
  { thumb: "/images/thumb-french.png",   tag: "Vlog",         title: "A day in Tokyo",           tagColor: "#FF5A3C" },
  { thumb: "/images/thumb-surf.png",     tag: "Surf Vlog",    title: "Surf vlog in Japan",       tagColor: "#0099CC" },
  { thumb: "/images/thumb-travaille.png",tag: "French Study", title: "Study with me",            tagColor: "#FF3D8B" },
];

export default function Works() {
  return (
    <>
      {/* ── Projects chapter header ── */}
      <section id="works" className="bg-white border-t-2 border-[#FF5A3C] py-8 md:py-12">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease }}
            className="flex items-center gap-5"
          >
            <h2
              className="font-black text-[#111] leading-none tracking-tight shrink-0"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
            >
              PROJECTS
            </h2>
            <div className="flex-1 h-px bg-black/10" />
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#BBBBBB] shrink-0">
              03 works · 2026
            </span>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          01  YouTube Channel
      ════════════════════════════════════════ */}
      <section className="bg-white py-10 md:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="mb-10 md:mb-12"
          >
            {/* Rule row */}
            <div className="flex items-center gap-4 mb-5">
              <span
                className="font-black tracking-[0.08em] shrink-0 leading-none"
                style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)", color: "#FF5A3C" }}
              >
                01
              </span>
              <div className="flex-1 h-px bg-black/10" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2
                  className="font-bold text-[#111111] leading-[1.1] mb-3"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.8rem)" }}
                >
                  YouTube Channel
                </h2>
                <p className="text-[13.5px] text-[#888] leading-[1.75] max-w-[520px]">
                  I create videos documenting my journey of learning French while sharing my daily life in Tokyo.
                  I wanted to make my learning process more real and visible — not only for myself, but also for others on a similar journey.
                </p>
              </div>
              <a
                href="https://www.youtube.com/@BonjourMiyu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#AAAAAA] hover:text-[#FF5A3C] transition-colors duration-300 shrink-0 mb-1"
              >
                Watch Channel ↗
              </a>
            </div>
          </motion.div>

          {/* Channel meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap items-center gap-4 mb-6 px-1"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 ring-1 ring-black/[0.06]">
                <img
                  src="/images/youtubeimage.png"
                  alt="Bonjour Miyu"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 15%",
                    display: "block",
                  }}
                />
              </div>
              <span className="text-[12px] font-bold text-[#111]">Bonjour Miyu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A3C] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#FF5A3C]">Active</span>
            </div>
            <span className="text-[11px] font-semibold text-[#999]">1,200+ subscribers and growing</span>
          </motion.div>

          {/* ── Video carousel ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.7, ease }}
            className="mb-8"
          >
            <div
              className="flex gap-4 overflow-x-auto pb-3"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
              }}
            >
              {videos.map((v, i) => (
                <a
                  key={i}
                  href="https://www.youtube.com/@BonjourMiyu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/v relative shrink-0 block rounded-2xl overflow-hidden bg-gray-100"
                  style={{
                    width: "calc(25% - 12px)",
                    minWidth: "260px",
                    aspectRatio: "16/9",
                    scrollSnapAlign: "start",
                  }}
                >
                  <Image
                    src={v.thumb}
                    alt={v.title}
                    fill
                    sizes="(max-width: 768px) 80vw, 25vw"
                    className="object-cover group-hover/v:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover/v:bg-black/12 transition-colors duration-400" />
                  <span
                    className="absolute top-3 left-3 text-[9px] font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: v.tagColor }}
                  >
                    {v.tag}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="opacity-0 group-hover/v:opacity-100 scale-75 group-hover/v:scale-100 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/90 shadow-xl flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#FF5A3C"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="absolute bottom-0 left-0 right-0 p-3 text-white font-semibold text-[12px] leading-snug line-clamp-2">
                    {v.title}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          02  App Development
      ════════════════════════════════════════ */}
      <section id="products" className="py-10 md:py-24" style={{ background: "#F0F4FF" }}>
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="mb-10 md:mb-12"
          >
            {/* Rule row */}
            <div className="flex items-center gap-4 mb-5">
              <span
                className="font-black tracking-[0.08em] shrink-0 leading-none"
                style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)", color: "#FF3D8B" }}
              >
                02
              </span>
              <div className="flex-1 h-px bg-black/10" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2
                  className="font-bold text-[#111111] leading-[1.1] mb-3"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.8rem)" }}
                >
                  App Development
                </h2>
                <p className="text-[13.5px] text-[#666] leading-[1.75] max-w-[520px]">
                  Building small apps and tools to solve real problems — especially in language learning.
                </p>
              </div>
              <a
                href="https://bonjour-miyu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#AAAAAA] hover:text-[#FF3D8B] transition-colors duration-300 shrink-0 mb-1"
              >
                Open App ↗
              </a>
            </div>
          </motion.div>

          {/* Meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3 mb-6 px-1"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#4ADE80]">2 Apps Live</span>
            </div>
          </motion.div>

          {/* Full-width carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.7, ease }}
          >
            <div
              className="flex gap-4 overflow-x-auto pb-3"
              style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
            >

              {/* ── Card 1: Bonjour Miyu — French learning app ── */}
              <a
                href="https://bonjour-miyu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative shrink-0 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                style={{
                  width: "calc(25% - 12px)", minWidth: "260px", aspectRatio: "16/9",
                  scrollSnapAlign: "start", display: "block",
                  background: "linear-gradient(135deg, #1A0638 0%, #2D1065 60%, #1A0A40 100%)",
                }}
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-30 blur-2xl" style={{ background: "#FF3D8B" }} />

                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-[8px] font-black tracking-[0.2em] uppercase">Bonjour Miyu</span>
                    <div className="flex items-center gap-1 bg-[#FF3D8B] px-2 py-0.5 rounded-full">
                      <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                      <span className="text-[7px] font-black text-white tracking-[0.12em]">LIVE</span>
                    </div>
                  </div>

                  {/* Word card */}
                  <div className="bg-white/[0.08] border border-white/[0.1] rounded-xl px-4 py-3 mx-auto w-full max-w-[180px]">
                    <p className="text-white/40 text-[7px] font-bold tracking-[0.16em] uppercase mb-1">Today&apos;s word</p>
                    <p className="text-white font-black text-[22px] leading-none mb-1">Bonjour</p>
                    <p className="text-[#FF3D8B]/80 text-[10px] font-semibold">こんにちは</p>
                    <div className="flex gap-1 mt-2.5">
                      {[1,0,0,0,0].map((on, i) => (
                        <div key={i} className="h-[2px] flex-1 rounded-full" style={{ background: on ? "#FF3D8B" : "rgba(255,255,255,0.12)" }} />
                      ))}
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="flex gap-2">
                    <div className="flex-1 bg-white/[0.07] rounded-lg py-1.5 text-center">
                      <span className="text-white/40 text-[8px] font-bold">もう一度</span>
                    </div>
                    <div className="flex-1 rounded-lg py-1.5 text-center" style={{ background: "#FF3D8B" }}>
                      <span className="text-white text-[8px] font-black">わかった!</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* ── Card 2: Miyu Prep — fitness app ── */}
              <a
                href="https://miyu-competition-prep.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative shrink-0 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                style={{
                  width: "calc(25% - 12px)", minWidth: "260px", aspectRatio: "16/9",
                  scrollSnapAlign: "start", display: "block",
                  background: "linear-gradient(135deg, #070E1C 0%, #0C1A30 60%, #091422 100%)",
                }}
              >
                {/* Glow */}
                <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full opacity-20 blur-2xl" style={{ background: "#FF5A3C" }} />

                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 text-[8px] font-black tracking-[0.2em] uppercase">Miyu Prep</span>
                    <div className="flex items-center gap-1 bg-[#4ADE80]/90 px-2 py-0.5 rounded-full">
                      <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                      <span className="text-[7px] font-black text-white tracking-[0.12em]">LIVE</span>
                    </div>
                  </div>

                  {/* Macro row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Protein", val: "142g", color: "#FF5A3C" },
                      { label: "Carbs",   val: "180g", color: "#60A5FA" },
                      { label: "Fat",     val: "55g",  color: "#FBBF24" },
                    ].map((m) => (
                      <div key={m.label} className="bg-white/[0.06] border border-white/[0.07] rounded-lg py-2 text-center">
                        <div className="w-1.5 h-1.5 rounded-full mx-auto mb-1" style={{ background: m.color }} />
                        <p className="text-white font-black text-[11px] leading-none">{m.val}</p>
                        <p className="text-white/30 text-[7px] mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Streak bar */}
                  <div className="bg-white/[0.06] border border-white/[0.07] rounded-lg px-3 py-2 flex items-center justify-between">
                    <div>
                      <p className="text-white/30 text-[7px] font-bold tracking-[0.14em] uppercase">Weekly Streak</p>
                      <p className="text-white font-black text-[13px] leading-tight">12 weeks 🔥</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[1,1,1,1,0,0,0].map((on, i) => (
                        <div key={i} className="w-2 h-2 rounded-sm" style={{ background: on ? "#FF5A3C" : "rgba(255,255,255,0.08)" }} />
                      ))}
                    </div>
                  </div>
                </div>
              </a>

              {/* ── Card 3: Coming Soon ── */}
              <div
                className="relative shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width: "calc(25% - 12px)", minWidth: "260px", aspectRatio: "16/9",
                  scrollSnapAlign: "start",
                  background: "linear-gradient(135deg, #F0F0F5 0%, #F8F8FC 100%)",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <span className="text-[8px] font-black tracking-[0.22em] uppercase text-[#999] bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-black/[0.06]">
                    Coming Soon
                  </span>
                </div>
              </div>

            </div>
            <p className="text-[10px] text-[#AAAAAA] tracking-[0.1em] mt-2">Swipe to explore →</p>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          03  Design Exploration
      ════════════════════════════════════════ */}
      <section id="design" className="bg-[#FFF8F5] py-10 md:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="mb-10 md:mb-12"
          >
            {/* Rule row */}
            <div className="flex items-center gap-4 mb-5">
              <span
                className="font-black tracking-[0.08em] shrink-0 leading-none"
                style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)", color: "#FF5A3C" }}
              >
                03
              </span>
              <div className="flex-1 h-px bg-black/10" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2
                  className="font-bold text-[#111111] leading-[1.1] mb-3"
                  style={{ fontSize: "clamp(1.7rem, 3vw, 2.8rem)" }}
                >
                  Design Exploration
                </h2>
                <p className="text-[13.5px] text-[#888] leading-[1.75] max-w-[520px]">
                  Learning UI/UX design through Figma and AI tools — focusing on progress over perfection.
                </p>
              </div>
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#FF5A3C]/60 shrink-0 mb-1">
                Coming Soon
              </span>
            </div>
          </motion.div>

          {/* Full-width carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.7, ease }}
            className="mb-8"
          >
            <div
              className="flex gap-4 overflow-x-auto pb-3"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
              }}
            >
              {[
                { bg: "linear-gradient(135deg, #FFE8E6 0%, #FFF0EF 100%)" },
                { bg: "linear-gradient(135deg, #FFE0EE 0%, #FFF0F6 100%)" },
                { bg: "linear-gradient(135deg, #E0F0FF 0%, #EBF7FF 100%)" },
                { bg: "linear-gradient(135deg, #EBEBEB 0%, #F5F5F5 100%)" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative shrink-0 rounded-2xl overflow-hidden"
                  style={{
                    width: "calc(25% - 12px)",
                    minWidth: "260px",
                    aspectRatio: "16/9",
                    scrollSnapAlign: "start",
                    background: item.bg,
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                    <div className="w-8 h-8 rounded-full bg-white/80 shadow-sm flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <span className="text-[8px] font-black tracking-[0.22em] uppercase text-[#666] bg-white/75 backdrop-blur-sm px-2.5 py-1 rounded-full border border-black/[0.07]">
                      Coming Soon
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-[#CCC] tracking-[0.1em] mb-1">
              Swipe to explore →
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}

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
              className="flex gap-5 overflow-x-auto pb-3"
              style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
            >

              {/* ── Card 1: Bonjour Miyu ── */}
              <div className="shrink-0" style={{ width: "calc(25% - 12px)", minWidth: "260px", scrollSnapAlign: "start" }}>
                <a
                  href="https://bonjour-miyu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, #6D28D9 0%, #A855F7 50%, #EC4899 100%)" }}
                >
                  {/* Soft radial light */}
                  <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.18) 0%, transparent 60%)" }} />
                  {/* Big kanji watermark */}
                  <span aria-hidden className="absolute -bottom-3 -right-2 select-none pointer-events-none font-black text-white/[0.07] leading-none" style={{ fontSize: "130px" }}>語</span>
                  {/* LIVE badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/20 backdrop-blur-sm border border-white/30 px-2 py-0.5 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                    <span className="text-[7px] font-black text-white tracking-[0.1em]">LIVE</span>
                  </div>
                  {/* Centered poster text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                    <span className="text-[22px] mb-3">🇫🇷 🇯🇵</span>
                    <p className="font-black text-white leading-[1.05] group-hover:scale-[1.03] transition-transform duration-300" style={{ fontSize: "clamp(18px, 3.5vw, 26px)" }}>
                      Apprendre<br />le français.
                    </p>
                  </div>
                </a>
                {/* Text below card */}
                <div className="mt-3 px-0.5">
                  <p className="font-bold text-[#111] text-[13px] leading-snug mb-0.5">Bonjour Miyu</p>
                  <p className="text-[#999] text-[11px] leading-snug">AI flashcards & vocab tracker — Japanese × French learning app</p>
                </div>
              </div>

              {/* ── Card 2: Miyu Prep ── */}
              <div className="shrink-0" style={{ width: "calc(25% - 12px)", minWidth: "260px", scrollSnapAlign: "start" }}>
                <a
                  href="https://miyu-competition-prep.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%)" }}
                >
                  {/* Dot grid */}
                  <div aria-hidden className="absolute inset-0 opacity-[0.13] pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="pdots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                          <circle cx="1.5" cy="1.5" r="1" fill="white" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#pdots)" />
                    </svg>
                  </div>
                  {/* Orange glow */}
                  <div aria-hidden className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full blur-3xl" style={{ background: "rgba(255,90,60,0.35)" }} />
                  {/* LIVE badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-[#4ADE80]/20 backdrop-blur-sm border border-[#4ADE80]/40 px-2 py-0.5 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-[#4ADE80] animate-pulse" />
                    <span className="text-[7px] font-black text-[#4ADE80] tracking-[0.1em]">LIVE</span>
                  </div>
                  {/* Centered poster text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
                    <span className="text-[22px] mb-3">💪 🏆</span>
                    <p className="font-black text-white leading-[1.05] group-hover:scale-[1.03] transition-transform duration-300" style={{ fontSize: "clamp(18px, 3.5vw, 26px)" }}>
                      Corps &<br />Performance.
                    </p>
                  </div>
                </a>
                {/* Text below card */}
                <div className="mt-3 px-0.5">
                  <p className="font-bold text-[#111] text-[13px] leading-snug mb-0.5">Miyu Prep</p>
                  <p className="text-[#999] text-[11px] leading-snug">Macros · workout log · body weight — competition prep tracker</p>
                </div>
              </div>

              {/* ── Card 3: Coming Soon ── */}
              <div className="shrink-0" style={{ width: "calc(25% - 12px)", minWidth: "260px", scrollSnapAlign: "start" }}>
                <div
                  className="relative block rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "16/9", background: "linear-gradient(135deg, #F2F2F7 0%, #F8F8FC 100%)" }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#BBB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    <span className="text-[8px] font-black tracking-[0.22em] uppercase text-[#BBB]">Coming Soon</span>
                  </div>
                </div>
                <div className="mt-3 px-0.5">
                  <p className="font-bold text-[#CCC] text-[13px] leading-snug mb-0.5">Next App</p>
                  <p className="text-[#CCC] text-[11px] leading-snug">Currently in development</p>
                </div>
              </div>

            </div>
            <p className="text-[10px] text-[#BBBBBB] tracking-[0.1em] mt-2">Swipe to explore →</p>
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

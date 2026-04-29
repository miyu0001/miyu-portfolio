"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const videos = [
  { thumb: "/images/thumb-vlog1.png",    tag: "Vlog",         title: "A day in Paris — market, café & streets",    tagColor: "#FF5A3C" },
  { thumb: "/images/thumb-french.png",   tag: "French Study", title: "How I learned French in 1 year",             tagColor: "#FF3D8B" },
  { thumb: "/images/thumb-surf.png",     tag: "Japan Culture",title: "Japanese culture × French lifestyle",         tagColor: "#0099CC" },
  { thumb: "/images/thumb-travaille.png",tag: "Vlog",         title: "Working remotely from Tokyo",                tagColor: "#FF5A3C" },
];


const designTools = [
  { label: "Figma",    color: "#FF7262", bg: "#FF726215" },
  { label: "AI Tools", color: "#FF3D8B", bg: "#FF3D8B15" },
  { label: "Framer",   color: "#0099FF", bg: "#0099FF15" },
  { label: "Luma",     color: "#333333", bg: "#33333310" },
];

export default function Works() {
  return (
    <>
      {/* ── Projects chapter header ── */}
      <section id="works" className="bg-white border-t-2 border-[#FF5A3C] py-7 md:py-10">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, ease }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <h2
              className="font-black text-[#111] leading-none tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 8vw, 7.5rem)" }}
            >
              PROJECTS
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { num: "01", label: "YouTube" },
                { num: "02", label: "App Dev" },
                { num: "03", label: "Design" },
              ].map((item) => (
                <span
                  key={item.num}
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold px-3.5 py-1.5 rounded-full border border-black/[0.1] text-[#888]"
                >
                  <span className="font-black" style={{ color: "#FF5A3C" }}>{item.num}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          01  YouTube Journey
      ════════════════════════════════════════ */}
      <section className="bg-white py-10 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="mb-10 md:mb-12"
          >
            <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FF5A3C] mb-3">
              <span className="w-4 h-px bg-[#FF5A3C]" />
              YouTube Channel
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2
                  className="font-bold text-[#111111] leading-[1.1] mb-3"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.6rem)" }}
                >
                  Building in Public:<br />
                  My Language &amp; Life Journey
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

                  {/* Play icon on hover */}
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
          3-2  Product Experiments
      ════════════════════════════════════════ */}
      <section
        id="products"
        className="relative overflow-hidden py-10 md:py-32"
        style={{ background: "linear-gradient(135deg, #0e0e12 0%, #111116 50%, #1a0d12 100%)" }}
      >
        {/* Glow */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[460px] h-[460px] rounded-full bg-[#FF3D8B]/[0.07] blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#FF5A3C]/[0.05] blur-[80px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="mb-10 md:mb-12"
          >
            <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-white/30 mb-3">
              <span className="w-4 h-px bg-[#FF3D8B]" />
              App Development
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2
                  className="font-bold text-white leading-[1.1] mb-3"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.6rem)" }}
                >
                  Product Experiments
                </h2>
                <p className="text-[13.5px] text-white/45 leading-[1.75] max-w-[520px]">
                  Building small apps and tools to solve real problems — especially in language learning.
                </p>
              </div>
              <a
                href="https://bonjour-miyu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/30 hover:text-[#FF3D8B] transition-colors duration-300 shrink-0 mb-1"
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
            className="flex flex-wrap items-center gap-4 mb-6 px-1"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3D8B] animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[#FF85BA]">In Progress</span>
            </div>
            {["AI-powered", "FR × JP", "UX-first"].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.30)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {tag}
              </span>
            ))}
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
                {/* Card 1: Bonjour Miyu — live */}
                <a
                  href="https://bonjour-miyu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative shrink-0 rounded-2xl overflow-hidden"
                  style={{ width: "calc(25% - 12px)", minWidth: "260px", aspectRatio: "16/9", scrollSnapAlign: "start", display: "block" }}
                >
                  <Image
                    src="/images/app-hero.png"
                    alt="Bonjour Miyu App"
                    fill
                    sizes="(max-width: 768px) 80vw, 25vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#FF3D8B]/90 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[9px] font-bold text-white tracking-[0.1em]">LIVE</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white font-bold text-[12px] mb-0.5">Bonjour Miyu</p>
                    <p className="text-white/55 text-[10px]">French × Japanese learning app ↗</p>
                  </div>
                </a>

                {/* Cards 2–3: Coming Soon — same style as 3-3 */}
                {[
                  { label: "Vocab Trainer",    tag: "AI Flash Cards",  tagColor: "#FF3D8B", bg: "linear-gradient(135deg, #FFE0EE 0%, #FFF0F6 100%)" },
                  { label: "Pronunciation AI", tag: "Speech Practice", tagColor: "#FF5A3C", bg: "linear-gradient(135deg, #FFE8E6 0%, #FFF0EF 100%)" },
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
                    <span
                      className="absolute top-3 left-3 text-[9px] font-bold px-2.5 py-1 rounded-full text-white z-10"
                      style={{ background: item.tagColor }}
                    >
                      {item.tag}
                    </span>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 z-10">
                      <div className="w-8 h-8 rounded-full bg-white/80 shadow-sm flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                      </div>
                      <span className="text-[8px] font-black tracking-[0.22em] uppercase text-[#666] bg-white/75 backdrop-blur-sm px-2.5 py-1 rounded-full border border-black/[0.07]">
                        Coming Soon
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/15 to-transparent">
                      <p className="text-[11px] font-semibold text-[#444] leading-snug">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-white/20 tracking-[0.1em] mt-2">Swipe to explore →</p>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          3-3  Design Exploration
      ════════════════════════════════════════ */}
      <section id="design" className="bg-[#FFF8F5] py-10 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease }}
            className="mb-10 md:mb-12"
          >
            <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FF5A3C] mb-3">
              <span className="w-4 h-px bg-[#FF5A3C]" />
              Design
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2
                  className="font-bold text-[#111111] leading-[1.1] mb-3"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.6rem)" }}
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
                  { label: "Figma Explorations", tag: "UI/UX",      tagColor: "#FF7262", bg: "linear-gradient(135deg, #FFE8E6 0%, #FFF0EF 100%)" },
                  { label: "AI Visual Projects",  tag: "AI Design",  tagColor: "#FF3D8B", bg: "linear-gradient(135deg, #FFE0EE 0%, #FFF0F6 100%)" },
                  { label: "Framer Prototypes",   tag: "Prototype",  tagColor: "#0099FF", bg: "linear-gradient(135deg, #E0F0FF 0%, #EBF7FF 100%)" },
                  { label: "Luma AI Content",     tag: "AI Video",   tagColor: "#555555", bg: "linear-gradient(135deg, #EBEBEB 0%, #F5F5F5 100%)" },
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
                    {/* Tag */}
                    <span
                      className="absolute top-3 left-3 text-[9px] font-bold px-2.5 py-1 rounded-full text-white z-10"
                      style={{ background: item.tagColor }}
                    >
                      {item.tag}
                    </span>

                    {/* Coming Soon overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-1.5">
                      <div className="w-8 h-8 rounded-full bg-white/80 shadow-sm flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                      </div>
                      <span className="text-[8px] font-black tracking-[0.22em] uppercase text-[#666] bg-white/75 backdrop-blur-sm px-2.5 py-1 rounded-full border border-black/[0.07]">
                        Coming Soon
                      </span>
                    </div>

                    {/* Title at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black/15 to-transparent">
                      <p className="text-[11px] font-semibold text-[#444] leading-snug">{item.label}</p>
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

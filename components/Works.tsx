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

const learned = [
  "Learning becomes more meaningful when shared",
  "Consistency matters more than perfection",
  "Communication is not just language, but culture",
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
      {/* ════════════════════════════════════════
          3-1  YouTube Journey
      ════════════════════════════════════════ */}
      <section id="works" className="bg-[#FFF5F0] py-10 md:py-28">
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
              Projects · 3-1
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

          {/* What I learned */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="flex flex-wrap gap-2"
          >
            {learned.map((l) => (
              <span
                key={l}
                className="text-[11px] font-semibold px-4 py-2 rounded-full border border-black/[0.08] text-[#666] bg-white"
              >
                {l}
              </span>
            ))}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-white/30 mb-4">
                <span className="w-4 h-px bg-[#FF3D8B]" />
                Projects · 3-2
              </p>

              <h2
                className="font-bold text-white leading-[1.06] mb-5"
                style={{ fontSize: "clamp(1.9rem, 3.5vw, 3.6rem)" }}
              >
                Product<br />Experiments
              </h2>

              <div className="flex items-center gap-2 mb-7">
                <span
                  className="text-[10px] font-bold px-3.5 py-1.5 rounded-full border"
                  style={{ color: "#FF85BA", background: "#FF3D8B12", borderColor: "#FF3D8B38" }}
                >
                  In Progress
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3D8B] animate-pulse" />
              </div>

              <p className="text-white/50 leading-[1.85] text-[14px] mb-5 max-w-[400px]">
                I build small apps and tools to solve problems I personally face,
                especially in language learning.
              </p>

              <div className="hidden md:block space-y-2.5 mb-8 max-w-[380px]">
                {[
                  "Improving real-world language usage",
                  "Making learning more natural and practical",
                  "Bridging the gap between textbook learning and real communication",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="text-[#FF3D8B] mt-0.5 shrink-0">↗</span>
                    <p className="text-white/35 text-[13px] leading-[1.7]">{item}</p>
                  </div>
                ))}
              </div>

              <p className="hidden md:block text-[11px] tracking-[0.14em] text-white/20 mb-7">
                Currently developing and iterating on early-stage products.
              </p>

              <div className="flex flex-wrap gap-2">
                {["AI-powered", "FR × JP", "Daily lessons", "UX-first"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.09)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: app visual */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: 0.15, ease }}
              className="relative flex items-center justify-center"
              style={{ minHeight: "460px" }}
            >
              {/* Subtle glow ring behind */}
              <div
                aria-hidden
                className="absolute rounded-3xl"
                style={{
                  zIndex: 0,
                  inset: "8%",
                  background: "linear-gradient(135deg, rgba(255,61,139,0.12), rgba(255,90,60,0.08))",
                  filter: "blur(24px)",
                }}
              />

              {/* Main app image — clickable link */}
              <motion.a
                href="https://bonjour-miyu.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl overflow-hidden"
                style={{
                  zIndex: 2,
                  width: "min(400px, 90%)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.08)",
                  display: "block",
                }}
              >
                <Image
                  src="/images/app-hero.png"
                  alt="Language App UI — Bonjour Miyu"
                  width={640}
                  height={840}
                  className="w-full h-auto block"
                  style={{ filter: "brightness(1.08) contrast(1.02)" }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/0 hover:bg-white/[0.04] transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/60 text-white text-[11px] font-bold tracking-[0.1em] px-4 py-2 rounded-full">
                    Try the App ↗
                  </span>
                </div>
              </motion.a>

              {/* FR/JP chip */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10"
                style={{ zIndex: 3, top: "8%", right: "4%", background: "rgba(255,255,255,0.07)", backdropFilter: "blur(14px)" }}
              >
                <span className="text-[10px] font-bold text-[#FF3D8B]">FR</span>
                <div className="w-px h-3 bg-white/20" />
                <span className="text-[10px] font-bold text-white/55">JP</span>
              </motion.div>

              {/* AI active chip */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
                className="absolute flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{
                  zIndex: 3,
                  bottom: "10%",
                  left: "4%",
                  background: "linear-gradient(90deg, rgba(255,61,139,0.18), rgba(255,61,139,0.06))",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,61,139,0.25)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3D8B] animate-pulse" />
                <span className="text-[10px] font-bold text-[#FF85BA]">AI Lesson Active</span>
              </motion.div>

              {/* "Try it" label */}
              <div
                className="absolute flex items-center gap-1.5"
                style={{ zIndex: 3, bottom: "10%", right: "4%" }}
              >
                <a
                  href="https://bonjour-miyu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/30 hover:text-[#FF3D8B] transition-colors duration-300"
                >
                  Open App ↗
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          3-3  Design Exploration
      ════════════════════════════════════════ */}
      <section id="design" className="bg-[#FFF8F5] py-10 md:py-28">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FF5A3C] mb-4">
                <span className="w-4 h-px bg-[#FF5A3C]" />
                Projects · 3-3
              </p>
              <h2
                className="font-bold text-[#111] leading-[1.1] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)" }}
              >
                Design<br />Exploration
              </h2>
              <p className="text-[14px] text-[#666] leading-[1.85] mb-7 max-w-[420px]">
                I am currently learning UI/UX design through hands-on projects using Figma and AI tools.
                Focusing on progress over perfection, and documenting the learning process.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Improving layout and visual hierarchy",
                  "Learning how to design clear and intuitive interfaces",
                  "Iterating based on practice and feedback",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="text-[#FF5A3C] mt-0.5 shrink-0 text-[12px]">✦</span>
                    <p className="text-[13px] text-[#666] leading-[1.7]">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.16em] uppercase text-[#AAA] hover:text-[#FF5A3C] transition-colors duration-300"
              >
                Get in Touch ↗
              </a>
            </motion.div>

            {/* Right: Coming Soon carousel */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
            >
              {/* Carousel */}
              <div
                className="flex gap-3 overflow-x-auto pb-3 mb-3"
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
                      width: "calc(50% - 6px)",
                      minWidth: "180px",
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

              <p className="text-[10px] text-[#CCC] tracking-[0.1em] mb-5">
                Swipe to explore →
              </p>

              {/* Progress note */}
              <div className="rounded-2xl p-5 border border-black/[0.05] bg-[#F8F7F4]">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#AAA]">Learning Progress</span>
                  <span className="text-[10px] font-bold text-[#FF5A3C]">Active</span>
                </div>
                <div className="h-1 w-full rounded-full bg-black/[0.06] overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="h-full rounded-full bg-[#FF5A3C]"
                  />
                </div>
                <p className="text-[10px] text-[#CCC] mt-1.5">Continuously iterating and improving</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

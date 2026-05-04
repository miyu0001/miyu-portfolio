"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function CircleBadge() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      style={{ width: "72px", height: "72px", flexShrink: 0 }}
    >
      <svg width="72" height="72" viewBox="0 0 72 72">
        <defs>
          <path id="cpath" d="M 36,36 m -24,0 a 24,24 0 1,1 48,0 a 24,24 0 1,1 -48,0" />
        </defs>
        <text fill="#FF5A3C" fontSize="7" fontWeight="700" letterSpacing="2" fontFamily="system-ui,sans-serif">
          <textPath href="#cpath">DESIGNER · BONJOUR MIYU · </textPath>
        </text>
        <circle cx="36" cy="36" r="4" fill="#111" />
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const { tx } = useLang();
  const h = tx.hero;

  return (
    <section id="home" className="bg-white overflow-hidden">

      {/* ══════════════════════════════════════════════
          MOBILE LAYOUT
      ══════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col" style={{ minHeight: "100svh" }}>

        {/* Visual area */}
        <div className="relative overflow-hidden flex-shrink-0" style={{ height: "58svh", minHeight: "320px" }}>
          <motion.div
            aria-hidden
            initial={{ scaleY: 0.88, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.1, ease }}
            style={{
              x: "-50%", position: "absolute", top: 0, left: "50%",
              width: "min(360px, 100%)", height: "100%",
              borderRadius: "50% 50% 0 0",
              background: "linear-gradient(180deg, #ff9066 0%, #FF5A3C 45%, #ff3d1f 100%)",
              transformOrigin: "top center", zIndex: 1,
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            style={{
              x: "-50%", position: "absolute", top: 0, left: "50%",
              width: "min(360px, 100%)", height: "100%",
              borderRadius: "50% 50% 0 0", overflow: "hidden",
              zIndex: 2, pointerEvents: "none",
            }}
          >
            <img
              src="/images/miyu-hero.png"
              alt="Miyu Sato"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
            />
          </motion.div>
          <motion.img
            aria-hidden src="/images/miyu-signature.png" alt=""
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            style={{
              x: "-50%", rotate: -4, position: "absolute", left: "50%", bottom: "14%",
              width: "260px", maxWidth: "none", height: "auto",
              zIndex: 3, pointerEvents: "none", filter: "invert(1)", mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="px-6 py-4 flex justify-around flex-shrink-0 border-b border-black/[0.05]"
        >
          {h.mobileStats.map((s) => (
            <div key={s.label}>
              <p className="font-bold text-[#111] text-[16px] leading-none">{s.num}</p>
              <p className="text-[10px] text-[#AAAAAA] mt-0.5 tracking-[0.06em]">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Text + buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease }}
          className="px-6 pt-5 pb-8 flex-1 flex flex-col justify-between"
        >
          <div>
            <h1
              className="font-bold text-[#111] leading-[1.12] mb-2"
              style={{ fontSize: "clamp(28px, 8vw, 38px)" }}
            >
              {h.mobileH1}{" "}
              <span className="font-serif font-normal italic" style={{ color: "#FF3D8B" }}>
                {h.mobileItalic}
              </span>
            </h1>
            <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#CCC] mt-2">
              {h.mobileSub}
            </p>
          </div>
          <div className="flex flex-col gap-2.5 mt-6">
            <a href="#works"   className="btn btn-dark w-full">{h.btn1}</a>
            <a href="#contact" className="btn btn-outline w-full">{h.btn2}</a>
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════
          DESKTOP LAYOUT
      ══════════════════════════════════════════════ */}
      <div className="hidden md:block relative" style={{ minHeight: "100vh" }}>

        {/* DESIGNER watermark */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.055 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute select-none pointer-events-none font-black text-[#111] whitespace-nowrap leading-none"
          style={{ left: "8%", top: "22%", fontSize: "clamp(180px, 18vw, 320px)", zIndex: 0 }}
        >
          DESIGNER
        </motion.span>

        {/* Center visual */}
        <div style={{ position: "absolute", left: "50%", bottom: 0, width: "700px", height: "860px", transform: "translateX(-50%)", overflow: "visible" }}>
          <motion.div
            aria-hidden
            initial={{ scaleY: 0.84, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.08, ease }}
            style={{
              x: "-50%", position: "absolute", left: "50%", bottom: 0,
              width: "650px", height: "820px", borderRadius: "325px 325px 0 0",
              background: "linear-gradient(180deg, #ff9066 0%, #FF5A3C 45%, #ff3d1f 100%)",
              transformOrigin: "bottom center", zIndex: 1,
            }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.28, ease }}
            style={{
              x: "-50%", position: "absolute", left: "50%", bottom: 0,
              width: "650px", height: "820px", borderRadius: "325px 325px 0 0",
              overflow: "hidden", zIndex: 3, pointerEvents: "none",
            }}
          >
            <img src="/images/miyu-hero.png" alt="Miyu Sato"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
          </motion.div>
          <motion.img
            aria-hidden src="/images/miyu-signature.png" alt=""
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease }}
            style={{
              x: "-50%", rotate: -6, position: "absolute", left: "50%", top: "42%",
              width: "680px", maxWidth: "none", height: "auto",
              zIndex: 4, pointerEvents: "none", display: "block",
              filter: "invert(1)", mixBlendMode: "screen",
            }}
          />
        </div>

        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease }}
          style={{ position: "absolute", left: "6.5%", top: "28%", width: "360px", zIndex: 5 }}
        >
          <p className="flex items-center gap-2.5 text-[10px] font-bold tracking-[0.26em] uppercase text-[#FF5A3C] mb-8">
            <span className="w-4 h-px bg-[#FF5A3C] shrink-0" />
            {h.label}
          </p>
          <h1 className="font-bold text-[#111] leading-[1.15] mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 34px)" }}>
            {h.desktopH1.filter(Boolean).map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#BBB] mb-8">{h.desktopTagline}</p>
          <div className="flex flex-col gap-3">
            <a href="#works"   className="btn btn-dark">{h.btn1}</a>
            <a href="#contact" className="btn btn-outline">{h.btn2}</a>
          </div>
        </motion.div>

        {/* Right stats card */}
        <motion.div
          initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.38, ease }}
          style={{ position: "absolute", right: "8%", top: "34%", width: "320px", zIndex: 5 }}
        >
          <div className="bg-white rounded-2xl border border-black/[0.06]"
            style={{ padding: "28px", boxShadow: "0 16px 56px rgba(0,0,0,0.11), 0 4px 14px rgba(0,0,0,0.06)" }}>
            <div className="flex items-start justify-between mb-5">
              <div>
                <p className="font-bold text-[#111] leading-none mb-1.5" style={{ fontSize: "50px" }}>3+</p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#AAA]">{h.card.yearsLabel}</p>
              </div>
              <CircleBadge />
            </div>
            <div className="border-t border-black/[0.06] pt-4 mb-5 flex flex-col gap-4">
              {[
                { color: "#FF5A3C", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
                { color: "#FF5A3C", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF5A3C"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg> },
                { color: "#FF3D8B", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF3D8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: item.color + "15" }}>{item.icon}</div>
                  <div>
                    <p className="font-bold text-[#111] text-[14px] leading-none mb-0.5">{h.card.items[i].num}</p>
                    <p className="text-[11px] text-[#888] leading-snug">{h.card.items[i].label}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#works" className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.16em] uppercase text-[#AAA] hover:text-[#FF5A3C] transition-colors duration-300">
              {h.card.link} <span className="text-[#FF5A3C]">↗</span>
            </a>
          </div>
        </motion.div>

        {/* Footer strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-black/[0.07] py-5" style={{ zIndex: 10 }}>
          <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#CCC]">© 2026 Miyu Sato. All Rights Reserved.</p>
            <div className="flex gap-5">
              {[
                { label: "YouTube",   href: "https://www.youtube.com/@BonjourMiyu" },
                { label: "Instagram", href: "https://www.instagram.com/miyu0001_/?hl=ja" },
                { label: "Email",     href: "mailto:miyuba0192@gmail.com" },
              ].map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#BBB] hover:text-[#111] transition-colors duration-300">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

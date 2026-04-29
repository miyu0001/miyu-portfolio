"use client";
import { motion } from "framer-motion";

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
  return (
    <section id="home" className="bg-white overflow-hidden">

      {/* ══════════════════════════════════════════════
          MOBILE LAYOUT  — only on < md
      ══════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col" style={{ minHeight: "100svh" }}>

        {/* ── Text block ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease }}
          className="px-6 pt-24 pb-4 flex-shrink-0"
        >
          <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.26em] uppercase text-[#FF5A3C] mb-4">
            <span className="w-4 h-px bg-[#FF5A3C] shrink-0" />
            Creator / Learning in Public
          </p>
          <h1
            className="font-bold text-[#111] leading-[1.15] mb-3"
            style={{ fontSize: "clamp(25px, 7vw, 36px)" }}
          >
            Building and sharing<br />
            my journey through<br />
            language, design,<br />
            and creation.
          </h1>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#BBB] mb-5">
            Tokyo-based
          </p>
          {/* Stacked buttons — no overflow */}
          <div className="flex flex-col gap-2.5 w-fit">
            <a href="#works" className="btn btn-dark">View Projects →</a>
            <a href="#contact" className="btn btn-outline">Get in Touch →</a>
          </div>
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="px-6 pb-4 flex gap-7 flex-shrink-0 border-b border-black/[0.05]"
        >
          {[
            { num: "7+",     label: "Years Creating" },
            { num: "Active", label: "YouTube" },
            { num: "2",      label: "Apps in Dev" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-bold text-[#111] text-[16px] leading-none">{s.num}</p>
              <p className="text-[10px] text-[#AAAAAA] mt-0.5 tracking-[0.06em]">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Visual area — fills remaining height ── */}
        <div className="relative flex-1 overflow-hidden" style={{ minHeight: "300px" }}>

          {/* Arch — uses FM x:"-50%" to avoid transform override bug */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0.84, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.12, ease }}
            style={{
              x: "-50%",
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: "min(360px, 100%)",
              height: "100%",
              borderRadius: "50% 50% 0 0",
              background: "linear-gradient(180deg, #ff9066 0%, #FF5A3C 45%, #ff3d1f 100%)",
              transformOrigin: "bottom center",
              zIndex: 1,
            }}
          />

          {/* Person — fills arch shape exactly */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.28, ease }}
            style={{
              x: "-50%",
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: "min(360px, 100%)",
              height: "100%",
              borderRadius: "50% 50% 0 0",
              overflow: "hidden",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <img
              src="/images/miyu-hero.png"
              alt="Miyu Sato"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
          </motion.div>

          {/* Signature */}
          <motion.img
            aria-hidden
            src="/images/miyu-signature.png"
            alt=""
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            style={{
              x: "-50%",
              rotate: -4,
              position: "absolute",
              left: "50%",
              bottom: "16%",
              width: "290px",
              maxWidth: "none",
              height: "auto",
              zIndex: 3,
              pointerEvents: "none",
              filter: "invert(1)",
              mixBlendMode: "screen",
            }}
          />

          {/* Footer — semi-transparent over arch bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-3 z-10 flex items-center justify-between"
            style={{
              background: "rgba(255,255,255,0.88)",
              backdropFilter: "blur(8px)",
              borderTop: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <p className="text-[9px] font-semibold tracking-[0.12em] uppercase text-[#CCC]">
              © 2026 Miyu Sato
            </p>
            <div className="flex gap-4">
              {[
                { label: "YouTube",   href: "https://www.youtube.com/@BonjourMiyu" },
                { label: "Instagram", href: "https://www.instagram.com/miyu0001_/?hl=ja" },
                { label: "Email",     href: "mailto:miyuba0192@gmail.com" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-[9px] font-bold tracking-[0.12em] uppercase text-[#BBB] hover:text-[#111] transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          DESKTOP LAYOUT  — only on ≥ md  (unchanged)
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

        {/* Center visual wrapper */}
        <div style={{
          position: "absolute", left: "50%", bottom: 0,
          width: "700px", height: "860px",
          transform: "translateX(-50%)", overflow: "visible",
        }}>
          {/* Arch */}
          <motion.div
            aria-hidden
            initial={{ scaleY: 0.84, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.08, ease }}
            style={{
              x: "-50%", position: "absolute", left: "50%", bottom: 0,
              width: "650px", height: "820px",
              borderRadius: "325px 325px 0 0",
              background: "linear-gradient(180deg, #ff9066 0%, #FF5A3C 45%, #ff3d1f 100%)",
              transformOrigin: "bottom center", zIndex: 1,
            }}
          />
          {/* Person */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.28, ease }}
            style={{
              x: "-50%", position: "absolute", left: "50%", bottom: 0,
              width: "650px", height: "820px",
              borderRadius: "325px 325px 0 0", overflow: "hidden",
              zIndex: 3, pointerEvents: "none",
            }}
          >
            <img src="/images/miyu-hero.png" alt="Miyu Sato"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
          </motion.div>
          {/* Signature */}
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
            Creator / Learning in Public
          </p>
          <h1 className="font-bold text-[#111] leading-[1.15] mb-4" style={{ fontSize: "clamp(22px, 2.4vw, 34px)" }}>
            Building and sharing<br />my journey through<br />language, design,<br />and creation.
          </h1>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-[#BBB] mb-8">Tokyo-based</p>
          <div className="flex flex-col gap-3">
            <a href="#works" className="btn btn-dark">View Projects →</a>
            <a href="#contact" className="btn btn-outline">Get in Touch →</a>
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
                <p className="font-bold text-[#111] leading-none mb-1.5" style={{ fontSize: "50px" }}>7+</p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#AAA]">Years Creating</p>
              </div>
              <CircleBadge />
            </div>
            <div className="border-t border-black/[0.06] pt-4 mb-5 flex flex-col gap-4">
              {[
                { color: "#FF5A3C", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, num: "120+", label: "Projects Completed" },
                { color: "#FF5A3C", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF5A3C"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>, num: "Active", label: "YouTube Channel" },
                { color: "#FF3D8B", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF3D8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, num: "2", label: "Language Apps in Dev" },
                { color: "#FF3D8B", icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF3D8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, num: "3", label: "Awards Received" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: item.color + "15" }}>{item.icon}</div>
                  <div>
                    <p className="font-bold text-[#111] text-[14px] leading-none mb-0.5">{item.num}</p>
                    <p className="text-[11px] text-[#888] leading-snug">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#works" className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.16em] uppercase text-[#AAA] hover:text-[#FF5A3C] transition-colors duration-300">
              View Portfolio <span className="text-[#FF5A3C]">↗</span>
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

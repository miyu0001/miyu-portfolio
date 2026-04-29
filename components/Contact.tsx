"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const socials = [
  {
    label: "Email",
    href: "mailto:miyuba0192@gmail.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@BonjourMiyu",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/miyu0001_/?hl=ja",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0e0e12] relative overflow-hidden">

      {/* Glow accents */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FF5A3C]/[0.04] blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[320px] h-[320px] rounded-full bg-[#FF3D8B]/[0.08] blur-[90px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">

        {/* ── Vision quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease }}
          className="pt-16 md:pt-24 pb-10 md:pb-14 border-b border-white/[0.06]"
        >
          <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FF5A3C] mb-5">
            <span className="w-4 h-px bg-[#FF5A3C]" />
            Vision
          </p>
          <h2
            className="font-bold text-white leading-[1.12] max-w-[640px]"
            style={{ fontSize: "clamp(1.4rem, 2.4vw, 2.6rem)" }}
          >
            I want to create products and content{" "}
            <span className="font-serif font-normal italic" style={{ color: "#FF3D8B" }}>
              that connect people across cultures.
            </span>
          </h2>
        </motion.div>

        {/* ── Contact ── */}
        <div className="pt-20 md:pt-28 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left: headline + email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease }}
            >
              <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FF5A3C] mb-6">
                <span className="w-4 h-px bg-[#FF5A3C]" />
                Contact
              </p>
              <h3
                className="font-bold text-white leading-[1.1] mb-5"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)" }}
              >
                Feel free to<br />
                <span className="font-serif font-normal italic" style={{ color: "#FF3D8B" }}>
                  reach out or connect.
                </span>
              </h3>
              <p className="text-white/35 leading-[1.85] mb-8 max-w-[360px]" style={{ fontSize: "clamp(13px, 1.1vw, 15px)" }}>
                Always happy to connect — whether it&apos;s a collaboration, a project, or just to say hello.
              </p>
              <a
                href="mailto:miyuba0192@gmail.com"
                className="inline-flex items-center gap-2.5 font-bold text-white bg-[#FF5A3C] hover:bg-[#ff4020] transition-colors duration-300 px-7 py-3.5 rounded-full text-[13px] tracking-[0.04em]"
              >
                miyuba0192@gmail.com ↗
              </a>
            </motion.div>

            {/* Right: social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.15, ease }}
              className="flex flex-col gap-3"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") || s.href.startsWith("mailto") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between px-6 py-4 rounded-xl border border-white/[0.07] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 text-white/50 group-hover:text-white transition-colors duration-300">
                    <span className="shrink-0">{s.icon}</span>
                    <span className="text-[13px] font-semibold tracking-[0.04em]">{s.label}</span>
                  </div>
                  <span className="text-white/20 group-hover:text-[#FF5A3C] transition-colors duration-300 text-[12px]">↗</span>
                </a>
              ))}
            </motion.div>

          </div>
        </div>

        {/* ── Support / Buy Me a Coffee ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="pb-20 md:pb-28"
        >
          <div
            className="rounded-2xl p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 border border-white/[0.07]"
            style={{
              background: "linear-gradient(135deg, rgba(255,221,0,0.06) 0%, rgba(255,90,60,0.06) 50%, rgba(255,255,255,0.02) 100%)",
            }}
          >
            {/* Text */}
            <div className="flex-1">
              <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FFDD00]/70 mb-3">
                <span className="w-4 h-px bg-[#FFDD00]/70" />
                Support
              </p>
              <h3 className="font-bold text-white text-[1.3rem] md:text-[1.6rem] leading-[1.2] mb-3">
                ☕ If my content has meant something to you
              </h3>
              <p className="text-white/40 text-[13px] leading-[1.9] max-w-[560px]">
                Everything I make — the videos, the apps, this site — I build on my own, in my spare time, completely free.{" "}
                <span className="text-white/60">
                  &ldquo;Buy Me a Coffee&rdquo; is a platform where you can send me a small tip
                  (starting from around ¥150) as a way to say thanks.
                </span>{" "}
                There&apos;s no subscription, no pressure at all. It&apos;s simply the kindest way to tell a creator to keep going. 🙏
              </p>
            </div>

            {/* CTA button */}
            <a
              href="https://buymeacoffee.com/bonjour.miyu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto shrink-0 justify-center inline-flex items-center gap-2.5 font-black text-[#111] bg-[#FFDD00] hover:bg-[#ffe933] active:scale-95 transition-all duration-200 px-7 py-4 rounded-full text-[14px] tracking-[0.03em] whitespace-nowrap shadow-[0_8px_32px_rgba(255,221,0,0.25)]"
            >
              ☕ Buy Me a Coffee
            </a>
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <div className="border-t border-white/[0.06] py-5">
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[10px] text-white/20 tracking-[0.14em]">
            © 2026 Miyu Sato — All rights reserved
          </p>
          <p className="text-[10px] text-white/15 tracking-[0.1em]">
            @miyu0001_
          </p>
        </div>
      </div>
    </section>
  );
}

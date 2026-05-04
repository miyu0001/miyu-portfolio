"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LanguageContext";
import { Lang } from "@/lib/translations";

const LANGS: Lang[] = ["en", "fr"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, tx } = useLang();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 ring-2 ring-transparent group-hover:ring-[#FF5A3C]/40 transition-all duration-300">
            <img
              src="/images/youtubeimage.png"
              alt="Miyu Sato"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%", display: "block" }}
            />
          </div>
          <span className="text-[13px] font-bold tracking-[0.14em] uppercase text-[#111111]">
            Miyu Sato
          </span>
        </a>

        {/* Desktop: nav links + lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {[
              { label: tx.nav.about,    href: "#about" },
              { label: tx.nav.projects, href: "#works" },
              { label: tx.nav.contact,  href: "#contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#888888] hover:text-[#111111] transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-0.5 bg-black/[0.04] rounded-full p-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[9px] font-black tracking-[0.12em] uppercase px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === l
                    ? "bg-[#111] text-white shadow-sm"
                    : "text-[#AAA] hover:text-[#555]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="https://www.youtube.com/@BonjourMiyu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase bg-[#111111] text-white px-5 py-2.5 rounded-full hover:bg-[#FF5A3C] transition-colors duration-300"
          >
            YouTube ↗
          </a>
        </div>

        {/* Mobile: lang switcher + contact */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-0.5 bg-black/[0.04] rounded-full p-0.5">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[8px] font-black tracking-[0.1em] uppercase px-2 py-1 rounded-full transition-all duration-200 ${
                  lang === l
                    ? "bg-[#111] text-white"
                    : "text-[#AAA]"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="text-[11px] font-bold tracking-[0.16em] uppercase text-[#111111]"
          >
            {tx.nav.contact}
          </a>
        </div>
      </div>
    </motion.header>
  );
}

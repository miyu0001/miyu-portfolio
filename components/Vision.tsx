"use client";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden py-24 md:py-36"
      style={{ background: "linear-gradient(155deg, #FFFFFF 0%, #FAF9F7 55%, #F3F0F9 100%)" }}
    >
      {/* Decorative circle */}
      <div
        aria-hidden
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#6C3BFF]/[0.07] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-[#6C3BFF]/[0.05] pointer-events-none"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease }}
          className="max-w-[760px]"
        >
          <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FF5A3C] mb-8">
            <span className="w-4 h-px bg-[#FF5A3C]" />
            Vision
          </p>

          <h2
            className="font-bold text-[#111] leading-[1.1] mb-8"
            style={{ fontSize: "clamp(2rem, 4.5vw, 5.5rem)" }}
          >
            I want to create<br />
            products and content<br />
            <span className="font-serif font-normal italic" style={{ color: "#6C3BFF" }}>
              that connect people<br />across cultures.
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <a href="#contact" className="btn btn-dark">Get in Touch →</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

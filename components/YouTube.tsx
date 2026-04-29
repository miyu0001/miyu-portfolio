"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const videos = [
  { title: "Vlog #1 — Tokyo Life", thumb: "/images/thumb-vlog1.png" },
  { title: "Study French with Me", thumb: "/images/thumb-french.png" },
  { title: "Surf Vlog", thumb: "/images/thumb-surf.png" },
  { title: "Travaille avec moi", thumb: "/images/thumb-travaille.png" },
];

export default function YouTube() {
  return (
    <section className="bg-white py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-14"
        >
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#E05578] mb-4">
              <span className="block w-8 h-px bg-[#E05578]" />
              YouTube
            </p>
            <h2
              className="font-serif font-light text-[#0B0B0B]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
            >
              Latest Videos
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@BonjourMiyu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shrink-0 self-start sm:self-auto"
          >
            Channel ↗
          </a>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7 mb-12 md:mb-14">
          {videos.map((v, i) => (
            <motion.a
              key={v.title}
              href="https://www.youtube.com/@BonjourMiyu"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group block"
            >
              <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-100 mb-3 shadow-sm">
                <Image
                  src={v.thumb}
                  alt={v.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay + play button */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/28 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#E05578">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-[13px] font-semibold text-gray-800 group-hover:text-[#E05578] transition-colors duration-300 leading-snug">
                {v.title}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Channel strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 py-6 px-7 bg-[#F9F7F5] rounded-2xl border border-gray-100"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#E05578] flex items-center justify-center text-white font-serif text-lg font-light shrink-0">
              M
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-[14px]">Bonjour Miyu</p>
              <p className="text-[12px] text-gray-400 tracking-wide">日仏カルチャー × 日常 × 言語学習</p>
            </div>
          </div>
          <a
            href="https://www.youtube.com/@BonjourMiyu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary shrink-0"
          >
            チャンネルを見る →
          </a>
        </motion.div>

      </div>
    </section>
  );
}

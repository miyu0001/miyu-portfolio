"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const pillars = [
  {
    color: "#FF5A3C",
    bg: "#FF5A3C0D",
    title: "Language Learning",
    desc: "Exploring French and Japanese — not just grammar, but culture, nuance, and real communication.",
  },
  {
    color: "#FF3D8B",
    bg: "#FF3D8B0D",
    title: "App Development",
    desc: "Building small tools to solve problems I personally face, especially in language learning.",
  },
  {
    color: "#FF5A3C",
    bg: "#FF5A3C0D",
    title: "Content Creation",
    desc: "Documenting the journey on YouTube — progress, struggles, and everything in between.",
  },
  {
    color: "#FF3D8B",
    bg: "#FF3D8B0D",
    title: "Design Exploration",
    desc: "Learning UI/UX through hands-on projects with Figma and AI tools, iteration by iteration.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FFF5F0] py-10 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.95, ease }}
            className="order-2 lg:order-1"
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-[0_12px_52px_rgba(0,0,0,0.1)]"
              style={{ aspectRatio: "3/4", maxWidth: "500px" }}
            >
              <Image
                src="/images/miyu-about.png"
                alt="Miyu"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.24em] uppercase text-[#FF5A3C] mb-5">
              <span className="w-4 h-px bg-[#FF5A3C]" />
              About
            </p>

            <h2
              className="font-bold text-[#111111] leading-[1.06] mb-6"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 4rem)" }}
            >
              Learning.<br />
              Building.<br />
              <span className="text-[#FF3D8B] font-serif font-normal italic">Sharing.</span>
            </h2>

            <div
              className="text-[#666] leading-[1.95] mb-8 space-y-4"
              style={{ fontSize: "clamp(13px, 1.1vw, 15px)", maxWidth: "420px" }}
            >
              <p>
                I enjoy watching people grow — seeing someone work toward a goal
                and gradually improve over time. I see myself as being in that process as well.
              </p>
              <p>
                I love trying new things, and right now I&apos;m exploring language learning,
                app development, and design. Through these, I continue to learn, build,
                and share at the same time.
              </p>
              <p>
                By sharing my journey across different fields, I hope to inspire
                at least one person to take a step forward.
              </p>
              <p className="text-[#AAA]">
                I&apos;m still in the middle of my journey —<br />
                and I want to continue creating while valuing the process itself.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                  className="rounded-xl p-4 border border-black/[0.05]"
                  style={{ background: p.bg }}
                >
                  <span className="text-xs mb-2.5 block" style={{ color: p.color }}>✦</span>
                  <p className="font-bold text-[#111111] text-[13px] mb-1">{p.title}</p>
                  <p className="text-[11.5px] text-[#888888] leading-[1.7]">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="btn btn-dark self-start">Work Together</a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

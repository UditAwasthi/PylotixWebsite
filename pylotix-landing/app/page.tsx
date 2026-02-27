"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// --- DATA ---
const imageDescriptions = [
  "Secure Learning Access — Clean authentication experience.",
  "AI Course Builder — Generate structured learning plans instantly.",
  "Create Learning Profile — Personalized learning identity.",
  "Learning Dashboard — Track active skills and progress.",
  "Course Overview — Structured modules with progression.",
  "AI Command Interface — Define your learning objective.",
  "Skill Path Interface — Clear milestone-based progression.",
  "Profile & Metrics — Track streaks and learning consistency.",
];

export default function PylotixAppleDesign() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const isDark = theme === "dark";

  const screenshots = Array.from(
    { length: 8 },
    (_, i) => `/${isDark ? "dark" : "light"}-${i + 1}.jpeg`,
  );

  return (
    <main
      className={`min-h-screen transition-colors duration-1000 selection:bg-blue-500 selection:text-white ${
        isDark ? "bg-black text-[#f5f5f7]" : "bg-[#f5f5f7] text-[#1d1d1f]"
      } font-sans antialiased`}
    >
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 w-full z-[100] backdrop-blur-md border-b transition-colors duration-500 ${
          isDark ? "bg-black/70 border-white/10" : "bg-white/70 border-black/5"
        }`}
      >
        <div className="max-w-[1024px] mx-auto px-6 h-12 flex justify-between items-center text-[12px] font-medium tracking-tight">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tighter cursor-default">
              PYLOTIX
            </span>
            <div className="hidden md:flex gap-6 opacity-60">
              <a href="#system" className="hover:opacity-100 transition">
                System
              </a>
              <a href="#experience" className="hover:opacity-100 transition">
                Experience
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="opacity-60 hover:opacity-100 transition border px-3 py-1 rounded-full text-[10px]"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
            <a className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[11px] font-semibold hover:bg-blue-500 transition" href="https://github.com/UditAwasthi/PylotixWebsite/releases/download/app/pylotix.apk" target="_blank" rel="noopener noreferrer">
            Download App
          </a>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">
            Intelligence in Every Frame
          </span>
          <h1 className="text-5xl md:text-[100px] font-semibold tracking-tighter leading-[1.05] mb-8">
            The Learning <br /> Operating System.
          </h1>
          <p className="text-xl md:text-2xl opacity-50 max-w-2xl mx-auto font-medium tracking-tight">
            AI-generated paths built for focus, clarity, and mastery.
          </p>
        </motion.div>

        {/* Apple-style subtle glow */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isDark ? "opacity-20" : "opacity-10"}`}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600 blur-[140px] rounded-full" />
        </div>
      </section>

      {/* ================= STAGGERED 9:16 GALLERY ================= */}
      <section id="experience" className="max-w-[1100px] mx-auto px-6 py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-40">
          {screenshots.map((src, i) => (
            <TallImageCard
              key={i}
              src={src}
              index={i}
              description={imageDescriptions[i]}
              isDark={isDark}
            />
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-60 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12">
            Stop consuming. <br />
            <span className="opacity-30">Start mastering.</span>
          </h2>
          <a className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-full text-xl font-medium transition-all transform active:scale-95" href="https://github.com/UditAwasthi/PylotixWebsite/releases/download/app/pylotix.apk" target="_blank" rel="noopener noreferrer">
            Download App
          </a>
        </motion.div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className={`py-20 border-t ${isDark ? "border-white/10" : "border-black/5"}`}
      >
        <div className="max-w-[1024px] mx-auto px-6 flex flex-col items-center">
          <p className="text-[12px] opacity-40 leading-relaxed text-center max-w-2xl">
            Pylotix uses advanced neural architectures to generate learning
            paths. Individual progress may vary based on consistency and
            engagement. Images simulated for illustrative purposes.
            <br />
            <br />© 2026 Pylotix — Built for the future of focus.
          </p>
        </div>
      </footer>
    </main>
  );
}

// --- COMPONENTS ---

function TallImageCard({
  src,
  index,
  description,
  isDark,
}: {
  src: string;
  index: number;
  description: string;
  isDark: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  // Separate title and caption from your array
  const [title, caption] = description.split(" — ");

  // Parallax: Scroll progress moves columns at different speeds
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [0, index % 2 === 0 ? -60 : 60],
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: yParallax }}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${index % 2 !== 0 ? "md:mt-48" : ""}`}
    >
      {/* 9:16 Tall Image Container */}
      <div
        className={`relative aspect-[9/16] w-full rounded-[3.5rem] overflow-hidden shadow-3xl transition-transform duration-700 hover:scale-[1.02] ${
          isDark
            ? "bg-[#161617] ring-1 ring-white/10"
            : "bg-white ring-1 ring-black/5 shadow-2xl shadow-black/5"
        }`}
      >
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Subtle glass overlay for that premium feel */}
        <div className="absolute inset-0 pointer-events-none ring-inset ring-white/5 rounded-[3.5rem]" />
      </div>

      {/* Text Content */}
      <div className="mt-10 px-6">
        <p className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
          Feature 0{index + 1}
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
          {title}
        </h3>
        <p className="mt-3 text-lg opacity-50 font-medium leading-relaxed">
          {caption}
        </p>
      </div>
    </motion.div>
  );
}

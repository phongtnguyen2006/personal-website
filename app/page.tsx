"use client";

import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Toolkit from "./components/Toolkit";
import ContactSection from "./components/ContactSection";

const navItems = [
  { label: "work", id: "work" },
  { label: "builds", id: "builds" },
  { label: "toolkit", id: "toolkit" },
  { label: "say hi", id: "contact" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <div className="grain relative min-h-screen overflow-x-hidden bg-ink">
      {/* Ambient warmth behind the masthead so the ink doesn't read as flat black */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(240,168,104,0.10),transparent_70%)]"
      />

      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-ink-rule bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-4 sm:gap-6">
          <a
            href="#top"
            className="font-display text-lg tracking-tight text-paper transition-colors hover:text-amber"
          >
            p.n.
          </a>

          <ul className="flex items-center gap-3.5 sm:gap-7">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="font-mono text-xs uppercase tracking-[0.06em] text-paper-dim transition-colors duration-200 hover:text-amber sm:tracking-gloss"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      <main id="top" className="relative z-10">
        <HeroSection />
        <div id="work" className="scroll-mt-24">
          <WorkExperience />
        </div>
        <div id="builds" className="scroll-mt-24">
          <Projects />
        </div>
        <div id="toolkit" className="scroll-mt-24">
          <Toolkit />
        </div>
        <div id="contact" className="scroll-mt-24">
          <ContactSection />
        </div>
      </main>
    </div>
    </MotionConfig>
  );
}

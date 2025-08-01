"use client";

import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import SystemArchitecture from "./components/SystemArchitecture";
import TechnicalMetrics from "./components/TechnicalMetrics";
import ContactSection from "./components/ContactSection";

export default function BackendPortfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-green-500 font-mono font-bold text-xl"
            >
              phong.dev
            </motion.div>

            <div className="flex items-center space-x-8">
              {[
                { name: "Home", id: "hero" },
                { name: "Work Experience", id: "metrics" },
                { name: "Projects", id: "architecture" },
                { name: "Contact", id: "contact" },
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-green-500 transition-colors duration-200 font-mono text-sm"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10 pt-20">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="metrics">
          <TechnicalMetrics />
        </div>
        <div id="architecture">
          <SystemArchitecture />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-4xl w-full mx-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black backdrop-blur-lg rounded-lg border border-gray-800 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="font-mono">
            <p className="text-green-500">$ whoami</p>
            <div className="flex items-center justify-start gap-6 mb-4">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
                <img
                  src="/profile.png"
                  alt="Profile picture"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-5xl font-bold">Phong Nguyen</h1>
                <p className="text-green-400 mt-2 mb-2">
                  Computer Science and Linguistics @ UCLA
                </p>
                <p className="text-gray-400 mb-2 max-w-lg">
                  Passionate about building impactful technology. Interested in
                  AI infrastructure and full-stack engineering. Love cooking,
                  fishing, and soccer.
                </p>
              </div>
            </div>
            {/* <p className="text-green-500">$ skills</p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Full-stack
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Python
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                C++
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                AWS
              </span>
              <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                Machine Learning
              </span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

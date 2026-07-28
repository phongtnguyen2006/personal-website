"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { profile } from "../content";

/* Orchestration lives on the parent variant — a bare `transition` prop won't stagger. */
const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pb-24 pt-28 md:pb-32 md:pt-36">
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Headword */}
        <motion.p
          variants={rise}
          className="font-mono text-xs uppercase tracking-gloss text-paper-faint"
        >
          entry 01
        </motion.p>

        <motion.h1
          variants={rise}
          className="mt-4 font-display text-[3.25rem] leading-[0.95] tracking-tight text-paper sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        {/* Pronunciation, part of speech, gloss */}
        <motion.div
          variants={rise}
          className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2"
        >
          <span className="font-mono text-lg text-amber">{profile.ipa}</span>
          <span className="font-mono italic text-sm text-plum">
            {profile.pos}
          </span>
          <span className="font-sans text-lg text-paper-dim">
            {profile.gloss}
          </span>
        </motion.div>

        <motion.div variants={rise} className="rule mt-10" />

        {/* Definition + portrait */}
        <div className="mt-10 flex flex-col-reverse gap-10 md:flex-row md:items-start md:justify-between md:gap-14">
          <motion.div variants={rise} className="max-w-measure">
            <p className="font-mono text-xs uppercase tracking-gloss text-paper-faint">
              1.
            </p>
            <p className="mt-3 font-sans text-lg leading-relaxed text-paper/90 md:text-xl">
              {profile.bio}
            </p>
          </motion.div>

          <motion.div variants={rise} className="shrink-0">
            <div className="group relative h-40 w-40 overflow-hidden rounded-sm ring-1 ring-ink-rule md:h-48 md:w-48">
              <Image
                src="/profile.png"
                alt="Phong Nguyen"
                fill
                priority
                sizes="192px"
                className="object-cover object-center grayscale transition-[filter] duration-700 ease-out group-hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div>

        {/* Currently */}
        <motion.div variants={rise} className="mt-14">
          <div className="rule" />
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-5">
            <span className="font-mono text-xs uppercase tracking-gloss text-amber">
              currently
            </span>
            <span className="font-sans text-base text-paper">
              {profile.currently.role}
            </span>
            <span className="text-paper-faint">·</span>
            <span className="font-sans text-base text-paper-dim">
              {profile.currently.org}
            </span>
            <span className="text-paper-faint">·</span>
            <span className="font-mono text-sm text-paper-faint">
              {profile.currently.place}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

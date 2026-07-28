"use client";

import { motion } from "framer-motion";

/**
 * The signature element: every section head is set as a dictionary entry —
 * numbered, with a headword, a part-of-speech tag, and a plain-language gloss.
 * The numbering is a real sequence continuing from the hero (entry 01).
 */
export default function SectionHeading({
  entry,
  word,
  pos,
  gloss,
}: {
  entry: string;
  word: string;
  pos: string;
  gloss: string;
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-16"
    >
      <p className="font-mono text-xs uppercase tracking-gloss text-paper-faint">
        entry {entry}
      </p>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2 className="font-display text-4xl tracking-tight text-paper md:text-5xl">
          {word}
        </h2>
        <span className="font-mono text-sm italic text-amber">{pos}</span>
        <span className="max-w-measure font-sans text-base text-paper-dim">
          {gloss}
        </span>
      </div>

      <div className="rule mt-5" />
    </motion.header>
  );
}

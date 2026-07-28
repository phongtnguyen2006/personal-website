"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education, toolkit } from "../content";

export default function Toolkit() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeading
        entry="04"
        word="toolkit"
        pos="n."
        gloss="what i actually reach for, and where i'm learning it"
      />

      <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          {toolkit.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs uppercase tracking-gloss text-amber">
                {group.label}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-paper-dim after:ml-3 after:text-paper-faint after:content-['·'] last:after:content-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-gloss text-amber">
            school
          </p>

          <h3 className="mt-4 font-display text-2xl leading-snug tracking-tight text-paper">
            {education.school}
          </h3>
          <p className="mt-2 font-sans text-base text-plum">
            {education.degree}
          </p>
          <p className="mt-1 font-sans text-base text-paper-dim">
            {education.minor}
          </p>

          <p className="mt-4 font-mono text-sm text-paper-dim">
            {education.gpa}
            <span className="text-paper-faint"> · </span>
            {education.grad}
          </p>

          <div className="rule mt-6" />
          <p className="mt-4 font-mono text-xs uppercase tracking-gloss text-paper-faint">
            coursework
          </p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-paper-dim">
            {education.coursework}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

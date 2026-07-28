"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { earlierRoles, roles } from "../content";

export default function WorkExperience() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeading
        entry="02"
        word="work"
        pos="n."
        gloss="places that have let me ship things real people use"
      />

      <ol className="space-y-14 md:space-y-20">
        {roles.map((role, i) => (
          <motion.li
            key={role.org}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-x-10 gap-y-5 md:grid-cols-[10rem_1fr]"
          >
            {/* Timeline rail */}
            <div className="md:pt-1.5">
              <p className="font-mono text-sm text-amber">
                {role.start}
                <span className="text-paper-faint"> — </span>
                {role.end}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-gloss text-paper-faint">
                {role.place}
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl tracking-tight text-paper md:text-[1.75rem]">
                {role.org}
              </h3>
              <p className="mt-1 font-sans text-base text-plum">{role.title}</p>

              <ul className="mt-5 space-y-3.5 max-w-measure">
                {role.notes.map((note, n) => (
                  <li
                    key={n}
                    className="relative pl-5 font-sans text-[0.975rem] leading-relaxed text-paper-dim"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.72em] h-px w-2.5 bg-ink-rule"
                    />
                    {note}
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-mono text-xs text-plum">
                {role.stack.join("  ·  ")}
              </p>
            </div>

            {i < roles.length - 1 && (
              <div className="rule mt-4 md:col-span-2" />
            )}
          </motion.li>
        ))}
      </ol>

      {/* Roles that didn't make the resume, kept as a footnote */}
      <motion.aside
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16"
      >
        <div className="rule" />
        <p className="mt-5 font-mono text-xs uppercase tracking-gloss text-paper-faint">
          also
        </p>
        <p className="mt-3 max-w-measure font-sans text-sm leading-relaxed text-paper-dim">
          {earlierRoles}
        </p>
      </motion.aside>
    </section>
  );
}

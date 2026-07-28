"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../content";

export default function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeading
        entry="03"
        word="builds"
        pos="n. pl."
        gloss="things i made because i wanted them to exist"
      />

      <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: (i % 2) * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl tracking-tight text-paper transition-colors duration-300 group-hover:text-amber">
                {project.name}
              </h3>
              <span className="font-mono text-xs text-paper-faint">
                {project.year}
              </span>
            </div>

            <div className="rule mt-3" />

            <p className="mt-4 font-sans text-[0.975rem] leading-relaxed text-paper-dim">
              {project.blurb}
            </p>

            <p className="mt-4 font-mono text-xs leading-relaxed text-plum">
              {project.tech.join("  ·  ")}
            </p>

            {project.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-amber underline decoration-amber/30 underline-offset-4 transition-colors duration-200 hover:decoration-amber"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

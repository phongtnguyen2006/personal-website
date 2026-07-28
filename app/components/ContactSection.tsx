"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "../content";

const links = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "github", value: profile.githubHandle, href: profile.github },
  { label: "linkedin", value: profile.linkedinHandle, href: profile.linkedin },
  { label: "resume", value: "resume.pdf", href: "/resume.pdf" },
];

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <SectionHeading
        entry="05"
        word="say hi"
        pos="v."
        gloss="i'm always up for talking about agents, infra, or where to eat"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="max-w-measure font-sans text-lg leading-relaxed text-paper/90 md:text-xl">
          if you&apos;re building something in this space — or you just want to
          argue about whether linguistics is useful for AI — my inbox is open.
        </p>

        <ul className="mt-12">
          {links.map((link) => {
            const external = !link.href.startsWith("mailto:");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-baseline justify-between gap-6 border-t border-ink-rule py-5 transition-colors duration-300 hover:border-amber/40 last:border-b"
                >
                  <span className="font-mono text-xs uppercase tracking-gloss text-paper-faint transition-colors duration-300 group-hover:text-amber">
                    {link.label}
                  </span>
                  <span className="flex items-baseline gap-3 font-display text-xl tracking-tight text-paper transition-colors duration-300 group-hover:text-amber md:text-2xl">
                    {link.value}
                    <span
                      aria-hidden
                      className="font-mono text-sm text-paper-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:text-amber"
                    >
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <footer className="mt-16 flex flex-wrap items-baseline justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-gloss text-paper-faint">
            {profile.location}
          </p>
          <p className="font-mono text-xs text-paper-faint">
            built with next.js, too late at night
          </p>
        </footer>
      </motion.div>
    </section>
  );
}

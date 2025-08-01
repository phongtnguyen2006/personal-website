"use client";

import { motion } from "framer-motion";

export default function SystemArchitecture() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          System Architecture & Projects
        </motion.h2>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {[
            {
              title: "Form Fitness (LAHacks)",
              description:
                "An AI-powered fitness app that provides real-time form correction and workout tracking using computer vision.",
              tech: [
                "TensorFlow",
                "Google MoveNet",
                "React",
                "TypeScript",
                "Flask",
                "Gemini AI",
              ],
              link: {
                label: "See Project →",
                url: "https://github.com/LAHacks25/form-fitness",
              },
              demo: {
                label: "See Demo →",
                url: "https://devpost.com/software/form-fitness-pya478",
              },
            },
            {
              title: "Image to Song",
              description:
                "A creative multi-modal app that recommends songs based on the 'vibe' of an uploaded image.",
              tech: ["Hugging Face", "Groq", "React", "Flask", "Python"],
              link: {
                label: "See Project →",
                url: "https://github.com/phongtnguyen2006?tab=repositories",
              },
            },
            {
              title: "SIP",
              description:
                "A café discovery and review app built with Creative Labs @ UCLA, featuring real-time search and review aggregation.",
              tech: [
                "React Native",
                "Firebase",
                "Node.js",
                "Express",
                "MongoDB",
              ],
              link: {
                label: "See Project →",
                url: "https://github.com/SIP-CL/SIP",
              },
              demo: {
                label: "See Demo →",
                url: "https://docs.google.com/presentation/d/1r0Kyg0f6eTUbGjDPxkYSU6xiJS19VnSAwVw6cNjk1rY/edit?slide=id.g35f087c8a4f_0_5#slide=id.g35f087c8a4f_0_5",
              },
            },
            {
              title: "UCSB Dine-In (SB Hacks)",
              description:
                "Built in 24 hours, this app helps UCSB students browse daily menus and share dining hall reviews.",
              tech: ["Next.js", "Supabase", "Tailwind CSS", "Bootstrap"],
              link: {
                label: "See Project →",
                url: "https://github.com/phongtnguyen2006/UCSB-Dine-In",
              },
              demo: {
                label: "See Demo →",
                url: "https://devpost.com/software/ucsbdine-in",
              },
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 backdrop-blur-sm border border-gray-800 min-w-[300px] max-w-[350px] flex-shrink-0"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">
                {project.title}
              </h3>
              <p className="text-white mb-6">{project.description}</p>

              {project.details && <div className="mb-6"></div>}

              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.link && (
                <div className="mt-auto">
                  <div className="flex gap-4">
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
                    >
                      {project.link.label}
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-gray-400 cursor-pointer hover:text-gray-300 transition-colors"
                      >
                        {project.demo.label}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

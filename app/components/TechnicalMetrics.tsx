"use client";

import { motion } from "framer-motion";

export default function TechnicalMetrics() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Greenpoint Financial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Greenpoint Financial
            </h3>
            <h4 className="text-lg font-semibold text-gray-300">
              Software Engineer Intern
            </h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                • Built Python web scraper with BeautifulSoup to extract
                financial rates from HTML
              </li>
              <li>
                • Deployed scraper via Azure Functions with scheduled triggers,
                saving 10+ hours/week
              </li>
              <li>
                • Designed relational schemas to clean and analyze data from
                100+ banks
              </li>
              <li>
                • Built Power BI dashboards with C-suite, improving investment
                strategy by 50%
              </li>
            </ul>
          </motion.div>

          {/* Creative Labs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Creative Labs
            </h3>
            <h4 className="text-lg font-semibold text-gray-300">
              Developer Lead
            </h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                • Led 6 developers through agile sprints, set GitHub code review
                standards
              </li>
              <li>
                • Coordinated with designers to implement 20+ Figma mockups
              </li>
              <li>
                • Full-stack dev: React Native (frontend), Node.js/Express
                (backend), Firebase, MongoDB
              </li>
              <li>
                • Designed system for attribute aggregation and
                sentiment-adjusted ratings
              </li>
            </ul>
          </motion.div>

          {/* UCLA Radio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              UCLA Radio
            </h3>
            <h4 className="text-lg font-semibold text-gray-300">
              Software Developer
            </h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                • Contributed to Show Archive site using Next.js for filtering
                and streaming broadcasts
              </li>
              <li>
                • Automated processing of 1,000+ show records using Pandas and
                GCP Drive API
              </li>
              <li>
                • Helped modernize the station’s tech stack as part of a
                20-person dev/design team
              </li>
            </ul>
          </motion.div>

          {/* Code Ninjas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-400">
              Code Ninjas
            </h3>
            <h4 className="text-lg font-semibold text-gray-300">
              Coding Instructor
            </h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                • Taught 200+ students (ages 7–14) in Python, JavaScript, C#,
                Lua, and block coding
              </li>
              <li>
                • Designed curriculum and led summer camps for 20+ students
              </li>
              <li>
                • Engaged with parents and achieved 75% student enrollment rate
                through curriculum demos
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

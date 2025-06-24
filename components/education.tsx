"use client"

import { motion } from "framer-motion"

const education = [
  {
    institution: "Pune Institute of Computer Technology",
    degree: "B.Tech , Information Technology ",
    period: "Oct 2022 - May 2026",
    gpa: "CGPA: 8.56/10",
    icon: "🎓",
  },
  {
    institution: "Y.C. Junior College, Mangrulpir",
    degree: "Higher Secondary Certificate (HSC) – Science",
    period: "Aug 2020 – Jun 2022",
    gpa: "87%",
    icon: "🏫"
  },
  {
    institution: "SNC School, Karanja (Lad)",
    degree: "Secondary School Certificate (SSC)",
    period: "Jun 2018 – Mar 2019",
    gpa: "92.60%",
    icon: "🎓"

  }
]

export default function Education() {
  return (
    <section id="education" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
                {edu.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-muted-foreground">{edu.degree}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                  <span>{edu.period}</span>
                  {edu.gpa && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span>{edu.gpa}</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
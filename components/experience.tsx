"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Research Intern",
    company: "@L3Cube Labs",
    period: "June 2025 - Present",
    responsibilities: [
      "Exploring fine-tuning of transformer-based models (like BERT and IndicBERT).",
      "Developing and evaluating datasets and models for tasks such as Named Entity Recognition (NER), sentiment analysis, and question answering.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Hugging Face",
    ]

  },
  {
    title: "Full Stack Developer Intern",
    company: "@PICT",
    period: "Jan 2025 - April 2025",
    responsibilities: [
      "Worked on a custom browser project for PICT",
      "Built a secure, campus-restricted browser using Python, PyQt, and WebSocket for real-time website access monitoring",
      "Enabled admin control for whitelisting and blacklisting websites in real-time across connected clients",
    ],
    skills: ["PyQt", "Python", "Websocket", "Express.js"],
  },
  // {
  //   title:  "Frontend Developer Intern",
  //   company: "Holiday Travels",
  //   period: "Nov 2024 - Jan 2025",
  //   responsibilities: [
  //     "Worked on frontend development.",
  //     "Enhanced UI/UX and improving user interaction",
  //     "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js"
  //   ],
  //   skills: ["React", "TypeScript", "GSAP","TailwindCSS"],
  // },
  // {
  //   title: "Web Developer",
  //   company: "Ministry of Electronics and Information Technology",
  //   period: "Mar 2024 – Jun 2024",
  //   responsibilities: [
  //     "Developed a CMS dashboard for eDeskshaam, enhancing UI/UX and improving user interaction",
  //     "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js",
  //   ],
  //   skills: ["React", "JavaScript", "UI/UX", "Responsive Design"],
  // },
  // {
  //   title: "Web Developer",
  //   company: "Ministry of Electronics and Information Technology",
  //   period: "Mar 2023 – Dec 2023",
  //   responsibilities: [
  //     "Created four interactive educational games (Identify Fruits, Animals, Vehicles, Body Parts)",
  //     "Developed user-friendly homepage for educational games and collaborated with UX designers",
  //     "Worked closely with back-end developers to ensure seamless integration and cohesive user experience",
  //   ],
  //   skills: ["React", "JavaScript", "UI/UX", "Responsive Design"],
  // },
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
import { motion } from "framer-motion";

const projects = [
  {
    title: "True Wireless Music Player",
    description:
      "Engineered and tested a standalone, prototype wireless iPod. Built using an ESP32-CAM integrated with a custom-soldered battery circuit to handle portable audio.",
  },
  {
    title: "Debate Club Digital Marketing",
    description:
      "Led the digital strategy and content creation for a debating club. Directed, edited, and produced high-energy promotional reels and SaaS-style product videos to drive community engagement and online reach.",
  },
  {
    title: "Full-Stack Web Portfolio",
    description:
      "Designed and deployed a responsive personal portfolio using modern JavaScript frameworks and utility-first CSS to showcase my journey in tech and hardware.",
  },
  {
    title: "Smart Timer Web Application",
    description:
      "A functional full-stack time management tool backed by Supabase and Firebase for seamless state management and user workflows.",
  },
  {
    title: "Miniature TV Remote & Button Sync",
    description:
      "Engineered a custom hardware device using microcontrollers and wrote companion scripts to map and sync physical button presses directly with web applications.",
  },
  {
    title: "Interactive 3D Hardware Assembly",
    description:
      "Designed custom scroll-triggered UI elements for the web portfolio, featuring an animated breakdown of hardware components in action.",
  },
];

export function Work() {
  return (
    <section id="projects" className="bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-4xl md:text-6xl"
        >
          What I've Built
        </motion.h2>
        <p className="mt-3 text-sm text-muted-foreground">Selected projects</p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/60"
            >
              <span className="text-xs tracking-[0.3em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-display mt-4 text-2xl leading-tight md:text-3xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

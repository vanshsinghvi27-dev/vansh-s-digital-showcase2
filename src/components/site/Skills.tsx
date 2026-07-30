import { motion } from "framer-motion";

const rows = [
  { category: "Web Development", tools: ["React", "Vite", "Tailwind CSS", "Vercel"] },
  {
    category: "Hardware & IoT",
    tools: ["ESP32", "ESP32-CAM", "Arduino UNO", "Sensors", "Relays"],
  },
  {
    category: "Creative & Media",
    tools: ["DaVinci Resolve", "CapCut", "Jitter", "Social Media Strategy"],
  },
  {
    category: "Gaming & Modding",
    tools: ["Open-world titles", "Racing Simulators", "Custom Flight Controls"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-4xl md:text-6xl"
        >
          What I Like
        </motion.h2>
        <p className="mt-3 text-sm text-muted-foreground">My tech stack &amp; skills</p>

        <div className="mt-12 border-t border-border">
          {rows.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-4 border-b border-border py-7 md:grid-cols-[220px_1fr] md:gap-8"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {row.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {row.tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary hover:text-primary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

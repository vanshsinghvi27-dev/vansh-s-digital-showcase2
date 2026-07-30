import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const text =
  "Hey, I'm Vansh. I'm a 16-year-old developer, hardware tinkerer, and creator heading into 11th grade. I love building things from scratch — whether that means writing clean code, soldering circuits, or cutting high-energy motion graphics. If there is a way to bridge the gap between software, hardware, and digital media, I'm probably experimenting with it.";

const HIGHLIGHT = new Set(["developer,", "hardware", "creator", "scratch"]);

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const highlighted = HIGHLIGHT.has(children);
  return (
    <motion.span
      style={{ opacity }}
      className={`mr-[0.25em] inline-block ${
        highlighted ? "border-b-2 border-primary pb-1" : ""
      }`}
    >
      {children}
    </motion.span>
  );
}

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.15"],
  });
  const words = text.split(" ");

  return (
    <section id="about" className="bg-background px-6 py-32 md:px-12">
      <div ref={ref} className="mx-auto max-w-5xl">
        <p className="text-display flex flex-wrap text-2xl leading-[1.35] md:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </section>
  );
}

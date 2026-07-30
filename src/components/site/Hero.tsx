import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const NAME = "Vansh".split("");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <div className="hero-gradient-bg absolute inset-0" aria-hidden="true" />

      <motion.div
        style={{ opacity, scale, y: yText }}
        className="relative z-10 w-full max-w-6xl text-center"
      >
        <h1 className="text-display text-name-gradient flex justify-center text-[34vw] leading-[0.78] md:text-[26vw]">
          {NAME.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {ch}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-bold-sans mx-auto -mt-2 max-w-3xl text-sm uppercase leading-relaxed tracking-wide text-foreground/95 md:text-lg"
        >
          Hey, I am a 16-year-old developer, hardware tinkerer and creator building things from
          scratch — clean code, soldered circuits and high-energy motion graphics.
        </motion.p>
      </motion.div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ delay: 1.2, duration: 2.4, repeat: Infinity }}
        className="absolute bottom-8 left-6 z-10 text-sm text-foreground/70 md:left-12"
      >
        Scroll to Explore
      </motion.span>
    </section>
  );
}

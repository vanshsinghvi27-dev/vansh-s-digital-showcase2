import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Work } from "@/components/site/Work";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vansh — Developer, Hardware Tinkerer & Creator" },
      {
        name: "description",
        content:
          "Portfolio of Vansh, a 16-year-old developer and hardware tinkerer building with React, ESP32 and motion graphics.",
      },
      { property: "og:title", content: "Vansh — Developer, Hardware Tinkerer & Creator" },
      {
        property: "og:description",
        content:
          "Projects and skills of Vansh — web development, IoT hardware and creative media.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <footer className="border-t border-border px-6 py-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground md:px-12">
        © {new Date().getFullYear()} Vansh — Let's build something remarkable
      </footer>
    </main>
  );
}

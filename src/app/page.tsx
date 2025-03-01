import { Container } from "@/components/ui/container";
import { Hero } from "@/components/sections/hero";
// import { Features } from "@/components/sections/features";
import { Matrix } from "@/components/sections/matrix";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Testimonials2 } from "@/components/sections/testimonials2";
import { MarqueeDemo } from "@/components/sections/Logos";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { Details } from "@/components/sections/Details";
import Contact from "@/components/sections/contact";
import NewsLetter from "@/components/sections/news-letter";
import About from "@/components/sections/About";
import { RetroGrid } from "./_components/retro-grid";

export default function Home() {
  return (
    <div className="relative">
      <Container>
        <Hero />
        <MarqueeDemo />
        <About />
        <Details />

        <Matrix />
        <TestimonialsMarquee />
        {/* <Testimonials /> */}
        {/* <Testimonials2 /> */}
        <CTA />
        <FAQ />
      </Container>
      <div className="relative">
        <RetroGrid />

        <Contact />
      </div>

      {/* <NewsLetter /> */}
    </div>
  );
}

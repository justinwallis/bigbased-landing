import { Container } from "@/components/ui/container";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Matrix } from "@/components/sections/matrix";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Testimonials2 } from "@/components/sections/testimonials2";
import { MarqueeDemo } from "@/components/sections/Logos";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <Container>
      <div></div>
      <Hero />
      <MarqueeDemo />
      <About />
      <Matrix />
      <Features />
      <TestimonialsMarquee />
      {/* <Testimonials /> */}
      {/* <Testimonials2 /> */}
      <CTA />
      <FAQ />
    </Container>
  );
}

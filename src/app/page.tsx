import { Container } from "@/components/ui/container";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Matrix } from "@/components/sections/matrix";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { FAQ } from "@/components/sections/faq";
import { Testimonials2 } from "@/components/sections/testimonials2";

export default function Home() {
  return (
    <Container>
      <div></div>
      <Hero />
      <Matrix />
      <Features />
      {/* <Testimonials /> */}
      {/* <Testimonials2 /> */}
      {/* <CTA /> */}
      {/* <FAQ /> */}
    </Container>
  );
}

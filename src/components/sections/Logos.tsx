"use client";
import { Marquee } from "@/app/_components/marquee";
import { OpenAI, Claude, Gemini, Perplexity } from "@lobehub/icons";
const Logos = {
  openai: () => <OpenAI.Combine size={43} />,
  claude: () => <Claude.Combine size={43} type={"color"} />,
  gemini: () => <Gemini.Combine size={43} type={"color"} />,
  perplexity: () => <Perplexity.Combine size={43} type={"color"} />,
};

export function MarqueeDemo() {
  const arr = [Logos.openai, Logos.gemini, Logos.claude, Logos.perplexity];

  return (
    <Marquee>
      {arr.map((Logo, index) => (
        <div
          key={index}
          className="s relative mx-[4rem] mt-14 flex h-full w-fit items-center justify-start py-2 sm:mb-8 sm:mt-0"
        >
          <Logo />
        </div>
      ))}
    </Marquee>
  );
}

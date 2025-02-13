import Image from "next/image";
import { Waves } from "@/components/ui/waves-background";
import { CheckIcon } from "@radix-ui/react-icons";

export function CTA() {
  return (
    <section className="relative w-full min-h-[500px] my-20" id="pricing">
      <div className="absolute inset-0 pointer-events-none">
        <Waves
          lineColor="rgb(228 228 231)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 py-16">
        <div className="relative group rounded-2xl transition-all duration-500 bg-gradient-to-b from-neutral-950 to-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] p-10 max-w-2xl w-full">
          <div className="flex justify-center mb-8">
            <Image 
              src="/Exclude.svg"
              alt="BigBased.AI Logo"
              width={64}
              height={64}
              priority
              className="brightness-0 invert"
            />
          </div>
          
          <h3 className="text-lg uppercase tracking-wider font-medium text-white mb-6">
            Enterprise Solution
          </h3>
          
          <div className="space-y-4 pb-6 border-b border-neutral-800">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-light text-white">$9,999</span>
              <span className="text-sm text-neutral-400">setup fee</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-light text-white">$999</span>
              <span className="text-sm text-neutral-400">/month maintenance</span>
            </div>
          </div>

          <div className="mt-8 space-y-4 flex-grow">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm text-neutral-300">Custom AI Model Training</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm text-neutral-300">Dedicated Support Team</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white">
                <CheckIcon className="w-3.5 h-3.5" />
              </div>
              <span className="text-sm text-neutral-300">Unlimited Trading Volume</span>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full h-12 bg-white hover:bg-neutral-100 text-neutral-900 rounded-md transition-all duration-300 font-medium tracking-wide">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

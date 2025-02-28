import Image from "next/image";
import { CheckIcon } from "@radix-ui/react-icons";

interface PricingCardProps {
  title: string;
  setupFee: string;
  monthlyFee: string;
  features: string[];
}

export function PricingCard({
  title,
  setupFee,
  monthlyFee,
  features,
}: PricingCardProps) {
  return (
    <div className="group relative w-11/12 rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900 p-10 transition-all duration-500 hover:border-neutral-700 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] sm:w-[360px]">
      <div className="mb-8 flex justify-center">
        <Image
          src="/Exclude.svg"
          alt="BigBased.AI Logo"
          width={64}
          height={64}
          priority
          className="brightness-0 invert"
        />
      </div>

      <h3 className="mb-6 text-lg font-medium uppercase tracking-wider text-white">
        {title}
      </h3>

      <div className="space-y-4 border-b border-neutral-800 pb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-light text-white">{setupFee}</span>
          <span className="text-sm text-neutral-400">setup fee</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-light text-white">{monthlyFee}</span>
          <span className="text-sm text-neutral-400">/month maintenance</span>
        </div>
      </div>

      <div className="mt-8 flex-grow space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white">
              <CheckIcon className="h-3.5 w-3.5" />
            </div>
            <span className="text-sm text-neutral-300">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button className="h-12 w-full rounded-md bg-white font-medium tracking-wide text-neutral-900 transition-all duration-300 hover:bg-neutral-100">
          Contact Sales
        </button>
      </div>
    </div>
  );
}

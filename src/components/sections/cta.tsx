// "use client";
// import Image from "next/image";
// import { Waves } from "@/components/ui/waves-background";
// import { CheckIcon } from "@radix-ui/react-icons";

// export function CTA() {
//   return (
//     <section className="relative my-20 min-h-[500px] w-full" id="pricing">
//       <div className="pointer-events-none absolute inset-0">
//         <Waves
//           lineColor="rgb(228 228 231)"
//           backgroundColor="transparent"
//           waveSpeedX={0.02}
//           waveSpeedY={0.01}
//           waveAmpX={40}
//           waveAmpY={20}
//           friction={0.9}
//           tension={0.01}
//           maxCursorMove={120}
//           xGap={12}
//           yGap={36}
//         />
//       </div>

//       <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-16">
//         <div className="group relative w-full max-w-2xl rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900 p-10 transition-all duration-500 hover:border-neutral-700 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]">
//           <div className="mb-8 flex justify-center">
//             <Image
//               src="/Exclude.svg"
//               alt="BigBased.AI Logo"
//               width={64}
//               height={64}
//               priority
//               className="brightness-0 invert"
//             />
//           </div>

//           <h3 className="mb-6 text-lg font-medium uppercase tracking-wider text-white">
//             Enterprise Solution
//           </h3>

//           <div className="space-y-4 border-b border-neutral-800 pb-6">
//             <div className="flex items-baseline gap-2">
//               <span className="text-5xl font-light text-white">$9,999</span>
//               <span className="text-sm text-neutral-400">setup fee</span>
//             </div>
//             <div className="flex items-baseline gap-2">
//               <span className="text-3xl font-light text-white">$999</span>
//               <span className="text-sm text-neutral-400">
//                 /month maintenance
//               </span>
//             </div>
//           </div>

//           <div className="mt-8 flex-grow space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white">
//                 <CheckIcon className="h-3.5 w-3.5" />
//               </div>
//               <span className="text-sm text-neutral-300">
//                 Custom AI Model Training
//               </span>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white">
//                 <CheckIcon className="h-3.5 w-3.5" />
//               </div>
//               <span className="text-sm text-neutral-300">
//                 Dedicated Support Team
//               </span>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white">
//                 <CheckIcon className="h-3.5 w-3.5" />
//               </div>
//               <span className="text-sm text-neutral-300">
//                 Unlimited Trading Volume
//               </span>
//             </div>
//           </div>

//           <div className="mt-8">
//             <button className="h-12 w-full rounded-md bg-white font-medium tracking-wide text-neutral-900 transition-all duration-300 hover:bg-neutral-100">
//               Contact Sales
//             </button>
//           </div>
//         </div>
//         <div className="group relative w-full max-w-2xl rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900 p-10 transition-all duration-500 hover:border-neutral-700 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]">
//           <div className="mb-8 flex justify-center">
//             <Image
//               src="/Exclude.svg"
//               alt="BigBased.AI Logo"
//               width={64}
//               height={64}
//               priority
//               className="brightness-0 invert"
//             />
//           </div>

//           <h3 className="mb-6 text-lg font-medium uppercase tracking-wider text-white">
//             Enterprise Solution
//           </h3>

//           <div className="space-y-4 border-b border-neutral-800 pb-6">
//             <div className="flex items-baseline gap-2">
//               <span className="text-5xl font-light text-white">$9,999</span>
//               <span className="text-sm text-neutral-400">setup fee</span>
//             </div>
//             <div className="flex items-baseline gap-2">
//               <span className="text-3xl font-light text-white">$999</span>
//               <span className="text-sm text-neutral-400">
//                 /month maintenance
//               </span>
//             </div>
//           </div>

//           <div className="mt-8 flex-grow space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white">
//                 <CheckIcon className="h-3.5 w-3.5" />
//               </div>
//               <span className="text-sm text-neutral-300">
//                 Custom AI Model Training
//               </span>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white">
//                 <CheckIcon className="h-3.5 w-3.5" />
//               </div>
//               <span className="text-sm text-neutral-300">
//                 Dedicated Support Team
//               </span>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white">
//                 <CheckIcon className="h-3.5 w-3.5" />
//               </div>
//               <span className="text-sm text-neutral-300">
//                 Unlimited Trading Volume
//               </span>
//             </div>
//           </div>

//           <div className="mt-8">
//             <button className="h-12 w-full rounded-md bg-white font-medium tracking-wide text-neutral-900 transition-all duration-300 hover:bg-neutral-100">
//               Contact Sales
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { PricingCard } from "@/app/_components/PricingCard";
import { Waves } from "@/components/ui/waves-background";

// Define the structure for card data
interface CardData {
  title: string;
  setupFee: string;
  monthlyFee: string;
  features: string[];
}

export function CTA() {
  const cardData: CardData[] = [
    {
      title: "Enterprise Solution",
      setupFee: "$9,999",
      monthlyFee: "$999",
      features: [
        "Custom AI Model Training",
        "Dedicated Support Team",
        "Unlimited Trading Volume",
        "Custom Integrations",
      ],
    },
    {
      title: "Business Solution",
      setupFee: "$5,999",
      monthlyFee: "$499",
      features: [
        "AI Model Training",
        "Basic Support",
        "Limited Trading Volume",
        "Custom Integrations",
      ],
    },
    {
      title: "Premium Solution",
      setupFee: "$14,999",
      monthlyFee: "$1,499",
      features: [
        "Advanced AI Model Training",
        "24/7 Premium Support",
        "Unlimited Trading Volume",
        "Custom Integrations",
      ],
    },
  ];

  return (
    <section className="relative my-20 min-h-[500px] w-full" id="pricing">
      <div className="pointer-events-none absolute inset-0">
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

      <div className="relative z-10 flex h-full w-full flex-wrap items-center justify-center gap-10 px-4 py-16">
        {cardData.map((card, index) => (
          <PricingCard
            key={index}
            title={card.title}
            setupFee={card.setupFee}
            monthlyFee={card.monthlyFee}
            features={card.features}
          />
        ))}
      </div>
    </section>
  );
}

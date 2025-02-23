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
    <>
      <section className="w-full" id="pricing">
        <h2 className="mt-10 text-center text-3xl font-bold text-zinc-100 sm:mt-0 sm:text-4xl">
          Pricing
        </h2>
        <div className="relative my-20 min-h-[500px] w-full">
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
        </div>
      </section>
    </>
  );
}

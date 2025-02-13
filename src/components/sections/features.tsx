"use client";

import { AnimatedList } from "@/components/ui/animated-list";

type Notification = {
  name: string;
  description: string;
  time: string;
  icon: string;
  color: string;
};

type TradingActivity = {
  pair: string;
  basePrice: number;
  variance: number;
};

type ActionType = {
  name: string;
  icon: string;
  color: string;
  description: (pair: string, price: string) => string;
};

const generateRandomPrice = (base: number, variance: number) => 
  (base + (Math.random() - 0.5) * variance).toFixed(2);

const generateRandomPercent = () => 
  (Math.random() * 5 * (Math.random() > 0.5 ? 1 : -1)).toFixed(2);

const generateTimeAgo = (index: number) => {
  const minutes = index * 3 + Math.floor(Math.random() * 2);
  return `${minutes}m ago`;
};

const tradingActivities: TradingActivity[] = [
  {
    pair: "BTC/USDT",
    basePrice: 42500,
    variance: 1000,
  },
  {
    pair: "ETH/USDT",
    basePrice: 2250,
    variance: 100,
  },
  {
    pair: "SOL/USDT",
    basePrice: 98,
    variance: 5,
  },
  {
    pair: "AVAX/USDT",
    basePrice: 35,
    variance: 2,
  },
  {
    pair: "MATIC/USDT",
    basePrice: 0.85,
    variance: 0.05,
  },
  {
    pair: "DOT/USDT",
    basePrice: 7.2,
    variance: 0.3,
  },
  {
    pair: "ADA/USDT",
    basePrice: 0.52,
    variance: 0.04,
  },
  {
    pair: "LINK/USDT",
    basePrice: 18.5,
    variance: 1,
  },
];

const actionTypes: ActionType[] = [
  {
    name: "Long Position Opened",
    icon: "📈",
    color: "#00C9A7",
    description: (pair: string, price: string) => `${pair} @ ${price}`,
  },
  {
    name: "Short Position Closed",
    icon: "📉",
    color: "#FFB800",
    description: (pair: string, percent: string) => `${pair} ${percent}%`,
  },
  {
    name: "Take Profit Hit",
    icon: "💰",
    color: "#1E86FF",
    description: (pair: string, percent: string) => `${pair} +${Math.abs(Number(percent))}%`,
  },
  {
    name: "Stop Loss Triggered",
    icon: "🛑",
    color: "#FF3D71",
    description: (pair: string, percent: string) => `${pair} ${percent}%`,
  },
  {
    name: "Leverage Adjusted",
    icon: "⚡",
    color: "#FFB800",
    description: (pair: string) => `${pair} ${Math.floor(Math.random() * 15 + 5)}x → ${Math.floor(Math.random() * 10 + 1)}x`,
  },
  {
    name: "Grid Bot Profit",
    icon: "🤖",
    color: "#00C9A7",
    description: (pair: string) => `${pair} +${(Math.random() * 0.5).toFixed(3)} USDT`,
  },
  {
    name: "DCA Order Executed",
    icon: "🎯",
    color: "#1E86FF",
    description: (pair: string, price: string) => `${pair} @ ${price}`,
  },
  {
    name: "Position Hedged",
    icon: "🛡️",
    color: "#FFB800",
    description: (pair: string, price: string) => `${pair} @ ${price}`,
  },
];

const generateNotifications = (count: number): Notification[] => {
  return Array.from({ length: count }, (_, i) => {
    const activityIndex = Math.floor(Math.random() * tradingActivities.length);
    const actionIndex = Math.floor(Math.random() * actionTypes.length);
    
    const activity = tradingActivities[activityIndex]!;
    const action = actionTypes[actionIndex]!;
    
    const price = generateRandomPrice(activity.basePrice, activity.variance);
    const percent = generateRandomPercent();

    return {
      name: action.name,
      description: action.description(activity.pair, price),
      time: generateTimeAgo(i),
      icon: action.icon,
      color: action.color,
    };
  });
};

type NotificationProps = {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
};

const Notification = ({ name, description, icon, color, time }: NotificationProps) => {
  return (
    <figure className="relative mx-auto h-[88px] min-h-[88px] w-full max-w-[400px] rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm transition-all duration-200 hover:scale-[102%] hover:border-zinc-700">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 min-w-[40px] items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex items-center text-lg font-medium text-zinc-100">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-zinc-500">{time}</span>
          </figcaption>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
      </div>
    </figure>
  );
};


export function Features() {
  return (
    <section className="py-24" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">
            AI Trading in Action
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Watch our autonomous trading system execute strategies in real-time
          </p>
        </div>
        
        <div className="relative max-h-[80vh] overflow-y-auto rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <AnimatedList delay={2000}>
            {generateNotifications(50).map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  );
}
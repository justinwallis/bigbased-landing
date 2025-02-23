import { Button } from "@/app/_components/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col-reverse items-center gap-8 md:grid md:grid-cols-2 md:gap-0">
      <div className="space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            Break free from the matrix
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl lg:text-6xl">
            AI-Powered <br className="hidden md:block" />
            Crypto Trading for <br className="hidden md:block" />
            Independent Wealth
          </h1>
          <p className="mx-auto max-w-md text-base text-zinc-400 md:mx-0 md:text-lg">
            Join the revolution of algorithmic trading with our agentic AI bot
            that works for your financial freedom
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
          <button className="rounded-md border-2 border-zinc-200 bg-zinc-200 px-6 py-3 font-medium text-zinc-900 transition-all duration-300 hover:border-zinc-800 hover:bg-zinc-400">
            Start Trading
          </button>

          <Button title=" Watch Demo" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 md:flex-nowrap md:justify-start">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-zinc-100 md:text-3xl">
              $0.0M
            </p>
            <p className="text-sm text-zinc-400">Trading Volume</p>
          </div>
          <div className="hidden h-12 w-px bg-zinc-800 md:block" />
          <div className="space-y-1">
            <p className="text-2xl font-bold text-zinc-100 md:text-3xl">24/7</p>
            <p className="text-sm text-zinc-400">Automated Trading</p>
          </div>
          <div className="hidden h-12 w-px bg-zinc-800 md:block" />
          <div className="space-y-1">
            <p className="text-2xl font-bold text-zinc-100 md:text-3xl">
              00.0%
            </p>
            <p className="text-sm text-zinc-400">Uptime</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[400px] items-center justify-center md:max-w-full">
        <div className="relative flex aspect-square w-full max-w-[600px] items-center justify-center">
          <Image
            src="/ribbon.svg"
            alt="BigBased AI Ribbon"
            width={700}
            height={700}
            className="absolute inset-0 m-auto"
            priority
          />
          <Image
            src="/icon.png"
            alt="BigBased AI Icon"
            width={80}
            height={80}
            className="absolute left-[36%] top-1/2 m-auto -translate-y-1/2 sm:left-[35%] lg:left-[40%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

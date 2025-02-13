import Image from "next/image";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col-reverse md:grid md:grid-cols-2 items-center gap-8 md:gap-0">
      <div className="space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            Break free from the matrix
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100">
            AI-Powered <br className="hidden md:block" />
            Crypto Trading for <br className="hidden md:block" />
            Independent Wealth
          </h1>
          <p className="max-w-md mx-auto md:mx-0 text-base md:text-lg text-zinc-400">
            Join the revolution of algorithmic trading with our agentic AI bot that works 
            for your financial freedom
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="rounded-md bg-zinc-200 px-6 py-3 font-medium text-zinc-900 transition-all duration-300 hover:bg-zinc-400 border-2 border-zinc-200 hover:border-zinc-800">
            Start Trading
          </button>
          <button className="rounded-md border-2 border-zinc-700 px-6 py-3 font-medium text-zinc-100 transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-600">
            Watch Demo
          </button>
        </div>

        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-6 pt-8">
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-zinc-100">$0.0M</p>
            <p className="text-sm text-zinc-400">Trading Volume</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-zinc-800" />
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-zinc-100">24/7</p>
            <p className="text-sm text-zinc-400">Automated Trading</p>
          </div>
          <div className="hidden md:block h-12 w-px bg-zinc-800" />
          <div className="space-y-1">
            <p className="text-2xl md:text-3xl font-bold text-zinc-100">00.0%</p>
            <p className="text-sm text-zinc-400">Uptime</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full max-w-[400px] md:max-w-full mx-auto">
        <div className="relative aspect-square w-full max-w-[600px] flex items-center justify-center">
          <Image 
            src="/ribbon.svg"
            alt="BigBased AI Ribbon"
            width={600}
            height={600}
            className="absolute inset-0 m-auto"
            priority
          />
          <Image 
            src="/icon.png"
            alt="BigBased AI Icon"
            width={80}
            height={80}
            className="absolute inset-0 m-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="#features"
                className="text-sm text-zinc-400 hover:text-zinc-300"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-sm text-zinc-400 hover:text-zinc-300"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-sm text-zinc-400 hover:text-zinc-300"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-sm text-zinc-400 hover:text-zinc-300"
              >
                FAQ
              </a>
              <a
                href="https://docs.google.com/document/d/16ZAiarRHfpjEjizYVGBBgKTfLrECp-tm0myLcGCQ71Q/edit?tab=t.0"
                target="_blank"
                rel="noopener"
                className="text-sm text-zinc-400 hover:text-zinc-300"
              >
                WhitePaper
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/BigBasedAI"
              className="text-zinc-400 hover:text-zinc-300"
              aria-label="BigBased AI on Twitter"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://t.me/BigBasedAI"
              className="text-zinc-400 hover:text-zinc-300"
              aria-label="BigBased AI on Telegram"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.107l-6.107 3.843-2.627-.816c-.57-.182-.582-.57.12-.842l10.25-3.95c.475-.176.904.107.6 1.654z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/BigBasedAI"
              className="text-zinc-400 hover:text-zinc-300"
              aria-label="BigBased AI on Discord"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
              </svg>
            </a>
          </div>

          <div className="text-center text-sm text-zinc-400">
            <p>
              © {new Date().getFullYear()} BigBased.AI · God · Truth · Hard
              Work · Freedom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

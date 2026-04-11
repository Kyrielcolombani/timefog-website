import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Visual Donut Timeline",
    description:
      "Your entire day shown as a single donut — every task, every break, every minute accounted for.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* chart.pie — donut with a slice */}
        <path d="M16 4A12 12 0 1 1 4 16h12V4Z" fill="#C4F2F9" />
        <path d="M16 4A12 12 0 0 1 28 16H16V4Z" fill="#C4F2F9" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Priority Shrink",
    description:
      "When one task runs overtime, your other priorities physically shrink on screen. See exactly what you\u2019re sacrificing.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* arrow.down.right.and.arrow.up.left — two opposing shrink arrows */}
        <path d="M18 8L26 8L26 16" stroke="#C4F2F9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 8L18 16" stroke="#C4F2F9" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 24L6 24L6 16" stroke="#C4F2F9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 24L14 16" stroke="#C4F2F9" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "One-Tap Task Switching",
    description:
      "Switch between tasks instantly with a single tap. No menus, no friction.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* hand.tap.fill — hand with tap ring */}
        <path d="M15 14V7C15 5.9 15.9 5 17 5C18.1 5 19 5.9 19 7V14" fill="#C4F2F9" opacity="0.3" />
        <path d="M19 13V11.5C19 10.4 19.9 9.5 21 9.5C22.1 9.5 23 10.4 23 11.5V18L22 24H13L11 18V14C11 12.9 11.9 12 13 12C14.1 12 15 12.9 15 14" fill="#C4F2F9" />
        <circle cx="17" cy="28" r="2" stroke="#C4F2F9" strokeWidth="1.5" fill="none" />
        <circle cx="17" cy="28" r="4" stroke="#C4F2F9" strokeWidth="1" fill="none" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Smart Notifications",
    description:
      "Get a 5-minute warning before your planned time runs out. Stay ahead, not behind.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* bell.badge.fill — filled bell with badge dot */}
        <path d="M16 4C16 4 10 4 10 12V20L8 22H24L22 20V12C22 4 16 4 16 4Z" fill="#C4F2F9" />
        <path d="M13 22C13 24.2 14.3 26 16 26C17.7 26 19 24.2 19 22" fill="#C4F2F9" />
        <circle cx="23" cy="7" r="4" fill="#C4F2F9" />
        <circle cx="23" cy="7" r="2.5" fill="#0B0F1A" />
      </svg>
    ),
  },
  {
    title: "Sleep Protection",
    description:
      "Your bedtime is protected automatically. The app switches to sleep mode when your sleep window starts.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* moon.stars.fill — crescent moon with stars */}
        <path d="M22 6C18 6 14 9 14 16C14 23 18 26 22 26C12 26 6 22 6 16C6 10 12 6 22 6Z" fill="#C4F2F9" />
        <circle cx="24" cy="10" r="1.5" fill="#C4F2F9" />
        <circle cx="27" cy="14" r="1" fill="#C4F2F9" />
        <circle cx="25" cy="18" r="1.2" fill="#C4F2F9" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Streak Tracking",
    description:
      "Complete your priorities within their planned time to build streaks. Track consistency with an emoji calendar.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        {/* flame.fill — solid flame shape */}
        <path d="M16 2C16 2 10 10 10 18C10 22.4 12.7 26 16 28C19.3 26 22 22.4 22 18C22 10 16 2 16 2Z" fill="#C4F2F9" />
        <path d="M16 16C16 16 13.5 19 13.5 22C13.5 24 14.5 26 16 28C17.5 26 18.5 24 18.5 22C18.5 19 16 16 16 16Z" fill="#0B0F1A" opacity="0.4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pb-12 pt-32 sm:pb-16 sm:pt-44">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-light/15 via-transparent to-transparent" />
            <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-light/10 blur-3xl" />
          </div>

          <div className="section-container text-center">
            {/* Badge */}
            <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-brand-light/20 bg-brand-light/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
              <span className="text-xs font-medium tracking-wide text-brand-light">
                Focus &amp; Time Balance
              </span>
            </div>

            <h1 className="animate-fade-in-up mx-auto max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-7xl">
              See the Cost of{" "}
              <span className="text-gradient">Hyperfocus</span>
            </h1>

            <p className="animate-fade-in-delay-1 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Ever spend too long on one thing and realize you ran out of time for everything else?
            </p>
            <p className="animate-fade-in-delay-1 mx-auto mt-1 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
              Timefog makes that visible. In real time.
            </p>

            <div className="animate-fade-in-delay-2 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-light px-7 py-3.5 text-sm font-semibold text-surface transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-light/10"
              >
                <AppleIcon />
                Download on the App Store
              </a>
            </div>

            {/* App logo - fog to clear loop animation */}
            <div className="animate-fade-in-delay-3 animate-fog-to-clear relative mx-auto mt-12 flex items-center justify-center sm:mt-16 h-72 w-72 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem]">
              <img src="/logo-fog.png" alt="Timefog" className="logo-fog absolute inset-0 h-full w-full object-contain" />
              <img src="/logo-clear.png" alt="Timefog" className="logo-clear absolute inset-0 h-full w-full object-contain" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-20 py-12 sm:py-16">
          <div className="section-container">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to{" "}
                <span className="text-gradient">balance your day</span>
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-base text-white/50 lg:whitespace-nowrap">
                Timefog gives you a clear picture of where your time goes,
              </p>
              <p className="mx-auto mt-1 max-w-4xl text-base text-white/50 lg:whitespace-nowrap">
                so you can make better trade-offs before it is too late.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/5 bg-surface-raised p-7 transition-all hover:border-brand-light/25 hover:bg-surface-overlay"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light/10 transition-colors group-hover:bg-brand-light/20">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16">
          <div className="section-container">
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-surface-raised to-surface-overlay px-8 py-16 text-center sm:px-16">
              <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-light/5 blur-3xl" />
              </div>

              <h2 className="mx-auto text-3xl font-bold tracking-tight sm:text-4xl lg:whitespace-nowrap">
                Stop losing time without realizing it
              </h2>
              <p className="mx-auto mt-4 text-base text-white/50 lg:whitespace-nowrap">
                Download Timefog and start seeing where your hours actually go.
              </p>
              <div className="mt-8">
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-brand-light px-7 py-3.5 text-sm font-semibold text-surface transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-light/10"
                >
                  <AppleIcon />
                  Download on the App Store
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
      <path d="M14.94 13.38c-.34.78-.5 1.13-.94 1.82-.61.97-1.47 2.17-2.54 2.18-1.18.02-1.48-.77-3.08-.76-1.59.01-1.93.78-3.11.76-1.07-.01-1.88-1.08-2.49-2.05C1.34 12.93.79 9.83 1.6 7.7c.57-1.5 1.59-2.52 2.72-2.52 1.01 0 1.65.68 2.49.68.81 0 1.3-.68 2.47-.68.99 0 1.89.54 2.48 1.46-2.18 1.2-1.83 4.31.31 5.14-.39 1.02-.56 1.47-.94 2.37l-.19-.77ZM11.28 3.28c.47-.6.83-1.45.7-2.31-.77.05-1.67.54-2.2 1.17-.48.57-.88 1.43-.73 2.26.84.03 1.71-.47 2.23-1.12Z" />
    </svg>
  );
}


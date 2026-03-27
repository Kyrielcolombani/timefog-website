import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support - Timefog",
  description:
    "Get help with Timefog. Find answers to common questions or contact us directly.",
};

const faqs = [
  {
    question: "How do I cancel my subscription?",
    answer:
      "Open Settings on your iPhone \u2192 Tap your name \u2192 Subscriptions \u2192 Timefog \u2192 Cancel Subscription",
  },
  {
    question: "How does Priority Shrink work?",
    answer:
      "When one priority task runs past its planned time, the extra minutes are taken from your other priority tasks. This shows you the real cost of spending too long on one thing. If a task loses more than 20% of its planned time to shrink, it gets blocked for the rest of the day.",
  },
  {
    question: "Why did my task get blocked?",
    answer:
      "If a task loses more than 20% of its planned time to shrink, it gets blocked for the rest of the day and shows \u2018Shrunk \u2014 resets tomorrow\u2019. This resets the next morning.",
  },
  {
    question: "Does the app work offline?",
    answer:
      "Yes. All your data is stored locally on your device. You don\u2019t need an internet connection to track your time.",
  },
  {
    question: "How do streaks work?",
    answer:
      "Complete all your priority tasks within their planned time to earn a streak day. Tasks that lost more than 20% of their time to shrink don\u2019t count as completed. Your streak resets if you miss a day, unless you have Grace Day enabled in Settings.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "In the app, go to Settings \u2192 Account \u2192 Delete Account. This removes all your data.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pb-24 pt-32 sm:pt-40">
        <div className="section-container max-w-3xl">
          {/* Header */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Support
          </h1>
          <p className="mt-4 text-lg text-white/50">
            Need help with Timefog? Check the FAQ below or reach out directly.
          </p>

          {/* Contact card */}
          <div className="mt-10 rounded-2xl border border-brand-light/15 bg-surface-raised p-7">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="mt-2 text-sm text-white/50">
              Have a question, found a bug, or want to request a feature? Send
              us an email and we will get back to you as soon as possible.
            </p>
            <a
              href="mailto:timefog.app@gmail.com"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-light/10 px-5 py-2.5 text-sm font-medium text-brand-light transition-colors hover:bg-brand-light/20"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="14" height="10" rx="2" />
                <path d="M1 5L8 9L15 5" />
              </svg>
              Send us an email
            </a>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/5 bg-surface-raised transition-colors hover:border-brand-light/10"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-7 py-5 text-[15px] font-medium text-white/90 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="ml-4 flex-shrink-0 transition-transform group-open:rotate-180"
                    >
                      <path d="M4 6L8 10L12 6" />
                    </svg>
                  </summary>
                  <div className="px-7 pb-5 text-sm leading-relaxed text-white/50">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

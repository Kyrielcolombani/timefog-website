import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support - Timefog",
  description:
    "Get help with Timefog. Find answers to common questions or contact us directly.",
};

const faqSections = [
  {
    title: "Understanding the App",
    faqs: [
      {
        question: "What\u2019s the difference between the two donut views?",
        answer:
          "The clock view shows your day as a timeline \u2014 each slice is placed in the order it happened, so you can see when you worked on what. The pie view groups all time by task \u2014 so if you worked on \u201CStudy\u201D three separate times, it combines them into one slice.",
      },
      {
        question: "What does the flame on the donut mean?",
        answer:
          "That\u2019s your streak \u2014 the number of consecutive days you\u2019ve completed at least 2 planned tasks. The higher the number, the longer you\u2019ve kept it going.",
      },
      {
        question: "What do the weather emojis mean?",
        answer:
          "\u2600\uFE0F Outstanding \u2014 you completed 80% or more of your planned time.\n\u26C5\uFE0F Good day \u2014 you completed 60\u201380%.\n\u2601\uFE0F Mixed day \u2014 you completed 40\u201360%.\n\uD83C\uDF27\uFE0F Tough day \u2014 you completed 20\u201340%.\n\u26C8\uFE0F Off day \u2014 you completed less than 20%.",
      },
      {
        question: "Why does my Available Time show a negative number?",
        answer:
          "You\u2019re over-scheduled \u2014 the remaining planned time across your tasks adds up to more than the hours you have left in the day. You won\u2019t be able to finish everything at the pace you planned.",
      },
      {
        question: "What does Grace Day do?",
        answer:
          "It lets you miss one day per week without breaking your streak. Instead of resetting, your streak freezes for that day. You get one grace day per week (Monday to Sunday).",
      },
    ],
  },
  {
    title: "Sleep Window",
    faqs: [
      {
        question:
          "I forgot to confirm my sleep window. Will sleep still track?",
        answer:
          "No. You need to confirm it at least once. But once you do, it stays active every night \u2014 you don\u2019t need to confirm again unless you change the times.",
      },
      {
        question: "Do I have to confirm every day?",
        answer:
          "No. One confirmation is enough. Sleep will track automatically at your chosen times every night until you decide to change them.",
      },
      {
        question:
          "I hit pause during bedtime hours and it put me to sleep instead of break. Why?",
        answer:
          "During your sleep window, pausing always goes to sleep \u2014 not break. The app assumes you\u2019re going to bed. Regular breaks only work outside your sleep hours.",
      },
    ],
  },
  {
    title: "Priority Shrink",
    faqs: [
      {
        question: "What is Priority Shrink?",
        answer:
          "When you spend overtime on a priority task, that extra time \u201Ceats\u201D into the planned time of your other tasks, starting with your priorities. It\u2019s the app\u2019s way of showing you that spending too much time on one thing comes at the expense of everything else in your day.",
      },
      {
        question: "I enabled Shrink but nothing is happening.",
        answer:
          "Three things need to be true at the same time: at least 2 priority tasks with planned minutes, and you need to be actively working on one of them past its planned time. Shrink only triggers during overtime on a priority task.",
      },
      {
        question: "Does Shrink affect Goals or just Priorities?",
        answer:
          "It starts with your other priority tasks. But if all your priorities are already fully shrunk, the overtime spills over and starts shrinking your goals too.",
      },
      {
        question: "What happens if I keep working after \u201CTime\u2019s Up\u201D?",
        answer:
          "You enter overtime. Every extra minute you spend will shrink the planned time of your other priority tasks in real time. The popup is your warning \u2014 dismissing it means you\u2019re choosing to let other tasks pay the price.",
      },
      {
        question: "Why is only one task shrinking and not the others?",
        answer:
          "Shrink targets one task at a time \u2014 the one with the least remaining time. It fully shrinks that one before moving to the next.",
      },
      {
        question:
          "I switched tasks but the shrink didn\u2019t go away. Is that normal?",
        answer:
          "Yes. Shrink locks in for the day \u2014 it shows the real damage your overtime caused. Everything resets the next morning.",
      },
      {
        question:
          "I worked on a task most of the day but it still got marked as \u201CShrunk.\u201D Why?",
        answer:
          "If overtime from another task ate more than 20% of its planned time, it gets marked as shrunk \u2014 even if you did most of the work. The app considers the task compromised because a big chunk of its time was stolen.",
      },
    ],
  },
  {
    title: "Streaks",
    faqs: [
      {
        question:
          "I tracked all day but my streak didn\u2019t increase. Why?",
        answer:
          "A streak day requires completing the full planned time on at least 2 tasks that have planned minutes set. If you only have 1 planned task, or none of your tasks have planned minutes, the day can\u2019t count.",
      },
      {
        question:
          "One of my tasks got shrunk. Does it still count toward my streak?",
        answer:
          "Only if the shrink was small \u2014 less than 20% of its planned time. If shrink ate more than 20%, the task doesn\u2019t count as completed for your streak, even if you finished the reduced amount.",
      },
    ],
  },
  {
    title: "Tasks & Data",
    faqs: [
      {
        question: "Where do archived tasks go?",
        answer:
          "They disappear from your Timeline and Goals, but their tracked time stays in your Stats and history. You can find them in the Archive section and restore them anytime.",
      },
      {
        question:
          "What\u2019s the difference between deleting my data and deleting my account?",
        answer:
          "\u201CDelete All Data\u201D wipes your tasks, history, and settings but keeps your sign-in. \u201CDelete Account\u201D does all of that plus permanently removes your account \u2014 you\u2019d need to create a new one.",
      },
    ],
  },
  {
    title: "Subscription",
    faqs: [
      {
        question: "How do I cancel my subscription?",
        answer:
          "Open Settings on your iPhone \u2192 Tap your name \u2192 Subscriptions \u2192 Timefog \u2192 Cancel Subscription. You\u2019ll keep access until the end of your current billing period.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Refunds are handled by Apple. Go to reportaproblem.apple.com, sign in with your Apple ID, and request a refund for the Timefog purchase.",
      },
    ],
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
              us an email and we will get back to you within 1&ndash;2 business
              days.
            </p>
            <a
              href="mailto:support@timefog.app"
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
              support@timefog.app
            </a>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>

            {faqSections.map((section) => (
              <div key={section.title} className="mt-10">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-light/70">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.faqs.map((faq) => (
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
                      <div className="whitespace-pre-line px-7 pb-5 text-sm leading-relaxed text-white/50">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

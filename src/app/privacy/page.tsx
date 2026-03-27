import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Timefog",
  description: "Timefog privacy policy. Learn how your data is handled.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pb-24 pt-32 sm:pt-40">
        <article className="section-container prose-invert max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-white/40">
            Last updated: March 2026
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-white/70">
            <Section title="Introduction">
              <p>
                Timefog (&ldquo;the App&rdquo;) is a time-tracking application
                for iOS developed by Jacobi Colombani, based in Papeete, Tahiti,
                France. This Privacy Policy explains what data the App collects,
                how it is used, and your rights regarding that data.
              </p>
              <p>
                By using Timefog, you agree to the practices described in this
                policy. If you do not agree, please discontinue use of the App.
              </p>
            </Section>

            <Section title="Data We Collect">
              <h4 className="mb-2 mt-4 text-sm font-semibold text-white/90">
                Data stored locally on your device
              </h4>
              <p>
                All task data, schedules, streaks, and preferences are stored
                locally on your device as JSON files. This data never leaves
                your device unless you explicitly enable cloud sync.
              </p>

              <h4 className="mb-2 mt-4 text-sm font-semibold text-white/90">
                Account data (optional)
              </h4>
              <p>
                If you choose to create an account, authentication is handled by
                Clerk. Clerk collects your email address for the purpose of
                account creation and login. You can review Clerk&apos;s privacy
                policy at{" "}
                <a
                  href="https://clerk.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-light underline underline-offset-2 hover:text-white"
                >
                  clerk.com/legal/privacy
                </a>
                .
              </p>

              <h4 className="mb-2 mt-4 text-sm font-semibold text-white/90">
                Cloud sync data (optional)
              </h4>
              <p>
                If you enable cloud sync, your task data is stored in a Supabase
                database tied to your user account. This data is used solely to
                synchronize your information across your devices. Cloud sync is
                entirely optional.
              </p>

              <h4 className="mb-2 mt-4 text-sm font-semibold text-white/90">
                Payment data
              </h4>
              <p>
                Subscriptions are processed by RevenueCat through Apple&apos;s
                App Store. We do not directly collect, store, or have access to
                your payment information (such as credit card numbers).
                RevenueCat processes transaction data in accordance with
                Apple&apos;s policies. You can review RevenueCat&apos;s privacy
                policy at{" "}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-light underline underline-offset-2 hover:text-white"
                >
                  revenuecat.com/privacy
                </a>
                .
              </p>

              <h4 className="mb-2 mt-4 text-sm font-semibold text-white/90">
                Push notifications
              </h4>
              <p>
                The App uses push notifications solely for task reminders (for
                example, to notify you when a task is about to end). You can
                disable notifications at any time in your iOS Settings.
              </p>
            </Section>

            <Section title="Data We Do Not Collect">
              <ul className="list-inside list-disc space-y-1.5">
                <li>We do not use any analytics SDKs or tracking tools.</li>
                <li>We do not track your location.</li>
                <li>
                  We do not sell, share, or rent your data to third parties.
                </li>
                <li>
                  We do not use cookies. Timefog is a native iOS application.
                </li>
                <li>We do not display advertisements.</li>
              </ul>
            </Section>

            <Section title="Data Security">
              <p>
                All network communication between the App and our servers uses
                HTTPS encryption. Local data is stored on your device and
                protected by iOS&apos;s built-in security features, including
                device encryption.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>
                Under the General Data Protection Regulation (GDPR) and
                applicable French and European Union law, you have the following
                rights:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1.5">
                <li>
                  <strong className="text-white/90">Right of access:</strong>{" "}
                  You can request a copy of any data we hold about you.
                </li>
                <li>
                  <strong className="text-white/90">Right to rectification:</strong>{" "}
                  You can request correction of inaccurate data.
                </li>
                <li>
                  <strong className="text-white/90">Right to erasure:</strong>{" "}
                  You can delete your account and all associated cloud data at
                  any time from within the App (Settings &rarr; Account &rarr;
                  Delete Account). Local data can be removed by deleting the App
                  from your device.
                </li>
                <li>
                  <strong className="text-white/90">Right to data portability:</strong>{" "}
                  You can request your data in a portable format.
                </li>
                <li>
                  <strong className="text-white/90">Right to object:</strong>{" "}
                  You can object to data processing at any time.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:veteatini@gmail.com"
                  className="text-brand-light underline underline-offset-2 hover:text-white"
                >
                  veteatini@gmail.com
                </a>
                .
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                Local data remains on your device until you delete it or
                uninstall the App. Cloud data (if sync is enabled) is retained
                as long as your account exists. When you delete your account,
                all associated cloud data is permanently removed from our
                servers.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p>
                Timefog is not directed at children under the age of 13. We do
                not knowingly collect personal information from children. If you
                believe a child has provided us with personal data, please
                contact us and we will delete it promptly.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated &ldquo;Last
                updated&rdquo; date. We encourage you to review this policy
                periodically.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                If you have any questions about this Privacy Policy or your
                data, contact us at:
              </p>
              <div className="mt-3 rounded-xl border border-white/5 bg-surface-raised p-5">
                <p className="font-medium text-white/90">Jacobi Colombani</p>
                <p>Papeete, Tahiti, France</p>
                <p>
                  <a
                    href="mailto:veteatini@gmail.com"
                    className="text-brand-light underline underline-offset-2 hover:text-white"
                  >
                    veteatini@gmail.com
                  </a>
                </p>
              </div>
            </Section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

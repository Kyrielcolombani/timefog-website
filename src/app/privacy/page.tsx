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
            Last updated: April 2026
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
                All task data, time segments, streaks, sleep window settings, and
                preferences are stored locally on your device in JSON files. This
                data is used solely to power the app&apos;s features.
              </p>

              <h4 className="mb-2 mt-4 text-sm font-semibold text-white/90">
                Account data (optional)
              </h4>
              <p>
                If you choose to sign in, authentication is handled by Clerk.
                Clerk collects your email address (or Apple/Google account info)
                for account creation and login. Signing in is optional and is not
                required to use the App. You can review Clerk&apos;s privacy
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
                If you sign in, your task data, time segments, and settings are
                synced to a Supabase database tied to your user account. This
                allows your data to be backed up and restored if you switch
                devices. Cloud data is protected by Row-Level Security &mdash;
                only you can access your own data. You can review Supabase&apos;s
                privacy policy at{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-light underline underline-offset-2 hover:text-white"
                >
                  supabase.com/privacy
                </a>
                .
              </p>

              <h4 className="mb-2 mt-4 text-sm font-semibold text-white/90">
                Payment data
              </h4>
              <p>
                Subscriptions ($29.99/year or $2.99/month, with a 7-day free
                trial on the annual plan) are processed by Apple through the App
                Store. RevenueCat is used to manage subscription status. We do
                not directly collect, store, or have access to your payment
                information (such as credit card numbers). You can review
                RevenueCat&apos;s privacy policy at{" "}
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
                The App uses local push notifications for task reminders
                (Time&apos;s Up alerts, 5-minute warnings, and Priority Shrink
                alerts). Notification permission is requested during onboarding
                and can be disabled at any time in your iOS Settings. No
                notification data is sent to external servers.
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

            <Section title="Third-Party Services">
              <p>The App uses the following third-party services:</p>
              <ul className="mt-2 list-inside list-disc space-y-1.5">
                <li>
                  <strong className="text-white/90">Clerk</strong> &mdash;
                  Authentication (sign in with Apple, Google, or email)
                </li>
                <li>
                  <strong className="text-white/90">Supabase</strong> &mdash;
                  Cloud database for data backup and sync
                </li>
                <li>
                  <strong className="text-white/90">RevenueCat</strong> &mdash;
                  Subscription management
                </li>
                <li>
                  <strong className="text-white/90">Apple App Store</strong>{" "}
                  &mdash; Payment processing
                </li>
              </ul>
              <p className="mt-3">
                Each service processes data according to their own privacy
                policies, linked above.
              </p>
            </Section>

            <Section title="Data Security">
              <p>
                All network communication between the App and our servers uses
                HTTPS encryption. Cloud data is protected by Supabase Row-Level
                Security, ensuring each user can only access their own data.
                Local data is stored on your device and protected by iOS&apos;s
                built-in security features, including device encryption.
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
                  You can delete all local data from Settings &rarr; Privacy
                  &amp; Data &rarr; Delete All Data. If you have an account, you
                  can delete it and all associated cloud data from Settings
                  &rarr; Privacy &amp; Data &rarr; Delete Account.
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
                  href="mailto:support@timefog.app"
                  className="text-brand-light underline underline-offset-2 hover:text-white"
                >
                  support@timefog.app
                </a>
                .
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                Local data remains on your device until you delete it or
                uninstall the App. Cloud data (if you are signed in) is retained
                as long as your account exists. When you delete your account, all
                associated cloud data is permanently removed from our servers.
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
                    href="mailto:support@timefog.app"
                    className="text-brand-light underline underline-offset-2 hover:text-white"
                  >
                    support@timefog.app
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
      <h3 className="mb-3 text-lg font-semibold text-brand-light/90">{title}</h3>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

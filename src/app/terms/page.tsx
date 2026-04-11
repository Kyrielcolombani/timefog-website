import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use - Timefog",
  description: "Timefog terms of use. Read before using the app.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pb-24 pt-32 sm:pt-40">
        <article className="section-container prose-invert max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-2 text-sm text-white/40">
            Last updated: April 2026
          </p>

          <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-white/70">
            <Section title="1. Acceptance of Terms">
              <p>
                By downloading, installing, or using Timefog (&ldquo;the
                App&rdquo;), you agree to be bound by these Terms of Use. If you
                do not agree, do not use the App.
              </p>
            </Section>

            <Section title="2. Description of Service">
              <p>
                Timefog is a time-tracking and focus-balance application for iOS.
                It helps you visualize how your time is spent across tasks,
                track streaks, manage priorities, and see the real cost of
                time imbalance through features like Priority Shrink.
              </p>
            </Section>

            <Section title="3. Account Registration">
              <p>
                Creating an account is optional. You can use the App without
                signing in. If you choose to sign in (via Apple, Google, or
                email), authentication is handled by Clerk. You are responsible
                for maintaining the security of your account credentials.
              </p>
            </Section>

            <Section title="4. Subscriptions and Payments">
              <p>
                Timefog offers the following subscription plans:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1.5">
                <li>
                  <strong className="text-white/90">Annual:</strong> $29.99/year
                  with a 7-day free trial
                </li>
                <li>
                  <strong className="text-white/90">Monthly:</strong> $2.99/month
                </li>
              </ul>
              <p className="mt-3">
                Payment is processed by Apple through the App Store. Subscriptions
                automatically renew unless cancelled at least 24 hours before
                the end of the current billing period. You can manage or cancel
                your subscription at any time through your iPhone&apos;s Settings
                &rarr; your name &rarr; Subscriptions.
              </p>
              <p>
                The free trial (if offered) automatically converts to a paid
                subscription unless cancelled before the trial period ends. Any
                unused portion of a free trial is forfeited when you purchase a
                subscription.
              </p>
            </Section>

            <Section title="5. User Data and Cloud Sync">
              <p>
                Your time-tracking data is stored locally on your device. If you
                sign in, your data is also synced to our cloud servers
                (Supabase) for backup purposes. You can delete your data at any
                time from within the App. See our{" "}
                <a
                  href="/privacy"
                  className="text-brand-light underline underline-offset-2 hover:text-white"
                >
                  Privacy Policy
                </a>{" "}
                for full details on data handling.
              </p>
            </Section>

            <Section title="6. Acceptable Use">
              <p>You agree not to:</p>
              <ul className="mt-2 list-inside list-disc space-y-1.5">
                <li>
                  Reverse engineer, decompile, or disassemble the App
                </li>
                <li>
                  Attempt to gain unauthorized access to our servers or other
                  users&apos; data
                </li>
                <li>
                  Use the App for any unlawful purpose
                </li>
                <li>
                  Redistribute, sublicense, or resell the App
                </li>
              </ul>
            </Section>

            <Section title="7. Intellectual Property">
              <p>
                Timefog, including its design, code, features, and branding, is
                the intellectual property of Jacobi Colombani. All rights are
                reserved. You are granted a limited, non-exclusive,
                non-transferable license to use the App for personal,
                non-commercial purposes.
              </p>
            </Section>

            <Section title="8. Disclaimer of Warranties">
              <p>
                The App is provided &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; without warranties of any kind, either express
                or implied. We do not guarantee that the App will be
                uninterrupted, error-free, or free of harmful components.
              </p>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Jacobi Colombani shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of the
                App, including but not limited to loss of data.
              </p>
            </Section>

            <Section title="10. Account Deletion">
              <p>
                You may delete your account at any time from within the App
                (Settings &rarr; Privacy &amp; Data &rarr; Delete Account). This
                permanently removes your account and all associated cloud data.
                Local data can be removed by deleting the App from your device.
              </p>
            </Section>

            <Section title="11. Changes to These Terms">
              <p>
                We may update these Terms of Use from time to time. Continued
                use of the App after changes are posted constitutes acceptance
                of the revised terms. We encourage you to review these terms
                periodically.
              </p>
            </Section>

            <Section title="12. Governing Law">
              <p>
                These Terms are governed by and construed in accordance with the
                laws of France. Any disputes arising from these Terms shall be
                subject to the exclusive jurisdiction of the courts of Papeete,
                French Polynesia.
              </p>
            </Section>

            <Section title="13. Contact">
              <p>
                If you have any questions about these Terms of Use, contact us
                at:
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

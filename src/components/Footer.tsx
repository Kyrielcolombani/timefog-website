import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="section-container py-12">
        <div className="flex flex-col items-center justify-center gap-8">
          <nav className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              Terms of Use
            </Link>
            <Link
              href="/support"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              Support
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; 2026 Jacobi Colombani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

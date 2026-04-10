import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface">
      <div className="section-container py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="14"
                cy="14"
                r="11"
                stroke="#C4F2F9"
                strokeWidth="2.5"
                strokeDasharray="18 8 12 8 8 8"
                strokeLinecap="round"
              />
              <circle
                cx="14"
                cy="14"
                r="5"
                fill="#0B0F1A"
                stroke="#C4F2F9"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-sm font-medium text-white/80">Timefog</span>
          </div>

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

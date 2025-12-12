"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-3 sm:px-4 max-w-[1200px]">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-semibold" style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", color: '#182439' }}>
                Rheuma
              </span>
              <span className="text-[10px] sm:text-xs font-medium tracking-wide" style={{ fontFamily: "var(--font-poppins), 'Poppins', sans-serif", color: '#182439' }}>
                Clinic
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* <Link href="/profile" className="text-sm font-medium text-gray-500 hover:text-[#182439] transition-colors">
              Profile
            </Link> */}

            {/* Book Appointment Button */}
            <Link
              href="/profile#book-appointment"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-[#B1EFEC] text-[#182439] text-sm sm:text-base font-semibold hover:bg-[#9ae5e1] transition-colors"
              style={{ borderRadius: '25px' }}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

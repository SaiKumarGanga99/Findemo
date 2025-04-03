"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16 px-6 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo / Brand */}
        <div>
          <h2 className="text-xl font-bold text-black mb-4">FUN-NANCE</h2>
          <p>Your go-to platform for fast, flexible invoice financing.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-black font-semibold mb-2">Product</h3>
          <ul className="space-y-1">
            <li><Link href="#">How it works</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Eligibility</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-black font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-black font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><Link href="#">Support</Link></li>
            <li><Link href="#">Contact</Link></li>
            <li><Link href="#">Help center</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 border-t pt-6">
        <p>&copy; {new Date().getFullYear()} FUN-NANCE Inc. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Security</Link>
        </div>
      </div>
    </footer>
  );
}

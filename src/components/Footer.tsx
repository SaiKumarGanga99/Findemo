"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#E07A5F] py-16 px-6 text-sm text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Findigm</h2>
          <p>Your go-to platform for fast, flexible invoice financing.</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <Facebook className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
            <Twitter className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
            <Instagram className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
            <Linkedin className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
            <Youtube className="w-5 h-5 hover:scale-110 transition-transform duration-200" />
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Product</h3>
          <ul className="space-y-1">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> <Link href="#">How it works</Link>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> <Link href="#">Pricing</Link>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> <Link href="#">Eligibility</Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> <Link href="#">About us</Link>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> <Link href="#">Careers</Link>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> <Link href="#">Support</Link>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" /> <Link href="#">Contact</Link>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4" /> <Link href="#">Help center</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col sm:flex-row justify-between items-center text-xs border-t border-black/20 pt-6 text-center sm:text-left">
        <p>&copy; {new Date().getFullYear()} Findigm Inc. All rights reserved.</p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 mt-4 sm:mt-0">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Security</Link>
        </div>
      </div>
    </footer>
  );
}

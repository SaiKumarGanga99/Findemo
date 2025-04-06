"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

export default function CompanyInfo() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!companyName || !industry || !location || !contactEmail || !contactPhone) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    router.push("/signup/verification");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFC160]">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center bg-[#FFB347]">
        <Link
          href="/"
          onClick={(e) => {
            if (!confirm("Are you sure you want to leave the signup process?")) {
              e.preventDefault();
            }
          }}
          className={`text-2xl font-bold text-black ${plusJakarta.className}`}
        >
          Findigm
        </Link>
      </header>

      {/* Main Content */}
      <motion.div
        className="flex-grow flex flex-col items-center justify-center px-4 gap-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 space-y-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className={`text-2xl font-bold text-black ${plusJakarta.className}`}>Tell us about your company</h1>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-black mb-1">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
                placeholder="Acme Inc."
              />
            </div>

            <div>
              <label className="block text-sm text-black mb-1">Industry</label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
                placeholder="Technology, Retail, etc."
              />
            </div>

            <div>
              <label className="block text-sm text-black mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
                placeholder="City, Country"
              />
            </div>

            <div>
              <label className="block text-sm text-black mb-1">Business Email</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
                placeholder="contact@acme.com"
              />
            </div>

            <div>
              <label className="block text-sm text-black mb-1">Contact Phone</label>
              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
                placeholder="+1 555-123-4567"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>

          <motion.button
            onClick={handleContinue}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition"
          >
            Continue
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="w-full text-center text-xs py-4 text-black bg-[#FFB347] border-t border-white/30">
        &copy; {new Date().getFullYear()} Findigm. All rights reserved.
      </footer>
    </div>
  );
}

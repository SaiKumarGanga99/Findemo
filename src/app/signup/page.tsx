"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, EyeOff, Handshake, Zap, Receipt } from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

export default function StepOne() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    if (!fullName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    router.push("/signup/company-info"); // ✅ fixed route from step 1 to step 2
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
        className="flex-grow flex flex-col lg:flex-row items-center justify-center px-4 gap-12 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Column - Info Text Grid */}
        <motion.div
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white/30 p-6 rounded-xl shadow-inner backdrop-blur-md text-black"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-100 rounded-full">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Competitive Pricing</h3>
              <p className="text-sm">Access to global institutional investors & exchanges.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-100 rounded-full">
              <EyeOff className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Confidential</h3>
              <p className="text-sm">Clients won’t know we’re involved. No risk to relationships.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-100 rounded-full">
              <Handshake className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold">No Personal Guarantees</h3>
              <p className="text-sm">No all-asset debentures required for funding.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-100 rounded-full">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Quick Integration</h3>
              <p className="text-sm">Easily sync with invoicing platforms for seamless payments.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-orange-100 rounded-full">
              <Receipt className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Pay-as-you-go</h3>
              <p className="text-sm">Choose when and what invoices to finance. Flexible usage.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Sign Up Form */}
        <motion.div
          className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 space-y-6"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className={`text-2xl font-bold text-black ${plusJakarta.className}`}>Create your account</h1>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-black mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm text-black mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm text-black mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>

          {/* Continue Button */}
          <motion.button
            onClick={handleContinue}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition"
          >
            Continue
          </motion.button>

          {/* Already have an account */}
          <p className="text-center text-sm text-gray-700">
            Already have an account?{' '}
            <Link href="/signin" className="text-black font-medium underline">
              Log in
            </Link>
          </p>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="w-full text-center text-xs py-4 text-black bg-[#FFB347] border-t border-white/30">
        &copy; {new Date().getFullYear()} Findigm. All rights reserved.
      </footer>
    </div>
  );
}

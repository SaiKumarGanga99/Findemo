"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

export default function Verification() {
  const router = useRouter();
  const [confirmed, setConfirmed] = useState(false);

  const handleContinue = () => {
    setConfirmed(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
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
          className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 space-y-6 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className={`text-2xl font-bold text-black ${plusJakarta.className}`}>Verify your account</h1>
          <p className="text-gray-700 text-sm">
            We’ve sent a verification email to your inbox. Please confirm your email address to continue.
          </p>

          <motion.button
            onClick={handleContinue}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition"
          >
            Continue to Dashboard
          </motion.button>

          {confirmed && <p className="text-green-600 text-sm pt-2">Verification confirmed! Redirecting...</p>}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="w-full text-center text-xs py-4 text-black bg-[#FFB347] border-t border-white/30">
        &copy; {new Date().getFullYear()} Findigm. All rights reserved.
      </footer>
    </div>
  );
}

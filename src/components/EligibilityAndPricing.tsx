"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

const FEE_RATE = 0.0466;

export default function EligibilityAndPricing() {
  const [amount, setAmount] = useState(0);
  const [termWeeks, setTermWeeks] = useState<12 | 24>(12);
  const [showResult, setShowResult] = useState(false);

  const totalFee = amount * FEE_RATE;
  const totalRepayment = amount + totalFee;
  const weeklyPayment = (totalRepayment / termWeeks).toFixed(2);
  const feePerWeek = (totalFee / termWeeks).toFixed(2);
  const principalPerWeek = (amount / termWeeks).toFixed(2);

  return (
    <section className="bg-white py-36 px-6">
      <div className={`max-w-7xl mx-auto space-y-16 ${plusJakarta.className}`}>
        {/* ✅ Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Eligibility & Pricing</h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Check if you qualify and preview transparent pricing before you apply.
          </p>
        </motion.div>

        {/* ✅ Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-10 items-center">
          {/* ✅ Left Column - 40% */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold text-black"
            >
              Do I qualify?
            </motion.h3>
            <ul className="space-y-5 text-lg">
              {["$30,000+ in annual revenue", "Business checking account", "Ideally 3+ months in business"].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                  <span className="text-gray-800">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ✅ Right Column - 60% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 bg-[#E07A5F] p-8 md:py-20 rounded-2xl space-y-6 shadow-lg text-white"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-bold"
            >
              How our pricing works
            </motion.h3>

            {/* Input and Button */}
            <div className="flex gap-2">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="px-4 py-3 rounded-md w-full shadow-sm border border-gray-300 text-black focus:outline-none"
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowResult(true)}
                className="bg-black text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-gray-900"
              >
                Calculate
              </motion.button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 text-sm font-medium">
              <button
                className={`underline underline-offset-4 ${termWeeks === 12 ? "text-white" : "text-white/70"}`}
                onClick={() => setTermWeeks(12)}
              >
                12 weeks
              </button>
              <button
                className={`${termWeeks === 24 ? "text-white" : "text-white/70"}`}
                onClick={() => setTermWeeks(24)}
              >
                24 weeks
              </button>
            </div>

            {/* Table */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white text-black rounded-xl shadow p-4 overflow-x-auto"
              >
                <table className="w-full text-sm text-left">
                  <thead className="border-b font-semibold">
                    <tr>
                      <th className="py-2">Week</th>
                      <th className="py-2">Principal</th>
                      <th className="py-2">Fees</th>
                      <th className="py-2">Total / week</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">All Weeks</td>
                      <td className="py-2">${principalPerWeek}</td>
                      <td className="py-2">${feePerWeek}</td>
                      <td className="py-2">${weeklyPayment}</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>
            )}

            {showResult && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-white/80"
              >
                * Based on a 4.66% fee. Terms and fees may vary depending on selected term.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

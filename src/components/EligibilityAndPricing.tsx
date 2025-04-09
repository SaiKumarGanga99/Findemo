"use client";

import { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import Link from "next/link";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

export default function InvoiceCalculator() {
  const [turnover, setTurnover] = useState<number | null>(null);
  const [days, setDays] = useState(30);
  const advanceRate = 95;

  // New logic: 0.15% per 15 days → 0.01% per day
  const percentageRate = days * 0.001;
  const estimatedAdvance =
    turnover !== null ? (turnover * (1 - percentageRate) * (advanceRate / 100)).toFixed(2) : null;

  const handleTurnoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setTurnover(isNaN(value) ? null : value);
  };

  return (
    <section className="bg-white py-28 px-6">
      <div className={`max-w-6xl mx-auto ${plusJakarta.className}`}>
        {/* Heading Section */}
        <div className="bg-[#E07A5F] rounded-2xl px-6 md:px-16 py-16 text-left md:grid md:grid-cols-2 md:items-center md:gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Your Cash Potential
            </h2>
          </div>
          <div>
            <p className="text-white text-lg md:text-xl">
              Use our invoice finance calculator to discover how much capital you can unlock based on your unpaid invoices and repayment cycle.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          <div className="w-full md:w-[70%] bg-white border-2 border-orange-300 rounded-3xl shadow-2xl p-8 md:p-12 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <label className="text-sm font-semibold text-gray-800">
                What is your average yearly turnover (in USD)?
              </label>
              <input
                type="number"
                placeholder="$"
                value={turnover ?? ""}
                onChange={handleTurnoverChange}
                className="w-full text-lg px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {turnover === null && (
                <p className="text-red-500 text-xs mt-1">Enter a valid number</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <label className="text-sm font-semibold text-gray-800 mb-2 block">
                Average debtor payment terms (in days):
              </label>
              <Slider
                defaultValue={[days]}
                max={90}
                min={1}
                step={1}
                className="mt-2"
                onValueChange={(val) => setDays(val[0])}
              />
              <div className="text-center mt-2 text-sm font-medium text-orange-700">
                {days} Days
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-6 border-t mt-4"
            >
              {estimatedAdvance !== null && (
                <>
                  <p className="text-sm text-gray-800 font-medium mb-1">
                    Estimated advance you can access:
                  </p>
                  <h3 className="text-4xl font-bold text-black">${estimatedAdvance}</h3>
                </>
              )}
              <p className="text-xs text-gray-600 mt-2">
                This estimate is based on a repayment period of {days} days, with an advance rate of {advanceRate}% and a proportional service charge of 0.15% every 15 days.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-md text-gray-800 mb-4">
              Interested in getting started with invoice financing?
            </p>
            <Link href="/signup">
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition cursor-pointer">
                Sign Up Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

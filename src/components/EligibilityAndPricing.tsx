"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

// Constants
const TERM_WEEKS = 12;
const FEE_RATE = 0.0466;

export default function EligibilityAndPricing() {
  const [amount, setAmount] = useState(5000);

  // Math logic for pricing
  const totalFee = amount * FEE_RATE;
  const totalRepayment = amount + totalFee;
  const weeklyPayment = (totalRepayment / TERM_WEEKS).toFixed(2);
  const feePerWeek = (totalFee / TERM_WEEKS).toFixed(2);
  const principalPerWeek = (amount / TERM_WEEKS).toFixed(2);

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ✅ Left Column */}
        <div className="py-10 md:py-16 px-2 space-y-6 relative">
          {/* Zig-zag background effect */}
          <div className="absolute top-2 left-0 -z-10">
            <svg
              width="280"
              height="60"
              viewBox="0 0 300 60"
              preserveAspectRatio="none"
              className="text-orange-200"
            >
              <polygon
                points="0,20 40,0 80,20 120,0 160,20 200,0 240,20 280,0 300,20 300,60 0,60"
                fill="currentColor"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-black relative z-10">
            Do I qualify?
          </h2>

          <ul className="space-y-5 text-lg">
            {[
              "$30,000+ in annual revenue",
              "Business checking account",
              "Ideally 3+ months in business",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="text-orange-500 w-6 h-6 mt-1" />
                <span className="text-gray-800">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Right Column - Calculator */}
        <div className="bg-orange-100 p-8 md:py-16 rounded-2xl space-y-6 shadow-md">
          <h2 className="text-3xl font-bold text-black">How our pricing works</h2>

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="px-4 py-3 rounded-md w-full shadow-sm border border-gray-300 focus:outline-none text-black"
            />
            <button
              disabled
              className="bg-black text-white px-5 py-3 rounded-md opacity-60 cursor-default text-sm font-medium"
            >
              Calculated
            </button>
          </div>

          {/* Tabs (for design only) */}
          <div className="flex gap-4 text-sm font-medium">
            <span className="underline underline-offset-4 text-black">12 weeks</span>
            <span className="text-gray-500 cursor-pointer">24 weeks</span>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="border-b text-gray-800 font-semibold">
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
          </div>

          <p className="text-xs text-gray-600">
            * Based on a 4.66% fee for a 12-week term. Terms and fees may vary.
          </p>
        </div>
      </div>
    </section>
  );
}

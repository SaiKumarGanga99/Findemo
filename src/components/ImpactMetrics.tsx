"use client";

import { useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

const metrics = [
  {
    label: "Businesses Funded",
    value: "1,200+",
    description: "SMBs supported with working capital",
    progress: "50%",
  },
  {
    label: "Invoices Financed",
    value: "$30M+",
    description: "Total invoice value processed",
    progress: "50%",
  },
  {
    label: "Approval Rate",
    value: "92%",
    description: "Applications approved instantly",
    progress: "100%",
  },
  {
    label: "Avg. Time to Fund",
    value: "<24h",
    description: "Time from approval to payout",
    progress: "100%",
  },
  {
    label: "Countries Supported",
    value: "80+",
    description: "Global reach for growing businesses",
    progress: "100%",
  },
];

export default function ImpactMetrics() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const onScroll = () => {
      metrics.forEach((_, i) => {
        const element = document.getElementById(`metric-${i}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.95 && !visibleIndexes.includes(i)) {
            setVisibleIndexes((prev) => [...prev, i]);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [visibleIndexes]);

  return (
    <section id="impact-metrics" className="bg-white py-24 px-6">
      <div className={`max-w-4xl mx-auto text-center ${plusJakarta.className}`}>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Findigm by the Numbers</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-xl mx-auto">
          We're helping businesses grow with accessible and transparent invoice financing.
        </p>

        <div className="space-y-10">
          {metrics.map((item, i) => (
            <div
              key={i}
              id={`metric-${i}`}
              className="relative bg-gray-200 rounded-xl h-20 w-[60%] mx-auto overflow-hidden shadow-md"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={visibleIndexes.includes(i) ? { width: item.progress } : {}}
                transition={{ delay: 0.2, duration: 3, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-[#E07A5F] rounded-xl z-0"
              ></motion.div>
              <div className="relative z-10 flex justify-between items-center h-full px-6">
                <div className="text-left">
                  <div className="font-extrabold text-3xl text-black">{item.value}</div>
                  <div className="text-sm text-black">{item.label}</div>
                </div>
                <div className="text-sm text-black hidden sm:block">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

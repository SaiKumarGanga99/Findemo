"use client";

import { Rocket, HandCoins, CalendarClock } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Quick application",
    description: "Applying is quick and easy, and you can get a credit decision in as little as 3 minutes.",
    color: "bg-red-100 text-red-800",
  },
  {
    icon: HandCoins,
    title: "Fast access to funds",
    description: "Funds can be available as soon as the next business day if approved.",
    color: "bg-sky-100 text-sky-800",
  },
  {
    icon: CalendarClock,
    title: "Flexible repayment terms",
    description: "Choose your repayment plan each time you draw funds—with no prepayment penalty.",
    color: "bg-yellow-100 text-yellow-800",
  },
];

export default function ProductHighlights() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              {/* Icon box */}
              <div className={`p-4 rounded-xl ${feature.color}`}>
                <feature.icon className="w-8 h-8" />
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
              {/* Description */}
              <p className="text-gray-600 text-sm max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-black text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-900 transition">
          Access capital
        </button>
      </div>
    </section>
  );
}

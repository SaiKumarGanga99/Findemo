"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alicia James",
    title: "Founder, Fresh Brew Co.",
    quote:
      "This platform gave me the cash flow I needed without the paperwork headache. I got funded in less than a day!",
    avatar: "/avatars/alicia.jpg", // replace with your own or use placeholder
  },
  {
    name: "Rahul Patel",
    title: "CEO, HexaLogix",
    quote:
      "Seamless, fast, and trustworthy. Exactly what small businesses need to stay afloat and grow.",
    avatar: "/avatars/rahul.jpg",
  },
  {
    name: "Maria Gomez",
    title: "Operations, Bloom Agency",
    quote:
      "I was shocked by how fast the funds came through. We’re now using it every month to manage invoices.",
    avatar: "/avatars/maria.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-4">
          What our customers are saying
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Join thousands of businesses using our platform to unlock fast, flexible funding.
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-sm p-6 text-left space-y-4 hover:shadow-md transition"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-800 text-sm leading-relaxed italic">“{t.quote}”</p>

              {/* User info */}
              <div className="flex items-center gap-4 pt-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-black">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

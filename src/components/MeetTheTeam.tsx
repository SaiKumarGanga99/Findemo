"use client";

import { motion } from "framer-motion";
import { UserCircle2 } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const team = [
  { name: "Anika Sharma", title: "CEO & Co-Founder" },
  { name: "Liam Patel", title: "CTO" },
  { name: "Sophia Nguyen", title: "Chief Growth Officer" },
  { name: "Noah Garcia", title: "Head of Partnerships" },
  { name: "Emily Chen", title: "Finance Lead" },
  { name: "James Lee", title: "Product Strategist" },
];

export default function MeetTheTeam() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-50 py-20 px-6">
      <div className={`max-w-6xl mx-auto text-center ${plusJakarta.className}`}>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet the Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We’re a passionate group of innovators, builders, and dreamers transforming invoice financing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={i}
              variants={cardVariants}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden pb-8"
            >
              {/* Avatar or Placeholder Icon */}
              <div className="h-52 flex items-center justify-center bg-orange-100 relative">
                <UserCircle2 className="w-20 h-20 text-orange-600" />
                {/* Title Tag */}
                <div className="absolute bottom-[-16px] left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-200 text-orange-800 px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                    {member.title}
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="mt-10 text-center px-4">
                <p className="text-md font-semibold text-gray-900">{member.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

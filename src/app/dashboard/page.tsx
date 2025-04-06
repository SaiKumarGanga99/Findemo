"use client";

import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Plus_Jakarta_Sans } from "next/font/google";
import { DollarSign, FileText, Users, Clock } from "lucide-react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend);

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

export default function Dashboard() {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Invoices Processed",
        data: [5, 9, 13, 20, 17, 23],
        borderColor: "#E07A5F",
        backgroundColor: "rgba(224, 122, 95, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const doughnutData = {
    labels: ["Funded", "Pending", "Declined"],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ["#E07A5F", "#F7B787", "#FFDDD2"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 text-black flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md py-8 px-6">
        <h1 className={`text-2xl font-bold mb-8 ${plusJakarta.className}`}>Findigm</h1>
        <nav className="space-y-4 text-sm">
          <a href="#" className="block hover:text-orange-600">Dashboard</a>
          <a href="#" className="block hover:text-orange-600">Invoices</a>
          <a href="#" className="block hover:text-orange-600">Funding</a>
          <a href="#" className="block hover:text-orange-600">Reports</a>
          <a href="#" className="block hover:text-orange-600">Settings</a>
        </nav>
      </aside>

      {/* Main content */}
      <section className="flex-1 p-10">
        <h2 className={`text-3xl font-bold mb-8 ${plusJakarta.className}`}>Welcome back 👋</h2>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <DollarSign className="w-6 h-6 text-orange-500" />
            <div>
              <p className="text-xs text-gray-500">Total Funded</p>
              <p className="text-lg font-semibold">$1.2M</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <FileText className="w-6 h-6 text-orange-500" />
            <div>
              <p className="text-xs text-gray-500">Invoices Processed</p>
              <p className="text-lg font-semibold">320</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <Users className="w-6 h-6 text-orange-500" />
            <div>
              <p className="text-xs text-gray-500">Clients</p>
              <p className="text-lg font-semibold">76</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4">
            <Clock className="w-6 h-6 text-orange-500" />
            <div>
              <p className="text-xs text-gray-500">Avg. Payment Time</p>
              <p className="text-lg font-semibold">18h</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Monthly Invoice Activity</h3>
            <Line data={lineData} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Funding Status</h3>
            <Doughnut data={doughnutData} />
          </div>
        </div>
      </section>
    </main>
  );
}

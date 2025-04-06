"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700"] });

export default function SignInPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen flex">
      {/* Left: Branding or image */}
      <div className="hidden md:flex w-1/2 bg-orange-100 justify-center items-center">
        <div className="text-center px-10">
          <h1 className={`text-4xl font-bold text-orange-700 ${jakarta.className}`}>Welcome to Findigm</h1>
          <p className="text-orange-800 mt-4 text-lg">Smart financing, made simple.</p>
        </div>
      </div>

      {/* Right: Sign-in form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-6 py-12">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="text-sm text-gray-600 mt-2">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-orange-600 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Work email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@company.com"
                className="mt-2 px-4 py-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
            >
              Continue
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center pt-4">
            By continuing, you agree to our{" "}
            <a href="#" className="underline hover:text-orange-600">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-orange-600">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}

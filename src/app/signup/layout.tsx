// app/signup/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup – Findigm",
  description: "Start your signup process for Findigm",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((l) => {
        const isActive = pathname.startsWith(l.href);
        return (
          <Link href={l.href} key={l.name} className={isActive ? "font-bold p-2" : "text-blue-500 p-2"}>
            {l.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}

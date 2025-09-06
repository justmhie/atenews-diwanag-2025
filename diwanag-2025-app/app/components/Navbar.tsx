"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isDarkPage = pathname === "/epilogue" || pathname === "/chap-5" || pathname === "/chap-6";

  return (
    <nav
      className="flex justify-end"
      aria-label="Main navigation"
      style={{
        background: isDarkPage ? "#0B141D" : "var(--bg-light)",
        padding: "1rem 0",
        letterSpacing: "0.05em",
        position: isDarkPage ? "fixed" : "static",
        top: isDarkPage ? "0" : "auto",
        width: "100%",
        zIndex: isDarkPage ? "1000" : "auto",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "3rem",
          listStyle: "none",
          padding: "0 2rem",
          margin: 0,
          alignItems: "center",
          fontFamily: "Averia Serif Libre",
        }}
      >
        <li>
          <Link
            href="/landing"
            className="hover:border-b-2"
            style={{
              color: isDarkPage ? "#D4AF37" : "var(--text-accent)",
              fontWeight: 500,
              fontSize: "1.2rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/landing"
            className="hover:border-b-2"
            style={{
              color: isDarkPage ? "#D4AF37" : "var(--text-accent)",
              fontWeight: 500,
              fontSize: "1.2rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/landing"
            className="hover:border-b-2"
            style={{
              color: isDarkPage ? "#D4AF37" : "var(--text-accent)",
              fontWeight: 500,
              fontSize: "1.2rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Staff
          </Link>
        </li>
      </ul>
    </nav>
  );
}
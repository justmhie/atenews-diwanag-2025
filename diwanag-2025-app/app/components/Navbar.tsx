import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className=" flex justify-end"
      aria-label="Main navigation"
      style={{
        background: "var(--bg-light)",
        padding: "1rem 0",
        letterSpacing: "0.05em",
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
            className="hover:border-b-2 ]"
            style={{
              color: "var(--text-accent)",
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
            className="hover:border-b-2 ]"
            style={{
              color: "var(--text-accent)",
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
            className="hover:border-b-2 ]"
            style={{
              color: "var(--text-accent)",
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

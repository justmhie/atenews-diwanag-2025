import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className=" flex justify-end"
      aria-label="Main navigation"
      style={{
        background: "var(--bg-light)",
        padding: "1rem 0",
        fontFamily: 'Averia Serif Libre", serif',
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
        }}
      >
        <li>
          <Link
            href="/table-of-content"
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
            href="/epilogue"
            style={{
              color: "var(--text-accent)",
              fontWeight: 500,
              fontSize: "1.2rem",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Artworks
          </Link>
        </li>
        <li>
          <Link
            href="/staff"
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

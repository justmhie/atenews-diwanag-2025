import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/prologue">Prologue</Link>
        </li>
        <li>
          <Link href="/table-of-content">Table of Content</Link>
        </li>
        <li>
          <Link href="/chap-1">Chapter 1</Link>
        </li>
        <li>
          <Link href="/chap-2">Chapter 2</Link>
        </li>
        <li>
          <Link href="/chap-3">Chapter 3</Link>
        </li>
        <li>
          <Link href="/epilogue">Epilogue</Link>
        </li>
      </ul>
    </nav>
  );
}

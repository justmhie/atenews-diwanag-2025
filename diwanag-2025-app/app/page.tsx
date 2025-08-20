import Link from "next/link";
import Landing from "./landing/page";

export default function Home() {
  return (
    <div>
      <Landing />
      <h1>Welcome to Diwanag 2025</h1>
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
    </div>
  );
}

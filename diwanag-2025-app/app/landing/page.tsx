"use client";
import { useRouter } from "next/navigation";
import TableOfContents from "../table-of-content/page";
export default function LandingPage() {
  const router = useRouter();

  return (
    <main
      className="bg-light"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "10rem",
        alignItems: "center",
        justifyContent: "flex-end",
        background: "var(--bg-light)",
        width: "100%",
        boxSizing: "border-box",
        paddingTop: "10rem",
        position: "relative",
      }}
    >
      <TableOfContents />

      {/* MAIN TEXT */}
      <div
        style={{
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          height: "20vh",
        }}
      >
        <h1
          style={{
            position: "relative",
            fontSize: "5rem",
            color: "var(--text-accent)",
            lineHeight: 0.5,
            zIndex: 1,
            background: "transparent",
          }}
        >
          Tinipong Alaala
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1rem",
            zIndex: 1,
          }}
        >
          <hr
            style={{
              flex: 2,
              border: "none",
              borderTop: "1px solid var(--bg-light)",
            }}
          />

          <hr
            style={{
              flex: 1,
              border: "none",
              borderTop: "1px solid var(--text-accent)",
            }}
          />
          <p
            style={{
              fontFamily: "averia-serif",
              fontSize: "16px",
              color: "var(--text-accent)",
              marginTop: "0.5rem",
              fontWeight: "300",
              margin: 0,
            }}
          >
            An Art Folio
          </p>
        </div>
      </div>

      {/* MOUNTAIN AND DOORS */}
      <div style={{ position: "relative", width: "100%" }}>
        {/* Mountain */}
        <img
          src="/group-5.png"
          alt="Tinipong Alaala Mountain"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
            pointerEvents: "none",
          }}
        />

        {/* Doors */}
        <div
          style={{
            width: "100%",
            position: "absolute",
            bottom: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "3rem",
            zIndex: 1,
          }}
        >
          <img
            src="/door-1.png"
            alt="Door 1"
            style={{
              height: "auto",
              marginTop: "3rem",
              cursor: "pointer",
              pointerEvents: "auto",
            }}
            onClick={() => router.push("/prologue")}
          />
          <img
            src="/door-2.png"
            alt="Door 2"
            style={{ height: "auto", cursor: "pointer", pointerEvents: "auto" }}
            onClick={() => router.push("/chap-1")}
          />
          <img
            src="/door-3.png"
            alt="Door 3"
            style={{
              height: "auto",
              marginTop: "3rem",
              cursor: "pointer",
              pointerEvents: "auto",
            }}
            onClick={() => router.push("/epilogue")}
          />
        </div>
      </div>
    </main>
  );
}

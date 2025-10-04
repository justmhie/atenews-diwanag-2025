"use client";
import { useRouter } from "next/navigation";
export default function LandingPage() {
  const router = useRouter();

  return (
    <main
      className="bg-light"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "8rem",
        alignItems: "center",
        justifyContent: "flex-end",
        background: "var(--bg-light)",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* MAIN TEXT */}
      <div
        className="main-text"
        style={{
          flexDirection: "column",
          gap: "1rem",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "8rem",
        }}
      >
        <h1
          className="main-title"
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
          className="title-divider"
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
            className="subtitle"
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
          className="doors-container"
          style={{
            width: "100%",
            position: "absolute",
            bottom: "56%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "3rem",
            zIndex: 1, // Behind mountain
            padding: "0 2rem",
          }}
        >
          {/* Door 1 - Prologue */}
          <img
            src="/group-12.png"
            alt="Prologue Door"
            className="door door-1"
            style={{
              height: "auto",
              marginTop: "3rem",
              cursor: "pointer",
              pointerEvents: "auto",
              transition: "transform 0.2s ease, filter 0.2s ease",
              maxWidth: "200px",
              width: "100%",
            }}
            onClick={() => router.push("/prologue")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          />

          {/* Door 2 - Chapter 1 */}
          <img
            src="/group-12.png"
            alt="Chapter 1 Door"
            className="door door-2"
            style={{
              height: "auto",
              cursor: "pointer",
              pointerEvents: "auto",
              transition: "transform 0.2s ease, filter 0.2s ease",
              maxWidth: "200px",
              width: "100%",
            }}
            onClick={() => router.push("/chap-1")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          />

          {/* Door 3 - Epilogue */}
          <img
            src="/group-12.png"
            alt="Epilogue Door"
            className="door door-3"
            style={{
              height: "auto",
              marginTop: "3rem",
              cursor: "pointer",
              pointerEvents: "auto",
              transition: "transform 0.2s ease, filter 0.2s ease",
              maxWidth: "200px",
              width: "100%",
            }}
            onClick={() => router.push("/epilogue")}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.filter = "brightness(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          />
        </div>
      </div>

      <style jsx>{`
        /* Large Desktop */
        @media (min-width: 1500px) {
          .main-title {
            font-size: 5rem !important;
          }

          .doors-container {
            gap: 3rem !important;
            bottom: 64% !important;
          }

          .door {
            max-width: 120px !important;
          }
        }

        /* Desktop */
        @media (max-width: 1199px) and (min-width: 992px) {
          .main-title {
            font-size: 4.5rem !important;
          }

          .doors-container {
            gap: 2.5rem !important;
          }

          .door {
            max-width: 110px !important;
          }
        }

        /* Tablet */
        @media (max-width: 991px) and (min-width: 768px) {
          main {
            gap: 6rem !important;
            padding-top: 6rem !important;
          }

          .main-title {
            font-size: 3.5rem !important;
            line-height: 0.7 !important;
          }

          .subtitle {
            font-size: 14px !important;
          }

          .doors-container {
            gap: 2rem !important;
            bottom: 57% !important;
          }

          .door {
            max-width: 90px !important;
          }

          .door-1,
          .door-3 {
            margin-top: 2rem !important;
          }
        }

        /* Mobile Large */
        @media (max-width: 767px) and (min-width: 576px) {
          main {
            gap: 4rem !important;
            padding-top: 4rem !important;
          }

          .main-title {
            font-size: 2.8rem !important;
            line-height: 0.8 !important;
          }

          .subtitle {
            font-size: 13px !important;
          }

          .title-divider {
            max-width: 400px !important;
          }

          .doors-container {
            gap: 1.5rem !important;
            bottom: 57% !important;
          }

          .door {
            max-width: 70px !important;
          }

          .door-1,
          .door-3 {
            margin-top: 1.5rem !important;
          }
        }
        /* Mobile */
        @media (max-width: 575px) {
          main {
            gap: 3rem !important;
            padding-top: 3rem !important;
          }

          .main-title {
            font-size: 2.2rem !important;
            line-height: 1 !important;
          }

          .subtitle {
            font-size: 12px !important;
          }

          .title-divider {
            max-width: 300px !important;
            gap: 0.5rem !important;
          }

          .main-text {
            height: auto !important;
            min-height: 15vh !important;
          }

          .doors-container {
            gap: 1rem !important;
            bottom: 56% !important;
          }

          .door {
            max-width: 55px !important;
          }

          .door-1,
          .door-3 {
            margin-top: 1rem !important;
          }
        }
        /* Mobile Small */
        @media (max-width: 400px) {
          .main-title {
            font-size: 1.8rem !important;
          }

          .doors-container {
            gap: 0.8rem !important;
            bottom: 56% !important;
          }

          .door {
            max-width: 45px !important;
          }

          .door-1,
          .door-3 {
            margin-top: 0.8rem !important;
          }
        }

        /* Mobile Very Small */
        @media (max-width: 350px) {
          .main-title {
            font-size: 1.5rem !important;
          }

          .subtitle {
            font-size: 10px !important;
          }

          .doors-container {
            gap: 0.5rem !important;
            bottom: 60% !important;
          }

          .door {
            max-width: 40px !important;
          }

          .door-1,
          .door-3 {
            margin-top: 0.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}

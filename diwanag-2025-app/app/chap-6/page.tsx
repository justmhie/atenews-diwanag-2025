"use client";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function ChapTwoPage() {
  const router = useRouter();
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#C4A374",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/trees3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />

      {/* Content Overlay */}
      <div
        className="content-overlay"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "4rem 2rem",
        }}
      >
        {/* Chapter Title */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h1
            className="chapter-title"
            style={{
              fontSize: "2rem",
              fontFamily: "Averia Serif Libre",
              color: "var(--text-light)",
              marginBottom: "1rem",
              fontWeight: "700",
            }}
          >
            CHAPTER VI
          </h1>
          <div
            style={{
              width: "100px",
              height: "3px",
              backgroundColor: "var(--text-light)", // Match title color
              margin: "0 auto",
            }}
          />
        </div>

        {/* Chapter Text */}
        <div
          className="chapter-text"
          style={{
            maxWidth: "600px",
            textAlign: "left",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "var(--text-light)",
              fontFamily: "Averia Serif Libre",
              fontStyle: "italic",
            }}
          >
            "Bound by the weight of what we carry, <br /> fragments of regret
            cut deep into the soul. <br /> The unspoken wounds us the most,{" "}
            <br /> leaving echoes of what could have been, <br /> forever
            searching, forever questioning."
          </p>
        </div>
      </div>

      {/* Navigation Button */}
      <div
        className="nav-button"
        style={{
          position: "absolute",
          bottom: "3rem",
          right: "3rem",
          zIndex: 3,
        }}
      >
        <Button
          onClick={async () => {
            // Fetch first artwork of Chapter 6
            const res = await fetch("/data/artworks.json");
            const data = await res.json();
            const chapter5Art = data.find(
              (art: any) => art.chapter === "Chapter 6"
            );
            if (chapter5Art) {
              router.push(
                `/chap-6/artwork/${encodeURIComponent(chapter5Art.artTitle)}`
              );
            }
          }}
          style={{
            backgroundColor: "#5D4037", // Rich brown that complements the image
            color: "#F5F1E8", // Light cream color
            fontSize: "18px",
            padding: "15px 30px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontFamily: "Averia Serif Libre",
            fontWeight: "600",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(74, 52, 38, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#4A3426";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#5D4037";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Begin Journey →
        </Button>
      </div>

      <style jsx>{`
        /* Desktop styles */
        .content-overlay {
          margin-left: 30rem;
        }

        .chapter-text {
          text-align: left;
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .content-overlay {
            margin-left: 15rem !important;
          }

          .chapter-title {
            font-size: 2.5rem !important;
          }

          .chapter-text p {
            font-size: 1.1rem !important;
          }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .content-overlay {
            margin-left: 0 !important;
            padding: 2rem 1rem !important;
            text-align: center;
          }

          .chapter-title {
            font-size: 2rem !important;
          }

          .chapter-text {
            text-align: center !important;
            max-width: 90% !important;
          }

          .chapter-text p {
            font-size: 1rem !important;
            line-height: 1.6 !important;
          }

          .nav-button {
            bottom: 2rem !important;
            right: 2rem !important;
          }

          .nav-button button {
            font-size: 16px !important;
            padding: 12px 24px !important;
          }
        }

        /* Small mobile styles */
        @media (max-width: 480px) {
          .chapter-title {
            font-size: 1.8rem !important;
          }

          .chapter-text p {
            font-size: 0.9rem !important;
          }

          .nav-button {
            bottom: 1rem !important;
            right: 1rem !important;
          }

          .nav-button button {
            font-size: 14px !important;
            padding: 10px 20px !important;
          }
        }
      `}</style>
    </main>
  );
}

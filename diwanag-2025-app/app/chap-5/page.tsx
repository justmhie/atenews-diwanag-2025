"use client";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import PageLoadingWrapper from "../components/PageLoadingWrapper";

export default function ChapFivePage() {
  const router = useRouter();
  return (
    <PageLoadingWrapper>
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
              CHAPTER V
            </h1>
            <div
              style={{
                width: "100px",
                height: "3px",
                backgroundColor: "var(--text-light)",
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
              there is war within every stillness.
              <br /> we are contradictions;
              <br /> creations born of destruction, wholeness found in the
              fracture, a
              <br /> restless longing for what we cannot name.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div
          className="nav-buttons"
          style={{
            position: "absolute",
            bottom: "3rem",
            right: "3rem",
            zIndex: 3,
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <Button
            className="align-left"
            onClick={async () => {
              // Fetch last artwork of Chapter 4
              const res = await fetch("/data/artworks.json");
              const data = await res.json();
              const chapter4Arts = data.filter(
                (art: any) => art.chapter === "Chapter 4"
              );
              if (chapter4Arts.length > 0) {
                const lastArt = chapter4Arts[chapter4Arts.length - 1];
                router.push(
                  `/chap-4/artwork/${encodeURIComponent(lastArt.artTitle)}`
                );
              }
            }}
            style={{
              backgroundColor: "var(--accent-brown-dark)",
              color: "var(--text-light)",
              padding: "0.5rem 1rem",
              fontSize: "1.2rem",
              minWidth: "auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4A3426";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(74, 52, 38, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--accent-brown-dark)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(74, 52, 38, 0.3)";
            }}
          >
            ← Chapter 4
          </Button>

          {/* Begin Journey Button */}
          <Button
            onClick={async () => {
              // Fetch first artwork of Chapter 5
              const res = await fetch("/data/artworks.json");
              const data = await res.json();
              const chapter5Art = data.find(
                (art: any) => art.chapter === "Chapter 5"
              );
              if (chapter5Art) {
                router.push(
                  `/chap-5/artwork/${encodeURIComponent(chapter5Art.artTitle)}`
                );
              }
            }}
            style={{
              backgroundColor: "var(--accent-brown-dark)",
              color: "var(--text-light)",
              padding: "0.5rem 1rem",
              fontSize: "1.2rem",
              minWidth: "auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4A3426";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 6px 18px rgba(74, 52, 38, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--accent-brown-dark)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(74, 52, 38, 0.3)";
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

            .nav-buttons {
              bottom: 2rem !important;
              right: 2rem !important;
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

            .nav-buttons {
              bottom: 2rem !important;
              right: 2rem !important;
              flex-direction: column !important;
              gap: 0.5rem !important;
            }

            .nav-buttons button {
              font-size: 16px !important;
              padding: 12px 24px !important;
              width: 100% !important;
              min-width: 150px !important;
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

            .nav-buttons {
              bottom: 1rem !important;
              right: 1rem !important;
              left: 1rem !important;
              width: auto !important;
            }

            .nav-buttons button {
              font-size: 14px !important;
              padding: 10px 20px !important;
              min-width: 120px !important;
            }
          }
        `}</style>
      </main>
    </PageLoadingWrapper>
  );
}

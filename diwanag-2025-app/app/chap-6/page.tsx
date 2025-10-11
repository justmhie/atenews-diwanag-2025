"use client";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import PageLoadingWrapper from "../components/PageLoadingWrapper";

export default function ChapSixPage() {
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
              CHAPTER VI
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
              "Bound by the weight of what we carry, <br /> fragments of regret
              cut deep into the soul. <br /> The unspoken wounds us the most,{" "}
              <br /> leaving echoes of what could have been, <br /> forever
              searching, forever questioning."
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
            variant="primary"
            onClick={() =>
              router.push("/chap-5/artwork/Wholeness%20in%20Whiskered%20Whimsy")
            }
            className="!h-12 transition-all duration-300 hover:-translate-y-0.5"
          >
            ← Back to Chapter 5
          </Button>

          <Button
            variant="primary"
            onClick={() => router.push("/chap-6/artwork/Walking%20Among%20Us")}
            className="!h-12 transition-all duration-300 hover:-translate-y-0.5"
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

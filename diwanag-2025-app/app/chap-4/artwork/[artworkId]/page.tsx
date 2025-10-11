"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import ViewImage from "@/app/modals/ViewImage";
import PageLoadingWrapper from "@/app/components/PageLoadingWrapper";

type Artwork = {
  artTitle: string;
  author: string;
  "art-image": string;
  artDescription: string;
  chapter: string;
  medium: string;
};

export default function ArtworkPage() {
  const { artworkId } = useParams();
  const router = useRouter();
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const goToArtwork = (index: number) => {
    const nextArt = artworks[index];
    if (nextArt) {
      router.push(`/chap-4/artwork/${encodeURIComponent(nextArt.artTitle)}`);
    }
  };

  useEffect(() => {
    fetch("/data/artworks.json")
      .then((res) => res.json())
      .then((data: Artwork[]) => {
        const chapterArtworks = data.filter(
          (art) => art.chapter === "Chapter 4"
        );
        setArtworks(chapterArtworks);
        const idx = chapterArtworks.findIndex(
          (art) => encodeURIComponent(art.artTitle) === artworkId
        );
        setCurrentIndex(idx);
      });
  }, [artworkId]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (artworks.length === 0 || isImageModalOpen) return;

      if (e.key === "ArrowLeft" && currentIndex > 0) {
        e.preventDefault();
        goToArtwork(currentIndex - 1);
      } else if (e.key === "ArrowRight" && currentIndex < artworks.length - 1) {
        e.preventDefault();
        goToArtwork(currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentIndex, artworks.length, isImageModalOpen]);

  if (currentIndex === -1 || artworks.length === 0) {
    return null;
  }

  const artwork = artworks[currentIndex];

  return (
    <PageLoadingWrapper>
      <div
        className="artwork-container"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Averia Serif Libre",
          padding: "2rem",
          boxSizing: "border-box",
          width: "100%",
          minHeight: "100vh",
          zIndex: 1,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url('/chap-bg-2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        <div
          className="artwork-content"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
            alignItems: "center",
          }}
        >
          <div
            className="artwork-image-section"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"/artworks/chap-4-photos/" + artwork["art-image"]}
              alt={artwork.artTitle}
              onClick={() => setIsImageModalOpen(true)}
              className="artwork-image"
              style={{
                maxWidth: "100%",
                maxHeight: "60vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 20px 60px var(--shadow-dark)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px var(--shadow-dark)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px var(--shadow-dark)";
              }}
            />
          </div>

          <div
            className="artwork-info-section"
            style={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "2rem",
              padding: "1rem",
            }}
          >
            <p
              className="artwork-description"
              style={{
                color: "var(--text-light)",
                lineHeight: "1.6",
                marginBottom: "1rem",
                fontSize: "1rem",
              }}
            >
              {artwork.artDescription}
            </p>

            <p
              className="artwork-author"
              style={{
                color: "var(--text-light)",
                fontStyle: "italic",
                marginBottom: "2rem",
                fontSize: "1rem",
              }}
            >
              -{artwork.author}
            </p>

            <div
              className="artwork-details"
              style={{
                fontFamily: "Averia Serif Libre",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              <p
                className="artwork-title"
                style={{
                  color: "var(--text-light)",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  fontSize: "1.1rem",
                }}
              >
                "{artwork.artTitle}"
              </p>
              <p
                className="artwork-medium"
                style={{
                  color: "var(--text-light)",
                  opacity: 0.8,
                  fontSize: "0.9rem",
                }}
              >
                {artwork.medium}
              </p>
            </div>

            <div
              className="artwork-navigation"
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Previous Button */}
              {currentIndex === 0 ? (
                <Button
                  onClick={() => router.push("/chap-4")}
                  variant="primary"
                  className="transition-all duration-300 hover:-translate-y-0.5"
                  style={{ minWidth: "120px", height: "48px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Chapter 4
                </Button>
              ) : (
                <Button
                  disabled={currentIndex <= 0}
                  onClick={() => goToArtwork(currentIndex - 1)}
                  variant="primary"
                  className="transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Previous artwork"
                  style={{ height: "48px", minWidth: "60px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </Button>
              )}

              {/* Counter */}
              <div
                className="artwork-counter"
                style={{
                  color: "var(--text-light)",
                  fontFamily: "Averia Serif Libre",
                  opacity: 0.7,
                  textAlign: "center",
                  fontSize: "0.9rem",
                  minWidth: "60px",
                }}
              >
                {currentIndex + 1} of {artworks.length}
              </div>

              {/* Next Button */}
              {currentIndex === artworks.length - 1 ? (
                <Button
                  onClick={() => router.push("/chap-5")}
                  variant="primary"
                  className="transition-all duration-300 hover:-translate-y-0.5"
                  style={{ minWidth: "120px", height: "48px" }}
                >
                  Chapter 5
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              ) : (
                <Button
                  disabled={currentIndex >= artworks.length - 1}
                  onClick={() => goToArtwork(currentIndex + 1)}
                  variant="primary"
                  className="transition-all duration-300 hover:-translate-y-0.5"
                  aria-label="Next artwork"
                  style={{ height: "48px", minWidth: "60px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1024px) {
            .artwork-info-section {
              width: 45% !important;
              margin-left: 1.5rem !important;
              padding: 0.5rem !important;
            }

            .artwork-description,
            .artwork-author {
              font-size: 0.95rem !important;
            }

            .artwork-title {
              font-size: 1rem !important;
            }

            .artwork-medium {
              font-size: 0.85rem !important;
            }
          }

          @media (max-width: 900px) {
            .artwork-content {
              flex-direction: column !important;
              align-items: stretch !important;
            }

            .artwork-image-section {
              width: 100% !important;
              margin-bottom: 2rem !important;
            }

            .artwork-info-section {
              width: 100% !important;
              margin-left: 0 !important;
              padding: 0 1rem !important;
            }

            .artwork-image {
              max-width: 100% !important;
            }

            .artwork-navigation {
              gap: 0.5rem !important;
            }

            .nav-button {
              padding: 0.4rem 0.8rem !important;
              font-size: 0.85rem !important;
            }
          }

          @media (max-width: 600px) {
            .artwork-container {
              padding: 1rem !important;
            }

            .artwork-info-section {
              padding: 0 !important;
            }

            .artwork-description,
            .artwork-author {
              font-size: 0.9rem !important;
              text-align: center !important;
            }

            .artwork-title {
              font-size: 0.95rem !important;
            }

            .artwork-medium {
              font-size: 0.8rem !important;
            }

            .artwork-counter {
              font-size: 0.8rem !important;
              min-width: 50px !important;
            }

            .nav-button {
              padding: 0.3rem 0.6rem !important;
              font-size: 0.8rem !important;
            }
          }

          @media (max-width: 480px) {
            .artwork-container {
              padding: 0.5rem !important;
            }

            .artwork-navigation {
              flex-direction: column !important;
              gap: 0.5rem !important;
            }

            .artwork-counter {
              order: 1 !important;
            }

            .nav-button {
              width: 100% !important;
              max-width: 200px !important;
            }
          }
        `}</style>
      </div>

      {/* Image Modal */}
      <ViewImage
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageSrc={"/artworks/chap-4-photos/" + artwork["art-image"]}
        title={artwork.artTitle}
        author={artwork.author}
        medium={artwork.medium}
      />
    </PageLoadingWrapper>
  );
}

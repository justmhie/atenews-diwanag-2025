"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/app/components/Button";
import ViewImage from "@/app/modals/ViewImage";

type Artwork = {
  artTitle: string;
  author: string;
  "art-image": string;
  artDescription: string;
  chapter: string;
  medium: string;
};

function slugify(title: string, author: string) {
  return (
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    "-by-" +
    author
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") +
    ".png"
  );
}

export default function ArtworkPage() {
  const { artworkId } = useParams();
  const router = useRouter();
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Move functions before useEffect that uses them
  const goToArtwork = async (index: number) => {
    const nextArt = artworks[index];
    if (nextArt) {
      setIsTransitioning(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      router.push(`/chap-3/artwork/${encodeURIComponent(nextArt.artTitle)}`);
      setTimeout(() => setIsTransitioning(false), 100);
    }
  };

  // Button hover handlers
  const handleButtonMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "var(--accent-blue-darkest)";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 6px 20px var(--bg-dark)4D";
  };

  const handleButtonMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "var(--accent-brown-dark)";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 15px var(--bg-dark)33";
  };

  useEffect(() => {
    fetch("/data/artworks.json")
      .then((res) => res.json())
      .then((data: Artwork[]) => {
        const chapterArtworks = data.filter(
          (art) => art.chapter === "Chapter 3"
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
      if (artworks.length === 0 || isTransitioning) return;
      if (isImageModalOpen) return;

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
  }, [
    currentIndex,
    artworks.length,
    isTransitioning,
    isImageModalOpen,
    goToArtwork,
  ]);

  if (currentIndex === -1 || artworks.length === 0) {
    return (
      <div
        className="loading-container"
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

        {/* Animated Shimmer Overlay */}
        <div
          className="shimmer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)",
            backgroundSize: "200% 100%",
            zIndex: 2,
          }}
        />

        {/* Skeleton Content */}
        <div
          className="skeleton-content"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            position: "relative",
            zIndex: 3,
            alignItems: "center",
          }}
        >
          {/* Skeleton Image */}
          <div
            className="skeleton-image"
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              className="pulse"
              style={{
                width: "100%",
                maxWidth: "min(600px, 90vw)",
                aspectRatio: "4/3",
                backgroundColor: "var(--shadow-medium)",
                borderRadius: "8px",
              }}
            />
          </div>

          {/* Skeleton Info */}
          <div
            className="skeleton-info"
            style={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "2rem",
              gap: "1rem",
            }}
          >
            {/* Description skeleton lines */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="pulse"
                style={{
                  width: `${Math.random() * 50 + 50}%`,
                  height: "20px",
                  backgroundColor: "var(--shadow-medium)",
                  borderRadius: "4px",
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}

            {/* Author skeleton */}
            <div
              className="pulse"
              style={{
                width: "60%",
                height: "20px",
                backgroundColor: "var(--shadow-medium)",
                borderRadius: "4px",
                animationDelay: "0.5s",
              }}
            />

            {/* Title and medium skeleton */}
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <div
                className="pulse"
                style={{
                  width: "80%",
                  height: "24px",
                  backgroundColor: "var(--shadow-medium)",
                  borderRadius: "4px",
                  animationDelay: "0.6s",
                }}
              />
              <div
                className="pulse"
                style={{
                  width: "50%",
                  height: "18px",
                  backgroundColor: "var(--shadow-medium)",
                  borderRadius: "4px",
                  animationDelay: "0.7s",
                }}
              />
            </div>

            {/* Skeleton buttons */}
            <div
              className="skeleton-buttons"
              style={{
                marginTop: "1.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div
                className="pulse"
                style={{
                  width: "60px",
                  height: "40px",
                  backgroundColor: "var(--shadow-dark)",
                  borderRadius: "8px",
                  animationDelay: "0.8s",
                }}
              />
              <div
                className="pulse"
                style={{
                  width: "60px",
                  height: "20px",
                  backgroundColor: "var(--shadow-medium)",
                  borderRadius: "4px",
                  animationDelay: "0.9s",
                }}
              />
              <div
                className="pulse"
                style={{
                  width: "60px",
                  height: "40px",
                  backgroundColor: "var(--shadow-dark)",
                  borderRadius: "8px",
                  animationDelay: "1s",
                }}
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 900px) {
            .skeleton-content {
              flex-direction: column !important;
              align-items: stretch !important;
            }

            .skeleton-image {
              width: 100% !important;
              margin-bottom: 2rem !important;
            }

            .skeleton-info {
              width: 100% !important;
              margin-left: 0 !important;
              padding: 0 1rem !important;
            }
          }

          @media (max-width: 600px) {
            .loading-container {
              padding: 1rem !important;
            }

            .skeleton-info {
              padding: 0 !important;
            }

            .skeleton-buttons {
              gap: 0.5rem !important;
              margin-top: 1rem !important;
            }
          }
        `}</style>
      </div>
    );
  }

  const artwork = artworks[currentIndex];

  return (
    <>
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
            opacity: isTransitioning ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
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
              src={"/artworks/chap-3-photos/" + artwork["art-image"]}
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
                  onClick={async () => {
                    const res = await fetch("/data/artworks.json");
                    const data: Artwork[] = await res.json();
                    const chapter3Arts = data.filter(
                      (art) => art.chapter === "Chapter 3"
                    );
                    const lastChapter1Art =
                      chapter3Arts[chapter3Arts.length - 1];
                    if (lastChapter1Art) {
                      router.push(
                        `/chap-3
                        `
                      );
                    } else {
                      router.push("/chap-3");
                    }
                  }}
                  className="nav-button"
                  style={{
                    backgroundColor: "var(--accent-brown-dark)",
                    color: "var(--text-light)",
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                    minWidth: "auto",
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  ← Chapter 3 Overview
                </Button>
              ) : (
                <Button
                  disabled={currentIndex <= 0}
                  onClick={() => goToArtwork(currentIndex - 1)}
                  className="nav-button"
                  style={{
                    backgroundColor: "var(--accent-brown-dark)",
                    color: "var(--text-light)",
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                    minWidth: "auto",
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  ←
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
                  onClick={async () => {
                    const res = await fetch("/data/artworks.json");
                    const data: Artwork[] = await res.json();
                    const chapter3Art = data.find(
                      (art) => art.chapter === "Chapter 4"
                    );
                    if (chapter3Art) {
                      router.push("/chap-4");
                    }
                  }}
                  className="nav-button"
                  style={{
                    backgroundColor: "var(--accent-brown-dark)",
                    color: "var(--text-light)",
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                    minWidth: "auto",
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  Chapter 4 →
                </Button>
              ) : (
                <Button
                  disabled={currentIndex >= artworks.length - 1}
                  onClick={() => goToArtwork(currentIndex + 1)}
                  className="nav-button"
                  style={{
                    backgroundColor: "var(--accent-brown-dark)",
                    color: "var(--text-light)",
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                    minWidth: "auto",
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  →
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
        imageSrc={"/artworks/chap-3-photos/" + artwork["art-image"]}
        title={artwork.artTitle}
        author={artwork.author}
        medium={artwork.medium}
      />
    </>
  );
}

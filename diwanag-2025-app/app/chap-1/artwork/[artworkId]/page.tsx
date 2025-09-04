"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/app/components/Button";

type Artwork = {
  artTitle: string;
  author: string;
  artImage: string;
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

  useEffect(() => {
    fetch("/data/artworks.json")
      .then((res) => res.json())
      .then((data: Artwork[]) => {
        const chapterArtworks = data.filter(
          (art) => art.chapter === "Chapter 1"
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
  }, [currentIndex, artworks.length, isTransitioning]);

  if (currentIndex === -1 || artworks.length === 0) return <p>Loading...</p>;

  const artwork = artworks[currentIndex];

  const goToArtwork = async (index: number) => {
    const nextArt = artworks[index];
    if (nextArt) {
      setIsTransitioning(true);
      await new Promise((resolve) => setTimeout(resolve, 300));
      router.push(`/chap-1/artwork/${encodeURIComponent(nextArt.artTitle)}`);
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

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        fontFamily: "averia-serif",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          opacity: isTransitioning ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={
              "/artworks/chap-1-photos/" +
              slugify(artwork.artTitle, artwork.author)
            }
            alt={artwork.artTitle}
            style={{
              width: "100%",
              maxWidth: "min(700px)",
              height: "auto",
              aspectRatio: "4/3",
              objectFit: "contain",
              display: "block",
              padding: "2rem",
            }}
          />
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "var(--text-accent)",
              lineHeight: "1.6",
            }}
          >
            {artwork.artDescription}
          </p>
          <p
            style={{
              color: "var(--text-accent)",
              marginTop: "1rem",
              fontStyle: "italic",
            }}
          >
            -{artwork.author}
          </p>
          <div
            style={{
              fontFamily: "averia-serif",
              marginTop: "5rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "var(--text-accent)",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              "{artwork.artTitle}"
            </p>
            <p
              style={{
                color: "var(--text-accent)",
                opacity: 0.8,
              }}
            >
              {artwork.medium}
            </p>
          </div>

          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* Previous button or Chapter 1 link */}
            {currentIndex === 0 ? (
              <Button
                onClick={() => router.push("/chap-1")}
                style={{
                  backgroundColor: "var(--accent-brown-dark)",
                  color: "var(--text-light)",
                }}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              >
                ← Chapter 1
              </Button>
            ) : (
              <Button
                disabled={currentIndex <= 0}
                onClick={() => goToArtwork(currentIndex - 1)}
                style={{
                  backgroundColor: "var(--accent-brown-dark)",
                  color: "var(--text-light)",
                }}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              >
                ← Previous
              </Button>
            )}

            <div
              style={{
                color: "var(--text-accent)",
                fontFamily: "averia-serif",
                opacity: 0.7,
                minWidth: "80px",
                textAlign: "center",
              }}
            >
              {currentIndex + 1} of {artworks.length}
            </div>

            {/* Next button or Chapter 2 link */}
            {currentIndex === artworks.length - 1 ? (
              <Button
                onClick={() => router.push("/chap-2")}
                style={{
                  backgroundColor: "var(--accent-brown-dark)",
                  color: "var(--text-light)",
                }}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              >
                Chapter 2 →
              </Button>
            ) : (
              <Button
                disabled={currentIndex >= artworks.length - 1}
                onClick={() => goToArtwork(currentIndex + 1)}
                style={{
                  backgroundColor: "var(--accent-brown-dark)",
                  color: "var(--text-light)",
                }}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
              >
                Next →
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

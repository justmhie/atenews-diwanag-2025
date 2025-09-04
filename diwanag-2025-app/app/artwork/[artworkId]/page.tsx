"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Artwork = {
  artTitle: string;
  author: string;
  artImage: string;
  artDescription: string;
  chapter: string;
};

export default function ArtworkPage() {
  const { artworkId } = useParams();
  const router = useRouter();
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  useEffect(() => {
    fetch("/data/artworks.json")
      .then((res) => res.json())
      .then((data: Artwork[]) => {
        setArtworks(data);
        const idx = data.findIndex(
          (art) => encodeURIComponent(art.artTitle) === artworkId
        );
        setCurrentIndex(idx);
      });
  }, [artworkId]);

  if (currentIndex === -1 || artworks.length === 0) return <p>Loading...</p>;

  const artwork = artworks[currentIndex];

  const goToArtwork = (index: number) => {
    const nextArt = artworks[index];
    if (nextArt) {
      router.push(`/artwork/${encodeURIComponent(nextArt.artTitle)}`);
    }
  };

  return (
    <div>
      <h2>{artwork.artTitle}</h2>
      <p>
        <strong>Author:</strong> {artwork.author}
      </p>
      <p>{artwork.artDescription}</p>
      <img
        src={"/artworks/chap-1-photos/" + artwork.artImage}
        alt={artwork.artTitle}
        style={{ maxWidth: "400px", width: "100%", height: "auto" }}
      />
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
        <button
          disabled={currentIndex <= 0}
          onClick={() => goToArtwork(currentIndex - 1)}
        >
          Previous
        </button>
        <button
          disabled={currentIndex >= artworks.length - 1}
          onClick={() => goToArtwork(currentIndex + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

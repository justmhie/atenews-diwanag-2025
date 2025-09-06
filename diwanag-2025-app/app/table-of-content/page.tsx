"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Artwork = {
  artTitle: string;
  author: string;
  artImage: string;
  artDescription: string;
  chapter: string;
};

type ChapterArtworks = Record<string, Artwork[]>;

export default function TableOfContents() {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<
    Record<number, boolean>
  >({});
  const [chapters, setChapters] = useState<ChapterArtworks>({});
  const router = useRouter();

  useEffect(() => {
    fetch("/data/artworks.json")
      .then((res) => res.json())
      .then((data: Artwork[]) => {
        // Group artworks by chapter
        const grouped: ChapterArtworks = {};
        data.forEach((art) => {
          if (!grouped[art.chapter]) grouped[art.chapter] = [];
          grouped[art.chapter].push(art);
        });
        setChapters(grouped);
      });
  }, []);

  // Unified TOC items for navigation and artwork display
  const tocItems = [
    {
      title: "Prologue",
      path: "/prologue",
      description: "",
      isClickable: true,
    },
    {
      title: "Chapter 1",
      path: "/chap-1",
      description: "",
      isClickable: false,
      subtitle: {
        text: "See Chapter 1 Overview",
        path: "/chap-1",
      },
      artworks:
        chapters["Chapter 1"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-1/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 2",
      path: "/chap-2",
      description: "",
      isClickable: false,
      artworks:
        chapters["Chapter 2"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-2/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 3",
      path: "/chap-3",
      description: "",
      isClickable: false,
      artworks:
        chapters["Chapter 3"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-3/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 4",
      path: "/chap-4",
      description: "",
      isClickable: false,
      artworks:
        chapters["Chapter 4"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-4/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 5",
      path: "/chap-5",
      description: "",
      isClickable: false,
      artworks:
        chapters["Chapter 5"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-5/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Chapter 6",
      path: "/chap-6",
      description: "",
      isClickable: false,
      artworks:
        chapters["Chapter 6"]?.map((art) => ({
          title: art.artTitle,
          path: `/chap-6/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
    {
      title: "Epilogue",
      path: "/epilogue",
      description: "",
      isClickable: true,
      artworks:
        chapters["Epilogue"]?.map((art) => ({
          title: art.artTitle,
          path: `/epilogue/artwork/${encodeURIComponent(art.artTitle)}`,
        })) || [],
    },
  ];

  const toggleToc = () => setIsTocOpen(!isTocOpen);

  const handleChapterClick = (item: any, index: number) => {
    if (item.isClickable) {
      router.push(item.path);
      setIsTocOpen(false);
    } else {
      setExpandedChapters((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
  };

  const navigateTo = (path: string) => {
    router.push(path);
    setIsTocOpen(false);
  };

  return (
    <>
      {/* TOGGLE BUTTON */}
      <button
        onClick={toggleToc}
        className="fixed top-8 left-8 z-[1000] flex h-12 w-12 items-center justify-center rounded-full bg-[var(--text-accent)] text-[var(--bg-light)] text-xl"
      >
        {isTocOpen ? (
          <svg width="24" height="24" fill="none">
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="18"
              y1="6"
              x2="6"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg width="24" height="24" fill="none">
            <rect
              x="4"
              y="6"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="4"
              y="11"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
            <rect
              x="4"
              y="16"
              width="16"
              height="2"
              rx="1"
              fill="currentColor"
            />
          </svg>
        )}
      </button>

      {/* Overlay */}
      {isTocOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/50"
          onClick={toggleToc}
        />
      )}

      {/* Side Panel */}
      <aside
        className={`fixed top-0 left-0 z-[999] h-screen w-[350px] bg-[var(--bg-light)] p-8 transition-transform duration-300 ${
          isTocOpen ? "translate-x-0" : "-translate-x-[350px]"
        }`}
      >
        {/* Header */}
        <header className="mt-16 mb-8 border-b border-[var(--text-accent)] pb-4">
          <h2
            className="m-0 font-['averia-serif'] text-[1.8rem] font-semibold"
            style={{ color: "var(--text-accent)" }}
          >
            Table of Contents
          </h2>
          <p className="mt-2 font-['averia-serif'] text-sm text-[var(--text-accent)] opacity-70">
            Navigate through memories
          </p>
        </header>

        {/* TOC Items */}
        <nav className="flex flex-col gap-1 font-['averia-serif'] overflow-y-auto h-[calc(100%-8rem)]">
          {tocItems.map((item, index) => (
            <div key={item.title}>
              {/* Chapter Header */}
              <div
                onClick={() => handleChapterClick(item, index)}
                className="cursor-pointer rounded-md p-3 text-[var(--text-accent)] hover:bg-black/5 transition mb-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3
                    className="m-0 text-lg font-semibold"
                    style={{ color: "var(--text-accent)" }}
                  >
                    {item.title}
                  </h3>
                  {/* Only show arrow for non-clickable items (chapters with artworks) */}
                  {!item.isClickable && (
                    <span
                      className={`transform transition-transform ${
                        expandedChapters[index] ? "rotate-90" : ""
                      }`}
                    >
                      <svg width="18" height="18" fill="none">
                        <path
                          d="M7 5l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>
                <p className="ml-8 text-sm opacity-70">{item.description}</p>
              </div>

              {/* Artworks */}
              {expandedChapters[index] && item.artworks && (
                <div className="ml-4 mb-2 rounded-r-md border-l-2 border-[var(--text-accent)] pl-4">
                  {item.artworks.map((artwork: any, artIndex: number) => (
                    <div
                      key={artwork.path}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateTo(artwork.path);
                      }}
                      className="flex items-center gap-2 cursor-pointer rounded-md px-4 py-2 text-[var(--text-accent)] text-sm hover:bg-black/5 transition"
                    >
                      <span className="w-4 text-xs opacity-60">
                        {artIndex + 1}.
                      </span>
                      <span>{artwork.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}

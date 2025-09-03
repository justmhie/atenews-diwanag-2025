"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TableOfContents() {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<
    Record<number, boolean>
  >({});
  const router = useRouter();

  const toggleToc = () => setIsTocOpen(!isTocOpen);

  const tocItems = [
    {
      title: "Prologue",
      path: "/prologue",
      description: "",
    },
    {
      title: "Chapter 1",
      path: "/chap-1",
      description: "",
      subtitle: {
        text: "See Chapter 1 Overview",
        path: "/chap-1",
      },
      artworks: [
        { title: "Overview", path: "/chap-1/overview" },
        { title: "Tailored for Yesterday", path: "/chap-1/artwork-1" },
        {
          title: "You don't have to worry anymore, Ate is here",
          path: "/chap-1/artwork-2",
        },
        { title: "I Was Here", path: "/chap-1/artwork-3" },
        { title: "Pictures on the Wall", path: "/chap-1/artwork-4" },
        { title: "Underneath The Cloudless Sky", path: "/chap-1/artwork-5" },
      ],
    },
    {
      title: "Chapter 2",
      path: "/chap-2",
      description: "",
      artworks: [
        { title: "Overview", path: "/chap-2/overview" },
        { title: "Reminiscence", path: "/chap-2/artwork-1" },
        { title: "Phantom Pain", path: "/chap-2/artwork-2" },
        {
          title: "Something Stored in Warm Plush Toys",
          path: "/chap-2/artwork-3",
        },
        { title: "Kami Sauna", path: "/chap-2/artwork-5" },
        { title: "Entablado", path: "/chap-2/artwork-6" },
      ],
    },
    {
      title: "Chapter 3",
      path: "/chap-3",
      description: "",
      artworks: [
        { title: "Overview", path: "/chap-3/overview" },

        { title: "Indoor Garden", path: "/chap-3/artwork-1" },
        { title: "Come Along With Me", path: "/chap-3/artwork-2" },
        { title: "A Store that Sells Stories", path: "/chap-3/artwork-3" },
        { title: "Where Broken Heart Rests", path: "/chap-3/artwork-4" },
        { title: "Munimuni", path: "/chap-3/artwork-5" },
        { title: "Post Apocalypse", path: "/chap-3/artwork-6" },
      ],
    },
    {
      title: "Chapter 4",
      path: "/chap-4",
      description: "",
      artworks: [
        { title: "Overview", path: "/chap-4/overview" },

        {
          title: "Everything Everywhere All at Once",
          path: "/chap-4/artwork-1",
        },
        { title: "Anatomy Study", path: "/chap-4/artwork-2" },
        { title: "Dawn’s Quiet Kiss", path: "/chap-4/artwork-3" },
        { title: "Heroine", path: "/chap-4/artwork-4" },
        { title: "Wings of Yesterday", path: "/chap-4/artwork-5" },
        { title: "Lakbay", path: "/chap-4/artwork-6" },
      ],
    },
    {
      title: "Chapter 5",
      path: "/chap-5",
      description: "",
      artworks: [
        { title: "Overview", path: "/chap-5/overview" },

        { title: "Old Habits Die Screaming", path: "/chap-5/artwork-1" },
        { title: "Irrepressible", path: "/chap-5/artwork-2" },
        { title: "Boredom", path: "/chap-5/artwork-3" },
        { title: "Conversations with a Stranger", path: "/chap-5/artwork-4" },
        { title: "Wholeness in Whiskered Whimsy", path: "/chap-5/artwork-5" },
      ],
    },
    {
      title: "Chapter 6",
      path: "/chap-6",
      description: "",
      artworks: [
        { title: "Overview", path: "/chap-6/overview" },

        { title: "Walking Among Us", path: "/chap-6/artwork-1" },
        {
          title: "Under the Tree, in the 5th Grade",
          path: "/chap-6/artwork-2",
        },
        { title: "Human Behavior", path: "/chap-6/artwork-3" },
        { title: "Hugis ng Gunita’t Pangarap", path: "/chap-6/artwork-4" },
        { title: "Sigalot ng Kaluluwa", path: "/chap-6/artwork-5" },
      ],
    },
    {
      title: "Epilogue",
      path: "/epilogue",
      description: "",
      artworks: [
        { title: "Full Circle", path: "/epilogue/artwork-1" },
        { title: "New Memories", path: "/epilogue/artwork-2" },
      ],
    },
  ];

  const toggleChapter = (index: number) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navigateTo = (path: string) => {
    router.push(path);
    setIsTocOpen(false); // Close TOC after navigation
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
            className="m-0 font-['averia-serif'] text-[1.8rem] font-semibold ]"
            style={{ color: "var(--text-accent" }}
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
            <div key={item.path}>
              {/* Chapter Header */}
              <div
                onClick={() => toggleChapter(index)}
                className="cursor-pointer rounded-md p-3 text-[var(--text-accent)] hover:bg-black/5 transition mb-2"
              >
                <div className="flex items-center justify-between mb-1 ">
                  <h3
                    className="m-0 text-lg font-semibold "
                    style={{ color: "var(--text-accent)" }}
                  >
                    {item.title}
                  </h3>
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
                </div>
                <p className="ml-8 text-sm opacity-70">{item.description}</p>
              </div>

              {/* Artworks */}
              {expandedChapters[index] && item.artworks && (
                <div className="ml-4 mb-2 rounded-r-md border-l-2 border-[var(--text-accent)] pl-4">
                  {item.artworks.map((artwork, artIndex) => (
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

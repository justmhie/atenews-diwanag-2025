"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function TableOfContents() {
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<
    Record<number, boolean>
  >({});
  const router = useRouter();

  const toggleToc = () => {
    setIsTocOpen(!isTocOpen);
  };

  const tocItems = [
    {
      title: "Prologue",
      path: "/prologue",
      description: "The beginning of our journey",
      artworks: [
        { title: "Dawn's First Light", path: "/prologue/artwork-1" },
        { title: "Memory's Gate", path: "/prologue/artwork-2" },
        { title: "Whispered Beginnings", path: "/prologue/artwork-3" },
      ],
    },
    {
      title: "Chapter 1",
      path: "/chap-1",
      description: "First memories unfold",
      artworks: [
        { title: "Childhood Dreams", path: "/chap-1/artwork-1" },
        { title: "Paper Boats", path: "/chap-1/artwork-2" },
        { title: "Summer Rain", path: "/chap-1/artwork-3" },
        { title: "Mother's Lullaby", path: "/chap-1/artwork-4" },
      ],
    },
    {
      title: "Chapter 2",
      path: "/chap-2",
      description: "Deeper into the past",
      artworks: [
        { title: "School Days", path: "/chap-2/artwork-1" },
        { title: "First Love Letters", path: "/chap-2/artwork-2" },
        { title: "Broken Promises", path: "/chap-2/artwork-3" },
      ],
    },
    {
      title: "Chapter 3",
      path: "/chap-3",
      description: "Revelations emerge",
      artworks: [
        { title: "Hidden Truths", path: "/chap-3/artwork-1" },
        { title: "Family Secrets", path: "/chap-3/artwork-2" },
        { title: "The Photograph", path: "/chap-3/artwork-3" },
        { title: "Grandmother's Stories", path: "/chap-3/artwork-4" },
        { title: "Lost Connections", path: "/chap-3/artwork-5" },
      ],
    },
    {
      title: "Chapter 4",
      path: "/chap-4",
      description: "Paths diverge",
      artworks: [
        { title: "City Lights", path: "/chap-4/artwork-1" },
        { title: "New Beginnings", path: "/chap-4/artwork-2" },
        { title: "Distance and Time", path: "/chap-4/artwork-3" },
      ],
    },
    {
      title: "Chapter 5",
      path: "/chap-5",
      description: "Coming home",
      artworks: [
        { title: "Return Journey", path: "/chap-5/artwork-1" },
        { title: "Familiar Faces", path: "/chap-5/artwork-2" },
        { title: "Changed Landscapes", path: "/chap-5/artwork-3" },
        { title: "Reconciliation", path: "/chap-5/artwork-4" },
      ],
    },
    {
      title: "Epilogue",
      path: "/epilogue",
      description: "Where stories converge",
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
        style={{
          position: "fixed",
          top: "2rem",
          left: "2rem",
          zIndex: 1000,
          background: "var(--text-accent)",
          color: "var(--bg-light)",
          border: "none",
          borderRadius: "50%",
          width: "3rem",
          height: "3rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLButtonElement;
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLButtonElement;
        }}
      >
        {isTocOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 998,
          }}
          onClick={toggleToc}
        />
      )}

      {/* Side Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isTocOpen ? 0 : "-350px",
          width: "350px",
          height: "100vh",
          background: "var(--bg-light)",
          zIndex: 999,
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        {/* TOC Header */}
        <div
          style={{
            borderBottom: "1px solid var(--text-accent)",
            paddingBottom: "1rem",
            marginBottom: "2rem",
            marginTop: "4rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              color: "var(--text-accent)", // The title color is set by this line
              margin: 0,
              fontFamily: "averia-serif",
              fontWeight: "600",
            }}
          >
            Table of Contents
          </h2>
          <p
            style={{
              fontFamily: "averia-serif",
              fontSize: "0.9rem",
              color: "var(--text-accent)",
              opacity: 0.7,
              margin: "0.5rem 0 0 0",
            }}
          >
            Navigate through memories
          </p>
        </div>

        {/* TOC Items */}
        <nav
          style={{
            fontFamily: "averia-serif",

            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            flex: 1,
            overflowY: "auto",
          }}
        >
          {tocItems.map((item, index) => (
            <div key={item.path} style={{ width: "100%" }}>
              {/* Chapter Header */}
              <div
                onClick={() => toggleChapter(index)}
                style={{
                  padding: "1rem",
                  cursor: "pointer",
                  borderRadius: "8px",
                  background: "transparent",
                  border: "1px solid transparent",
                  color: "var(--text-accent)",
                  position: "relative",
                  transition: "background 0.2s, border 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(0,0,0,0.04)";
                  // (e.currentTarget as HTMLDivElement).style.border =
                  //   "1px solid var(--text-accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "transparent";
                  // (e.currentTarget as HTMLDivElement).style.border =
                  //   "1px solid transparent";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        margin: 0,
                        fontWeight: "600",
                        color: "var(--text-accent)",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  {/* Toggle Icon */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      transition: "transform 0.2s",
                      transform: expandedChapters[index]
                        ? "rotate(90deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    {/* Chevron Right SVG */}
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
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
                <p
                  style={{
                    fontSize: "0.85rem",
                    margin: 0,
                    opacity: 0.7,
                    paddingLeft: "2rem",
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Artworks List */}
              {expandedChapters[index] && (
                <div
                  style={{
                    marginLeft: "1rem",
                    marginBottom: "0.5rem",
                    borderLeft: "2px solid var(--text-accent)",
                    paddingLeft: "1rem",
                    background: "rgba(0, 0, 0, 0.02)",
                    borderRadius: "0 8px 8px 0",
                  }}
                >
                  {item.artworks.map((artwork, artIndex) => (
                    <div
                      key={artwork.path}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateTo(artwork.path);
                      }}
                      style={{
                        padding: "0.75rem 1rem",
                        cursor: "pointer",
                        borderRadius: "6px",
                        transition: "all 0.2s ease",
                        color: "var(--text-accent)",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background =
                          "rgba(0,0,0,0.07)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background =
                          "transparent";
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.7rem",
                          opacity: 0.6,
                          minWidth: "1rem",
                        }}
                      >
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
      </div>
    </>
  );
}

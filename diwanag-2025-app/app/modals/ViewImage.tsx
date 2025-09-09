"use client";
import { useEffect } from "react";

type ViewImageProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  author: string;
  medium: string;
};

export default function ViewImage({
  isOpen,
  onClose,
  imageSrc,
  title,
  author,
  medium,
}: ViewImageProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fade-in"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        cursor: "pointer",
      }}
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        style={{
          position: "absolute",
          top: "2rem",
          right: "2rem",
          background: "var(--accent-brown)",
          color: "white",
          fontSize: "2rem",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          backdropFilter: "blur(10px)",
          zIndex: 10000,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
          e.currentTarget.style.transform = "scale(1)";
        }}
        aria-label="Close image modal"
      >
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
      </button>

      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        onClick={(e) => e.stopPropagation()}
        className="scale-in"
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          objectFit: "contain",
          borderRadius: "8px",
          boxShadow: "0 20px 60px var(--shadow-dark)",
        }}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="bottom: 2rem"] {
            bottom: 1rem !important;
            padding: 0.75rem 1.5rem !important;
            max-width: 90vw !important;
          }

          button[style*="top: 2rem"] {
            top: 1rem !important;
            right: 1rem !important;
            width: 40px !important;
            height: 40px !important;
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

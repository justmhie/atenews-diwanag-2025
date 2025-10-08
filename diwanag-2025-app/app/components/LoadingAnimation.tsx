"use client";
import { useState, useEffect } from "react";

interface LoadingAnimationProps {
  isLoading?: boolean;
  onComplete?: () => void;
}

export default function LoadingAnimation({
  isLoading = true,
  onComplete,
}: LoadingAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setShouldRender(false);
        onComplete?.();
      }, 1000); // Match the transition duration
      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "var(--bg-light)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Loading Text */}
      <div
        className="content-wrapper"
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "var(--text-accent)",
            fontFamily: "Vestardia Regular",
            marginBottom: "0.5rem",
            fontWeight: "300",
            letterSpacing: "0.05em",
          }}
        >
          Tinipong Alaala
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            color: "var(--text-accent)",
            fontFamily: "Averia Serif Libre",
            opacity: 0.7,
            fontStyle: "italic",
          }}
        >
          Loading memories...
        </p>
      </div>

      {/* Animated Doors with Mountain Base */}
      <div
        className="doors-wrapper"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          gap: "2.5rem",
        }}
      >
        {/* Ground/Hill */}
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            height: "30px",
            background:
              "linear-gradient(to bottom, transparent, var(--text-accent))",
            opacity: 0.2,
            borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
            zIndex: 0,
          }}
        />

        {/* Door 1 - Prologue */}
        <div
          className="loading-door door-1"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <svg
            width="50"
            height="70"
            viewBox="0 0 50 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(74, 52, 38, 0.2))",
            }}
          >
            <path
              d="M 5 70 L 5 15 Q 5 5, 15 5 L 35 5 Q 45 5, 45 15 L 45 70 Z"
              fill="var(--text-accent)"
              opacity="0.6"
              className="door-fill"
            />
            <circle
              cx="35"
              cy="40"
              r="2"
              fill="var(--bg-light)"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Door 2 - Artworks (Center) */}
        <div
          className="loading-door door-2"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <svg
            width="55"
            height="80"
            viewBox="0 0 55 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 6px 12px rgba(74, 52, 38, 0.3))",
            }}
          >
            <path
              d="M 5 80 L 5 18 Q 5 5, 18 5 L 37 5 Q 50 5, 50 18 L 50 80 Z"
              fill="var(--text-accent)"
              opacity="0.8"
              className="door-fill"
            />
            <circle
              cx="40"
              cy="45"
              r="2.5"
              fill="var(--bg-light)"
              opacity="0.8"
            />
          </svg>
        </div>

        {/* Door 3 - Epilogue */}
        <div
          className="loading-door door-3"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <svg
            width="50"
            height="70"
            viewBox="0 0 50 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(74, 52, 38, 0.2))",
            }}
          >
            <path
              d="M 5 70 L 5 15 Q 5 5, 15 5 L 35 5 Q 45 5, 45 15 L 45 70 Z"
              fill="var(--text-accent)"
              opacity="0.6"
              className="door-fill"
            />
            <circle
              cx="15"
              cy="40"
              r="2"
              fill="var(--bg-light)"
              opacity="0.8"
            />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .loading-door {
          animation: float 2s ease-in-out infinite;
        }

        .door-1 {
          animation-delay: 0s;
        }

        .door-2 {
          animation-delay: 0.3s;
        }

        .door-3 {
          animation-delay: 0.6s;
        }

        .door-fill {
          animation: pulse 2s ease-in-out infinite;
        }

        .door-1 .door-fill {
          animation-delay: 0s;
        }

        .door-2 .door-fill {
          animation-delay: 0.3s;
        }

        .door-3 .door-fill {
          animation-delay: 0.6s;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2rem !important;
          }

          p {
            font-size: 0.8rem !important;
          }

          .loading-door svg {
            width: 35px !important;
            height: 50px !important;
          }

          .door-2 svg {
            width: 40px !important;
            height: 60px !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.6rem !important;
          }

          p {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}

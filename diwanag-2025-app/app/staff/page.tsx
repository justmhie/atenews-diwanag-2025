"use client";
import React from "react";
import PageLoadingWrapper from "../components/PageLoadingWrapper";

export default function AtenewsStaffPage() {
  return (
    <PageLoadingWrapper>
      <main
        style={{
          minHeight: "100vh",
          background: "#0B141D",
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
            backgroundImage: "url('/diwanag border 9.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            padding: "4rem 3rem 3rem 5rem",
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <header style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h1
              style={{
                fontSize: "4rem",
                color: "#D4AF37",
                fontWeight: "300",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                marginBottom: "1rem",
                letterSpacing: "2px",
              }}
            >
              Diwanag 2025
            </h1>
            <p
              style={{
                color: "#D4AF37",
                opacity: 0.8,
                fontFamily: "averia-serif",
                fontSize: "18px",
              }}
            >
              List of Contributors
            </p>
          </header>

          {/* Staff Content - Single Column Layout */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {/* Creative Direction, Illustrative Designs, Overall Layout */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    color: "#F8FFD8",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontFamily: "averia-serif",
                  }}
                >
                  Creative Direction, Illustrative Designs, Overall Layout
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Mariz Alyah Cenojas
                  </p>
                </div>
              </div>
            </div>
            {/* Artists */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    color: "#F8FFD8",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontFamily: "averia-serif",
                  }}
                >
                  Artists
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Adrian Dave Realuyo
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Annaliese Margarette Abrina
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Ayra
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Cornikopia
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Dominic Basalo II
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Earl Geibriel Dicipulo
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Elise
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Elliot Dimasuhid
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    E.O. Lyth
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Hany
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Jerelyn Hilay
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Leila Angelie Magdadaro
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Mokie
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Pichibii
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Pol
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Stargaeze
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Star Noveno
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Sayu
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    The Third Man
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Tiffany Cantona
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Tio
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    YuShan
                  </p>
                </div>
              </div>
            </div>

            {/* Web Designers and Developers */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    color: "#F8FFD8",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontFamily: "averia-serif",
                  }}
                >
                  Web Designers and Developers
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Alyssa Mhie Matila
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Nica Zoe Dable
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer spacing */}
          <div style={{ marginTop: "3rem" }} />
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            main > div:last-child {
              padding: 2rem 1.5rem !important;
            }

            main > div:last-child > header h1 {
              font-size: 2.5rem !important;
            }

            main > div:last-child > div:nth-child(2) {
              gap: 2rem !important;
            }
          }
        `}</style>
      </main>
    </PageLoadingWrapper>
  );
}

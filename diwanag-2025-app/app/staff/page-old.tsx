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
              Atenews Staff
            </h1>
            <p
              style={{
                color: "#D4AF37",
                opacity: 0.8,
                fontFamily: "averia-serif",
                fontSize: "18px",
              }}
            >
              1st Semester, AY 2024-2025
            </p>
          </header>

          {/* Staff Content - Two Column Layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* COLUMN 1 - Artists */}
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

            {/* COLUMN 2 - Web Designers and Developers */}
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

            {/* COLUMN 2 - Web Designers and Developers */}
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    Mauriz Pagangpang
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
                    Cheijtisha Nheka Gargaran
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
                    Rena Christine Bustamante
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
                    Jerachris Rosal
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
                    Wenayl Geronimo
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
                    Daniel Gallego
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
                    Toni Ann Albarico
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
                    Kent Empedrad
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
                    Heart Haezel Gacayan
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
                    Dr. Cheryl Baldric
                  </p>
                </div>
              </div>

              {/* Second row - More names */}
              <div>
                <h2
                  style={{
                    fontSize: "1.4rem",
                    color: "#C9A54F",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontFamily: "averia-serif",
                  }}
                >
                  ──────────────
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
                    Mariz Aylah Cenojas
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
                    Ryan Balleza
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
                    Kent Sanchez
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
                    Rean Marco Regno
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
                    Lance Allen Tosloc
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
                    Kirsten George Jara
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
                    Shika Rani Eramis
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 2 - Roles */}
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
                    color: "#05101C",
                    marginBottom: "1rem",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontFamily: "averia-serif",
                  }}
                >
                  .
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
                      fontStyle: "italic",
                    }}
                  >
                    Editor-in-Chief
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Associate Editor & Art Editor for Cartoon
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Managing Editor for Secretariat
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Managing Editor for Finance
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    News Editor & Literary Editor
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Art Editor for Photo
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Art Editor for Graphic Design
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Art Editor for Layout & Web
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Productions Editor
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Social Media Editor
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Honorary Editor & Features Editor
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Moderator
                  </p>
                </div>
              </div>

              {/* Second row - More roles */}
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.4rem",
                      color: "#C9A54F",
                      marginBottom: "1rem",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      fontFamily: "averia-serif",
                    }}
                  >
                    ──────────────
                  </h2>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Creative Direction, Overall Layout
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Senior Photojournalist
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Senior Video Editor
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Senior Social Media Staff
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Junior Layout Artist
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Junior News Writer
                  </p>
                  <p
                    style={{
                      color: "#F8FFD8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                      fontStyle: "italic",
                    }}
                  >
                    Junior Web Designer & Developer
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 3 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Senior Feature Writers */}
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
                  Senior Feature Writers
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
                    Giancarlo Rafael Tablós
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
                    Leanna Kim Apalico
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
                    Stephen Camahalan
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
                    Jersey Francisco
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
                    Diwania Ma. Rosemina Gales
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
                    Shema Kailah Sacman
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
                    Rhyan Amanda Usman
                  </p>
                </div>
              </div>

              {/* Senior Field Correspondent */}
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
                  Senior Field Correspondent
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
                    Jana Buagas
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
                    Lennard Antoinette Delima
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
                    Mari Andreiane Dormitorio
                  </p>
                </div>
              </div>

              {/* Junior Photojournalists */}
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
                  Junior Photojournalists
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
                    Christina Cabiosa
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
                    Seth Gatinao
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
                    Edrian Nabos
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 4 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Senior News Writers */}
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
                  Senior News Writers
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
                    Julianne Kaye Cortez
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
                    Criztia Joy Libao
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
                    Lancelotte Loriel Piquero
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
                    Mariah Veronica Rubia
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
                    Joshua Angelo Ybañez
                  </p>
                  <p
                    style={{
                      color: "#05101C",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    .
                  </p>
                  <p
                    style={{
                      color: "#05101C",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      fontFamily: "averia-serif",
                      margin: 0,
                    }}
                  >
                    .
                  </p>
                </div>
              </div>

              {/* Senior Layout Artists */}
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
                  Senior Layout Artists
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
                    John Shenon Uy
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
                    Mariz Aylah Cenojas
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
                    Earl Gelbriel Dicipulo
                  </p>
                </div>
              </div>

              {/* Junior Social Media Staff */}
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
                  Junior Social Media Staff
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
                    Celestil Bernas
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
                    Daniel Esguerra
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
                    Alyssa Nicole Hiyos
                  </p>
                </div>
              </div>

              {/* Junior Cartoonists */}
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
                  Junior Cartoonists
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
                    Shanice Angel Yu
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
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }
        `}</style>
      </main>
    </PageLoadingWrapper>
  );
}

"use client";
import { useRouter } from "next/navigation";

export default function EpiloguePage() {
  const router = useRouter();

  return (
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
          backgroundImage: "url('/diwanag epilogue 2.png')",
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
          padding: "4rem 3rem 3rem 2rem",
          boxSizing: "border-box",
        }}
      >
        {/* Content Layout */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
           
          }}
        >
          {/* Left side - spacing for visual balance */}
          <div style={{ flex: 1 }} />

          {/* Right side - Text Content */}
          <div
            style={{
              flex: 2,
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
             {/* Epilogue Title */}
        <div>
          <h1
            style={{
              fontSize: "5rem",
              color: "#D4AF37",
              fontWeight: "300",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Epilogue
          </h1>
        </div>
            <div style={{ marginBottom: "2rem" }}>
         {/* First paragraph with drop cap L */}
              <p
                style={{
                  color: "#E8E8E8",
                  fontSize: "17px",
                  lineHeight: "1.8",
                  fontFamily: "averia-serif",
                  margin: 0,
                  marginRight: "0.5rem",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                }}
              >
                <span
                  style={{
                    float: "left",
                    fontSize: "4rem",
                    lineHeight: "3rem",
                    paddingRight: "0.5rem",
                    paddingTop: "0.2rem",
                    color: "#D4AF37",
                    fontWeight: "bold",
                  }}
                >
                  L
                </span>
                ast year, we were treated to the whimsical tale of a curious
                rabbit that traversed passages of time and explored holes of the
                unknown. We fell onto our own cavern like the rabbit hopping
                mindlessly as it gets curious about what lies ahead. How we
                plunge deep into the abyss has become a facet of our memory -
                memories that listen to the rhythm of our anticipating pulse as
                we take one step backward, and take two steps forward.
              </p>

              <p
                style={{
                  color: "#E8E8E8",
                  fontSize: "17px",
                  lineHeight: "1.8",
                  fontFamily: "averia-serif",
                  margin: 0,
                  marginRight: "0.5rem",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                }}
              >
                These memories grow exponentially as they amass our strength,
                affection, vulnerability, and even the vastness of our oblivion
                until they reflect a tapestry of what is called the current
                thee. We were in this utopia and dystopia because of the
                historical memories that prequel the point of time we took a
                step. The second that passed and the day that followed have made
                their way to the closet of our past and now will become one like
                how our yesterday was once our future. All of these are stored
                and imbued within our system—waiting to be touched despite its
                intangible nature.
              </p>

              <p
                style={{
                  color: "#E8E8E8",
                  fontSize: "17px",
                  lineHeight: "1.8",
                  fontFamily: "averia-serif",
                  margin: 0,
                  marginRight: "0.5rem",
                  marginBottom: "1.5rem",
                  textAlign: "justify",
                }}
              >
                Diwanag 2025: Tinipong Alaala is the best we can offer to relive
                the memories we ought to revisit every day, memories we shall
                remember one last time, and those we ought to forget.
              </p>
            </div>

            {/* Editor Credit */}
            <div
              style={{
                alignSelf: "flex-end",
                textAlign: "right",
                padding: "1.5rem",
              }}
            >
              <p
                style={{
                  color: "#D4AF37",
                  fontSize: "20px",
                  fontFamily: "serif",
                  fontWeight: "500",
                  margin: 0,
                }}
              >
                Aika Khent Zainab Rosete
              </p>
              <p
                style={{
                  color: "#B8B8B8",
                  fontSize: "18px",
                  fontFamily: "serif",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                Editor-in-Chief
              </p>
              <p
                style={{
                  color: "#B8B8B8",
                  fontSize: "18px",
                  fontFamily: "serif",
                  margin: 0,
                }}
              >
                AY 2024-2025
              </p>
            </div>
          </div>
        </div>
      </div>

      

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          main > div:last-child {
            flex-direction: column !important;
            padding: 2rem 1.5rem !important;
          }

          main > div:last-child > div:first-child h1 {
            fontsize: 2.5rem !important;
          }

          main > div:last-child > div:last-child {
            max-width: 100% !important;
          }

          main > div:last-child > div:last-child > div:first-child {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}

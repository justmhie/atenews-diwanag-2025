export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "10rem",
        alignItems: "center",
        justifyContent: "flex-end",
        background: "#fdf6e3",
        width: "100%",
        boxSizing: "border-box",
        paddingTop: "10rem",
      }}
    >
      {/* MAIN TEXT */}
      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          height: "20vh",
        }}
      >
        <h1
          style={{
            fontFamily: "serif",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#d4a94f",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Tinipong Alaala
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            color: "#a88c3d",
            marginTop: "0.5rem",
            fontWeight: "300",
          }}
        >
          An Art Folio
        </p>
      </div>

      {/* MOUNTAIN AND DOORS */}
      <div style={{ position: "relative", width: "100%" }}>
        {/* Mountain */}
        <img
          src="/group-5.png"
          alt="Tinipong Alaala Mountain"
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />

        {/* Doors */}
        <div
          style={{
            width: "100%",
            position: "absolute",
            bottom: "50%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "3rem",
            zIndex: 1,
          }}
        >
          <img
            src="/door-1.png"
            alt="Door 1"
            style={{ height: "auto", marginTop: "3rem" }}
          />
          <img src="/door-2.png" alt="Door 2" style={{ height: "auto" }} />
          <img
            src="/door-3.png"
            alt="Door 3"
            style={{ height: "auto", marginTop: "3rem" }}
          />
        </div>
      </div>
    </main>
  );
}

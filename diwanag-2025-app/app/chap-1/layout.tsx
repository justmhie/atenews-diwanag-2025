import React from "react";

export default function Chapter1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "var(--bg-light)",
        color: "#161207",
        position: "relative",
        paddingTop: "2rem",
      }}
    >
      <main>{children}</main>
    </div>
  );
}

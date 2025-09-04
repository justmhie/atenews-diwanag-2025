import React from "react";

export default function Chapter1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "url('/chap-1-bg.png') center/cover no-repeat",
        color: "#161207",
        minHeight: "100vh",
        position: "relative",
      }}
    >
     
      <main>{children}</main>
    </div>
  );
}

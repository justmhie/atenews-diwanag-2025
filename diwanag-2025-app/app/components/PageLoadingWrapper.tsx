"use client";
import { useState, useEffect } from "react";
import LoadingAnimation from "./LoadingAnimation";

export default function PageLoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingAnimation isLoading={isLoading} />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s" }}>
        {children}
      </div>
    </>
  );
}

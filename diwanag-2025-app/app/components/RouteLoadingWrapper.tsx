"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingAnimation from "./LoadingAnimation";

export default function RouteLoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading when route changes
    setIsLoading(true);

    // Hide loading after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]); // Triggers on route change

  return (
    <>
      {isLoading && <LoadingAnimation isLoading={isLoading} />}
      {children}
    </>
  );
}

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  style?: React.CSSProperties;
};

export default function Button({
  children,
  variant = "primary",
  style,
  ...props
}: ButtonProps) {
  let baseStyle: React.CSSProperties = {
    padding: "12px 24px",
    fontFamily: "averia-serif",
    border: "none",
    borderRadius: "50px",
    cursor: props.disabled ? "not-allowed" : "pointer",
    transition: "all 0.3s ease",
    minWidth: "120px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow:
      variant === "primary" && !props.disabled
        ? "0 4px 15px var(--bg-dark)33"
        : "none",
    backgroundColor:
      variant === "primary"
        ? props.disabled
          ? "var(--bg-light)"
          : "var(--accent-brown-dark)"
        : variant === "secondary"
        ? "var(--)"
        : "transparent",
    color:
      variant === "primary"
        ? props.disabled
          ? "#999"
          : "var(--text-light)"
        : variant === "secondary"
        ? "var(--text-light)"
        : "var(--text-accent)",
    ...style,
  };

  return (
    <button {...props} style={baseStyle}>
      {children}
    </button>
  );
}

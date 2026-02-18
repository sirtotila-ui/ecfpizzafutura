import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SECTIONS, NAV_LABELS } from "../constants/data";
import { CONFIG } from "../constants/config";
import { theme } from "../styles/theme";
import { useScroll } from "../hooks/useScroll";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScroll();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navigazione principale"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: theme.colors.background.white,
          borderBottom: `1px solid ${theme.colors.border.light}`,
          padding: `0 ${theme.spacing["3xl"]}`,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: theme.shadows.sm,
        }}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            height: "100%",
          }}
        >
          <img
            src="/logo.png"
            alt="Futura"
            style={{
              height: 36,
              width: "auto",
              objectFit: "contain",
            }}
          />
        </a>
        <div
          style={{ display: "flex", gap: theme.spacing.xs }}
          className="pt-dsk"
        >
          {SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              aria-label={`Vai alla sezione ${NAV_LABELS[id]}`}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: theme.typography.fontSize.xs,
                fontWeight:
                  activeSection === id
                    ? theme.typography.fontWeight.semibold
                    : theme.typography.fontWeight.normal,
                color:
                  activeSection === id
                    ? theme.colors.primary.main
                    : theme.colors.text.secondary,
                textTransform: "uppercase",
                letterSpacing: theme.typography.letterSpacing.tight,
                transition: theme.transitions.fast,
              }}
              onMouseEnter={(e) => {
                if (activeSection !== id) {
                  e.target.style.color = theme.colors.primary.light;
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== id) {
                  e.target.style.color = theme.colors.text.secondary;
                }
              }}
            >
              {NAV_LABELS[id]}
            </button>
          ))}
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="pt-ham"
          aria-label="Menu mobile"
          aria-expanded={mobileMenuOpen}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            padding: theme.spacing.sm,
            zIndex: 10001,
            position: "relative",
          }}
        >
          <span
            style={{
              width: 24,
              height: 2,
              background: mobileMenuOpen
                ? theme.colors.primary.main
                : theme.colors.text.primary,
              transition: theme.transitions.normal,
              transform: mobileMenuOpen
                ? "rotate(45deg) translate(5px,5px)"
                : "none",
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: theme.colors.text.primary,
              transition: theme.transitions.normal,
              opacity: mobileMenuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              width: 24,
              height: 2,
              background: mobileMenuOpen
                ? theme.colors.primary.main
                : theme.colors.text.primary,
              transition: theme.transitions.normal,
              transform: mobileMenuOpen
                ? "rotate(-45deg) translate(5px,-5px)"
                : "none",
            }}
          />
        </button>
        {mobileMenuOpen &&
          createPortal(
            <div
              role="dialog"
              aria-label="Menu mobile"
              aria-modal="true"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                zIndex: 99999,
                background: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: theme.spacing.lg,
                padding: theme.spacing["3xl"],
              }}
            >
              {SECTIONS.map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  aria-label={`Vai alla sezione ${NAV_LABELS[id]}`}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: theme.spacing.xl,
                    fontFamily: theme.typography.fontFamily.display,
                    fontSize: theme.typography.fontSize["2xl"],
                    fontWeight: theme.typography.fontWeight.semibold,
                    color:
                      activeSection === id
                        ? theme.colors.primary.main
                        : theme.colors.text.primary,
                    width: "100%",
                    maxWidth: 320,
                    textAlign: "center",
                    transition: theme.transitions.fast,
                  }}
                >
                  {NAV_LABELS[id]}
                </button>
              ))}
            </div>,
            document.body
          )}
        <style>{`
          .pt-ham { display: none !important; }
          @media (max-width: ${theme.breakpoints.lg}) {
            .pt-dsk { display: none !important; }
            .pt-ham { display: flex !important; }
          }
        `}</style>
      </nav>
    </>
  );
}

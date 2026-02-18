import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { theme } from "../styles/theme";
import { useScroll } from "../hooks/useScroll";

const MAIN_NAV = [
  { id: "menu", label: "Menù", href: null },
  { id: "market", label: "Market", isRoute: true },
  { id: "chi-siamo", label: "Chi siamo", href: null },
  { id: "contatti", label: "Contatti", href: null },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMarketPage = location.pathname === "/market";
  const activeSection = useScroll();

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (isMarketPage && id !== "market") {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (item) => {
    if (item.isRoute) {
      setMobileMenuOpen(false);
      return;
    }
    scrollToSection(item.id);
  };

  const handlePrenota = () => {
    setMobileMenuOpen(false);
    if (isMarketPage) {
      window.location.href = "/#contatti";
      return;
    }
    scrollToSection("contatti");
  };

  const linkStyle = (item) => ({
    padding: "10px 16px",
    minHeight: "44px",
    minWidth: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.typography.fontFamily.sans,
    fontSize: 15,
    fontWeight: 500,
    color:
      (item.id === "market" && isMarketPage) || activeSection === item.id
        ? theme.colors.primary.main
        : theme.colors.text.primary,
    textDecoration: "none",
    transition: "color 0.2s ease",
    border: "none",
    background: "none",
    cursor: "pointer",
  });

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundImage: "url('/header-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderBottom: `1px solid rgba(0,0,0,0.06)`,
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}
        className="navbar-header"
      >
        <nav
          role="navigation"
          aria-label="Navigazione principale"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <img
              src="/logo.png"
              alt="Futura"
              style={{
                height: 40,
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {MAIN_NAV.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.id}
                  to="/market"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    ...linkStyle(item),
                  }}
                  onMouseEnter={(e) => {
                    if (!isMarketPage || item.id !== "market") e.currentTarget.style.color = theme.colors.primary.main;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      (item.id === "market" && isMarketPage) ? theme.colors.primary.main : theme.colors.text.primary;
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  style={linkStyle(item)}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) e.currentTarget.style.color = theme.colors.primary.main;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      activeSection === item.id ? theme.colors.primary.main : theme.colors.text.primary;
                  }}
                >
                  {item.label}
                </button>
              )
            )}
            <button
              type="button"
              onClick={handlePrenota}
              className="btn-prenota"
              style={{
                marginLeft: 12,
                padding: "10px 20px",
                minHeight: "44px",
                minWidth: "44px",
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: 15,
                fontWeight: 600,
                color: theme.colors.background.white,
                background: theme.colors.primary.main,
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "background 0.2s ease, transform 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = theme.colors.primary.dark;
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = theme.colors.primary.main;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Prenota
            </button>
          </div>

          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={mobileMenuOpen}
            style={{
              display: "none",
              flexDirection: "column",
              justifyContent: "center",
              gap: 6,
              width: 44,
              height: 44,
              padding: 0,
              border: "none",
              background: "none",
              cursor: "pointer",
              zIndex: 10001,
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: mobileMenuOpen ? theme.colors.primary.main : theme.colors.text.primary,
                transition: "transform 0.25s ease, opacity 0.2s ease",
                transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: theme.colors.text.primary,
                transition: "opacity 0.2s ease",
                opacity: mobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: mobileMenuOpen ? theme.colors.primary.main : theme.colors.text.primary,
                transition: "transform 0.25s ease",
                transform: mobileMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </nav>
      </header>

      {mobileMenuOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu di navigazione"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: theme.colors.background.white,
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "center",
              padding: "80px 24px 40px",
              overflow: "auto",
            }}
          >
            {MAIN_NAV.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.id}
                  to="/market"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    padding: "16px 0",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: theme.typography.fontFamily.sans,
                    fontSize: 16,
                    fontWeight: 500,
                    color: isMarketPage && item.id === "market" ? theme.colors.primary.main : theme.colors.text.primary,
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  style={{
                    padding: "16px 0",
                    minHeight: "44px",
                    width: "100%",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: theme.typography.fontFamily.sans,
                    fontSize: 16,
                    fontWeight: 500,
                    color: activeSection === item.id ? theme.colors.primary.main : theme.colors.text.primary,
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </button>
              )
            )}
            <button
              type="button"
              onClick={handlePrenota}
              style={{
                marginTop: 24,
                padding: "14px 20px",
                minHeight: "44px",
                minWidth: "44px",
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: 15,
                fontWeight: 600,
                color: theme.colors.background.white,
                background: theme.colors.primary.main,
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
              }}
            >
              Prenota
            </button>
          </div>,
          document.body
        )}

      <style>{`
        .navbar-header {
          position: relative;
        }
        .navbar-header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: -1;
        }
        .nav-hamburger { display: none !important; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}

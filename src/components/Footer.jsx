import { useState } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "../constants/config";
import { theme } from "../styles/theme";
import { FacebookIcon, InstagramIcon, TripAdvisorIcon } from "./SocialIcons";
import PrenotaForm from "./PrenotaForm";

export default function Footer() {
  const [showForm, setShowForm] = useState(false);

  const handlePrenota = () => {
    setShowForm(true);
  };

  const handlePhone = () => {
    window.location.href = `tel:${CONFIG.phoneLink}`;
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${CONFIG.whatsappNumber.replace(/\D/g, "")}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="contatti"
      className="footer-section"
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.dark,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.semibold,
            color: theme.colors.primary.main,
            textTransform: "uppercase",
            letterSpacing: theme.typography.letterSpacing.wide,
            marginBottom: theme.spacing["2xl"],
          }}
        >
          Vieni a Trovarci
        </div>
        <h2
          style={{
            fontFamily: theme.typography.fontFamily.display,
            fontSize: theme.typography.fontSize["5xl"],
            fontWeight: theme.typography.fontWeight.bold,
            color: theme.colors.text.light,
            marginBottom: theme.spacing.lg,
          }}
        >
          Nel Cuore di Ravenna
        </h2>
        <p
          style={{
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.md,
            color: theme.colors.text.muted,
            marginBottom: theme.spacing["5xl"],
            lineHeight: 1.8,
          }}
        >
          Dai mosaici a Dante. Futura ti aspetta nel centro storico più bello
          d'Italia.
        </p>

        <div
          style={{
            display: "flex",
            gap: theme.spacing.lg,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: theme.spacing["6xl"],
          }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePrenota}
            aria-label="Prenota il tavolo"
            style={{
              background: theme.colors.primary.main,
              color: theme.colors.background.white,
              border: "none",
              padding: `${theme.spacing.xl} ${theme.spacing["5xl"]}`,
              borderRadius: theme.borderRadius.lg,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.lg,
              fontWeight: theme.typography.fontWeight.bold,
              cursor: "pointer",
            }}
          >
            Prenota il Tavolo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePhone}
            aria-label="Chiama"
            style={{
              background: theme.colors.background.light,
              color: theme.colors.text.primary,
              border: "none",
              padding: `${theme.spacing.xl} ${theme.spacing["5xl"]}`,
              borderRadius: theme.borderRadius.lg,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.lg,
              fontWeight: theme.typography.fontWeight.semibold,
              cursor: "pointer",
            }}
          >
            Chiama Ora
          </motion.button>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ marginBottom: theme.spacing["5xl"] }}
          >
            <PrenotaForm />
            <button
              onClick={() => setShowForm(false)}
              style={{
                marginTop: theme.spacing.lg,
                background: "transparent",
                border: "none",
                color: theme.colors.text.muted,
                cursor: "pointer",
                fontSize: theme.typography.fontSize.sm,
                textDecoration: "underline",
                display: "block",
                margin: `${theme.spacing.lg} auto 0`,
              }}
            >
              Chiudi
            </button>
          </motion.div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing.lg,
            marginBottom: theme.spacing["5xl"],
            fontSize: theme.typography.fontSize.md,
            color: theme.colors.text.muted,
          }}
        >
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            📍 {CONFIG.address.full}
          </a>
          <a
            href={`tel:${CONFIG.phoneLink.replace(/\s/g, "")}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            📞 {CONFIG.phoneNumber}
          </a>
          <a
            href={`mailto:${CONFIG.email}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            ✉️ {CONFIG.email}
          </a>
          <div>🕐 {CONFIG.openingHours}</div>
        </div>

        <div
          style={{
            display: "flex",
            gap: theme.spacing.xl,
            justifyContent: "center",
            marginBottom: theme.spacing["5xl"],
          }}
        >
          <a
            href={CONFIG.socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{
              color: theme.colors.text.muted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: theme.borderRadius.md,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.colors.primary.main;
              e.currentTarget.style.background = "rgba(34,197,94,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = theme.colors.text.muted;
              e.currentTarget.style.background = "transparent";
            }}
          >
            <FacebookIcon />
          </a>
          <a
            href={CONFIG.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              color: theme.colors.text.muted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: theme.borderRadius.md,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.colors.primary.main;
              e.currentTarget.style.background = "rgba(34,197,94,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = theme.colors.text.muted;
              e.currentTarget.style.background = "transparent";
            }}
          >
            <InstagramIcon />
          </a>
          <a
            href={CONFIG.socialMedia.tripadvisor}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TripAdvisor"
            style={{
              color: theme.colors.text.muted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: theme.borderRadius.md,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = theme.colors.primary.main;
              e.currentTarget.style.background = "rgba(34,197,94,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = theme.colors.text.muted;
              e.currentTarget.style.background = "transparent";
            }}
          >
            <TripAdvisorIcon />
          </a>
        </div>

        <div
          style={{
            paddingTop: theme.spacing["3xl"],
            borderTop: `1px solid ${theme.colors.border.dark}`,
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.sm,
            color: theme.colors.text.muted,
          }}
        >
          © 2026 {CONFIG.brandName} — {CONFIG.claim}
        </div>
      </div>
      <style>{`
        @media (max-width: ${theme.breakpoints.md}) {
          .footer-section {
            padding: 60px 20px !important;
          }
        }
        @media (max-width: ${theme.breakpoints.xs}) {
          .footer-section {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

import { motion } from "framer-motion";
import { STATS } from "../constants/data";
import { CONFIG } from "../constants/config";
import { theme } from "../styles/theme";

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContatti = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: theme.colors.background.white,
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]} ${theme.spacing["9xl"]}`,
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 720,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.semibold,
            color: theme.colors.text.secondary,
            textTransform: "uppercase",
            letterSpacing: theme.typography.letterSpacing.wide,
            marginBottom: theme.spacing["3xl"],
          }}
        >
          🍕 PIZZERIA ARTIGIANALE · RAVENNA
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontFamily: theme.typography.fontFamily.display,
            fontSize: theme.typography.fontSize["7xl"],
            fontWeight: theme.typography.fontWeight.extrabold,
            color: theme.colors.text.primary,
            lineHeight: 1.05,
            margin: `0 0 ${theme.spacing["2xl"]}`,
            letterSpacing: "-1.5px",
          }}
        >
          L'Italia in una pizza
          <br />
          <span style={{ color: theme.colors.primary.main }}>
            Stagionalità, qualità, tradizione.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: "clamp(14px, 2vw, 17px)",
            color: theme.colors.text.secondary,
            maxWidth: 560,
            margin: `0 auto ${theme.spacing["5xl"]}`,
            lineHeight: 1.85,
          }}
        >
          Scegliamo i prodotti di stagione dai produttori locali e portiamo
          valore al Made in Italy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            display: "flex",
            gap: theme.spacing.lg,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: theme.spacing["8xl"],
          }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToContatti}
            aria-label="Prenota il tavolo"
            style={{
              background: theme.colors.primary.main,
              color: theme.colors.background.white,
              border: "none",
              padding: `${theme.spacing.xl} ${theme.spacing["6xl"]}`,
              borderRadius: theme.borderRadius.lg,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.lg,
              fontWeight: theme.typography.fontWeight.bold,
              cursor: "pointer",
              boxShadow: theme.shadows.md,
            }}
          >
            Prenota il Tavolo →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToMenu}
            aria-label="Guarda il menù"
            style={{
              background: theme.colors.background.light,
              color: theme.colors.text.primary,
              border: "none",
              padding: `${theme.spacing.xl} ${theme.spacing["6xl"]}`,
              borderRadius: theme.borderRadius.lg,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.lg,
              fontWeight: theme.typography.fontWeight.semibold,
              cursor: "pointer",
            }}
          >
            Guarda il Menù
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            display: "flex",
            gap: theme.spacing["6xl"],
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {STATS.map((stat, index) => (
            <div key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: theme.typography.fontFamily.display,
                  fontSize: theme.typography.fontSize["4xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: theme.colors.text.primary,
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.xs,
                  color: theme.colors.text.muted,
                  textTransform: "uppercase",
                  letterSpacing: theme.typography.letterSpacing.wide,
                  marginTop: theme.spacing.xs,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

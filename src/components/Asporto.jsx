import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { MARKET_FEATURES } from "../constants/data";
import { theme } from "../styles/theme";

export default function Market() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="market"
      ref={ref}
      className="asporto-section"
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.dark,
      }}
    >
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader
          label="Market"
          title="I Nostri Prodotti a Casa Tua"
          light
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.md,
            color: theme.colors.text.muted,
            marginBottom: theme.spacing["5xl"],
            lineHeight: 1.7,
          }}
        >
          La qualità dei nostri ingredienti, anche a casa tua. Scopri lo shop
          online.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            border: `1px solid ${theme.colors.border.medium}`,
            borderRadius: theme.borderRadius.xl,
            padding: theme.spacing["6xl"],
            background: "rgba(34,197,94,0.06)",
          }}
        >
          <div
            style={{
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.xs,
              fontWeight: theme.typography.fontWeight.bold,
              color: theme.colors.primary.main,
              textTransform: "uppercase",
              letterSpacing: theme.typography.letterSpacing.wider,
              marginBottom: theme.spacing.md,
            }}
          >
            MARKET ARTIGIANALE
          </div>
          <div
            style={{
              fontFamily: theme.typography.fontFamily.display,
              fontSize: theme.typography.fontSize["4xl"],
              fontWeight: theme.typography.fontWeight.bold,
              color: theme.colors.text.light,
              marginBottom: theme.spacing.xs,
            }}
          >
            Shop Online
          </div>
          <div
            style={{
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.md,
              color: theme.colors.text.muted,
              marginBottom: theme.spacing["4xl"],
            }}
          >
            La qualità dei nostri ingredienti, anche a casa tua
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              textAlign: "left",
              marginBottom: theme.spacing["4xl"],
            }}
          >
            {MARKET_FEATURES.map((feature, i) => (
              <li
                key={i}
                style={{
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.md,
                  color: theme.colors.text.muted,
                  padding: `${theme.spacing.md} 0`,
                  borderBottom:
                    i < MARKET_FEATURES.length - 1
                      ? `1px solid rgba(255,255,255,0.1)`
                      : "none",
                  display: "flex",
                  gap: theme.spacing.md,
                  alignItems: "center",
                }}
              >
                <span style={{ color: theme.colors.primary.main }}>✦</span>
                {feature}
              </li>
            ))}
          </ul>
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: "inline-block",
              background: theme.colors.primary.main,
              color: theme.colors.background.white,
              border: "none",
              padding: `${theme.spacing.xl} ${theme.spacing["4xl"]}`,
              borderRadius: theme.borderRadius.lg,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.lg,
              fontWeight: theme.typography.fontWeight.bold,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Visita il Market →
          </motion.a>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: ${theme.breakpoints.md}) {
          .asporto-section {
            padding: 60px 20px !important;
          }
        }
        @media (max-width: ${theme.breakpoints.xs}) {
          .asporto-section {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

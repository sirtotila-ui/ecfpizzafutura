import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { INGREDIENTI } from "../constants/data";
import { theme } from "../styles/theme";

export default function Ingredienti() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="ingredienti"
      ref={ref}
      className="ingredienti-section"
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.white,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          label="Ingredienti"
          title="I Nostri Fornitori"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: theme.spacing["3xl"],
          }}
        >
          {INGREDIENTI.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: theme.shadows.lg }}
              style={{
                background: theme.colors.background.light,
                border: `1px solid ${theme.colors.border.light}`,
                borderRadius: theme.borderRadius.xl,
                padding: theme.spacing["4xl"],
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  marginBottom: theme.spacing.lg,
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: theme.typography.fontFamily.display,
                  fontSize: theme.typography.fontSize.xl,
                  fontWeight: theme.typography.fontWeight.bold,
                  color: theme.colors.text.primary,
                  marginBottom: theme.spacing.md,
                }}
              >
                {item.name}
              </h3>
              <p
                style={{
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.base,
                  color: theme.colors.text.secondary,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: ${theme.breakpoints.md}) {
          .ingredienti-section {
            padding: 60px 20px !important;
          }
          .ingredienti-section [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: ${theme.breakpoints.xs}) {
          .ingredienti-section {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

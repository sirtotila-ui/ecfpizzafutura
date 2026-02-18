import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { TESTIMONIALS, RESTAURANT_GURU_BADGE } from "../constants/data";
import { theme } from "../styles/theme";

export default function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="recensioni"
      ref={ref}
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.light,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="Recensioni"
          title="Cosa Dicono i Nostri Clienti"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: theme.spacing["3xl"],
          }}
        >
          {TESTIMONIALS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, boxShadow: theme.shadows.lg }}
              style={{
                background: theme.colors.background.white,
                borderRadius: theme.borderRadius.xl,
                padding: theme.spacing["4xl"],
                border: `1px solid ${theme.colors.border.light}`,
                boxShadow: theme.shadows.sm,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: theme.spacing.lg,
                  marginBottom: theme.spacing.lg,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: theme.borderRadius.full,
                    background: theme.colors.background.badge,
                    color: theme.colors.primary.main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.typography.fontFamily.display,
                    fontWeight: theme.typography.fontWeight.bold,
                    fontSize: theme.typography.fontSize.lg,
                  }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: theme.typography.fontFamily.sans,
                      fontWeight: theme.typography.fontWeight.bold,
                      fontSize: theme.typography.fontSize.md,
                      color: theme.colors.text.primary,
                    }}
                  >
                    {review.name}
                  </div>
                  <div
                    style={{
                      fontFamily: theme.typography.fontFamily.sans,
                      fontSize: theme.typography.fontSize.sm,
                      color: theme.colors.text.muted,
                    }}
                  >
                    {review.source}
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: theme.colors.primary.main,
                  fontSize: theme.typography.fontSize.md,
                  marginBottom: theme.spacing.md,
                }}
              >
                {"★".repeat(review.rating)}
              </div>
              <p
                style={{
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.md,
                  color: theme.colors.text.secondary,
                  lineHeight: 1.8,
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            marginTop: theme.spacing["6xl"],
            textAlign: "center",
          }}
        >
          <div
          style={{
            display: "inline-block",
            background: theme.colors.background.light,
            padding: theme.spacing["3xl"],
            borderRadius: theme.borderRadius.lg,
            fontSize: theme.typography.fontSize.md,
            color: theme.colors.text.secondary,
          }}
          >
            {RESTAURANT_GURU_BADGE}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

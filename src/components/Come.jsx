import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { STEPS } from "../constants/data";
import { theme } from "../styles/theme";

export default function Come() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="come"
      ref={ref}
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.light,
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader label="Come Ordinare" title="Semplice e Veloce" />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 0,
            justifyContent: "center",
          }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              style={{
                flex: "1 1 250px",
                textAlign: "center",
                padding: `${theme.spacing["4xl"]} ${theme.spacing["2xl"]}`,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: theme.borderRadius.full,
                  background:
                    i === 0
                      ? theme.colors.primary.main
                      : theme.colors.background.light,
                  border:
                    i === 0
                      ? "none"
                      : `2px solid ${theme.colors.border.medium}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: `0 auto ${theme.spacing.lg}`,
                  fontFamily: theme.typography.fontFamily.display,
                  fontSize: theme.typography.fontSize["4xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  color:
                    i === 0
                      ? theme.colors.background.white
                      : theme.colors.primary.main,
                  boxShadow: theme.shadows.sm,
                }}
              >
                {step.icon}
              </motion.div>
              <h3
                style={{
                  fontFamily: theme.typography.fontFamily.display,
                  fontSize: theme.typography.fontSize["4xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: theme.colors.text.primary,
                  marginBottom: theme.spacing.md,
                  letterSpacing: "-0.5px",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.md,
                  color: theme.colors.text.secondary,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

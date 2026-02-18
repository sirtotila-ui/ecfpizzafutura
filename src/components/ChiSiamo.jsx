import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import PlaceholderImage from "./PlaceholderImage";
import { MICHELE } from "../constants/data";
import { theme } from "../styles/theme";

export default function ChiSiamo() {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <section
      id="chi-siamo"
      ref={ref}
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.white,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          label={MICHELE.role}
          title={MICHELE.name}
        />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: theme.spacing["8xl"],
            alignItems: "center",
          }}
          className="chi-siamo-grid"
        >
          <div>
            <p
              style={{
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: theme.typography.fontSize.lg,
                color: theme.colors.text.secondary,
                lineHeight: 1.9,
                marginBottom: theme.spacing["4xl"],
              }}
            >
              {MICHELE.text}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: theme.spacing.md,
              }}
            >
              {MICHELE.badges.map((badge, i) => (
                <span
                  key={i}
                  style={{
                    background: theme.colors.background.badge,
                    color: theme.colors.primary.main,
                    padding: "6px 14px",
                    borderRadius: theme.borderRadius.pill,
                    fontSize: theme.typography.fontSize.sm,
                    fontWeight: theme.typography.fontWeight.medium,
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: theme.borderRadius.md, overflow: "hidden" }}>
            <PlaceholderImage
              label="[Foto Michele]"
              aspectRatio="1"
              style={{ background: theme.colors.background.light }}
            />
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: ${theme.breakpoints.lg}) {
          .chi-siamo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

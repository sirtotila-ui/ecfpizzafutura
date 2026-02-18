import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { TEAM_MEMBERS } from "../constants/data";
import { theme } from "../styles/theme";

export default function Team() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="team"
      ref={ref}
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.dark,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Il Team" title="Chi Siamo" light />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: theme.spacing["3xl"],
          }}
        >
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              style={{
                background: "rgba(212,175,55,0.06)",
                backdropFilter: "blur(10px)",
                borderRadius: theme.borderRadius["2xl"],
                padding: theme.spacing["4xl"],
                textAlign: "center",
                border: `2px solid ${theme.colors.border.light}`,
                boxShadow: theme.shadows.lg,
              }}
            >
              <div
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: theme.borderRadius.full,
                  margin: `0 auto ${theme.spacing.xl}`,
                  overflow: "hidden",
                  border: `4px solid ${theme.colors.primary.main}`,
                  padding: "4px",
                  boxShadow: theme.shadows.verde,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: theme.borderRadius.full,
                    overflow: "hidden",
                    background: theme.colors.background.dark,
                  }}
                >
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                </div>
              </div>
              <h3
                style={{
                  fontFamily: theme.typography.fontFamily.display,
                  fontSize: theme.typography.fontSize["4xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: theme.colors.text.light,
                  marginBottom: theme.spacing.sm,
                  letterSpacing: "-0.5px",
                }}
              >
                {member.name}
              </h3>
              <div
                style={{
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.lg,
                  fontWeight: theme.typography.fontWeight.semibold,
                  color: theme.colors.primary.main,
                  marginBottom: theme.spacing.md,
                }}
              >
                {member.role}
              </div>
              <p
                style={{
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.base,
                  color: theme.colors.text.muted,
                  lineHeight: 1.6,
                }}
              >
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

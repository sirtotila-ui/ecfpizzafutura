import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { theme } from "../styles/theme";

const CATEGORIES = [
  {
    name: "Birre Artigianali",
    icon: "🍺",
    desc: "Selezione di birre artigianali locali e italiane",
  },
  {
    name: "Farine",
    icon: "🌾",
    desc: "Farine selezionate Molino Benini - macinate a pietra",
  },
  {
    name: "Ingredienti",
    icon: "🧄",
    desc: "Ingredienti di qualità per la tua cucina",
  },
  {
    name: "Conserve",
    icon: "🥫",
    desc: "Conserve e prodotti campani di alta qualità",
  },
];

export default function MarketPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.white,
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="Market"
          title="I Nostri Prodotti"
          sub="La qualità dei nostri ingredienti, anche a casa tua"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: theme.spacing["4xl"],
            marginTop: theme.spacing["8xl"],
          }}
        >
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: theme.shadows.lg }}
              style={{
                background: theme.colors.background.light,
                borderRadius: theme.borderRadius.xl,
                padding: theme.spacing["5xl"],
                textAlign: "center",
                border: `1px solid ${theme.colors.border.light}`,
                cursor: "pointer",
                transition: theme.transitions.normal,
              }}
            >
              <div
                style={{
                  fontSize: 64,
                  marginBottom: theme.spacing.lg,
                }}
              >
                {category.icon}
              </div>
              <h3
                style={{
                  fontFamily: theme.typography.fontFamily.display,
                  fontSize: theme.typography.fontSize["3xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: theme.colors.text.primary,
                  marginBottom: theme.spacing.md,
                }}
              >
                {category.name}
              </h3>
              <p
                style={{
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.base,
                  color: theme.colors.text.secondary,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {category.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            textAlign: "center",
            marginTop: theme.spacing["8xl"],
          }}
        >
          <Link
            to="/"
            style={{
              display: "inline-block",
              background: theme.colors.primary.main,
              color: theme.colors.background.white,
              padding: `${theme.spacing.xl} ${theme.spacing["5xl"]}`,
              borderRadius: theme.borderRadius.lg,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.lg,
              fontWeight: theme.typography.fontWeight.bold,
              textDecoration: "none",
              boxShadow: theme.shadows.md,
            }}
          >
            Torna alla Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

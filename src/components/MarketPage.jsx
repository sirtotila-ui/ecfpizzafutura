import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { theme } from "../styles/theme";

const CATEGORIES = [
  {
    id: "birre",
    name: "Birre Artigianali",
    icon: "🍺",
    desc: "Selezione di birre artigianali locali e italiane",
    products: [
      {
        image: "/market-birra-mata.png",
        name: "La Mata Ale",
        desc: "Birra artigianale La Mata Birrificio",
      },
    ],
  },
  {
    id: "farine",
    name: "Farine",
    icon: "🌾",
    desc: "Farine selezionate Molino Benini - macinate a pietra",
    products: [
      {
        image: "/market-farina-maraveja.png",
        name: "Maraveja Tipo 00",
        desc: "Farina speciale per pizza - Molino Benini",
      },
      {
        image: "/market-farina-integrale.png",
        name: "Farina Integrale",
        desc: "Grano tenero 100% Italiano - Molino Benini",
      },
    ],
  },
  {
    id: "ingredienti",
    name: "Ingredienti",
    icon: "🧄",
    desc: "Ingredienti di qualità per la tua cucina",
    products: [
      {
        image: "/market-olio-ossani.png",
        name: "Olio Extravergine di Oliva",
        desc: "100% Italiano - Frantoio Ossani, Brisighella (RA)",
      },
    ],
  },
  {
    id: "conserve",
    name: "Conserve",
    icon: "🥫",
    desc: "Conserve e prodotti campani di alta qualità",
    products: [],
  },
];

export default function MarketPage() {
  const [ref, inView] = useInView({
    threshold: 0.05,
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

        <div style={{ marginTop: theme.spacing["8xl"] }}>
          {CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                marginBottom: theme.spacing["8xl"],
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: theme.spacing.lg,
                  marginBottom: theme.spacing["4xl"],
                  paddingBottom: theme.spacing.lg,
                  borderBottom: `2px solid ${theme.colors.border.light}`,
                }}
              >
                <span style={{ fontSize: 40 }}>{category.icon}</span>
                <div>
                  <h2
                    style={{
                      fontFamily: theme.typography.fontFamily.display,
                      fontSize: theme.typography.fontSize["3xl"],
                      fontWeight: theme.typography.fontWeight.bold,
                      color: theme.colors.text.primary,
                      margin: 0,
                      marginBottom: theme.spacing.xs,
                    }}
                  >
                    {category.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: theme.typography.fontFamily.sans,
                      fontSize: theme.typography.fontSize.base,
                      color: theme.colors.text.secondary,
                      margin: 0,
                    }}
                  >
                    {category.desc}
                  </p>
                </div>
              </div>

              {category.products.length > 0 ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                    gap: theme.spacing["4xl"],
                  }}
                >
                  {category.products.map((product, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 16 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: (i * 0.1) + (j * 0.08), duration: 0.4 }}
                      whileHover={{ y: -4, boxShadow: theme.shadows.lg }}
                      style={{
                        background: theme.colors.background.light,
                        borderRadius: theme.borderRadius.xl,
                        overflow: "hidden",
                        border: `1px solid ${theme.colors.border.light}`,
                        transition: theme.transitions.normal,
                      }}
                    >
                      <div
                        style={{
                          aspectRatio: "1",
                          background: theme.colors.background.white,
                          padding: theme.spacing["3xl"],
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <div style={{ padding: theme.spacing["3xl"] }}>
                        <h3
                          style={{
                            fontFamily: theme.typography.fontFamily.display,
                            fontSize: theme.typography.fontSize.xl,
                            fontWeight: theme.typography.fontWeight.bold,
                            color: theme.colors.text.primary,
                            marginBottom: theme.spacing.sm,
                          }}
                        >
                          {product.name}
                        </h3>
                        <p
                          style={{
                            fontFamily: theme.typography.fontFamily.sans,
                            fontSize: theme.typography.fontSize.sm,
                            color: theme.colors.text.secondary,
                            margin: 0,
                            lineHeight: 1.5,
                          }}
                        >
                          {product.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p
                  style={{
                    fontFamily: theme.typography.fontFamily.sans,
                    fontSize: theme.typography.fontSize.md,
                    color: theme.colors.text.muted,
                    fontStyle: "italic",
                  }}
                >
                  In arrivo
                </p>
              )}
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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { theme } from "../styles/theme";
import { CONFIG } from "../constants/config";

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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product, category) => {
    setSelectedProduct({ ...product, category: category.name });
  };

  const handleContact = () => {
    const message = `Ciao! Sono interessato al prodotto: ${selectedProduct.name}\n\n${selectedProduct.desc}`;
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      ref={ref}
      className="market-page-section"
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
                      whileHover={{ 
                        y: -6, 
                        boxShadow: theme.shadows.lg,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleProductClick(product, category)}
                      style={{
                        background: theme.colors.background.light,
                        borderRadius: theme.borderRadius.xl,
                        overflow: "hidden",
                        border: `1px solid ${theme.colors.border.light}`,
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
                          loading="lazy"
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            transition: "transform 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
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

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: theme.spacing["3xl"],
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: theme.colors.background.white,
                borderRadius: theme.borderRadius.xl,
                padding: theme.spacing["5xl"],
                maxWidth: 500,
                width: "100%",
                boxShadow: theme.shadows.lg,
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  aspectRatio: "1",
                  background: theme.colors.background.light,
                  borderRadius: theme.borderRadius.md,
                  padding: theme.spacing["3xl"],
                  marginBottom: theme.spacing["3xl"],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <h2
                style={{
                  fontFamily: theme.typography.fontFamily.display,
                  fontSize: theme.typography.fontSize["3xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: theme.colors.text.primary,
                  marginBottom: theme.spacing.md,
                }}
              >
                {selectedProduct.name}
              </h2>
              <p
                style={{
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.md,
                  color: theme.colors.text.secondary,
                  marginBottom: theme.spacing["3xl"],
                  lineHeight: 1.7,
                }}
              >
                {selectedProduct.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: theme.spacing.md,
                  flexWrap: "wrap",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContact}
                  style={{
                    flex: 1,
                    minWidth: 150,
                    background: theme.colors.primary.main,
                    color: theme.colors.background.white,
                    border: "none",
                    padding: `${theme.spacing.lg} ${theme.spacing["4xl"]}`,
                    borderRadius: theme.borderRadius.lg,
                    fontFamily: theme.typography.fontFamily.sans,
                    fontSize: theme.typography.fontSize.md,
                    fontWeight: theme.typography.fontWeight.bold,
                    cursor: "pointer",
                    boxShadow: theme.shadows.md,
                  }}
                >
                  Contattaci via WhatsApp
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProduct(null)}
                  style={{
                    flex: 1,
                    minWidth: 150,
                    background: theme.colors.background.light,
                    color: theme.colors.text.primary,
                    border: `2px solid ${theme.colors.border.medium}`,
                    padding: `${theme.spacing.lg} ${theme.spacing["4xl"]}`,
                    borderRadius: theme.borderRadius.lg,
                    fontFamily: theme.typography.fontFamily.sans,
                    fontSize: theme.typography.fontSize.md,
                    fontWeight: theme.typography.fontWeight.semibold,
                    cursor: "pointer",
                  }}
                >
                  Chiudi
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: ${theme.breakpoints.md}) {
          .market-page-section {
            padding: 60px 20px !important;
          }
          .market-page-section [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: ${theme.breakpoints.xs}) {
          .market-page-section {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

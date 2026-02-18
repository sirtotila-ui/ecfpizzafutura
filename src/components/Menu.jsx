import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import PlaceholderImage from "./PlaceholderImage";
import { MENU_ITEMS } from "../constants/data";
import { theme } from "../styles/theme";

const CATEGORIES = [
  { id: "stagionali", label: "Stagionali Invernali" },
  { id: "classiche", label: "Classiche" },
];

const TAG_COLORS = {
  vegetariana: { bg: "#F0FDF4", color: "#16A34A" },
  vegan: { bg: "#ECFDF5", color: "#059669" },
  bestseller: { bg: "#FEF3C7", color: "#D97706" },
  premium: { bg: "#F3E8FF", color: "#7C3AED" },
  locale: { bg: "#DBEAFE", color: "#2563EB" },
  nuovo: { bg: "#FCE7F3", color: "#DB2777" },
  schiacciatina: { bg: "#FFF7ED", color: "#EA580C" },
};

export default function Menu() {
  const [category, setCategory] = useState("stagionali");
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const items = MENU_ITEMS[category] || [];
  
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || item.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  const availableTags = [...new Set(items.map(item => item.tag).filter(Boolean))];

  return (
    <section
      id="menu"
      className="menu-section"
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.light,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="Il Menù"
          title="Le Nostre Pizze"
          sub="Ingredienti di stagione e classici senza tempo."
        />
        
        <div style={{ marginBottom: theme.spacing["4xl"] }}>
          <input
            type="text"
            placeholder="Cerca pizza..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              maxWidth: 400,
              margin: "0 auto",
              display: "block",
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              borderRadius: theme.borderRadius.md,
              border: `2px solid ${theme.colors.border.light}`,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.md,
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = theme.colors.primary.main;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = theme.colors.border.light;
            }}
          />
        </div>

        {availableTags.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: theme.spacing.sm,
              marginBottom: theme.spacing.lg,
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => setSelectedTag(null)}
              style={{
                background: selectedTag === null ? theme.colors.primary.main : theme.colors.background.white,
                color: selectedTag === null ? theme.colors.background.white : theme.colors.text.primary,
                border: `2px solid ${selectedTag === null ? theme.colors.primary.main : theme.colors.border.medium}`,
                padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                minHeight: "44px",
                minWidth: "44px",
                borderRadius: theme.borderRadius.pill,
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: theme.typography.fontSize.xs,
                fontWeight: theme.typography.fontWeight.medium,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Tutte
            </button>
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                style={{
                  background: selectedTag === tag ? TAG_COLORS[tag]?.bg || theme.colors.background.badge : theme.colors.background.white,
                  color: selectedTag === tag ? TAG_COLORS[tag]?.color || theme.colors.primary.main : theme.colors.text.primary,
                  border: `2px solid ${selectedTag === tag ? TAG_COLORS[tag]?.color || theme.colors.primary.main : theme.colors.border.medium}`,
                  padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                  minHeight: "44px",
                  minWidth: "44px",
                  borderRadius: theme.borderRadius.pill,
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.xs,
                  fontWeight: theme.typography.fontWeight.medium,
                  cursor: "pointer",
                  textTransform: "capitalize",
                  transition: "all 0.2s ease",
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: theme.spacing.sm,
            marginBottom: theme.spacing["6xl"],
            flexWrap: "wrap",
          }}
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCategory(cat.id)}
              style={{
                background:
                  category === cat.id
                    ? theme.colors.primary.main
                    : theme.colors.background.white,
                color:
                  category === cat.id
                    ? theme.colors.background.white
                    : theme.colors.text.primary,
                border:
                  category === cat.id
                    ? "none"
                    : `2px solid ${theme.colors.border.medium}`,
                padding: `${theme.spacing.xl} ${theme.spacing["4xl"]}`,
                borderRadius: theme.borderRadius.lg,
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: theme.typography.fontSize.md,
                fontWeight: theme.typography.fontWeight.bold,
                cursor: "pointer",
                boxShadow: theme.shadows.sm,
              }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: theme.spacing["3xl"],
            }}
          >
            {filteredItems.length === 0 ? (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: theme.spacing["5xl"],
                  color: theme.colors.text.muted,
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.lg,
                }}
              >
                Nessuna pizza trovata
              </div>
            ) : (
              filteredItems.map((item, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                whileHover={{ 
                  y: -6, 
                  boxShadow: theme.shadows.lg,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedItem(item)}
                style={{
                  background: theme.colors.background.white,
                  borderRadius: theme.borderRadius.xl,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: theme.shadows.md,
                  border: `1px solid ${theme.colors.border.light}`,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <div
                  style={{
                    padding: theme.spacing.md,
                    aspectRatio: "4/3",
                    overflow: "hidden",
                    borderRadius: theme.borderRadius.sm,
                  }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  ) : (
                    <PlaceholderImage
                      label="[Foto pizza]"
                      aspectRatio="4/3"
                    />
                  )}
                </div>
                {item.tag && (
                  <div
                    style={{
                      paddingLeft: theme.spacing["3xl"],
                      paddingTop: theme.spacing.md,
                      paddingBottom: theme.spacing.md,
                    }}
                  >
                    <span
                      style={{
                        background: TAG_COLORS[item.tag]?.bg || theme.colors.background.badge,
                        color: TAG_COLORS[item.tag]?.color || theme.colors.primary.main,
                        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
                        borderRadius: theme.borderRadius.pill,
                        fontSize: theme.typography.fontSize.xs,
                        fontWeight: theme.typography.fontWeight.medium,
                        textTransform: "capitalize",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                )}
                <div style={{ padding: theme.spacing["3xl"] }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: theme.spacing.md,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: theme.typography.fontFamily.display,
                        fontSize: theme.typography.fontSize["2xl"],
                        fontWeight: theme.typography.fontWeight.bold,
                        color: theme.colors.text.primary,
                        flex: 1,
                      }}
                    >
                      {item.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: theme.typography.fontFamily.display,
                        fontSize: theme.typography.fontSize.xl,
                        fontWeight: theme.typography.fontWeight.bold,
                        color: theme.colors.primary.main,
                        marginLeft: theme.spacing.md,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: theme.typography.fontFamily.sans,
                      fontSize: theme.typography.fontSize.base,
                      color: theme.colors.text.secondary,
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: theme.spacing["3xl"],
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: theme.colors.background.white,
              borderRadius: theme.borderRadius.xl,
              padding: theme.spacing["5xl"],
              maxWidth: 480,
              width: "100%",
              boxShadow: theme.shadows.lg,
            }}
          >
            {selectedItem.image ? (
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  borderRadius: theme.borderRadius.md,
                  marginBottom: theme.spacing["3xl"],
                  display: "block",
                }}
              />
            ) : (
              <PlaceholderImage
                label="[Foto pizza]"
                aspectRatio="4/3"
                style={{ marginBottom: theme.spacing["3xl"] }}
              />
            )}
            <h3
              style={{
                fontFamily: theme.typography.fontFamily.display,
                fontSize: theme.typography.fontSize["3xl"],
                color: theme.colors.text.primary,
                marginBottom: theme.spacing.lg,
              }}
            >
              {selectedItem.name}
            </h3>
            <p
              style={{
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: theme.typography.fontSize.md,
                color: theme.colors.text.secondary,
                marginBottom: theme.spacing["2xl"],
                lineHeight: 1.7,
              }}
            >
              {selectedItem.desc}
            </p>
            <div
              style={{
                fontFamily: theme.typography.fontFamily.display,
                fontSize: theme.typography.fontSize["3xl"],
                fontWeight: theme.typography.fontWeight.bold,
                color: theme.colors.primary.main,
                marginBottom: theme.spacing["2xl"],
              }}
            >
              {selectedItem.price}
            </div>
            <button
              onClick={() => setSelectedItem(null)}
              style={{
                background: theme.colors.primary.main,
                color: theme.colors.background.white,
                border: "none",
                padding: `${theme.spacing.lg} ${theme.spacing["3xl"]}`,
                borderRadius: theme.borderRadius.lg,
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: theme.typography.fontSize.md,
                fontWeight: theme.typography.fontWeight.bold,
                cursor: "pointer",
                width: "100%",
              }}
            >
              Chiudi
            </button>
          </motion.div>
        </motion.div>
          )}
      <style>{`
        @media (max-width: ${theme.breakpoints.md}) {
          .menu-section {
            padding: 60px 20px !important;
          }
          .menu-section [style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: ${theme.breakpoints.xs}) {
          .menu-section {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

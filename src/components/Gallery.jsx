import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { GALLERY_IMAGES } from "../constants/data";
import { theme } from "../styles/theme";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("all");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = ["all", "interno", "cibo", "team"];
  const filteredImages =
    filter === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === filter);

  return (
    <section
      id="galleria"
      ref={ref}
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.light,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Galleria" title="I Nostri Momenti" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: theme.spacing.sm,
            marginBottom: theme.spacing["5xl"],
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              style={{
                background:
                  filter === cat
                    ? theme.colors.primary.main
                    : theme.colors.background.white,
                color:
                  filter === cat
                    ? theme.colors.background.dark
                    : theme.colors.text.primary,
                border: `1px solid ${theme.colors.border.medium}`,
                padding: `${theme.spacing.sm} ${theme.spacing["2xl"]}`,
                borderRadius: theme.borderRadius.md,
                fontFamily: theme.typography.fontFamily.sans,
                fontSize: theme.typography.fontSize.base,
                fontWeight: theme.typography.fontWeight.semibold,
                cursor: "pointer",
                textTransform: "capitalize",
              }}
            >
              {cat === "all" ? "Tutte" : cat}
            </motion.button>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: theme.spacing.lg,
          }}
        >
          {filteredImages.map((image, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedImage(image)}
              aria-label={`Apri immagine ${image.alt}`}
              style={{
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                borderRadius: theme.borderRadius.lg,
                cursor: "pointer",
                aspectRatio: "4/3",
                boxShadow: theme.shadows.md,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: theme.transitions.normal,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                  padding: theme.spacing.lg,
                  color: "white",
                  fontFamily: theme.typography.fontFamily.sans,
                  fontSize: theme.typography.fontSize.base,
                }}
              >
                {image.alt}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.95)",
              zIndex: 3000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing["3xl"],
            }}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: theme.borderRadius.lg,
                boxShadow: theme.shadows.xl,
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Chiudi lightbox"
              style={{
                position: "absolute",
                top: theme.spacing["3xl"],
                right: theme.spacing["3xl"],
                background: theme.colors.primary.main,
                color: theme.colors.background.dark,
                border: "none",
                width: 48,
                height: 48,
                borderRadius: theme.borderRadius.full,
                fontSize: 24,
                cursor: "pointer",
                fontWeight: theme.typography.fontWeight.bold,
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

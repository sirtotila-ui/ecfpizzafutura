import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FAQ_ITEMS } from "../constants/data";
import { theme } from "../styles/theme";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="faq-section"
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.light,
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionHeader label="FAQ" title="Domande Frequenti" />
        {FAQ_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            style={{
              borderBottom: `1px solid ${theme.colors.border.light}`,
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: `${theme.spacing["2xl"]} 0`,
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontFamily: theme.typography.fontFamily.display,
                  fontSize: theme.typography.fontSize["2xl"],
                  fontWeight: theme.typography.fontWeight.bold,
                  color: theme.colors.text.primary,
                }}
              >
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  color: theme.colors.primary.main,
                  flexShrink: 0,
                  marginLeft: theme.spacing.lg,
                  fontSize: 28,
                  fontWeight: theme.typography.fontWeight.bold,
                }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  id={`faq-answer-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    overflow: "hidden",
                    padding: `0 0 ${theme.spacing["2xl"]}`,
                    fontFamily: theme.typography.fontFamily.sans,
                    fontSize: theme.typography.fontSize.md,
                    color: theme.colors.text.secondary,
                    lineHeight: 1.85,
                  }}
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <style>{`
        @media (max-width: ${theme.breakpoints.md}) {
          .faq-section {
            padding: 60px 20px !important;
          }
        }
        @media (max-width: ${theme.breakpoints.xs}) {
          .faq-section {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

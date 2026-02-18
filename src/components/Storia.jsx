import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { theme } from "../styles/theme";

export default function Filosofia() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="filosofia"
      ref={ref}
      className="filosofia-section"
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.light,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <SectionHeader
          label="La Nostra Filosofia"
          title={
            <>
              Meno Compromessi,
              <br />
              Più <span style={{ color: theme.colors.primary.main }}>Ricerca</span>
            </>
          }
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.lg,
            color: theme.colors.text.secondary,
            lineHeight: 2,
            margin: "0 auto",
            maxWidth: 640,
          }}
        >
          Ogni stagione il menù cambia. Scegliamo ingredienti di stagione dai
          migliori produttori locali: pomodoro Casa Marrazzo da Napoli,
          fiordilatte di Roccamonfina, salsiccia di Mora Romagnola, Parmigiano di
          Vacche Rosse. L'impasto è il risultato di anni di sperimentazione —
          leggero, digeribile, cotto nel forno a legna. Ogni pizza racconta un
          territorio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            marginTop: theme.spacing["6xl"],
          }}
        >
          <motion.a
            href="/market"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
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
              cursor: "pointer",
              boxShadow: theme.shadows.md,
            }}
          >
            Visita il Market →
          </motion.a>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: ${theme.breakpoints.md}) {
          .filosofia-section {
            padding: 60px 20px !important;
          }
        }
        @media (max-width: ${theme.breakpoints.xs}) {
          .filosofia-section {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

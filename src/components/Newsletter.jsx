import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { validateEmail } from "../utils/validators";
import { theme } from "../styles/theme";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Inserisci un'email valida");
      return;
    }
    setError("");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section
      ref={ref}
      style={{
        padding: `${theme.spacing["8xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.light,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          background: theme.colors.background.white,
          padding: theme.spacing["6xl"],
          borderRadius: theme.borderRadius["2xl"],
          boxShadow: theme.shadows["2xl"],
          border: `2px solid ${theme.colors.border.light}`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            fontFamily: theme.typography.fontFamily.display,
            fontSize: theme.typography.fontSize["5xl"],
            fontWeight: theme.typography.fontWeight.bold,
            color: theme.colors.primary.main,
            marginBottom: theme.spacing.lg,
            letterSpacing: "-1px",
          }}
        >
          Iscriviti alla Newsletter
        </h3>
        <p
          style={{
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.base,
            color: theme.colors.text.secondary,
            marginBottom: theme.spacing["3xl"],
          }}
        >
          Ricevi promozioni esclusive e novità dal nostro menù
        </p>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: theme.spacing.sm, flexWrap: "wrap" }}>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="La tua email"
            required
            style={{
              flex: "1 1 250px",
              padding: theme.spacing.xl,
              borderRadius: theme.borderRadius.lg,
              border: `2px solid ${error ? "#ff4444" : theme.colors.border.verde}`,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.md,
              background: theme.colors.background.cream,
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
              background: theme.colors.primary.gradient,
              color: theme.colors.background.dark,
              border: "none",
              padding: `${theme.spacing.xl} ${theme.spacing["4xl"]}`,
              borderRadius: theme.borderRadius.lg,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.md,
              fontWeight: theme.typography.fontWeight.bold,
              cursor: "pointer",
              boxShadow: theme.shadows.verde,
            }}
          >
            Iscriviti
          </motion.button>
        </form>
        {error && (
          <div style={{ color: "#ff4444", fontSize: theme.typography.fontSize.sm, marginTop: theme.spacing.sm }}>
            {error}
          </div>
        )}
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              color: "#4caf50",
              fontSize: theme.typography.fontSize.base,
              marginTop: theme.spacing.sm,
              fontWeight: theme.typography.fontWeight.semibold,
            }}
          >
            Iscrizione completata!
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

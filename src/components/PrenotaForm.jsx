import { useState } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "../constants/config";
import { theme } from "../styles/theme";

export default function PrenotaForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefono: "",
    data: "",
    ora: "",
    persone: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = "Il nome è obbligatorio";
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = "Il telefono è obbligatorio";
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(formData.telefono)) {
      newErrors.telefono = "Formato telefono non valido";
    }
    
    if (!formData.data) {
      newErrors.data = "La data è obbligatoria";
    } else {
      const selectedDate = new Date(formData.data);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.data = "La data non può essere nel passato";
      }
    }
    
    if (!formData.ora) {
      newErrors.ora = "L'ora è obbligatoria";
    }
    
    if (!formData.persone || parseInt(formData.persone) < 1) {
      newErrors.persone = "Inserisci un numero valido di persone";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    const message = `Ciao! Vorrei prenotare un tavolo per ${formData.persone} ${formData.persone === "1" ? "persona" : "persone"}.\n\n` +
      `Nome: ${formData.nome}\n` +
      `Telefono: ${formData.telefono}\n` +
      `Data: ${formData.data}\n` +
      `Ora: ${formData.ora}\n\n` +
      `Grazie!`;
    
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber.replace(/\s/g, "")}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ nome: "", telefono: "", data: "", ora: "", persone: "" });
      setErrors({});
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: theme.colors.background.white,
        borderRadius: theme.borderRadius.xl,
        padding: theme.spacing["5xl"],
        boxShadow: theme.shadows.lg,
        maxWidth: 500,
        margin: "0 auto",
      }}
    >
      <h3
        style={{
          fontFamily: theme.typography.fontFamily.display,
          fontSize: theme.typography.fontSize["3xl"],
          fontWeight: theme.typography.fontWeight.bold,
          color: theme.colors.text.primary,
          marginBottom: theme.spacing["3xl"],
          textAlign: "center",
        }}
      >
        Prenota un Tavolo
      </h3>
      
      <div style={{ marginBottom: theme.spacing.lg }}>
        <label
          htmlFor="nome"
          style={{
            display: "block",
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.medium,
            color: theme.colors.text.primary,
            marginBottom: theme.spacing.xs,
          }}
        >
          Nome *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: theme.spacing.md,
            borderRadius: theme.borderRadius.md,
            border: `2px solid ${errors.nome ? "#ef4444" : theme.colors.border.light}`,
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.md,
            outline: "none",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = theme.colors.primary.main;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = errors.nome ? "#ef4444" : theme.colors.border.light;
          }}
        />
        {errors.nome && (
          <div
            style={{
              color: "#ef4444",
              fontSize: theme.typography.fontSize.xs,
              marginTop: theme.spacing.xs,
            }}
          >
            {errors.nome}
          </div>
        )}
      </div>

      <div style={{ marginBottom: theme.spacing.lg }}>
        <label
          htmlFor="telefono"
          style={{
            display: "block",
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.medium,
            color: theme.colors.text.primary,
            marginBottom: theme.spacing.xs,
          }}
        >
          Telefono *
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="+39 123 456 7890"
          style={{
            width: "100%",
            padding: theme.spacing.md,
            borderRadius: theme.borderRadius.md,
            border: `2px solid ${errors.telefono ? "#ef4444" : theme.colors.border.light}`,
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.md,
            outline: "none",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = theme.colors.primary.main;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = errors.telefono ? "#ef4444" : theme.colors.border.light;
          }}
        />
        {errors.telefono && (
          <div
            style={{
              color: "#ef4444",
              fontSize: theme.typography.fontSize.xs,
              marginTop: theme.spacing.xs,
            }}
          >
            {errors.telefono}
          </div>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: theme.spacing.md, marginBottom: theme.spacing.lg }}>
        <div>
          <label
            htmlFor="data"
            style={{
              display: "block",
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.sm,
              fontWeight: theme.typography.fontWeight.medium,
              color: theme.colors.text.primary,
              marginBottom: theme.spacing.xs,
            }}
          >
            Data *
          </label>
          <input
            type="date"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            style={{
              width: "100%",
              padding: theme.spacing.md,
              borderRadius: theme.borderRadius.md,
              border: `2px solid ${errors.data ? "#ef4444" : theme.colors.border.light}`,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.md,
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = theme.colors.primary.main;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors.data ? "#ef4444" : theme.colors.border.light;
            }}
          />
          {errors.data && (
            <div
              style={{
                color: "#ef4444",
                fontSize: theme.typography.fontSize.xs,
                marginTop: theme.spacing.xs,
              }}
            >
              {errors.data}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="ora"
            style={{
              display: "block",
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.sm,
              fontWeight: theme.typography.fontWeight.medium,
              color: theme.colors.text.primary,
              marginBottom: theme.spacing.xs,
            }}
          >
            Ora *
          </label>
          <input
            type="time"
            id="ora"
            name="ora"
            value={formData.ora}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: theme.spacing.md,
              borderRadius: theme.borderRadius.md,
              border: `2px solid ${errors.ora ? "#ef4444" : theme.colors.border.light}`,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.fontSize.md,
              outline: "none",
              transition: "border-color 0.2s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = theme.colors.primary.main;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errors.ora ? "#ef4444" : theme.colors.border.light;
            }}
          />
          {errors.ora && (
            <div
              style={{
                color: "#ef4444",
                fontSize: theme.typography.fontSize.xs,
                marginTop: theme.spacing.xs,
              }}
            >
              {errors.ora}
            </div>
          )}
        </div>
      </div>

      <div style={{ marginBottom: theme.spacing["3xl"] }}>
        <label
          htmlFor="persone"
          style={{
            display: "block",
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.sm,
            fontWeight: theme.typography.fontWeight.medium,
            color: theme.colors.text.primary,
            marginBottom: theme.spacing.xs,
          }}
        >
          Numero di Persone *
        </label>
        <input
          type="number"
          id="persone"
          name="persone"
          value={formData.persone}
          onChange={handleChange}
          min="1"
          max="20"
          style={{
            width: "100%",
            padding: theme.spacing.md,
            borderRadius: theme.borderRadius.md,
            border: `2px solid ${errors.persone ? "#ef4444" : theme.colors.border.light}`,
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.md,
            outline: "none",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = theme.colors.primary.main;
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = errors.persone ? "#ef4444" : theme.colors.border.light;
          }}
        />
        {errors.persone && (
          <div
            style={{
              color: "#ef4444",
              fontSize: theme.typography.fontSize.xs,
              marginTop: theme.spacing.xs,
            }}
          >
            {errors.persone}
          </div>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          width: "100%",
          background: isSubmitting ? theme.colors.text.muted : theme.colors.primary.main,
          color: theme.colors.background.white,
          border: "none",
          padding: `${theme.spacing.lg} ${theme.spacing["4xl"]}`,
          borderRadius: theme.borderRadius.lg,
          fontFamily: theme.typography.fontFamily.sans,
          fontSize: theme.typography.fontSize.lg,
          fontWeight: theme.typography.fontWeight.bold,
          cursor: isSubmitting ? "not-allowed" : "pointer",
          boxShadow: theme.shadows.md,
          transition: "background 0.2s ease",
        }}
      >
        {isSubmitting ? "Invio in corso..." : "Prenota via WhatsApp"}
      </motion.button>
      
      <p
        style={{
          marginTop: theme.spacing.md,
          fontSize: theme.typography.fontSize.xs,
          color: theme.colors.text.muted,
          textAlign: "center",
        }}
      >
        * Campi obbligatori
      </p>
    </motion.form>
  );
}

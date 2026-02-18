import { theme } from "../styles/theme";

export default function SectionHeader({ label, title, sub, light = false }) {
  return (
    <div style={{ textAlign: "center", marginBottom: theme.spacing["8xl"] }}>
      <div
        style={{
          fontFamily: theme.typography.fontFamily.sans,
          fontSize: theme.typography.fontSize.sm,
          fontWeight: theme.typography.fontWeight.semibold,
          color: theme.colors.primary.main,
          textTransform: "uppercase",
          letterSpacing: theme.typography.letterSpacing.ultraWide,
          marginBottom: theme.spacing.lg,
        }}
      >
        {label}
      </div>
      <h2
        style={{
          fontFamily: theme.typography.fontFamily.display,
          fontSize: theme.typography.fontSize["5xl"],
          fontWeight: light ? theme.typography.fontWeight.bold : theme.typography.fontWeight.bold,
          color: light ? theme.colors.text.light : theme.colors.text.primary,
          lineHeight: 1.1,
          marginBottom: sub ? theme.spacing.lg : 0,
          letterSpacing: "-1px",
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.lg,
            color: light ? theme.colors.text.muted : theme.colors.text.secondary,
            maxWidth: 480,
            margin: "0 auto",
            fontWeight: theme.typography.fontWeight.normal,
          }}
        >
          {sub}
        </p>
      )}
      <div
        style={{
          width: 60,
          height: 3,
          background: theme.colors.primary.main,
          margin: `${theme.spacing["3xl"]} auto 0`,
          borderRadius: theme.borderRadius.full,
        }}
      />
    </div>
  );
}

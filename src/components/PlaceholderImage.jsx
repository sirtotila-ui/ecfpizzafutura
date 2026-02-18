import { theme } from "../styles/theme";

export default function PlaceholderImage({ label = "[Foto]", aspectRatio = "4/3", style = {} }) {
  return (
    <div
      style={{
        width: "100%",
        aspectRatio,
        background: theme.colors.background.placeholder,
        borderRadius: theme.borderRadius.md,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.colors.text.muted,
        fontSize: theme.typography.fontSize.sm,
        ...style,
      }}
    >
      {label}
    </div>
  );
}

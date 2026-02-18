import { theme } from "../styles/theme";

export default function SkeletonLoader({ width = "100%", height = "200px", borderRadius = theme.borderRadius.md }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        background: `linear-gradient(90deg, ${theme.colors.background.placeholder} 25%, ${theme.colors.background.light} 50%, ${theme.colors.background.placeholder} 75%)`,
        backgroundSize: "200% 100%",
        animation: "skeleton-loading 1.5s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes skeleton-loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
}

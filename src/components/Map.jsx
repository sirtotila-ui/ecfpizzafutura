import { useInView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { CONFIG } from "../constants/config";
import { theme } from "../styles/theme";

export default function Map() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(CONFIG.address.full)}`;

  return (
    <section
      id="mappa"
      ref={ref}
      style={{
        padding: `${theme.spacing["10xl"]} ${theme.spacing["3xl"]}`,
        background: theme.colors.background.light,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Dove Siamo" title="Vieni a Trovarci" />
        <div
          style={{
            borderRadius: theme.borderRadius.xl,
            overflow: "hidden",
            boxShadow: theme.shadows.lg,
            height: 500,
            background: theme.colors.background.dark,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.colors.text.light,
            fontFamily: theme.typography.fontFamily.sans,
            fontSize: theme.typography.fontSize.lg,
          }}
        >
          <div style={{ textAlign: "center", padding: theme.spacing["5xl"] }}>
            <div style={{ fontSize: 48, marginBottom: theme.spacing.lg }}>📍</div>
            <div style={{ marginBottom: theme.spacing.lg }}>
              {CONFIG.address.full}
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.colors.primary.main,
                textDecoration: "none",
                fontWeight: theme.typography.fontWeight.bold,
              }}
            >
              Apri in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

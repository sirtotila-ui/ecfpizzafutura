import { useState, useEffect } from "react";

export function useScroll() {
  const [activeSection, setActiveSection] = useState("home");
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const updateSections = () => {
      const sectionIds = [
        "home",
        "filosofia",
        "chi-siamo",
        "menu",
        "recensioni",
        "ingredienti",
        "come",
        "market",
        "faq",
        "contatti",
      ];

      const sectionData = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return element
            ? { id, top: element.offsetTop - 100 }
            : null;
        })
        .filter(Boolean);

      setSections(sectionData);
    };

    updateSections();
    window.addEventListener("resize", updateSections);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].top) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSections);
    };
  }, [sections]);

  return activeSection;
}

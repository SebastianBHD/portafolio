import { useState, useRef, useEffect, useMemo } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "../hooks/useTranslation";

function ProjectCard({
  img = "/images/projectphoto.jpg",
  desc = "Coming Soon",
  link = "https://www.youtube.com/watch?v=mCdA4bJAGGk",
  projectTitle = "",
}) {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [primaryColorRgb, setPrimaryColorRgb] = useState("159, 134, 192");
  const cardRef = useRef(null);

  useEffect(() => {
    const getPrimaryColorRgb = () => {
      const primaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--primary-color")
        .trim();

      if (primaryColor) {
        const hex = primaryColor.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `${r}, ${g}, ${b}`;
      }
      return "159, 134, 192";
    };

    setPrimaryColorRgb(getPrimaryColorRgb());

    const observer = new MutationObserver(() => {
      setPrimaryColorRgb(getPrimaryColorRgb());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  const borderBackground = useMemo(() => {
    const base = `rgba(${primaryColorRgb}, 0.10)`;
    const glow = `rgba(${primaryColorRgb}, 0.85)`;
    const core = `rgba(${primaryColorRgb}, 0.95)`;
    const clear = `rgba(${primaryColorRgb}, 0.00)`;
    return `repeating-conic-gradient(
      from var(--a, 0deg),

      ${base} 0%,
      ${base} 70%,

      ${clear} 70%,
      ${glow} 82%,
      ${core} 88%,
      ${glow} 94%,
      ${clear} 100%
    )`;
  }, [primaryColorRgb]);

  const borderStyle = useMemo(() => {
    return {
      border: "2px solid transparent",
      background: `
        linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)) padding-box,
        ${borderBackground} border-box
      `,
      filter: isHovered
        ? `drop-shadow(0 0 10px rgba(${primaryColorRgb}, 0.45)) drop-shadow(0 0 22px rgba(${primaryColorRgb}, 0.25))`
        : `drop-shadow(0 0 8px rgba(${primaryColorRgb}, 0.25))`,
      animation: "borderSpin 2.8s linear infinite",
    };
  }, [borderBackground, isHovered, primaryColorRgb]);

  return (
    <div
      ref={cardRef}
      className="relative flex w-full flex-col h-full min-h-[450px] rounded-2xl overflow-visible bg-quinary shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group"
      style={borderStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 overflow-hidden rounded-t-2xl">
        <img
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
          src={img}
          alt={projectTitle}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-quinary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="relative z-10 flex flex-col justify-between min-h-[450px] w-full p-6 gap-y-4 bg-quinary rounded-b-2xl overflow-hidden">
        <div className="relative z-10 flex flex-col gap-y-3">
          <h3 className="text-2xl font-bold text-tertiary group-hover:text-primary transition-colors duration-300 cursor-default">
            {projectTitle}
          </h3>
          <p className="text-base font-light text-tertiary/80 leading-relaxed text-justify cursor-default">
            {desc}
          </p>
        </div>

        <a href={link} target="_blank" rel="noreferrer" className="relative z-10 mt-4">
          <Button className="w-full transition-all duration-300 group-hover:scale-105">
            {t('myProjects.viewProject')}
          </Button>
        </a>
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(${primaryColorRgb}, 0.15) 0%, rgba(${primaryColorRgb}, 0.05) 100%)`,
          border: `1px solid rgba(${primaryColorRgb}, 0.18)`,
          zIndex: 2,
        }}
      />
    </div>
  );
}

export default ProjectCard;

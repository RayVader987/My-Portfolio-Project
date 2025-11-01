import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const list = [
  {
    id: 1,
    title: "Eco Link",
    desc: "Your eco-friendly sidekick that turns small, everyday green actions into points, badges, and real impact. The project aims to promote sustainable living through technology and responsible innovation.",
    tech: ["HTML", "React", "CSS", "Firebase", "JavaScript"],
    repo: "https://github.com/RayVader987/Eco-Link",
    liveDemo: "https://eco-link-nine.vercel.app/",
    highlights: [
      { type: "header", text: "Smart Routes" },
      "Optimizes travel routes based on fuel type, using diesel as the baseline, and compares the environmental impact of alternatives like petrol, CNG, and electric to help users make eco-conscious choices.",
      { type: "header", text: "Finding Alternatives" },
      "Recommends sustainable substitutes for materials like plastic and paper, raising awareness of eco-friendly options and encouraging responsible consumption.",
      { type: "header", text: "Eco Badges" },
      "A gamified system where users earn badges for eco-actions, promoting engagement and continuous participation through positive reinforcement."
  ]
  },
  {
    id: 2,
    title: "Secure Suite",
    desc: "An open-source tool designed to perform Vulnerability Assessment and Penetration Testing (VAPT) combined with OSINT (Open Source Intelligence) gathering.",
    tech: ["Python", "Kali Linux", "Nmap", "Metasploit"],
    repo: "https://github.com/RayVader987/Secure-Suite",
    liveDemo: null,
    highlights: [
      "SecureSuite takes an IP address or domain as input and runs several automated security checks, including:",
      "Nmap scanning: to detect open ports and running services.",
      "OSINT lookups: such as WHOIS information and DNS queries to gather public data about the target.",
      "Basic Web Vulnerability Scanning: checks for common HTTP security headers to flag potential risks.",
      "Report Generation: creates detailed reports in both plain text and PDF formats for easy sharing and analysis."
    ]
  },
  {
    id: 3,
    title: "Portfolio Level Up",
    desc: "This portfolio project — interactive, motion-driven UI to showcase projects and skills.",
    tech: ["React", "Three.js", "Howler.js"],
    repo: "https://github.com/yourusername/portfolio-level-up",
    liveDemo: null,
    highlights: [
      "3D particle background",
      "Smooth page transitions",
      "Background music integration",
      "Responsive gaming theme"
    ]
  }
];

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(6px)",
            background: "rgba(0, 0, 0, 0.7)"
          }}
          onClick={onClose}
        >
          <motion.div
            className="panel modal-panel"
            initial={{ y: 20, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1, transition: { duration: 0.35 } }}
            exit={{ y: 10, scale: 0.98, opacity: 0, transition: { duration: 0.25 } }}
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(880px, 92%)", maxWidth: "880px" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", gap: 12 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: "1.8rem", color: "var(--neon-cyan)", textShadow: "0 0 10px rgba(0,245,255,0.3)" }}>
                  {project.title}
                </h3>
                <p style={{ marginTop: 8, color: "var(--muted)", lineHeight: 1.6 }}>{project.desc}</p>
              </div>
              <button className="modal-close-btn" onClick={onClose}>
                ✕
              </button>
            </div>

            {/* Highlights */}
<div style={{ marginTop: 20 }}>
  <strong style={{ color: "var(--neon-cyan)" }}>Key Features</strong>
  <ul style={{ marginTop: 10, paddingLeft: 20 }}>
    {project.highlights.map((h, i) => {
      if (typeof h === 'object' && h.type === 'header') {
        return (
          <li key={i} style={{ color: "var(--neon-cyan)", fontWeight: "700", marginTop: 12, marginBottom: 6, listStyleType: "none", marginLeft: "-20px" }}>
            {h.text}
          </li>
        );
      }
      return (
        <li key={i} style={{ color: "var(--muted)", marginBottom: 6 }}>
          {h}
        </li>
      );
    })}
  </ul>
</div>

            {/* Tech Stack */}
            <div style={{ marginTop: 20 }}>
              <strong style={{ color: "var(--neon-cyan)" }}>Tech Stack</strong>
              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={project.repo} target="_blank" rel="noreferrer" className="project-btn">
                <span>View on GitHub</span>
              </a>
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="project-btn demo-btn">
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="page">
      <div className="panel">
        <div className="home-title">MISSIONS ACHIEVED</div>
        <div className="projects-grid" style={{ marginTop: 20 }}>
          {list.map((p) => (
            <motion.div
              key={p.id}
              className="project-card enhanced"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(p)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-title">{p.title}</div>
              <div className="project-desc" style={{ marginTop: 8, marginBottom: 12 }}>
                {p.desc}
              </div>
              
              {/* Tech badges on card */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                {p.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="tech-badge-small">{t}</span>
                ))}
              </div>

              <div className="project-card-footer">
                <span style={{ color: "var(--neon-cyan)", fontSize: "0.85rem" }}>
                  Click to view details →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}
import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity:0, y: 18 },
  enter: { opacity:1, y:0, transition:{ duration: .5 } },
  exit:  { opacity:0, y:-6, transition:{ duration:.3 } }
};

export default function Contact(){
  // Replace these values with your real contact details
  const phone = "+971-562203864";
  const email = "debraima1105@gmail.com";
  const github = "https://github.com/RayVader987";
  const linkedin = "https://www.linkedin.com/in/raima-deb-72899a291/";

  return (
    <motion.div className="page" variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <div className="panel">
        <div className="home-title">COMMS</div>

        <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
          <div className="project-card">
            <strong>Phone</strong>
            <div style={{ marginTop: 6 }}><a href={`tel:${phone}`} style={{ color: "var(--neon-cyan)" }}>{phone}</a></div>
          </div>

          <div className="project-card">
            <strong>Email</strong>
            <div style={{ marginTop: 6 }}><a href={`mailto:${email}`} style={{ color: "var(--neon-cyan)" }}>{email}</a></div>
          </div>

          <div className="project-card">
            <strong>GitHub</strong>
            <div style={{ marginTop: 6 }}><a href={github} target="_blank" rel="noreferrer" style={{ color: "var(--neon-cyan)" }}>{github}</a></div>
          </div>

          <div className="project-card">
            <strong>LinkedIn</strong>
            <div style={{ marginTop: 6 }}><a href={linkedin} target="_blank" rel="noreferrer" style={{ color: "var(--neon-cyan)" }}>{linkedin}</a></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

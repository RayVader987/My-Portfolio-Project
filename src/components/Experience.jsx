import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity:0, y: 18 },
  enter: { opacity:1, y:0, transition:{ duration: .5 } },
  exit:  { opacity:0, y:-6, transition:{ duration:.3 } }
};

export default function Experience(){
  // fill with your actual experience items later
  const items = [
    { role: "Backend Developer Intern", org: "Aiinhome Technologies Pvt. Ltd.", period: "Jun 2024 - Nov 2024", desc: "Developed and maintained RESTful APIs to support web and mobile applications. Designed and optimized database schemas for efficient data storage and retrieval. Integrated third-party services such as payment gateways and Twilio notifications. Implemented authentication and authorization for secure user access. Collaborated with frontend team to connect APIs with interactive UI components." }
  ];

  return (
    <motion.div className="page" variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <div className="panel">
        <div className="home-title">EXPERIENCE</div>
        <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
          {items.map((it, idx) => (
            <div key={idx} className="project-card">
              <strong>{it.role} — {it.org}</strong>
              <div style={{ color: "var(--muted)", marginTop: 6 }}>{it.period}</div>
              <div style={{ marginTop: 8 }}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

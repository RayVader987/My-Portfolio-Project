import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity:0, y: 18 },
  enter: { opacity:1, y:0, transition:{ duration: .5 } },
  exit:  { opacity:0, y:-6, transition:{ duration:.3 } }
};

export default function Education(){
  // replace with your real education records
  const items = [
    { degree: "B.Tech in Computer Science", institution: "Birla Institute  of Technology and Science Pilani, Dubai Campus", period: "2023 - 2027", desc: "Relevant courses: Data Structures, Operating Systems, Machine Learning, Neural Networks" },
    { degree: "Higher Secondary", institution: "St. Joseph's Convent, Chandannagar, West Bengali, India", period: "2007 - 2022", desc: "Science stream     Percentage: 84%" }
  ];

  return (
    <motion.div className="page" variants={pageVariants} initial="initial" animate="enter" exit="exit">
      <div className="panel">
        <div className="home-title">EDUCATION</div>
        <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
          {items.map((it, idx) => (
            <div key={idx} className="project-card">
              <strong>{it.degree}</strong>
              <div style={{ color: "var(--muted)", marginTop: 6 }}>{it.institution} • {it.period}</div>
              <div style={{ marginTop: 8 }}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

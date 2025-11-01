import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.995 },
  enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, scale: 0.995, transition: { duration: 0.35, ease: "easeIn" } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <motion.div
      className="page"
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      {/* Main Content */}
      <div className="panel" style={{ textAlign: "center" }}>
        <div className="home-title">RAIMA DEB</div>
        <div className="home-sub">
          Third-year CSE Student at BITS Pilani Dubai • Full Stack Developer • AI/ML Engineer
        </div>
        <p className="small">
          Welcome to my dev quest. Explore my missions (projects) and player stats (Skills)
        </p>
      </div>

      {/* About Me Section */}
      <motion.div 
        className="panel" 
        style={{ marginTop: "24px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 style={{ 
          fontSize: "1.8rem", 
          color: "var(--neon-cyan)", 
          marginBottom: "16px",
          textShadow: "0 0 10px rgba(0,245,255,0.3)"
        }}>
          ABOUT ME
        </h2>
        <p style={{ 
          color: "var(--muted)", 
          lineHeight: "1.8", 
          fontSize: "1.05rem",
          textAlign: "left"
        }}>
          Hi! I’m Raima, a third-year Computer Science student at BITS Pilani, Dubai, passionate about building intelligent and immersive digital experiences.
I’m currently training as a full-stack developer and love integrating AI/ML into real-world applications. I’m also deeply interested in cybersecurity, exploring how systems can be made smarter and more secure.
What excites me most is innovation—whether it's creating interactive 3D environments with Three.js, developing AI-powered tools, or building user interfaces that feel alive and meaningful. For me, great software lies at the intersection of creativity, technology, and impact. </p>
<p style={{ 
          color: "var(--muted)", 
          lineHeight: "1.8", 
          fontSize: "1.05rem",
          textAlign: "left"
        }}>
Outside of academics, you’ll find me: </p>
<p style={{ 
          color: "var(--muted)", 
          lineHeight: "1.8", 
          bulletPoints: "disc",
          fontSize: "1.05rem",
          textAlign: "left"
        }}>
Experimenting with AI-based projects
Learning new security concepts and challenges
Contributing to open-source and building passion projects </p>
<p style={{ 
          color: "var(--muted)", 
          lineHeight: "1.8", 
          fontSize: "1.05rem",
          textAlign: "left"
        }}>
My mission: To build software that solves problems, tells stories, and inspires people.
        </p>
      </motion.div>

      {/* Hobbies Section */}
      <motion.div 
        className="panel" 
        style={{ marginTop: "24px", marginBottom: "40px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 style={{ 
          fontSize: "1.8rem", 
          color: "var(--neon-cyan)", 
          marginBottom: "20px",
          textShadow: "0 0 10px rgba(0,245,255,0.3)"
        }}>
          HOBBIES & INTERESTS
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "16px" 
        }}>
          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🎮</div>
            <strong style={{ color: "#dffeff" }}>Gaming</strong>
            <p style={{ color: "var(--muted)", marginTop: "8px", fontSize: "0.9rem" }}>
              Exploring virtual worlds and game mechanics—from RPGs to strategy games
            </p>
          </motion.div>

          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🎨</div>
            <strong style={{ color: "#dffeff" }}>UI/UX Design</strong>
            <p style={{ color: "var(--muted)", marginTop: "8px", fontSize: "0.9rem" }}>
              Crafting beautiful interfaces and experimenting with motion design
            </p>
          </motion.div>

          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🔐</div>
            <strong style={{ color: "#dffeff" }}>Cybersecurity</strong>
            <p style={{ color: "var(--muted)", marginTop: "8px", fontSize: "0.9rem" }}>
              Diving into ethical hacking, CTF challenges, and security research
            </p>
          </motion.div>

          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📚</div>
            <strong style={{ color: "#dffeff" }}>Tech Reading</strong>
            <p style={{ color: "var(--muted)", marginTop: "8px", fontSize: "0.9rem" }}>
              Staying updated with latest frameworks, design trends, and tech innovations
            </p>
          </motion.div>

          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🎵</div>
            <strong style={{ color: "#dffeff" }}>Music</strong>
            <p style={{ color: "var(--muted)", marginTop: "8px", fontSize: "0.9rem" }}>
              Coding with epic soundtracks—because every bug fix needs a boss battle theme
            </p>
          </motion.div>

          <motion.div 
            className="project-card"
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>🌱</div>
            <strong style={{ color: "#dffeff" }}>Sustainability</strong>
            <p style={{ color: "var(--muted)", marginTop: "8px", fontSize: "0.9rem" }}>
              Building eco-conscious tech solutions and promoting green practices
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.3 } }
};

const skills = [
  { name: "Python", level: 90, category: "Backend" },
  { name: "Java", level: 75, category: "Backend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Three.js", level: 75, category: "3D Graphics" },
  { name: "WebGL", level: 70, category: "3D Graphics" },
  { name: "Git", level: 80, category: "Tools" },
  { name: "Linux", level: 75, category: "Tools" },
  { name: "MySQL", level: 80, category: "Tools" },
  { name: "Figma", level: 75, category: "Tools" },
  { name: "PowerBI", level: 75, category: "Tools" },
  { name: "Excel", level: 90, category: "Tools" },
  { name: "Powerpoint", level: 90, category: "Tools" }
];

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">Level {Math.floor(skill.level / 10)}/10</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ delay: index * 0.08 + 0.3, duration: 1, ease: "easeOut" }}
        >
          <span className="skill-percentage">{skill.level}%</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Profile() {
  const categoryOrder = ["Backend", "Frontend", "3D Graphics", "Tools"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentCategory = categoryOrder[currentIndex];
  const categorySkills = skills.filter(s => s.category === currentCategory);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < categoryOrder.length) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <motion.div 
      className="page" 
      variants={pageVariants} 
      initial="initial" 
      animate="enter" 
      exit="exit"
    >
      <div className="panel">
        <div className="home-title">PLAYER STATS</div>

        {/* Category Indicators - Moved to Top */}
        <div className="category-indicators" style={{ marginTop: "20px", marginBottom: "30px" }}>
          {categoryOrder.map((cat, idx) => (
            <button
              key={cat}
              className={`category-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
            />
          ))}
        </div>

        <div style={{ position: "relative", minHeight: "500px" }}>
          
          {/* Carousel Container */}
          <div className="skills-carousel-container">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentCategory}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="skill-category-carousel"
              >
                <h3 className="category-title-carousel">{currentCategory}</h3>
                <div className="skills-container-carousel">
                  {categorySkills.map((skill, idx) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={idx} 
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {currentIndex > 0 && (
              <button 
                className="carousel-arrow left"
                onClick={() => paginate(-1)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            )}
            
            {currentIndex < categoryOrder.length - 1 && (
              <button 
                className="carousel-arrow right"
                onClick={() => paginate(1)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
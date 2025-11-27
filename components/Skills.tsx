import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { Cpu, Globe, Terminal, Box, Layers, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning (Linear Regression, SVM, Decision Trees, Random Forest)", level: 85, icon: Box },
      { name: "Deep Learning (CNN, RNN, LSTM, Transformers)", level: 80, icon: Layers },
      { name: "Natural Language Processing (NLP)", level: 75, icon: Globe },
      { name: "TensorFlow / Keras & PyTorch", level: 80, icon: Cpu },
    ]
  },
  {
    title: "Development & Tools",
    skills: [
      { name: "Python (NumPy, Pandas, Scikit-learn, Matplotlib)", level: 90, icon: Terminal },
      { name: "Tkinter GUI & Pygame", level: 75, icon: Zap },
      { name: "API Testing (Postman) & HTML/CSS/SQL", level: 70, icon: Box },
      { name: "Office & Design (Excel, PowerPoint, Photoshop, Canva)", level: 80, icon: Layers },
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-16 justify-end">
          <div className="h-px bg-gray-700 flex-grow"></div>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white text-right">
            02. <span className="text-cyber-secondary">KỸ NĂNG</span>
          </h2>
          <div className="h-px bg-cyber-secondary w-12"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title}>
              <h3 className="font-rajdhani font-bold text-2xl text-cyber-primary mb-8 flex items-center gap-2">
                <span className="text-cyber-secondary">&gt;&gt;</span> {category.title}
              </h3>
              
              <div className="space-y-8">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + catIndex * 0.2 }}
                  >
                    <div className="flex justify-between mb-2 font-mono text-sm">
                      <span className="text-white flex items-center gap-2">
                        <skill.icon size={16} className="text-cyber-primary" />
                        {skill.name}
                      </span>
                      <span className="text-cyber-primary">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-cyber-dark border border-gray-800 rounded-sm overflow-hidden relative">
                      {/* Grid background in bar */}
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_2px,#000_2px)] bg-[size:4px_100%] opacity-20 z-10"></div>
                      
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyber-primary to-cyber-secondary relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                         <div className="absolute top-0 right-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white]"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
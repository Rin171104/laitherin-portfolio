import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "AI Chatbot Trợ Lý",
    category: "NLP",
    description: "Hệ thống chatbot thông minh sử dụng Transformer model, có khả năng hiểu ngữ cảnh và trả lời câu hỏi tự nhiên. Tích hợp RAG để truy xuất thông tin doanh nghiệp.",
    technologies: ["Python", "PyTorch", "Hugging Face", "FastAPI"],
    image: "https://picsum.photos/800/600?random=1",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Hệ Thống Nhận Diện",
    category: "Computer Vision",
    description: "Giải pháp chấm công và an ninh sử dụng nhận diện khuôn mặt thời gian thực. Độ chính xác 99.5% trên tập dữ liệu LFW, hoạt động tốt trong điều kiện thiếu sáng.",
    technologies: ["OpenCV", "TensorFlow", "Docker", "Raspberry Pi"],
    image: "https://picsum.photos/800/600?random=2",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Dự Đoán Tài Chính",
    category: "Data Science",
    description: "Mô hình LSTM dự đoán xu hướng thị trường chứng khoán dựa trên dữ liệu lịch sử và phân tích cảm xúc từ tin tức. Dashboard trực quan hóa dữ liệu theo thời gian thực.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    image: "https://picsum.photos/800/600?random=3",
    demoUrl: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-cyber-panel/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-cyber-primary w-12"></div>
          <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white">
            03. <span className="text-cyber-primary">DỰ ÁN NỔI BẬT</span>
          </h2>
          <div className="h-px bg-gray-700 flex-grow"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-cyber-dark border border-gray-800 hover:border-cyber-primary transition-all duration-300 flex flex-col h-full"
            >
              {/* Holographic Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden border-b border-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-cyber-dark/50 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="absolute top-2 right-2 bg-cyber-dark/90 border border-cyber-primary px-2 py-1 text-xs font-mono text-cyber-primary">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                <h3 className="font-orbitron font-bold text-xl text-white mb-3 group-hover:text-cyber-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow font-sans leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-cyber-secondary bg-cyber-secondary/10 px-2 py-1 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors" 
                      title="Source Code"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyber-primary transition-colors" 
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <div className="flex-grow h-px bg-gray-800 group-hover:bg-cyber-primary/50 transition-colors"></div>
                  <Code size={16} className="text-gray-600 group-hover:text-cyber-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
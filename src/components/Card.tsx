import { motion } from 'framer-motion';
import { ArrowRight, Github as GithubIcon } from 'lucide-react';
import { Project } from '@/data/projects';
import { Link } from 'react-router-dom';

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-shadow duration-300 cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Link
            to={`/project/${project.id}`}
            className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all"
          >
            <span>查看详情</span>
            <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <GithubIcon size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github as GithubIcon, Target, Zap } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '@/data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">项目不存在</h2>
          <Link to="/" className="text-primary-600 hover:underline">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span>返回首页</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-2xl mb-8">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.name}</h1>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 card-shadow">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">项目简介</h2>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Zap size={20} className="mr-2 text-primary-600" />
                    技术栈
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target size={20} className="mr-2 text-primary-600" />
                    项目成果
                  </h3>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-600">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-6 card-shadow sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">快速链接</h3>
                <div className="space-y-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-lg transition-all"
                  >
                    <ExternalLink size={18} />
                    <span>在线预览</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      <GithubIcon size={18} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">项目分类</h4>
                  <span className="text-gray-900 font-medium">{project.category}</span>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">技术标签</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

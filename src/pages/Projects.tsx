import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import { projects, categories } from '@/data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredProjects =
    activeCategory === '全部'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              项目集合
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">我的项目作品</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              展示我参与开发的各种项目，涵盖前端开发、后端开发、全栈开发等多个领域
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 card-shadow hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card project={project} />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">暂无该分类的项目</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

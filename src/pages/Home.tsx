import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Card from '@/components/Card';
import { projects, categories } from '@/data/projects';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('全部');

  const filteredProjects =
    activeCategory === '全部'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <Star size={16} className="mr-2" />
              欢迎来到我的作品集
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              打造卓越的
              <span className="text-gradient"> 数字体验</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              我是一名资深前端工程师，专注于构建高性能、可扩展的Web应用。
              拥有丰富的项目经验，致力于创造优秀的用户体验。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>查看项目</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-800 font-medium rounded-lg card-shadow hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>了解更多</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">精选项目</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              展示我的部分优秀作品，涵盖前端开发、后端开发、全栈开发等多个领域
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card project={project} />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">暂无该分类的项目</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-primary-600 font-medium hover:underline"
            >
              <span>查看更多项目</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

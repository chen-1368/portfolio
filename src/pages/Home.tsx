import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              热爱为笔
              <span className="text-gradient"> 雕琢线上清境</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              一名持续学习的 Web 开发爱好者，熟练运用 React、Vue
              独立完成网页项目，从页面布局、交互逻辑到线上部署自主实现，偏爱简约干净的视觉风格。
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
              展示个人独立开发的实战项目，记录日常学习与项目实战
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
            {filteredProjects
              .slice()
              .reverse()
              .slice(0, 3)
              .map((project, index) => (
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

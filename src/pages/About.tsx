import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';
import { experiences, education } from '@/data/experience';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-blue-500 rounded-3xl blur-3xl opacity-20" />
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden card-shadow">
                  <img
                    src="https://neeko-copilot.bytedance.net/api/text_to_image?prompt=professional%20software%20developer%20portrait%20headshot%20clean%20background&image_size=square"
                    alt="个人照片"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                <Users size={16} className="mr-2" />
                关于我
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">资深前端工程师</h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                我是一名充满热情的前端工程师，拥有丰富的开发经验。 专注于使用 React、Vue
                等现代前端技术构建高质量的 Web 应用。 我热爱创造优雅的用户界面和流畅的交互体验。
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                在过去的几年里，我参与了多个大型项目的开发，包括图片资源分享平台、企业级后台管理系统等。
                我善于解决复杂问题，注重代码质量和团队协作。
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">工作经历</h2>
            <p className="text-gray-600">积累丰富的行业经验，不断挑战自我</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative mb-8 ${index % 2 === 0 ? 'md:text-right' : 'md:ml-auto'}`}
              >
                <div
                  className={`absolute left-6 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg -translate-x-1/2`}
                />
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                >
                  <div className="bg-white p-6 rounded-xl card-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-500">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                    <p className="text-primary-600 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">教育背景</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-blue-50 p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.school}</h3>
                <p className="text-primary-600 font-medium mb-1">
                  {edu.degree} - {edu.major}
                </p>
                <p className="text-gray-500 text-sm">
                  {edu.startDate} - {edu.endDate}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

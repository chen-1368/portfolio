import { motion } from 'framer-motion';
import { getAssetUrl } from '@/utils/asset';

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
                    src={getAssetUrl('/images/sober.jpg')}
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Web 开发爱好者</h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                我是一名充满热情的 Web 开发爱好者，自学前端相关技术。 专注于使用 React、Vue
                等现代前端工具搭建完整 Web 应用，热衷于打造简洁优雅的界面与顺滑自然的交互体验。
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                搭建这个作品集站点，既是整理自己一路以来的开发成果，也希望能在这里记录技术成长。
                乐于和同好交流开发思路，也期待能收获更多实践机会，持续在 Web
                领域稳步学习、不断精进。
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Github as GithubIcon, Mail } from 'lucide-react';
import { socialLinks, contactInfo } from '@/data/socials';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">作品集</h3>
            <p className="text-gray-400 text-sm">
              本作品集收录我全部原创开发项目，记录学习历程与技术实践，欢迎交流沟通。
            </p>
          </div>

          <div>
            {/* 标题加 text-center 实现居中 */}
            <h4 className="text-lg font-semibold mb-4 text-center">快速链接</h4>
            {/* grid 容器加 justify-items-center：让每一列子元素水平居中 */}
            <ul className="px-6 grid grid-cols-4 gap-x-6 gap-y-2 text-sm text-gray-400 justify-items-center">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  关于
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors">
                  项目
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  联系
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">联系方式</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href={socialLinks.find((link) => link.name === 'GitHub')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2026 个人作品集 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

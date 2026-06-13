import {
  Github as GithubIcon,
  Linkedin as LinkedinIcon,
  Mail,
  Twitter as TwitterIcon,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">作品集</h3>
            <p className="text-gray-400 text-sm">
              专注于前端开发，致力于创造优秀的用户体验和高质量的代码。{' '}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-400">
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
            <h4 className="text-lg font-semibold mb-4">联系方式</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="mailto:example@email.com"
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

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github as GithubIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { socialLinks } from '@/data/socials';

const navItems = [
  { name: '首页', path: '/' },
  { name: '项目', path: '/projects' },
  { name: '关于', path: '/about' },
  { name: '联系', path: '/contact' },
];

const githubUrl = socialLinks.find((link) => link.name === 'GitHub')?.url;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 路由切换时关闭移动菜单
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // 菜单打开时锁定背景滚动
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // 移动端右侧抽屉菜单（通过 portal 渲染到 body，脱离 header 层叠上下文）
  const mobileDrawer = (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-[55]"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Right-side Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-[260px] bg-white shadow-2xl md:hidden z-[60] flex flex-col"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100">
              <span className="text-lg font-bold text-gradient">导航</span>
              <button
                className="p-2 -mr-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="关闭菜单"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 flex flex-col px-4 py-6 gap-2 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative flex items-center pl-10 py-3.5 rounded-xl text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-gradient-primary rounded-full" />
                    )}
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer */}
            {githubUrl && (
              <div className="px-4 py-5 border-t border-gray-100">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <GithubIcon size={18} />
                  GitHub
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 shadow-[0_1px_12px_-2px_rgba(0,0,0,0.08)]
        glass-effect border-b border-gray-200/60"
      >
        <div className="max-w-7xl mx-auto pb-2 px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl md:text-2xl font-bold text-gradient tracking-tight">
                作品集
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-4 py-2 rounded-lg text-[15px] font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-600'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/60'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="菜单"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer - portal renders outside header stacking context */}
      {createPortal(mobileDrawer, document.body)}
    </>
  );
}

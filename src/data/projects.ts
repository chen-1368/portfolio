export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  achievements: string[];
  link: string;
  github?: string;
}

export const categories = ['全部', '前端开发', '后端开发', '全栈开发', 'AI/ML'];

export const projects: Project[] = [
  {
    id: '1',
    name: '测试项目1',
    description: '该项目仅用来测试个人作品集网站是否正常运行，并无实际功能实现',
    image: '/images/ai-image-generator.svg',
    category: 'AI/ML',
    techStack: ['React', 'TypeScript', 'FastAPI', 'Stable Diffusion', 'WebSocket'],
    achievements: [
      '基于WebSocket实现图像生成实时推送能力，图像生成速度提升50%',
      '依托Stable Diffusion模型封装风格调度逻辑，实现20+艺术风格切换功能',
      '使用React+TS搭建交互前端，优化图像渲染体验，将用户满意度提升至92%',
    ],
    link: '#',
    github: 'https://github.com/example/ai-image-generator',
  },
  {
    id: '2',
    name: '个人作品集网站',
    description:
      '基于 React 18 + TypeScript + TailwindCSS 构建的现代化响应式个人作品集网站。项目使用 Vite 5 作为构建工具，通过 React Router v6 实现多页面路由（首页、关于、项目列表、项目详情、联系我共 5 个页面），借助 Framer Motion 实现滚动入场动画、页面切换过渡及悬浮交互效果，采用 Lucide React 提供统一图标体系，整体追求流畅的视觉体验与高质量的代码工程规范。',
    image: '/images/portfolio.jpg',
    category: '前端开发',
    techStack: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Vite',
      'React Router',
      'Framer Motion',
      'Lucide React',
    ],
    achievements: [
      '基于 React Router v6 搭建 SPA 多页面路由架构，支持浏览器前进/后退导航及页面切换自动滚动回顶',
      '使用 Framer Motion 封装滚动入场、页面过渡、卡片悬浮等动画效果，兼顾性能与视觉体验',
      '实现项目分类筛选功能，支持按「前端开发」「后端开发」「全栈开发」「AI/ML」等维度动态过滤项目列表',
      '采用 TailwindCSS 自定义工具类体系（text-gradient、glass-effect、card-shadow 等），建立统一的设计语言',
      '封装 getAssetUrl 工具函数，自动适配 Vite base 路径，确保在 GitHub Pages 部署环境下静态资源正确加载',
      '完成全站响应式布局，Header 支持移动端抽屉菜单，项目卡片与内容区域自适应多设备屏幕',
      '集成 ESLint + Prettier 统一代码风格，配置 TypeScript 严格模式保障类型安全',
    ],
    link: 'https://portfolio.luminoussunrise.site/',
    github: 'https://github.com/chen-1368/portfolio',
  },
];

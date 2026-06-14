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

export const projects: Project[] = [
  {
    id: '1',
    name: '测试项目1',
    description: '基于 Stable Diffusion 的图像生成 Web 应用，支持多种风格转换。',
    image: '/images/ai-image-generator.svg',
    category: 'AI/ML',
    techStack: ['React', 'TypeScript', 'FastAPI', 'Stable Diffusion', 'WebSocket'],
    achievements: [
      '图像生成速度提升 50%',
      '支持 20+ 艺术风格',
      '用户满意度达 92%'
    ],
    link: '#',
    github: 'https://github.com/example/ai-image-generator'
  },
  {
    id: '2',
    name: '个人作品集网站',
    description: '使用 React + TypeScript + TailwindCSS 构建的现代化个人作品集网站，展示个人项目和技能。',
    image: '/images/portfolio.jpg',
    category: '前端开发',
    techStack: ['React', 'TypeScript', 'TailwindCSS', 'Vite', 'React Router'],
    achievements: [
      '响应式设计，支持多设备访问',
      '流畅的页面动画效果',
      '现代化的 UI 设计'
    ],
    link: 'https://chen-1368.github.io/portfolio',
    github: 'https://github.com/chen-1368/portfolio'
  }
];

export const categories = ['全部', '前端开发', '后端开发', '全栈开发', 'AI/ML'];
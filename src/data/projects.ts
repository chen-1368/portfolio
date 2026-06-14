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
    name: '电商平台前端重构',
    description: '使用 React + TypeScript 重构传统电商平台，提升页面加载速度和用户体验。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=modern%20e-commerce%20website%20dashboard%20with%20clean%20UI%20design%20and%20product%20cards&image_size=landscape_16_9',
    category: '前端开发',
    techStack: ['React', 'TypeScript', 'Redux', 'TailwindCSS', 'Vite'],
    achievements: [
      '页面加载速度提升 40%',
      '代码覆盖率达到 85%',
      '实现响应式设计，支持多端访问'
    ],
    link: '#',
    github: 'https://github.com/example/ecommerce'
  },
  {
    id: '2',
    name: '数据可视化仪表盘',
    description: '为企业客户打造的数据可视化平台，支持实时数据监控和图表分析。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=data%20visualization%20dashboard%20with%20charts%20and%20graphs%20dark%20theme&image_size=landscape_16_9',
    category: '数据可视化',
    techStack: ['Vue 3', 'ECharts', 'D3.js', 'Pinia', 'Element Plus'],
    achievements: [
      '支持 10+ 种图表类型',
      '实时数据更新延迟低于 500ms',
      '服务 50+ 企业客户'
    ],
    link: '#',
    github: 'https://github.com/example/dashboard'
  },
  {
    id: '3',
    name: '移动端社交应用',
    description: '基于 React Native 的跨平台社交应用，支持即时通讯和动态分享。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=mobile%20social%20app%20interface%20design%20with%20chat%20and%20feed&image_size=portrait_16_9',
    category: '移动端',
    techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux Toolkit'],
    achievements: [
      'iOS 和 Android 双平台发布',
      '累计下载量超过 10 万',
      '用户留存率达 65%'
    ],
    link: '#',
    github: 'https://github.com/example/social-app'
  },
  {
    id: '4',
    name: '企业级后台管理系统',
    description: '为大型企业设计的综合性后台管理系统，包含权限管理、数据统计等功能。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=enterprise%20admin%20panel%20with%20sidebar%20navigation%20and%20data%20tables&image_size=landscape_16_9',
    category: '前端开发',
    techStack: ['React', 'TypeScript', 'Ant Design', 'Axios', 'Jest'],
    achievements: [
      '支持 2000+ 并发用户',
      '模块化架构，易于扩展',
      '完善的 RBAC 权限系统'
    ],
    link: '#',
    github: 'https://github.com/example/admin-system'
  },
  {
    id: '5',
    name: '在线教育平台',
    description: '提供在线课程学习的平台，支持视频播放、作业提交和成绩管理。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=online%20education%20platform%20with%20video%20player%20and%20course%20cards&image_size=landscape_16_9',
    category: '全栈开发',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    achievements: [
      '服务 5000+ 学生',
      '支持 4K 视频流播放',
      '课程完成率提升 30%'
    ],
    link: '#',
    github: 'https://github.com/example/education-platform'
  },
  {
    id: '6',
    name: 'AI 图像生成工具',
    description: '基于 Stable Diffusion 的图像生成 Web 应用，支持多种风格转换。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=AI%20image%20generation%20tool%20interface%20with%20creative%20design%20elements&image_size=landscape_16_9',
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
    id: '7',
    name: '个人作品集网站',
    description: '使用 React + TypeScript + TailwindCSS 构建的现代化个人作品集网站，展示个人项目和技能。',
    image: '/images/portfolio-preview.svg',
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
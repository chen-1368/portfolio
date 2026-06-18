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
  {
    id: '3',
    name: 'TodoFlow 待办事项管理',
    description:
      '基于 React 19 + TypeScript + TailwindCSS 构建的待办事项管理应用。项目使用 Vite 6 作为构建工具，通过 React Router v7 实现 SPA 多页面路由（仪表盘、任务列表、已完成共 3 个页面），借助 Zustand 5 进行全局状态管理并通过 persist 中间件实现数据本地持久化，采用 TailwindCSS 自定义 primary/accent 主题色体系并支持暗黑模式，使用 Lucide React 提供统一图标体系，整体追求流畅的交互体验与清晰的工程架构。',
    image: '/images/todoflow.jpg',
    category: '前端开发',
    techStack: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Vite',
      'React Router',
      'Zustand',
      'Lucide React',
    ],
    achievements: [
      '基于 React Router v7 搭建 SPA 多页面路由架构，通过 useLocation 动态匹配页面标题，实现仪表盘、任务列表、已完成三页无缝切换',
      '使用 Zustand 5 构建全局任务状态管理，借助 persist 中间件与 partialize 配置实现任务数据、筛选条件、暗黑模式偏好的选择性 localStorage 持久化',
      '实现完整的任务 CRUD 功能，支持创建、编辑、删除任务，任务表单复用同一组件并通过 task 属性区分新建与编辑模式',
      '封装可复用的 ConfirmModal 确认弹窗组件，删除操作需二次确认，避免误操作，提升用户体验安全性',
      '实现多维度任务筛选功能，支持按状态（待处理/进行中/已完成）一键切换、按优先级（高/中/低）下拉过滤及关键词模糊搜索，使用 useMemo 优化筛选计算性能',
      '仪表盘集成 StatsCard 统计卡片与进度条可视化面板，实时展示任务总数、各状态占比及高优先级任务完成进度',
      '实现右侧滑入式 TaskDetail 抽屉面板，支持查看任务详情、添加备注评论、快捷编辑与删除操作',
      '基于 TailwindCSS darkMode class 策略实现全站暗黑模式，主题状态同步至 document.documentElement，支持一键切换并持久化用户偏好',
      '完成响应式布局适配，Layout 组件监听窗口尺寸自动切换桌面/移动端模式，移动端侧边栏支持抽屉展开、半透明遮罩层及 body 滚动锁定',
      '在 TailwindCSS 中自定义 primary 与 accent 双色系主题变量，建立统一的组件设计语言（Button、Input、Select 等均复用主题色）',
      '使用 CSS transition 实现平滑展开/收起动画，全局自定义 fadeIn、slideIn、scaleIn 等 CSS 动画',
      '任务列表按创建时间倒序自动排序，封装 sortTasksByCreatedAtDesc 工具函数确保新增任务始终展示在最前',
      '集成 ESLint + TypeScript ESLint 统一代码规范，配置 TypeScript 严格模式保障类型安全',
    ],
    link: 'https://todoflow.luminoussunrise.site/',
    github: 'https://github.com/chen-1368/TodoFlow',
  },
  {
    id: '4',
    name: '在线图片压缩工具',
    description:
      '一款纯前端在线图片压缩工具，所有图片处理均在浏览器端通过 Canvas API 完成，不会上传到任何服务器，充分保障用户隐私。支持拖拽上传、质量调节、尺寸缩放、格式互转，并提供压缩前后并排对比与点击放大预览功能。',
    image: '/images/imagecompression.jpg',
    category: '前端开发',
    techStack: ['Vue 3', 'TypeScript', 'Vite', 'Element Plus', 'Canvas API', 'SCSS'],
    achievements: [
      '基于 Canvas API 实现纯浏览器端图片压缩，零服务端依赖，图片不离开用户设备',
      '支持 JPEG / PNG / WebP 三种格式互转，质量参数 1-100% 精细可调',
      '自定义输出尺寸并支持锁定宽高比联动缩放，满足多场景尺寸需求',
      '压缩前后并排对比预览，直观展示尺寸、格式、文件大小及压缩率变化',
      '封装可复用 ImagePreview 组件，支持 Teleport 全屏毛玻璃预览与 Esc 关闭',
      '响应式 Flex 流式布局，桌面端并排展示、移动端自动堆叠适配',
    ],
    link: 'https://imagecompression.luminoussunrise.site/',
    github: 'https://github.com/chen-1368/imageCompression',
  },
];

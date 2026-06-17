# 个人作品集 (Portfolio)

基于 React + TypeScript + TailwindCSS 构建的现代化个人作品集网站，用于展示个人项目、工作经历和教育背景。

## 技术栈

| 技术                                            | 版本  | 说明            |
| ----------------------------------------------- | ----- | --------------- |
| [React](https://react.dev/)                     | 18.2  | UI 框架         |
| [TypeScript](https://www.typescriptlang.org/)   | 5.3   | 类型安全        |
| [Vite](https://vitejs.dev/)                     | 5.0   | 构建工具        |
| [TailwindCSS](https://tailwindcss.com/)         | 3.4   | 原子化 CSS 框架 |
| [React Router](https://reactrouter.com/)        | 6.20  | 客户端路由      |
| [Framer Motion](https://www.framer.com/motion/) | 11.0  | 动画库          |
| [Lucide React](https://lucide.dev/)             | 0.312 | 图标库          |

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Card.tsx         # 项目卡片组件
│   ├── Footer.tsx       # 页脚组件
│   └── Header.tsx       # 导航栏组件（含移动端菜单）
├── data/                # 静态数据
│   ├── experience.ts    # 工作经历与教育背景
│   ├── projects.ts      # 项目数据
│   └── socials.ts       # 社交链接与联系方式
├── pages/               # 页面组件
│   ├── Home.tsx         # 首页（Hero + 精选项目展示）
│   ├── About.tsx        # 关于页（个人介绍 + 工作经历 + 教育背景）
│   ├── Projects.tsx     # 项目列表页（支持分类筛选）
│   ├── ProjectDetail.tsx# 项目详情页
│   └── Contact.tsx      # 联系页（联系表单 + 社交链接）
├── utils/               # 工具函数
│   └── asset.ts         # 静态资源路径处理（适配 GitHub Pages 部署）
├── App.tsx              # 应用根组件（路由配置）
├── main.tsx             # 入口文件
└── index.css            # 全局样式（含 TailwindCSS 自定义工具类）
```

## 页面路由

| 路径           | 页面          | 说明                                 |
| -------------- | ------------- | ------------------------------------ |
| `/`            | Home          | 首页，展示 Hero 区域和精选项目       |
| `/about`       | About         | 关于我，包含工作经历时间线和教育背景 |
| `/projects`    | Projects      | 所有项目列表，支持按分类筛选         |
| `/project/:id` | ProjectDetail | 单个项目详情，含技术栈、成果和链接   |
| `/contact`     | Contact       | 联系表单和社交媒体链接               |

## 功能特性

- **响应式设计**：适配桌面端、平板和手机等多种设备
- **页面动画**：使用 Framer Motion 实现流畅的滚动动画和页面过渡效果
- **项目分类筛选**：支持按"前端开发"、"后端开发"、"全栈开发"、"AI/ML"等分类过滤项目
- **GitHub Pages 部署适配**：通过 `getAssetUrl` 工具函数自动处理 `base` 路径，确保在 GitHub Pages 上静态资源正确加载
- **自定义 CSS 工具类**：提供 `text-gradient`、`bg-gradient-primary`、`glass-effect`、`card-shadow` 等可复用的样式类

## 快速开始

### 环境要求

- Node.js >= 16

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看效果。

### 构建生产版本

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

### 预览生产版本

```bash
npm run preview
```

### 代码检查与格式化

```bash
# ESLint 检查
npm run lint

# Prettier 格式化
npm run format
```

## 自定义内容

项目数据存放在 `src/data/` 目录下，修改以下文件即可更新网站内容：

- **`projects.ts`**：修改项目列表（名称、描述、图片、技术栈、链接等）
- **`experience.ts`**：修改工作经历和教育背景
- **`socials.ts`**：修改 GitHub 链接、邮箱、电话、地址等联系方式

项目图片存放在 `public/images/` 目录下，替换或新增图片后在 `projects.ts` 中更新 `image` 字段路径即可。

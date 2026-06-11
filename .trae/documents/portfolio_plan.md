# 个人作品集网站开发计划

## 1. 项目概述

本项目是一个现代化的个人作品集网站，展示个人技能、项目作品和联系方式。采用 React + TypeScript + Vite 技术栈，配合 Framer Motion 实现流畅的交互动画效果。

## 2. 核心功能需求

| 模块 | 功能描述 |
|------|----------|
| 作品展示 | 分类筛选、图片展示、项目简介 |
| 个人简介页 | 详细介绍、技能列表、工作经历 |
| 项目详情页 | 项目名称、截图、技术栈、成果说明、项目链接 |
| 联系方式 | 邮箱、GitHub、社交媒体链接 |

## 3. 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite 6
- **路由**: React Router v6
- **动画**: Framer Motion
- **样式**: TailwindCSS 3
- **代码规范**: ESLint + Prettier

## 4. 项目结构

```
src/
├── components/          # 公共组件
│   ├── Header.tsx       # 导航头部
│   ├── Footer.tsx       # 页脚
│   ├── Card.tsx         # 项目卡片
│   └── SkillBadge.tsx   # 技能标签
├── pages/              # 页面组件
│   ├── Home.tsx        # 首页（作品展示）
│   ├── About.tsx       # 个人简介页
│   ├── Project.tsx     # 项目详情页
│   └── Contact.tsx     # 联系方式页
├── data/               # 数据文件
│   ├── projects.ts     # 项目数据
│   ├── skills.ts       # 技能数据
│   └── experience.ts   # 经历数据
├── hooks/              # 自定义hooks
│   └── useIntersectionObserver.ts
├── utils/              # 工具函数
│   └── helpers.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 5. 开发步骤

### 步骤 1: 初始化项目

- 使用 Vite 创建 React + TypeScript 项目
- 安装依赖：tailwindcss, react-router-dom, framer-motion

### 步骤 2: 配置开发环境

- 配置 TailwindCSS 3
- 配置 ESLint 和 Prettier
- 设置路径别名

### 步骤 3: 创建数据文件

- `data/projects.ts` - 项目数组（项目名称、描述、图片、技术栈、链接、分类）
- `data/skills.ts` - 技能数组（技能名称、分类、熟练度）
- `data/experience.ts` - 经历数组（时间、职位、公司、描述）

### 步骤 4: 创建公共组件

- Header - 响应式导航栏，平滑滚动
- Footer - 底部联系方式
- Card - 项目卡片组件，带悬停动画
- SkillBadge - 技能标签组件

### 步骤 5: 创建页面

- Home - 作品展示页，支持分类筛选
- About - 个人简介页，展示技能和经历
- Project - 项目详情页，展示项目详细信息
- Contact - 联系方式页

### 步骤 6: 实现动画和交互

- 使用 Framer Motion 实现页面切换动画
- 实现卡片悬停效果
- 实现平滑滚动导航
- 实现图片懒加载

### 步骤 7: 优化和测试

- 响应式适配移动端
- 性能优化（懒加载、代码分割）
- 运行构建测试

## 6. 设计要求

| 要求 | 实现方式 |
|------|----------|
| 现代简洁风格 | TailwindCSS 简洁配色 |
| 栅格布局 | Tailwind Grid/Flexbox |
| 交互动画 | Framer Motion |
| 移动端适配 | Tailwind 响应式断点 |

## 7. 数据结构设计

### 项目数据结构
```typescript
interface Project {
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
```

### 技能数据结构
```typescript
interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: number; // 1-5
}
```

### 经历数据结构
```typescript
interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}
```

## 8. 注意事项

1. 使用 ES6+ 语法，代码要有注释
2. 组件化开发，每个组件职责单一
3. 注重性能优化，使用 React.lazy 和 Suspense
4. 图片使用懒加载
5. 代码风格统一，使用 ESLint + Prettier

## 9. 输出文件清单

| 文件路径 | 描述 |
|----------|------|
| src/components/Header.tsx | 导航头部组件 |
| src/components/Footer.tsx | 页脚组件 |
| src/components/Card.tsx | 项目卡片组件 |
| src/components/SkillBadge.tsx | 技能标签组件 |
| src/pages/Home.tsx | 首页 |
| src/pages/About.tsx | 个人简介页 |
| src/pages/Project.tsx | 项目详情页 |
| src/pages/Contact.tsx | 联系方式页 |
| src/data/projects.ts | 项目数据 |
| src/data/skills.ts | 技能数据 |
| src/data/experience.ts | 经历数据 |
| src/App.tsx | 主应用组件 |
| src/main.tsx | 入口文件 |
| src/index.css | 全局样式 |
| vite.config.ts | Vite配置 |
| tailwind.config.js | Tailwind配置 |
| tsconfig.json | TypeScript配置 |
| .eslintrc.json | ESLint配置 |
| .prettierrc | Prettier配置 |
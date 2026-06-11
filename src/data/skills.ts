export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level: number;
}

export const skills: Skill[] = [
  { id: '1', name: 'React', category: 'frontend', level: 5 },
  { id: '2', name: 'Vue.js', category: 'frontend', level: 4 },
  { id: '3', name: 'TypeScript', category: 'frontend', level: 5 },
  { id: '4', name: 'JavaScript', category: 'frontend', level: 5 },
  { id: '5', name: 'HTML5/CSS3', category: 'frontend', level: 5 },
  { id: '6', name: 'TailwindCSS', category: 'frontend', level: 5 },
  { id: '7', name: 'Redux', category: 'frontend', level: 4 },
  { id: '8', name: 'React Native', category: 'frontend', level: 4 },
  { id: '9', name: 'Node.js', category: 'backend', level: 4 },
  { id: '10', name: 'Express.js', category: 'backend', level: 4 },
  { id: '11', name: 'Python', category: 'backend', level: 3 },
  { id: '12', name: 'PostgreSQL', category: 'backend', level: 4 },
  { id: '13', name: 'MongoDB', category: 'backend', level: 3 },
  { id: '14', name: 'Git', category: 'tools', level: 5 },
  { id: '15', name: 'Docker', category: 'tools', level: 3 },
  { id: '16', name: 'Webpack/Vite', category: 'tools', level: 4 },
  { id: '17', name: 'Jest', category: 'tools', level: 4 },
  { id: '18', name: 'ESLint/Prettier', category: 'tools', level: 5 },
  { id: '19', name: 'GraphQL', category: 'other', level: 3 },
  { id: '20', name: 'RESTful API', category: 'other', level: 5 },
];

export const skillCategories = {
  frontend: '前端技术',
  backend: '后端技术',
  tools: '开发工具',
  other: '其他技能'
};
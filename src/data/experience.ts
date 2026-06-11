export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Xxx',
    position: '前端工程师',
    startDate: '2026-01',
    endDate: '至今',
    description: '负责企业级产品的前端架构设计和开发，带领团队完成多个核心项目的交付，推动前端工程化建设。'
  },
  {
    id: '2',
    company: 'Xxx',
    position: '前端开发实习生',
    startDate: '2025-07',
    endDate: '2025-12',
    description: '参与微信公众号平台的功能开发，协助完成多个重要功能模块，获得优秀实习生称号。'
  }
];

export interface Education {
  id: string;
  school: string;
  degree: string;
  major: string;
  startDate: string;
  endDate: string;
}

export const education: Education[] = [
  {
    id: '1',
    school: '东华理工大学',
    degree: '本科',
    major: '软件工程',
    startDate: '2022',
    endDate: '2026'
  }
];
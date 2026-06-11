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
    company: '字节跳动',
    position: '高级前端工程师',
    startDate: '2023-01',
    endDate: '至今',
    description: '负责企业级产品的前端架构设计和开发，带领团队完成多个核心项目的交付，推动前端工程化建设。'
  },
  {
    id: '2',
    company: '阿里巴巴',
    position: '前端工程师',
    startDate: '2020-06',
    endDate: '2022-12',
    description: '参与淘宝首页和核心业务模块的开发，负责性能优化和用户体验提升，代码覆盖率提升至 85%。'
  },
  {
    id: '3',
    company: '腾讯',
    position: '前端开发实习生',
    startDate: '2019-07',
    endDate: '2019-12',
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
    school: '清华大学',
    degree: '本科',
    major: '计算机科学与技术',
    startDate: '2016',
    endDate: '2020'
  }
];
import { motion } from 'framer-motion';
import { Skill } from '@/data/skills';

interface SkillBadgeProps {
  skill: Skill;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  const levelColors = [
    'bg-gray-100',
    'bg-green-100',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
  ];

  const levelBgColors = [
    'bg-gray-200',
    'bg-green-200',
    'bg-green-300',
    'bg-green-400',
    'bg-green-500',
    'bg-green-600',
  ];

  return (
    <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg card-shadow">
      <span className="text-sm font-medium text-gray-800 min-w-[80px]">
        {skill.name}
      </span>
      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`h-full ${levelBgColors[skill.level]} rounded-full`}
        />
      </div>
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${levelColors[skill.level]} text-gray-700`}>
        {skill.level}/5
      </span>
    </div>
  );
}

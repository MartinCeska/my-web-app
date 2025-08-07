import { Card } from "@/components/ui/card";

interface SkillsCardProps {
  category: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
}

const SkillsCard = ({ category, skills }: SkillsCardProps) => {
  const renderSkillDots = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div
        key={i}
        className={`w-3 h-3 rounded-full ${
          i < level ? 'bg-portfolio-teal' : 'bg-muted'
        }`}
      />
    ));
  };

  return (
    <Card className="p-4 bg-card border-0 shadow-sm">
      <h3 className="font-semibold text-foreground mb-4">{category}</h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-sm text-foreground">{skill.name}</span>
            <div className="flex gap-1">
              {renderSkillDots(skill.level)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SkillsCard;
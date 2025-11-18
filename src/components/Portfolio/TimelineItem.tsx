import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  location: string;
  skills: string[];
  duration: number; // years spent in position
  isLast?: boolean;
}

const TimelineItem = ({ year, title, company, location, skills, duration, isLast }: TimelineItemProps) => {
  // Scale height based on duration (minimum 16, maximum 32, scale by duration)
  const timelineHeight = Math.min(Math.max(16 + (duration - 1) * 8, 16), 32);
  return (
    <div className="flex gap-4 relative">
      {/* Year column */}
      <div className="w-12 text-right">
        <span className="text-sm font-medium text-portfolio-navy">{year}</span>
      </div>
      
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className={`bg-portfolio-teal rounded-full border-2 border-background ${duration >= 2 ? 'w-4 h-4' : 'w-3 h-3'}`}></div>
        {!isLast && <div className="w-px bg-border mt-1" style={{ height: `${timelineHeight * 4}px` }}></div>}
      </div>
      
      {/* Content */}
      <div className="flex-1" style={{ paddingBottom: `${timelineHeight + 16}px` }}>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">@ {company} {location}</p>
        
        <div className="flex flex-wrap gap-1">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-portfolio-teal text-white text-xs px-2 py-1"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
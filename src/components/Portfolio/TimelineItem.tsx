import { Badge } from "@/components/ui/badge";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  location: string;
  skills: string[];
  isLast?: boolean;
}

const TimelineItem = ({ year, title, company, location, skills, isLast }: TimelineItemProps) => {
  return (
    <div className="flex gap-4 relative">
      {/* Year column */}
      <div className="w-12 text-right">
        <span className="text-sm font-medium text-portfolio-navy">{year}</span>
      </div>
      
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-portfolio-teal rounded-full border-2 border-background"></div>
        {!isLast && <div className="w-px h-16 bg-border mt-1"></div>}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-8">
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
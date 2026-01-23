import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  company?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  company,
  liveUrl, 
  imageUrl 
}: ProjectCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="w-full h-48 bg-muted rounded-t-lg overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="flex gap-2">
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors" style={{ color: '#2b3da1' }}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        <div className="text-xs">@ {company}</div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          
        </div>
        
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
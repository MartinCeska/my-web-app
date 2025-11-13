import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/professional-headshot.jpg";

const ProfileCard = () => {
  return (
    <Card className="p-6 bg-card border-0 shadow-sm">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-32 h-40 rounded-lg overflow-hidden">
          <img 
            src={profileImage} 
            alt="Professional headshot" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Martin Ceska</h2>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>🇨🇿</span>
            <span>Born in Czech Republic</span>
          </div>
          <p className="text-sm text-muted-foreground">Currently living in Czech Republic</p>
        </div>

        <div className="space-y-2 w-full">
          <div className="text-left">
            <h3 className="font-medium text-sm text-foreground mb-1">Education</h3>
            <p className="text-xs text-muted-foreground">BSc. in Computer Science</p>
            <p className="text-xs text-muted-foreground">MSc. in Software Engineering</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center pt-2">
          <Badge variant="secondary" className="bg-portfolio-teal-light text-portfolio-navy text-xs">
            React
          </Badge>
          <Badge variant="secondary" className="bg-portfolio-teal-light text-portfolio-navy text-xs">
            TypeScript
          </Badge>
          <Badge variant="secondary" className="bg-portfolio-teal-light text-portfolio-navy text-xs">
            Node.js
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
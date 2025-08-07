import { Card } from "@/components/ui/card";
import { Building2, MapPin, GraduationCap } from "lucide-react";

interface CompanyCardProps {
  name: string;
  period: string;
  role: string;
  location: string;
  description: string;
  education?: string;
}

const CompanyCard = ({ name, period, role, location, description, education }: CompanyCardProps) => {
  return (
    <Card className="p-6 bg-card border-0 shadow-sm">
      <div className="flex items-start space-x-4">
        {/* Company logo placeholder */}
        <div className="w-16 h-16 bg-portfolio-teal rounded-lg flex items-center justify-center">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-portfolio-teal font-medium">{period}</p>
          <p className="text-sm text-muted-foreground mb-2">{role}</p>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-3">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
          
          <p className="text-sm text-foreground leading-relaxed">{description}</p>
          
          {education && (
            <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-3">
              <GraduationCap className="w-4 h-4" />
              <span>{education}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CompanyCard;
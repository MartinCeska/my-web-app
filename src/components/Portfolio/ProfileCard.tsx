import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/my_photo.png";
import czechFlag from "@/assets/Flag_of_the_Czech_Republic.png";
import { GraduationCap, Building2 } from "lucide-react";

const ProfileCard = () => {
  return (
    <Card className="p-6 bg-card border-0 shadow-sm">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-32 h-40 rounded-lg overflow-hidden">
          <img 
            src={profileImage} 
            alt="My photo" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Martin Ceska</h2>
          <p className="text-sm text-muted-foreground">Living in Prague, Czech Republic</p>
        </div>

        <div className="space-y-2 w-full">
          <div className="text-left">
            <h3 className="font-medium text-sm text-foreground mb-1">Education</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <GraduationCap className="w-4 h-4 inline-block mr-1" style={{ color: '#2b3da1' }} />
              MSc. in Computer Science
            </p>
          </div>
        </div>
        
        <div className="space-y-2 w-full">
          <div className="text-left">
            <h3 className="font-medium text-sm text-foreground mb-1">Current Job</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Building2 className="w-4 h-4 inline-block mr-1" style={{ color: '#2b3da1' }} />
              CPO @ Suitest
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
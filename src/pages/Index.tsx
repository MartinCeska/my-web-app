import ProfileCard from "@/components/Portfolio/ProfileCard";
import TimelineItem from "@/components/Portfolio/TimelineItem";
import SkillsCard from "@/components/Portfolio/SkillsCard";
import CompanyCard from "@/components/Portfolio/CompanyCard";
import { Mail, Linkedin, Github } from "lucide-react";

const workExperience = [
  {
    year: "2025",
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "🇺🇸 🏢",
    skills: ["React", "TypeScript", "Node.js", "AWS", "Team Leadership"]
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    location: "🇺🇸 🏢",
    skills: ["Vue.js", "Python", "PostgreSQL", "Docker", "Microservices"]
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "StartupX",
    location: "🇺🇸 🏢",
    skills: ["React", "JavaScript", "CSS", "REST APIs", "Git"]
  },
  {
    year: "2022",
    title: "Junior Developer",
    company: "CodeCrafters LLC",
    location: "🇺🇸 🏢",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Responsive Design"]
  }
];

const technicalSkills = [
  { name: "JavaScript/TypeScript", level: 5 },
  { name: "React/Next.js", level: 5 },
  { name: "Node.js", level: 4 },
  { name: "Python", level: 4 },
  { name: "AWS/Cloud", level: 3 }
];

const toolsSkills = [
  { name: "Git & GitHub", level: 5 },
  { name: "Docker", level: 4 },
  { name: "VS Code", level: 5 },
  { name: "Figma", level: 3 },
  { name: "Jira", level: 4 }
];

const languageSkills = [
  { name: "English", level: 5 },
  { name: "Spanish", level: 3 },
  { name: "French", level: 2 }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-portfolio-blue py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-center text-portfolio-navy">
            Professional Portfolio
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Work Experience */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground mb-6">Work Experience</h2>
              <div className="space-y-4">
                {workExperience.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    location={item.location}
                    skills={item.skills}
                    isLast={index === workExperience.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Profile */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileCard />
            
            <CompanyCard
              name="Your Current Company"
              period="2023 - present"
              role="Senior Software Engineer - Tech Lead"
              location="Based in Your City"
              description="Leading a team of developers building scalable web applications. Responsible for architecture decisions, code reviews, and mentoring junior developers."
              education="BSc. in Computer Science, MSc. in Software Engineering"
            />
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-1 space-y-6">
            <SkillsCard 
              category="Technical Skills"
              skills={technicalSkills}
            />
            
            <SkillsCard 
              category="Tools & Platforms"
              skills={toolsSkills}
            />
            
            <SkillsCard 
              category="Languages"
              skills={languageSkills}
            />
          </div>
        </div>

        {/* Contact Information */}
        <footer className="mt-16 bg-portfolio-blue rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-portfolio-navy mb-6">
              Contact Information
            </h3>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:your.email@example.com" 
                className="flex items-center space-x-2 text-portfolio-navy hover:text-portfolio-teal transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>your.email@example.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile" 
                className="flex items-center space-x-2 text-portfolio-navy hover:text-portfolio-teal transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/yourusername" 
                className="flex items-center space-x-2 text-portfolio-navy hover:text-portfolio-teal transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
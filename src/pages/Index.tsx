import ProfileCard from "@/components/Portfolio/ProfileCard";
import TimelineItem from "@/components/Portfolio/TimelineItem";
import SkillsCard from "@/components/Portfolio/SkillsCard";
import CompanyCard from "@/components/Portfolio/CompanyCard";
import ProjectCard from "@/components/Portfolio/ProjectCard";
import IntroVideo from "@/components/Portfolio/IntroVideo";
import { Mail, Linkedin, Github } from "lucide-react";

const workExperience = [
  {
    year: "2024",
    title: "Chief Product Officer",
    company: "Suitest s.r.o.",
    location: "🇨🇿 🏢",
    skills: ["Product Management", "Vision Definition", "Goal Setting", "Customer Satisfaction", "Market Analysis"],
    duration: 1
  },
  {
    year: "2020",
    title: "Project/Product Manager",
    company: "Suitest s.r.o.",
    location: "🇨🇿 🏢",
    skills: ["Roadmap Maintenance", "Feature Specification", "Business Analysis", "Negotiations", "Development Management"],
    duration: 4
  },
  {
    year: "2018",
    title: "Business Analyst",
    company: "Finnair Business Services OÜ",
    location: "🇪🇪 🏢",
    skills: ["Business Analysis", "Reporting", "Consulting", "Presentations"],
    duration: 2
  },
  {
    year: "2016",
    title: "Product/Project Manager and Consultant",
    company: "Konica Minolta Business Solutions Europe GmbH",
    location: "🇩🇪 🏢",
    skills: ["Gap Analysis", "Consulting", "Feature Specification", "Presentations", "Acceptance Testing"],
    duration: 2
  },
  {
    year: "2014",
    title: "Various Roles",
    company: "Icontio s.r.o.",
    location: "🇨🇿 🏢",
    skills: ["Project Management", "Presales", "Consulting", "Customer Support", "Trainings"],
    duration: 2
  }
];

const technicalSkills = [
  { name: "Product Management", level: 5 },
  { name: "Leadership", level: 5 },
  { name: "Project Management", level: 5 },
  { name: "Communication", level: 5 },
  { name: "Analysis", level: 5 }
];

const toolsSkills = [
  { name: "Jira & Confluence", level: 5 },
  { name: "MS Office", level: 5 },
  { name: "Power BI", level: 4 },
  { name: "Databases", level: 4 },
  { name: "Figma", level: 4 }
];

const languageSkills = [
  { name: "Czech", level: 5 },
  { name: "English", level: 5 },
  { name: "Spanish", level: 1 }
];

const projects = [
  {
    title: "Suitest Testing Platform",
    description: "Leading product development for automated testing platform for connected TV and streaming devices. Managing product roadmap, feature specifications, and customer satisfaction initiatives.",
    technologies: ["Product Management", "Market Analysis", "Roadmap Planning", "Feature Specification", "Customer Success"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Video */}
      <IntroVideo />

      <div className="container mx-auto px-6 py-8">
        {/* Profile Section */}
        <div className="mb-8">
          <ProfileCard />
        </div>
        
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
                    duration={item.duration}
                    isLast={index === workExperience.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Center Column - Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <CompanyCard
              name="Suitest s.r.o."
              period="2024 - present"
              role="Chief Product Officer"
              location="Based in Prague, Czech Republic"
              description="Leading product vision, strategy and development. Responsible for product management, customer satisfaction, market analysis, roadmap maintenance, and team leadership."
              education="MSc. Service Science, Management and Engineering (Masaryk University), BSc. Information Technology (Brno University of Technology)"
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

        {/* Projects Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Key Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <footer className="mt-16 bg-portfolio-blue rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-portfolio-navy mb-6">
              Contact Information
            </h3>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:ceska.martin@gmail.com" 
                className="flex items-center space-x-2 text-portfolio-navy hover:text-portfolio-teal transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>ceska.martin@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/martin-ceska-01" 
                className="flex items-center space-x-2 text-portfolio-navy hover:text-portfolio-teal transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="tel:+420721877377" 
                className="flex items-center space-x-2 text-portfolio-navy hover:text-portfolio-teal transition-colors"
              >
                <span>+420 721 877 377</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
import ProfileCard from "@/components/Portfolio/ProfileCard";
import TimelineItem from "@/components/Portfolio/TimelineItem";
import SkillsCard from "@/components/Portfolio/SkillsCard";
import CompanyCard from "@/components/Portfolio/CompanyCard";
import ProjectCard from "@/components/Portfolio/ProjectCard";
import IntroVideo from "@/components/Portfolio/IntroVideo";
import { Mail, Linkedin, Github } from "lucide-react";

const workExperience = [
  {
    year: "2025",
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    location: "🇺🇸 🏢",
    skills: ["React", "TypeScript", "Node.js", "AWS", "Team Leadership"],
    duration: 1 // 1 year
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    location: "🇺🇸 🏢",
    skills: ["Vue.js", "Python", "PostgreSQL", "Docker", "Microservices"],
    duration: 1 // 1 year
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "StartupX",
    location: "🇺🇸 🏢",
    skills: ["React", "JavaScript", "CSS", "REST APIs", "Git"],
    duration: 1 // 1 year
  },
  {
    year: "2022",
    title: "Junior Developer",
    company: "CodeCrafters LLC",
    location: "🇺🇸 🏢",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Responsive Design"],
    duration: 3 // 3 years (2020-2022)
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

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Weather Analytics Dashboard",
    description: "Data visualization dashboard for weather patterns with interactive charts and predictive analytics.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    liveUrl: "https://weather-analytics.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard"
  },
  {
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Expo"],
    githubUrl: "https://github.com/yourusername/fitness-tracker"
  }
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
        {/* Introduction Section - Video + Profile */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <IntroVideo />
            <div className="flex-1">
              <ProfileCard />
            </div>
          </div>
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

        {/* Projects Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
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
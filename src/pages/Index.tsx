import ProfileCard from "@/components/Portfolio/ProfileCard";
import TimelineItem from "@/components/Portfolio/TimelineItem";
import SkillsCard from "@/components/Portfolio/SkillsCard";

import ProjectCard from "@/components/Portfolio/ProjectCard";
import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/brand-icons";

const workExperience = [
  {
    year: "Since 09/2022",
    title: "Chief Product Officer",
    company: "Suitest",
    location: "in Prague, CZ",
    skills: ["PLG", "SaaS", "B2B", "Jira", "Confluence", "Figma", "PowerBI", "SQL", "Vibe Coding"],
    description: "Leading product strategy, roadmap, and cross-team alignment for single product SaaS company."
  },
  {
    year: "09/2018-09/2022",
    title: "Project/Product Manager",
    company: "Suitest",
    location: "in Prague, CZ",
    skills: ["PLG", "SaaS", "B2B", "Jira", "Confluence", "PowerBI", "SQL"],
    description: "Transformed the company from Project into Product-based environment and took over the product management for Suitest - test automation tool."
  },
  {
    year: "09/2017-06/2018",
    title: "Business Analyst",
    company: "Finnair",
    location: "in Tartu, Estonia",
    skills: ["Reporting", "Data Analysis", "Power BI", "SQL"],
    description: "Developed modern web interfaces and improved user experience for startup clients."
  },
  {
    year: "04/2017-06/2017",
    title: "Support Specialist",
    company: "EYELEVEL",
    location: "in Prague, CZ",
    skills: ["Reporting", "Data Analysis", "Customer Support"],
    description: "Support for internal ERP and preparation of reports."
  },
  {
    year: "12/2015-03/2017",
    title: "Portal B2B Consultant",
    company: "Konica Minolta Business Solutions Europe GmbH",
    location: "in Brno, CZ",
    skills: ["Backlog", "Specification", "Planning", "Presentations", "Trainings"],
    description: "Improving internal B2B portals - analysis, specifications and roll-outs into individual business branches across Europe."
  },
  {
    year: "07/2014-11/2015",
    title: "Product & Project Manager",
    company: "Icontio",
    location: "in Brno, CZ",
    skills: ["Backlog", "Specification", "Presentations", "Trainings", "Project Management"],
    description: "Continuous product improvement, communication with customers, custom changes and roll-outs into on-site infrastructure."
  },
  {
    year: "02/2014-06/2014",
    title: "Junior Product Manager",
    company: "Icontio",
    location: "in Brno, CZ",
    skills: ["Backlog", "Analysis", "Specification", "Presales", "Customer Support"],
    description: "Working on a Project Management tool - preparing sales materials, writing specifications, backlog maintenance, testing and customer support."
  }
];

const technicalSkills = [
  { name: "Markdown", level: 3 },
  { name: "SQL", level: 3 },
  { name: "Vibe Coding", level: 2 },
  { name: "HTML/CSS", level: 2 },
  { name: "JavaScript", level: 1 }
];

const toolsSkills = [
  { name: "Jira", level: 5 },
  { name: "Confluence", level: 4 },
  { name: "Power BI", level: 4 },
  { name: "Figma", level: 3 },
  { name: "VS Code", level: 3 },
  { name: "Git & GitHub", level: 2 }
];

const languageSkills = [
  { name: "Czech", level: 5 },
  { name: "English", level: 4 },
  { name: "Spanish", level: 1 }
];

const projects = [
  {
    title: "Suitest",
    description: "A tool for remote manual testing and test automation on living room devices. Enables device management, remote access, test creation and parallel execution across many devices and platforms.",
    technologies: ["Jira", "Confluence", "Power BI", "Figma", "Git"],
    company: "Suitest",
    liveUrl: "https://suite.st",
  },
  {
    title: "Power BI reports",
    description: "Set of reports for internal business decision by whole company.",
    technologies: ["Power BI", "SQL", "MS Excel", "DAX"],
    company: "Finnair",
  },
  {
    title: "B2B Portals for Direct and Indirect Sales",
    description: "Unified portals for all European branches with custom changes related to needs of each branch.",
    technologies: ["MS TFS", "MS Office", "SQL", "MS Navision", "SAP"],
    company: "Konica Minolta Business Solutions Europe GmbH",
  },
  {
    title: "PMPortal",
    description: "Project Management portal built on Microsoft SharePoint platform.",
    technologies: ["MS TFS", "MS Office", "BugTracker", "MS SharePoint"],
    company: "Icontio",
    liveUrl: "https://www.icontio.com/pmportal"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
          {/* Left column: Profile and Work Experience */}
          <div className="order-1 lg:order-1 lg:col-span-1 space-y-6">
            <ProfileCard />
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Work Experience</h2>
              <div className="space-y-4">
                {workExperience.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    company={item.company}
                    location={item.location}
                    skills={item.skills}
                    description={item.description}
                    isLast={index === workExperience.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Skills above Featured Projects */}
          <div className="order-2 lg:order-2 lg:col-span-1 space-y-6 flex flex-col">
            <div>
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
            <section className="flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Featured Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 flex-1">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    liveUrl={project.liveUrl}
                    company={project.company}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Contact Information */}
        <footer className="mt-16 bg-portfolio-blue rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Contacts</h2>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:ceska.martin@gmail.com" 
                className="flex items-center space-x-2 text-portfolio-navy transition-colors" style={{ color: '#2b3da1' }}
              >
                <Mail className="w-5 h-5" />
                <span>ceska.martin@gmail.com</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/martin-ceska/" 
                className="flex items-center space-x-2 text-portfolio-navy transition-colors" style={{ color: '#2b3da1' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/MartinCeska" 
                className="flex items-center space-x-2 text-portfolio-navy transition-colors" style={{ color: '#2b3da1' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="w-5 h-5" />
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
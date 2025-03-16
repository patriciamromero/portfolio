import * as React from "react"
import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { 
  section, 
  projectsSection, 
  sectionContent, 
  projectCarousel, 
  projectCard,
  projectDetails,
  projectTech,
  projectLinks,
  sectionTitle,
  sectionSubtitle,
  carouselControls,
  carouselDots,
  carouselDot,
  activeCard,
  carouselButton
} from "./sections.module.css"

const projects = [
  {
    title: "Dashboard using Excel",
    subtitle: "Data Visualization",
    description: "Transportation metrics dashboard and logistics movement tracking",
    url: "/puf_anual_report_2025.htm",
    technologies: ["Excel", "Analytics"]
  },
  {
    title: "Retail Consumer Analysis using PowerBI",
    subtitle: "Data Visualization & Analysis",
    description: "Analysis of retail consumer characteristics and their behavior in relation to advertising and purchasing channels",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNDIwM2M4MWYtMWY4My00ZTFmLTg1MjYtNmM5NWU1YTFiNGY3IiwidCI6ImNlYTFlYTNlLTYwYjItNGY3NS1hNmMyLWE2MDIyZThmOTYxYiIsImMiOjh9",
    technologies: ["PowerBI", "Analytics"]
  },
  {
    title: "F1 Analysis",
    subtitle: "Sports Analytics",
    description: "Analysis of the last decades of results in Formula 1.",
    url: "https://f1-historical-data.streamlit.app/",
    technologies: ["Python", "Pandas", "Numpy", "Streamlit"]
  },
]

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section className={`${section} ${projectsSection}`}>      
      <div className={sectionContent}>
        <h2 className={sectionTitle}>Featured Work</h2>
        <p className={sectionSubtitle}>A curated selection of data analysis projects</p>
        
        <div className={projectCarousel}>
          <div className={carouselControls}>
            <button 
              className={carouselButton} 
              onClick={prevProject}
              aria-label="Previous project"
            >
              <FaArrowLeft />
            </button>
            
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`${projectCard} ${index === currentProject ? activeCard : ''}`}
                style={{
                  opacity: index === currentProject ? 1 : 0,
                  transform: `translateX(${(index - currentProject) * 100}%)`
                }}
              >
                <div className={projectDetails}>
                  <span className="project-number">{(index + 1).toString().padStart(2, '0')}</span>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                  <p>{project.description}</p>
                  <div className={projectTech}>
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className={projectLinks}>
                    <a href={project.url} className="view-project" target="_blank" rel="noopener noreferrer">
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <button 
              className={carouselButton} 
              onClick={nextProject}
              aria-label="Next project"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className={carouselDots}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${carouselDot} ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection 
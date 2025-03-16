import * as React from "react"
import { FaChevronDown, FaCode, FaChartBar, FaLightbulb } from "react-icons/fa"
import { 
  section, 
  aboutSection, 
  sectionContent, 
  scrollIndicator,
  contentWrapper,
  skillsContainer,
  skillTitle,
  skillsList,
  skillItem,
  skillIcon,
  introText
} from "./sections.module.css"

const skills = {
  technical: {
    icon: <FaCode />,
    title: "Technical Skills",
    items: ["Python", "Pandas", "NumPy", "SQL"]
  },
  visualization: {
    icon: <FaChartBar />,
    title: "Data Visualization",
    items: ["Power BI", "Excel", "Data Storytelling"]
  },
  business: {
    icon: <FaLightbulb />,
    title: "Business Expertise",
    items: ["Marketing Strategy", "Product Development", "Market Analysis"]
  }
}

const AboutSection = () => (
  <section className={`${section} ${aboutSection}`}>
    <div className={contentWrapper}>
      <div className={sectionContent}>
        <h2>Patricia Marcos</h2>
        <div className="role">Data Analyst</div>
        <p className={introText}>
          Transforming raw data into meaningful insights through advanced analytics 
          and visualization. With a strong background in marketing and product development, 
          I bring a unique perspective to data analysis that bridges technical expertise 
          with business strategy.
        </p>
        
        <div className={skillsContainer}>
          {Object.values(skills).map((skillGroup, index) => (
            <div key={index} className={skillGroup}>
              <div className={skillIcon}>
                {skillGroup.icon}
              </div>
              <h3 className={skillTitle}>{skillGroup.title}</h3>
              <ul className={skillsList}>
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className={skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={scrollIndicator}>
        <span>Discover my projects</span>
        <FaChevronDown size={20} className="bounce" />
      </div>
    </div>
  </section>
)

export default AboutSection 
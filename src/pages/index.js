import * as React from "react"
import { useEffect, useRef } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as indexModuleCss from "../components/index.module.css"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"


const IndexPage = () => {
  const sectionsRef = useRef([]);
  
  useEffect(() => {
    let isScrolling = false;
    let currentSectionIndex = 0;
    const sections = sectionsRef.current;

    const scrollToSection = (index) => {
      isScrolling = true;
      sections[index].scrollIntoView({ behavior: "smooth" });
      currentSectionIndex = index;
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        scrollToSection(currentSectionIndex + 1);
      } else if (e.deltaY < 0 && currentSectionIndex > 0) {
        scrollToSection(currentSectionIndex - 1);
      }
    };

    const container = document.querySelector('#sections-container');
    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <Layout>
      <div className={indexModuleCss.sectionsContainer} id="sections-container">
        <div ref={el => sectionsRef.current[0] = el}>
          <AboutSection />
        </div>
        <div ref={el => sectionsRef.current[1] = el}>
          <ProjectsSection />
        </div>
        <div ref={el => sectionsRef.current[2] = el}>
          <ContactSection />
        </div>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Patricia Marcos | Portfolio" />

export default IndexPage

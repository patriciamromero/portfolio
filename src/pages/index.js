import * as React from "react"
import { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"

const IndexPage = () => {
  useEffect(() => {
    // Wait for the DOM to be fully loaded
    if (typeof window !== 'undefined') {
      let isScrolling = false;
      let currentSection = 0;
      const sections = document.querySelectorAll('section');

      const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
          isScrolling = true;
          sections[index].scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            isScrolling = false;
          }, 1000);
        }
      };

      const handleWheel = (e) => {
        e.preventDefault();
        if (isScrolling) return;

        if (e.deltaY > 0 && currentSection < sections.length - 1) {
          currentSection++;
          scrollToSection(currentSection);
        } else if (e.deltaY < 0 && currentSection > 0) {
          currentSection--;
          scrollToSection(currentSection);
        }
      };

      // Add touch support for mobile devices
      let touchStartY = 0;
      const handleTouchStart = (e) => {
        touchStartY = e.touches[0].clientY;
      };

      const handleTouchMove = (e) => {
        if (isScrolling) return;
        
        const touchEndY = e.touches[0].clientY;
        const diff = touchStartY - touchEndY;

        if (Math.abs(diff) > 50) { // Minimum swipe distance
          if (diff > 0 && currentSection < sections.length - 1) {
            currentSection++;
            scrollToSection(currentSection);
          } else if (diff < 0 && currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
          }
        }
      };

      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);

      return () => {
        document.removeEventListener('wheel', handleWheel);
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);

  return (
    <Layout>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
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

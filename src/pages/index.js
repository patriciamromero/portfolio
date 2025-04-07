import * as React from "react"
import { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"

const IndexPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      const isMobileDevice = mobileRegex.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
    };

    // Initial check
    checkIfMobile();

    // Recheck on resize
    window.addEventListener('resize', checkIfMobile);

    // Only apply auto-scrolling if not on mobile
    if (typeof window !== 'undefined' && !isMobile) {
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

      document.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        document.removeEventListener('wheel', handleWheel);
      };
    }

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

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

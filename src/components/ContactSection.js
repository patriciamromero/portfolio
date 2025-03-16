import * as React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import {
    section,
    contactSection,
    sectionContent,
    socialLinks,
    socialLink,
    contactTitle,
    contactInfo} from "./sections.module.css"

const ContactSection = () => (
    <section className={`${section} ${contactSection}`}>
        <div className={sectionContent}>
            <h2 className={contactTitle}>Let's Collaborate</h2>
            <div className={contactInfo}>
                <h3>Get in Touch</h3>
                <p>
                    Looking for data-driven insights or collaboration opportunities?
                    I'd love to hear from you. Let's create something amazing together.
                </p>

                <div className={socialLinks}>
                    <a
                        href="https://www.linkedin.com/in/patricia-marcos-romero/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialLink}
                    >
                        <FaLinkedin size={28} />
                        <span>Connect on LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/patriciamromero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={socialLink}
                    >
                        <FaGithub size={28} />
                        <span>Follow on GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
)

export default ContactSection 
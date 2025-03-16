/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { header, headerContent, footer, footerContent, layoutWrapper } from "./layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={layoutWrapper}>
      <header className={header}>
        <div className={headerContent}>
          <h1>Patricia Marcos || Data Analyst</h1>
        </div>
      </header>
      <main>{children}</main>
      <footer className={footer}>
        <div className={footerContent}>
          © {new Date().getFullYear()} Patricia Marcos. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Layout

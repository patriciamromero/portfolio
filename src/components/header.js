import * as React from "react"
import { header, headerContent } from "./layout.module.css"

const Header = ({ siteTitle }) => (
  <header className={header}>
        <div className={headerContent}>
          <h1>{siteTitle}</h1>
        </div>
      </header>
)

export default Header

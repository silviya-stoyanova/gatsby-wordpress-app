import React from "react"

const Footer = () => (
    <footer className="site-footer wrap">
        <div className="site-info">
            © {new Date().getFullYear()}, Made by
          {` `}
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/silviya-stoyanova">Silviya Stoyanova</a>
        </div>
    </footer>
)

export default Footer
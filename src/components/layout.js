import * as React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>

      
      <p><b><u>Contact Form</u></b></p>

    <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />

      <div>
        <label>Your Name:</label><br></br>
        <input type="text" name="name" />
      </div>
      <br></br>
      <div>
        <label>Your Email:</label><br></br>
        <input type="email" name="email" />
      </div>
      <br></br>
      <div>
        <label>Message:</label><br></br>
        <textarea name="message" rows="5" cols="30" />
      </div>
      <br></br>
      <button type="submit">Send</button>
    </form>
  

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

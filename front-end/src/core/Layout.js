import React from "react";
import Footer from '../pages/Footer'

const Layout = ({
  title,
  description,
  className,
  children
}) => (
  <div className={className}>
    {title && <h2>{title}</h2>}
    {description && <p>{description}</p>}
    <div>
      {children}
    </div>
    {/* {Footer} */}
  </div>
)

export default Layout;

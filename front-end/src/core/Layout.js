import React from "react";

const Layout = ({
  title = 'Title',
  description,
  className,
  children
}) => (
  <div className={className}>
    <h2>{title}</h2>
    <p>{description}</p>
    <div>
      {children}
    </div>
  </div>
)

export default Layout;

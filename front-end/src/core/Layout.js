import React from "react";

const Layout = ({
  title,
  description,
  className,
  children
}) => (
  <div className={className}>
    {title && <h2 className="text-info" style={{textAlign: 'center'}}>{title}</h2>}
    {description && <p>{description}</p>}
    <div>
      {children}
    </div>
  </div>
)

export default Layout;

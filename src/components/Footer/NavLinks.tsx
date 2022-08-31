import React from 'react';

interface NavLinksProps {
  links: string[];
}

const NavLinks = ({ links }: NavLinksProps): JSX.Element => {
  // here is a pretty looking es6 array destructure increasing readibility
  const [title, ...subLinks] = links;
  return (
    <div className="nav-links-container">
      <div className="nav-title">{title}</div>
      <>
        {subLinks.map((link, idx) => {
          return (
            <div key={idx} className="nav-link">
              {link}
            </div>
          );
        })}
      </>
    </div>
  );
};

export default NavLinks;

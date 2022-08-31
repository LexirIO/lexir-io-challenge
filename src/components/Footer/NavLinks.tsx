import React from 'react';

interface NavLinksProps {
  links: string[];
}

const NavLinks = ({ links }: NavLinksProps): JSX.Element => {
  // here is a pretty looking es6 array destructure increasing readibility
  const [title, ...subLinks] = links;
  return (
    <ul className="nav-links-container">
      <h5 className="nav-title">{title}</h5>
      <>
        {subLinks.map((link, idx) => {
          return (
            <li key={idx} className="nav-link">
              {link}
            </li>
          );
        })}
      </>
    </ul>
  );
};

export default NavLinks;

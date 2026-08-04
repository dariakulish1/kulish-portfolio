"use client";
import Link from "next/link";
import "./Navbar.scss";

const links = [
  {
    id: 1,
    title: "about-me",
    color: "white",
    url: "/about-me",
  },
  {
    id: 2,
    title: "skills",
    color: "#ca9ace",
    url: "/skills",
  },
  {
    id: 3,
    title: "commercial-projects",
    color: "#f1e8a0",
    url: "/commercial-projects",
  },
  {
    id: 4,
    title: "contacts",
    color: "#f37d46",
    url: "/contacts",
  },
];

const Navbar = () => {

  return (
    <div className="navbar-container">
      <div className="navbar-container__navbar-links">
        {links.map((link) => {
          return (
              <Link
                className="navbar-container__link-btn"
                key={link.id}
                href={link.url}
                style={{ color: link.color }}
              >
                <div className="navbar-container__circle-btn-icon" style={{ backgroundColor: link.color }} />
                {link.title}
              </Link>
          );
        })}
      </div>
      <p className="navbar-container__location">Odesa, UA</p>
    </div>
  );
};

export default Navbar;
"use client";
import Link from "next/link";
import "./Navbar.scss";
import { useState } from "react";
import { useMediaQuery } from "@/app/hooks/useMediaQuery";
import { ChevronLeft, Menu } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <div className={isMobile ? "navbar-container py-1" : "navbar-container"}>
        <div className="navbar-container__navbar-links">
          {isMobile && (
            <button className="reletive z-101" onClick={() => {
              setIsOpen(!isOpen)
            }}>
              {isOpen ? <ChevronLeft size={40} /> : <Menu size={40} />}
            </button>
          )}
          {!isMobile && links.map((link) => {
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
      {(isMobile && isOpen) && (
        <div className="flex flex-col bg-[#060f17] w-full h-full absolute z-100 pt-15">
          {links.map((link) => {
            return (
                <Link
                  className="navbar-container__link-btn"
                  key={link.id}
                  href={link.url}
                  style={{ color: link.color }}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="navbar-container__circle-btn-icon" style={{ backgroundColor: link.color }} />
                  {link.title}
                </Link>
            );
          })}
        </div>
      )}
    </>
    
  );
};

export default Navbar;
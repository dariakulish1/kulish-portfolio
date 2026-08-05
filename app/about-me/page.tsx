"use client";

import Link from "next/link";
import "./page.scss";
import { TypeAnimation } from "react-type-animation";
import TextIndicator from "../components/TextIndicator/TextIndicator";
import Lottie from "lottie-react";
import programmingComputer from "../images/programmingComputer.json";
import CommentText from "../components/CommentText/CommentText";
import AnimatedTitleText from "../components/AnimatedTitleText/AnimatedTitleText";

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-container">
      <CommentText text="front-end (react) developer" />
      <AnimatedTitleText text="Daria Kulish" />
      <div className="about-container__description-container">
        <div className="about-container__text-marker" />
        <p className="about-container__description-text">
          I build <span style={{ color: "#09131E" }}>responsive, production-ready interfaces</span> — most recently
          for an AI-powered platform that turns a prompt into a full course, 
          presentation or quiz. I care about the parts of front-end work closest 
          to the user: clean layouts, fast pages, and interactions that feel obvious. 
          I &#x27; m also finishing a degree in Applied Mathematics, which mostly shows 
          up in how much I like things to be well-structured.</p>
      </div>
      <div className="about-container__work-link-container">
        <Link href="/commercial-projects" className="about-container__work-link"
        style={{ backgroundColor: "#C7DEF6", color: "#09131E" }}>
          See my work &#x279D;
        </Link>
        <Link href="/contacts" className="about-container__work-link"
        style={{ backgroundColor: "transparent", color: "#C7DEF6", border: "1px solid #C7DEF6" }}>
          Get in touch
        </Link>
      </div>
      <div className="about-container__text-indicator-container">
        <TextIndicator title="Open to Front-End roles" backgroundColor="#AFB8C3" />
        <TextIndicator title="English (upper-intermediate)" backgroundColor="#AFB8C3" />
        <TextIndicator title="Ukrainian & Russian (native)" backgroundColor="#AFB8C3" />
      </div>
      <h1 className="about-container__education-title">Education & growth</h1>
      <div className="about-container__education-container">
        <p style={{ color: "#09131E", fontWeight: "500", width: "150px" }}>2023 — present</p>
        <div className="about-container__education-text-container">
          <p style={{ color: "white", fontWeight: "600", }}>Atom Space</p>
          <p style={{ color: "#AFB8C3" }}>React, fundamental programming, soft skills and English.</p>
        </div>
      </div>
      <div className="about-container__education-container">
        <p style={{ color: "#09131E", fontWeight: "500", width: "150px" }}>2022 — 2026</p>
        <div className="about-container__education-text-container">
          <p style={{ color: "white", fontWeight: "600", }}>Odesa I. I. Mechnikov National University</p>
          <p style={{ color: "#AFB8C3" }}>B.Sc. in Applied Mathematics.</p>
        </div>
      </div>
    </div>
    <Lottie animationData={programmingComputer} loop={true} />
    </div>
  );
}

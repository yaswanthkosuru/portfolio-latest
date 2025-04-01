import React from "react"
import { Github, Linkedin, FileText, Code2 } from "lucide-react"

export interface SocialLink {
  href: string;
  icon: React.ReactElement;
}

export interface MenuItem {
  text: string;
  href: string;
}

export const navConfig = {
  portfolioText: "Yaswanth",
  menuItems: [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" }
  ] as MenuItem[],
  resume_link:"https://drive.google.com/file/d/1OMHkOj3rxN7VYvFoqjH6PN2CqiagyB9U/view?usp=sharing",
  socialLinks: {
    github: {
      href: "https://github.com/yaswanthkosuru",
      icon: React.createElement(Github, { className: "w-5 h-5 transition-transform group-hover:scale-110" })
    },
    linkedin: {
      href: "https://linkedin.com/in/04",
      icon: React.createElement(Linkedin, { className: "w-5 h-5 transition-transform group-hover:scale-110" })
    },
    projects: {
      href: "#projects",
      icon: React.createElement(Code2, { className: "w-5 h-5 transition-transform group-hover:scale-110" })
    }
  } as Record<string, SocialLink>
}
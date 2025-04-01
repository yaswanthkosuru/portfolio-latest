"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

// Interface
interface Project {
  id: number
  name: string
  description: string
  image: string
  url: string
  githubUrl: string
  tags?: string[]
}

// Sample Data
const projects: Project[] = [
  {
    id: 1,
    name: "Lushly Ecommerce",
    description:
      "A full-featured E-commerce platform built with Next.js, showcasing server components and modern web practices.",
    image: "/portfolio/projects/lushly.png",
    url: "https://lushly.vercel.app/",
    githubUrl: "https://github.com/yaswanthkosuru/lushly",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "next auth","Node","MongoDB"],
  },
  {
    id: 2,
    name: "Resorts landing page",
    description:
      "A Full Featured Resorts landing page built with nextjs with advanced animations",
    image: "/portfolio/projects/resorts.png",
    url: "https://resortslandingpage.vercel.app/",
    githubUrl: "https://github.com/yaswanthkosuru/resorts",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    name: "Medical Landing Page",
    description: "A Full Featured Landing Page built with nextjs and framer motion.",
    image: "/portfolio/projects/medical.png",
    url: "https://medicare-mkjy.vercel.app/",
    githubUrl: "https://github.com/yaswanthkosuru/medical",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
  },
  {
    id: 4,
    name: "Chess Game",
    description: "A Chess Game with real time chat support built with Next.js, showcasing server components and modern web practices.",
    image: "/portfolio/projects/chess.png",
    url: "https://chess-game-one-delta.vercel.app/",
    githubUrl: "https://github.com/yaswanthkosuru/chess-game",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "realtime chat","sockets"],
  },
  {
    id: 5,
    name: "portfolio old one",
    description: "A Chess Game with real time chat support built with Next.js, showcasing server components and modern web practices.",
    image: "/portfolio/projects/oldportfolio.png",
    url: "https://portfolio-zeta-eight-97.vercel.app/",
    githubUrl: "https://github.com/yaswanthkosuru/portfolio",
    tags: ["Next.js", "TypeScript", "Tailwind CSS","Accenrity ui"],
  },
  {
    id: 6,
    name: "Job portal Management",
    description: "A Job portal Management built with Next.js, showcasing server components and modern web practices.",
    image: "/portfolio/projects/jobportalmanagement.png",
    url: "https://job-frontend-eight.vercel.app/",
    githubUrl: "https://github.com/yaswanthkosuru/job-frontend",
    tags: ["Next.js", "TypeScript", "Tailwind CSS","Django","Django Rest Framework","Postgresql","Docker"],
  }
]

// Icons
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 ml-1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 10.5m-4.5 0h4.5"
    />
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4 ml-1.5">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

// Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative flex flex-col rounded-xl overflow-hidden backdrop-blur-sm bg-white/10 dark:bg-gray-900/30 border border-amber-200/30 dark:border-amber-700/30 shadow-xl shadow-amber-700/5 dark:shadow-black/20 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-600/10">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-transparent via-amber-500/10 to-yellow-500/10 dark:from-transparent dark:via-amber-500/20 dark:to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Image Section with Hover Effect */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.name} screenshot`}
          width={600}
          height={400}
          className="w-full h-52 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Project name overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-xl font-bold text-white drop-shadow-md">{project.name}</h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
          {project.name}
        </h3>

        {/* Tags Section */}
        {project.tags && project.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

        {/* Links Section */}
        <div className="mt-auto flex items-center justify-start space-x-4">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex z-20 items-center justify-center px-4 py-2 text-sm font-medium rounded-lg text-gray-900 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:focus:ring-offset-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Visit Site
            <ExternalLinkIcon />
          </Link>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border border-amber-200 dark:border-amber-700/50 text-gray-700 dark:text-gray-200 bg-white/80 dark:bg-gray-800/50 hover:bg-amber-50 dark:hover:bg-amber-900/20 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:focus:ring-offset-gray-900 transition-all duration-200 backdrop-blur-sm shadow-md hover:shadow-lg"
          >
            GitHub
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}

// Projects Container Component
const Projects: React.FC = () => {
  // Dark mode detection (client-side only)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if user prefers dark mode or has dark class on html
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const htmlHasDarkClass = document.documentElement.classList.contains("dark")

    setIsDarkMode(darkModeMediaQuery.matches || htmlHasDarkClass)

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches || htmlHasDarkClass)
    }

    darkModeMediaQuery.addEventListener("change", handleChange)
    return () => darkModeMediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <section className={` ${isDarkMode ? "dark" : ""}`}>
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-amber-50 via-amber-100/50 to-white dark:from-gray-900 dark:via-amber-950/10 dark:to-gray-950">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5 dark:from-amber-500/10 dark:to-yellow-500/10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-amber-400/10 dark:bg-amber-600/10 blur-3xl"></div>
          <div className="absolute top-60 -left-40 h-80 w-80 rounded-full bg-yellow-400/10 dark:bg-yellow-600/10 blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-yellow-600 dark:from-amber-300 dark:to-yellow-400">
              Featured Projects
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"></div>
            <p className="mt-6 text-lg text-gray-700 dark:text-amber-100/80 max-w-2xl mx-auto">
              Explore my latest work showcasing modern web development techniques and creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects


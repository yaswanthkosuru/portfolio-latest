export interface Project {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  preview: string;
  tech: string[];
  links: {
    website: string;
    github: string;
    video: string;
  };
  color: string;
}

export const projects: Project[] = [
  {
    id: "day-code",
    subtitle: "Code Activity Tracker",
    title: "Day Code",
    description: "Day Code is a web application that allows users to track their daily code activity with leetcode and github api integration, even know and set reminders about the codeforces, codechef, leetcode contests along with google calendar integration, also know about the upcoming hackathons.",
    preview: "https://daycode.vercel.app/",
    tech: ["React", "API Integrations", "GraphQL", "Typescript", "Tailwind CSS", "Local Storage", "Vercel"],
    links: {
      website: "https://daycode.vercel.app/",
      github: "https://github.com/samrathreddy",
      video: "https://www.linkedin.com/posts/samrath-reddy_attention-coders-whether-youre-a-dsa-activity-7307755723109580800-0b-H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2VzSEBqolc3AY61MDI9xdX1-_3h_Dtyb0"
    },
    color: "from-[#10B981] to-[#059669]"
  },
  {
    id: "mail-domain",
    subtitle: "Domain Categorizer",
    title: "Email Domain Checker",
    description: "The Email Domain Checker is a web application that allows users to validate and categorize email addresses by public email, bussiness email, temporary email, disposable email using a powerful validation service along with OpenAI integration for Email Provider Detection. The application features a user-friendly interface built with React and Tailwind CSS, and it includes a backend powered by Node.js and Express. Even python module is also build for python specifc email provider detection.",
    preview: "https://email-domain-checker.vercel.app/",
    tech: ["Typescript", "Tailwind CSS", "Python", "React", "Node.js", "Express.js", "OpenAI", "Vercel"],
    links: {
      website: "https://email-domain-checker.vercel.app/",
      github: "https://github.com/samrathreddy/email-domain-checker",
      video: "https://www.loom.com/share/d6416d21dd71473bad0e9ffbd4692643?sid=e4c34f75-ce2b-441d-ad4e-125b974735bd"
    },
    color: "from-[#10B981] to-[#059669]"
  },
  {
    id: "Xoerox",
    subtitle: "An AI based OCR tool",
    title: "Xoerox AI",
    description: "XOEROX AI is a document processing application that helps in conversion of unstructured data to structure data using Optical Character Recognition (OCR) as well as Open AI for enhanced text extraction and formatting. It allows users to upload PDF files, process them to extract text, and convert the text into structured Markdown as well as in JSON.",
    preview: "https://xoerox.vercel.app/",
    tech: ["Express.js", "React", "Node.js", "TypeScript", "Optimal Character Recognition (OCR)", "OpenAI", "Vercel"],
    links: {
      website: "https://xoerox.vercel.app/",
      github: "https://github.com/samrathreddy/XOEROX",
      video: "https://www.loom.com/share/52583e6b1b684f6b8570b6751e286809"
    },
    color: "from-[#4F46E5] to-[#7C3AED]"
  },
  {
    id: "Unipay",
    subtitle: "University Fee Payment Platform",
    title: "Unipay",
    description: "A comprehensive and user-friendly fee payment platform designed specifically for university students. This application streamlines the fee payment process and provides fee insights via Discord and payment integration via Razorpay.",
    preview: "https://unipay-cvr.vercel.app/",
    tech: ["Express.js", "React", "MongoDB", "JavaScript", "Razorpay API", "Discord API", "Xlsx", "Security"],
    links: {
      website: "https://unipay-cvr.vercel.app/",
      github: "https://github.com/samrathreddy/Unipay/",
      video: "https://www.loom.com/share/b5639004dbab48be9184a8f39d17499f?t=21"
    },
    color: "from-[#FFD700] to-[#FFC000]"
  }
]; 
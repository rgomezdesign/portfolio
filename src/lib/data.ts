export const nav = ["about", "projects", "experience", "contact"] as const;

export const social = [
  {
    label: "GitHub",
    href: "https://github.com",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.29 10.29 0 0 0 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.4a10.161 10.161 0 0 0 6.29 2.166c1.42 0 2.77-.29 4.006-.817zm-11.62-2.fires c.23-.47 3.11-5.43 8.34-7.148.152-.05.31-.094.465-.133a30.67 30.67 0 0 0-.852-1.783C7.492 8.87 2.59 8.976 2.17 8.99a10.078 10.078 0 0 0 2.215 10.46zM2.34 7.603c.43.01 4.61.062 9.138-1.25-.39-.7-.8-1.398-1.24-2.065C6.19 5.96 3.12 6.02 2.84 6.025A10.12 10.12 0 0 0 2.34 7.6zM12.1 3.01a57.73 57.73 0 0 1 1.255 2.108c3.09-.784 5.28-1.96 5.52-2.1A10.089 10.089 0 0 0 12.1 3.01zm7.753 1.97c-.27.175-2.65 1.445-5.9 2.32.243.5.47 1.007.683 1.515.083.2.163.4.24.602 3.384-.426 6.733.257 7.072.328a10.128 10.128 0 0 0-2.095-4.765z"/></svg>`,
  },
  {
    label: "Behance",
    href: "https://behance.net",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-.17 1.36-.5.36-1.08.63-1.74.78-.66.17-1.36.25-2.09.25H0V4.51h6.938zm-.41 5.55c.584 0 1.06-.14 1.42-.42.35-.28.528-.72.528-1.3 0-.33-.06-.6-.18-.82-.12-.22-.29-.39-.5-.51-.21-.12-.45-.2-.72-.25-.27-.04-.55-.07-.84-.07H3.3v3.37h3.23zm.19 5.79c.32 0 .62-.03.9-.09s.52-.17.73-.33c.21-.15.37-.36.49-.62.12-.26.18-.6.18-.99 0-.79-.22-1.35-.67-1.69-.44-.34-1.03-.5-1.76-.5H3.3v4.22h3.42zm9.96-8.43c.26-.55.62-1.02 1.07-1.41.46-.38.99-.67 1.6-.85.62-.19 1.27-.28 1.97-.28.63 0 1.24.07 1.83.22.6.15 1.13.4 1.59.75.46.34.83.8 1.1 1.36.27.56.4 1.24.4 2.04v.63c0 .2-.01.4-.04.58H17.02c.03.71.26 1.26.69 1.66.43.4.97.6 1.62.6.47 0 .89-.1 1.24-.32.35-.2.6-.47.74-.8h2.7c-.27.89-.78 1.65-1.54 2.28-.75.63-1.74.94-2.96.94-.74 0-1.43-.12-2.06-.36-.63-.24-1.17-.59-1.62-1.06-.44-.46-.79-1.03-1.03-1.69-.24-.66-.36-1.4-.36-2.22 0-.79.12-1.52.37-2.17zM19.61 9.6c-.38-.36-.9-.53-1.57-.53-.44 0-.8.08-1.1.24-.29.16-.53.36-.72.6-.19.24-.32.5-.4.77-.08.27-.12.53-.13.78h4.56c-.08-.82-.26-1.49-.64-1.86zM14.85 4.83h5.29v1.46h-5.29V4.83z"/></svg>`,
  },
];

export const experience = [
  {
    period: "Dec 2021 — Present",
    title: "Product Designer",
    company: "Willow Laboratories",
    href: "#",
    description:
      "Design UI/UX experiences for web and mobile healthcare products, focusing on interfaces that feel intuitive, clear, and visually polished. Collaborate closely with developers and cross-functional teams, delivering wireframes, prototypes, high-fidelity designs, motion graphics, design systems, and 3D visuals across multiple products.",
    tags: ["UI/UX Design", "Design Systems", "Motion Design", "Healthcare"],
  },
  {
    period: "2023",
    title: "UI/UX Designer",
    company: "Palazzo Salon",
    href: "#",
    description:
      "Redesigned the salon's website to improve user experience and brand representation. Developed a modern, responsive layout using UI/UX best practices and ensured cohesive branding across digital platforms.",
    tags: ["UI/UX Design", "Figma", "Branding"],
  },
  {
    period: "2019 — 2020",
    title: "Product & Brand Designer",
    company: "Carrera Effect",
    href: "#",
    description:
      "Redesigned the client's website to enhance user experience and brand consistency. Developed branding materials, promotional items, and merchandise for digital and print use.",
    tags: ["Product Design", "Branding", "Figma"],
  },
];

export const projects = [
  {
    title: "Nuvem",
    description:
      "An immersive furniture collection experience combining 3D visuals, responsive layouts, and refined interaction design.",
    tags: ["Figma", "Claude Code", "3D Design"],
    href: "#", // Nuvem moved to ~/Documents/nuvem — set to its live URL once published
    image: "/projects/nuvem-thumbnail.png",
    imageAlt: "Nuvem project screenshot",
  },
  {
    title: "Drink Company",
    description:
      "An interactive beverage brand experience focused on motion, immersive product storytelling, and implementation-driven UI.",
    tags: ["Figma", "Claude Code", "3D Design"],
    href: "/drink-company/index.html",
    image: "/projects/drink-company.png",
    imageAlt: "Drink Company project screenshot",
  },
  {
    title: "El Toro Loco Grill",
    description:
      "A concept redesign reimagining a local restaurant's digital experience with responsive layouts, streamlined ordering flows, and modern web interactions.",
    tags: ["Figma", "Claude Code"],
    href: "#",
    image: "/projects/el-toro-loco.png",
    imageAlt: "El Toro Loco Grill project screenshot",
  },
  {
    title: "Sound Garden",
    description:
      "A connected speaker concept that reimagines everyday technology as a living object, blending product design, 3D visualization, and digital storytelling.",
    tags: ["Figma", "Claude Code", "3D Design"],
    href: "/sound-garden/index.html",
    image: "/projects/sound-garden.png",
    imageAlt: "Sound Garden project screenshot",
  },
];

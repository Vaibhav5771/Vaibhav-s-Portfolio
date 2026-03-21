const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "gallery",
        name: "Gallery",
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "video",
        name: "Videos",
        icon: "quicktime.png", // add a QuickTime-style icon to your /public/icons folder
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: true,
    },
];


const techStack = [
    {
        category: "Languages",
        items: ["Dart", "JavaScript", "Python"],
    },
    {
        category: "Frontend",
        items: ["React.js", "Next.js"],
    },
    {
        category: "Mobile",
        items: ["Flutter", "React Native"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js"],
    },
    {
        category: "Cloud",
        items: ["Firebase", "Supabase"],
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "Figma"],
    },
];


const socials = [
    {
        id: 1,
        text: "GitHub",
        icon: "/icons/github.svg",
        bg: "#24292e",
        link: "https://github.com/Vaibhav5771",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#0a66c2",
        link: "https://www.linkedin.com/in/vaibhavpardeshi21",
    },
    {
        id: 3,
        text: "Instagram",
        icon: "/icons/instagram.svg",
        bg: "#e1306c",
        link: "https://www.instagram.com/vaibhxv.57",
    },
    {
        id: 4,
        text: "Email",
        icon: "/icons/mail.svg",
        bg: "#6b7280",
        link: "mailto:vaibhavpardeshi190@gmail.com",
    },
];


const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

// YouTube IDs extracted from project href links
const videos = [
    {
        id: 1,
        title: "Drift Academy (G-Sap)",
        youtubeId: "wVpnXJbTWoE",
        description: " Drift Academy, a Hoonigan-inspired web app built with React and Vite! This dynamic site showcases a drifting academy and accessories store, complete with slick GSAP animations and a responsive design that brings the car culture vibe to life.",
    },
    {
        id: 2,
        title: "Clone",
        youtubeId: "XlreyxaUylQ",
        description: "The working MPV of Clone Photocopying Printing Platform tested using Android and Windows with real printing devices.",
    },
    {
        id: 3,
        title: "MacBook Pro Website",
        youtubeId: "NwJEKzHBrZY",
        description: "Developed a fully responsive MacBook Pro website replica using React, Tailwind CSS, and GSAP. Implemented smooth scroll animations, interactive UI elements, and Apple-inspired minimal design for a polished and high-performance web experience",
    },
    {
        id: 4,
        title: "SkillMeter",
        youtubeId: "yr8go9OkBKg",
        description: "Built an AI-powered web app that analyzes resumes and provides instant, data-driven feedback. It compares resumes against job descriptions to highlight strengths, missing keywords, and skill gaps, helping users optimize their resumes for better job matches.",
    },
    {
        id: 5,
        title: "SkillSync",
        youtubeId: "oj6-aHjwRRM",
        description: "Skill Sync – The real-time skill-sharing platform where experts teach and learners practice together instantly. Video calls and chat– all in one place. Built with Flutter, Firebase & Agora SDK. Available on Web + Android.",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    techStack,
    socials,
    photosLinks,
    gallery,
    videos,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Clone",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-1", // icon position inside Finder
            windowPosition: "top-[5vh] left-8", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "clone.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-1",
                    description: [
                        "Clone is a smart printing marketplace that modernizes traditional photocopy shops by enabling fully remote, contactless document printing.",
                        "Users can upload documents, customize print preferences using natural language, and send jobs directly to nearby shops without physically visiting.",
                        "The platform features real-time shop discovery with live wait times, pricing, and printer capabilities, creating a seamless and transparent experience.",
                        "Shop owners receive automated print jobs on a Windows dashboard, where tasks are queued, managed, and processed without manual intervention.",
                        "Built with Flutter and Firebase, Clone ensures real-time updates, secure authentication, temporary encrypted storage, and a scalable backend.",
                        "Integrated UPI payments and QR-based pickup make the entire workflow fast, private, and completely contactless.",
                        "Clone reimagines a 100-year-old industry into a modern, efficient ecosystem and is currently in MVP stage, ready for pilot testing in Pune."
                    ]
                },
                {
                    id: 2,
                    name: "clone.com",
                    icon: "/images/youtube.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/XlreyxaUylQ",
                    position: "top-10 left-40",
                },
                {
                    id: 4,
                    name: "clone.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-10 left-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/figma.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/design/PzJP5rWDydGrnR1Tz9nAHx/Clone-Ver-2.0?t=Ge4f51USd1xOhCvg-1",
                    position: "top-50 left-1",
                },
                {
                    id: 6,
                    name: "Idea.fig",
                    icon: "/images/figma.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/design/p7gznTrl221RHAwNPZuObp/Pitch-Deck?node-id=0-1&t=9IqL6GcTVg7vpOHU-1",
                    position: "top-50 left-40",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "CVAnalyzer",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-40",
            windowPosition: "top-[20vh] left-8",
            children: [
                {
                    id: 1,
                    name: "CVAnalyzer.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-1",
                    description: [
                        "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
                        "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
                    ],
                },
                {
                    id: 2,
                    name: "cvanalyzer.com",
                    icon: "/images/youtube.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/yr8go9OkBKg",
                    position: "top-10 left-40",
                },
                {
                    id: 4,
                    name: "cvanalyzer.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 left-1",
                    imageUrl: "/images/project-2.png",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "SkillSync",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[36vh] left-8",
            children: [
                {
                    id: 1,
                    name: "SkillSync.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-1",
                    description: [
                        "Skill Sync is a real-time skill-sharing platform where experts teach and learners practice together instantly through live interaction.",
                        "Instead of pre-recorded courses, it enables dynamic one-on-one or group sessions using integrated video calls and chat.",
                        "Users can seamlessly connect, communicate, and collaborate in real time, making learning more practical and engaging.",
                        "Think of it like a live classroom in your pocket—where teaching and learning happen simultaneously, anytime, anywhere.",
                        "Built with Flutter, Firebase, and Agora SDK, it delivers smooth cross-platform performance on both web and Android with real-time communication capabilities."
                    ]
                },
                {
                    id: 2,
                    name: "SkillSync.com",
                    icon: "/images/youtube.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/oj6-aHjwRRM",
                    position: "top-10 left-40",
                },
                {
                    id: 4,
                    name: "skill-sync.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 left-1",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/figma.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/design/VDXJtBM9ReYU4FTuOE39a3/SkillSync?node-id=0-1&t=cICRpu3Uw5V76Bj5-1",
                    position: "top-50 left-40",
                },
            ],
        },
        {
            id: 8,
            name: "Websites",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-50 left-40",
            windowPosition: "top-[52vh] left-8",
            children: [
                {
                    id: 1,
                    name: "drift-academy.live",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://heroic-tanuki-c4a092.netlify.app/",
                    position: "top-10 left-1",
                },
                {
                    id: 2,
                    name: "drift-academy-demo.com",
                    icon: "/images/youtube.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/wVpnXJbTWoE",
                    position: "top-10 left-40",
                },
                {
                    id: 3,
                    name: "macbook-pro.live",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://mac-book-pro-clone.web.app/",
                    position: "top-10 left-80",
                },
                {
                    id: 4,
                    name: "macbook-pro-demo.com",
                    icon: "/images/youtube.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/NwJEKzHBrZY",
                    position: "top-50 left-1",
                },
                {
                    id: 5,
                    name: "Drift Academy.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 left-40",
                    imageUrl: "/images/project-4.png",
                },
                {
                    id: 6,
                    name: "MacBook Pro.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 left-80",
                    imageUrl: "/images/project-5.png",
                },
            ],
        },
        {
            id: 9,
            name: "SarkariRunner",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-50 left-1",
            windowPosition: "top-[69vh] left-5",
            children: [
                {
                    id: 1,
                    name: "SarkariRunner.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-1",
                    description: [
                        "Sarkari Runner is a platform that helps people get government documents from their hometown without the need to travel.",
                        "Instead of standing in long queues or relying on unverified local agents, users can remotely connect with trusted and verified agents who handle the entire process on their behalf.",
                        "The platform enables users to post tasks, receive bids from agents, track progress with real-time updates, and pay securely through an escrow system.",
                        "Agents upload proof at every step, ensuring transparency and trust while customers stay informed throughout the process.",
                        "Think of it as your personal government errand assistant—making paperwork fast, reliable, and completely remote.",
                        "Built with Flutter, React, and Supabase, it delivers a seamless multi-platform experience with secure data handling and real-time communication."
                    ]
                },
                {
                    id: 3,
                    name: "skill-sync.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 left-1",
                    imageUrl: "/images/sarkarirunner.png",
                },
                {
                    id: 4,
                    name: "Design.fig",
                    icon: "/images/figma.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://www.figma.com/design/dWR168CaBLY2rsp8GIaJoQ/Sarkari-Runner?node-id=0-1&t=tjhv39a9wvApFPAP-1",
                    position: "top-10 left-40",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-1",
            imageUrl: "/images/vaibhav.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-10 left-40",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/gal3.png",
            description: [
                "Hey! I'm Vaibhav 👋, a developer who enjoys building clean, fast, and interactive web and mobile experiences that actually work well.",
                "I specialize in Flutter, React, and JavaScript—and I love making interfaces feel smooth, responsive, and intuitive.",
                "I'm big on clean UI, solid UX, and writing code that doesn't require a debugging expedition to understand.",
                "Outside of dev work, you'll find me fine-tuning layouts late at night, experimenting with animations, or convincing myself that the next tech purchase is totally justified 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "top-10 left-1",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-1",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-40",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    gallery: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    video: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
/*
  LAXHYA IT PROFESSIONAL PORTFOLIO
  =================================
  This is the main file to customize.
  Change the sample content below. You normally do not need to edit app.js.
*/

window.PORTFOLIO_DATA = {
  personal: {
    name: "Suresh Narava",
    initials: "SN",
    headline: "IT Professional building reliable digital solutions across software, cloud and DevOps.",
    intro: "My experience spans IT support, cloud infrastructure and DevOps, with hands-on work in AWS, Terraform, Kubernetes, Docker and CI/CD. Alongside my professional experience, I’m building Laxhya to turn what I learn into useful software and real-world digital products.",
    location: "London, United Kingdom",
    email: "sureshbabunarava@gmail.com",
    availability: "Open to meaningful opportunities",
    profileImage: "assets/profile.jpg", // Example: "assets/profile.jpg". Leave blank to use the animated initials design.
    resumeFile: "assets/resume.pdf",
    roles: [
      "Software Engineering",
      "IT Support & Operations",
      "Cloud & DevOps",
    ]
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],

  metrics: [
    { value: "2+", label: "Years in technology" },
    { value: "5+", label: "Projects & improvements" },
    { value: "99%", label: "Reliability mindset" }
  ],

  about: {
    eyebrow: "About me",
    title: "Software, cloud, DevOps and IT support with a hands-on approach.",
    paragraphs: [
      "I am a technology professional with experience across IT support, cloud infrastructure and DevOps. I enjoy understanding technical problems, troubleshooting them methodically and building practical solutions that make systems more reliable and easier to manage.",
      "My experience includes AWS, Terraform, Kubernetes, Docker, Jenkins, Ansible, Linux, monitoring and CI/CD, alongside enterprise IT support using ServiceNow, Windows, Active Directory and Entra ID. I am also continuously upskilling in software development and applying what I learn by building real products through Laxhya."
    ],
    principles: [
      {
        title: "Solve the real problem",
        text: "Understand the problem first, then choose the right technology to create a practical and useful solution.",
        icon: "◎"
      },
      {
        title: "Keep Learning",
        text: "Turn new skills and concepts into real projects, experiments and working software.",
        icon: "⌘"
      },
      {
        title: "Own the outcome",
        text: "Take responsibility from understanding an issue through implementation, troubleshooting and continuous improvement.",
        icon: "↗"
      }
    ]
  },

  experience: [
    {
      company: "Laxhya",
      role: "Founder & Software Engineer",
      period: "2026 - Present",
      location: "Remote",
      summary: "Building Laxhya as a small software venture focused on turning ideas and real-world problems into practical digital solutions.",
      achievements: [
        "Designed and developed the Laxhya website and digital portfolio experience using Next.js, focusing on a clean, responsive and user-friendly interface.",

        "Started building digital portfolio solutions for students, freshers and software professionals as a modern alternative to the traditional CV.",

        "Managing the product journey from idea and planning through development, deployment and continuous improvement while applying newly developed software and cloud skills."
      ],
      technologies: ["Next.js", "Project Management", "Web Development", "Git", "Networking"]
    },
    {
      company: "Infosys",
      role: "Systems Associate",
      period: "2022 - 2024",
      location: "Hybrid",
      summary: "Worked on cloud infrastructure, CI/CD, containerisation and monitoring for enterprise environments. And Provided enterprise Level 2 technical support and identity administration for a globally distributed user base.",
      achievements: [
        "Designed and maintained Jenkins CI/CD pipelines for automated build, test and deployment workflows, reducing release cycle times by 20%.",

        "Provisioned and managed AWS infrastructure including EC2, IAM, VPC and RDS using Terraform across development, staging and production environments.",

        "Managed containerised applications using Docker and Kubernetes/EKS and implemented monitoring with Prometheus, Grafana, Datadog and AWS CloudWatch.",
        
        "Delivered Level 2 remote technical support through ServiceNow, resolving hardware, software and system incidents within SLA.",

        "Troubleshot Windows 10/11 systems and supported Microsoft 365 applications including Teams, Exchange Online, OneDrive and SharePoint.",

        "Administered Active Directory and Entra ID, including Joiner-Mover-Leaver processes, account provisioning, deprovisioning, licensing and device allocation.",

        "Served as shift lead for a team of 15 support technicians, coordinating ticket triage, SLA compliance and knowledge-base documentation."
      
      ],
      technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "Jenkins", "Ansible", "Prometheus", "Grafana","ServiceNow", "Windows", "Active Directory", "Entra ID", "Microsoft 365", "ITIL", "SLA Management"]
    },
    /*{
      company: "Freelance & Community",
      role: "Digital Projects Contributor",
      period: "2020 - 2022",
      location: "Flexible",
      summary: "Created small websites, visual concepts and technical solutions for local businesses and community initiatives.",
      achievements: [
        "Designed responsive interfaces and brand-ready visual assets.",
        "Configured domains, hosting and analytics for small business websites.",
        "Supported non-technical users with practical training and documentation."
      ],
      technologies: ["Figma", "HTML/CSS", "JavaScript", "GitHub", "Cloudflare"]
    }*/
  ],

  skills: [
    {
    name: "AWS & Cloud Infrastructure",
    category: "Cloud & DevOps",
    level: "Core",
    description: "Hands-on experience with AWS services including EC2, VPC, IAM and RDS, with infrastructure managed using Terraform."
    },

    {
    name: "Terraform",
    category: "Cloud & DevOps",
    level: "Core",
    description: "Infrastructure as Code for provisioning and maintaining consistent cloud environments."
    },

    {
    name: "Kubernetes & Docker",
    category: "Cloud & DevOps",
    level: "Core",
    description: "Containerising applications and managing Kubernetes environments including AWS EKS."
    },

    {
    name: "CI/CD & Jenkins",
    category: "Cloud & DevOps",
    level: "Core",
    description: "Building automated build, test and deployment workflows with Jenkins and Git."
    },

    {
    name: "Linux & Bash",
    category: "Cloud & DevOps",
    level: "Strong",
    description: "Linux administration, troubleshooting and scripting for cloud and DevOps environments."
    },

    {
    name: "Monitoring & Observability",
    category: "Cloud & DevOps",
    level: "Strong",
    description: "Prometheus, Grafana, AWS CloudWatch and Datadog for monitoring application and infrastructure health."
    },

    {
    name: "Next.js & Web Development",
    category: "Software Engineering",
    level: "Working",
    description: "Building responsive web experiences and practical digital products, including the Laxhya website."
    },

    {
    name: "Git & GitHub",
    category: "Software Engineering",
    level: "Core",
    description: "Version control, source management and collaborative software development workflows."
    },

    {
    name: "IT Support & Troubleshooting",
    category: "IT Operations",
    level: "Core",
    description: "Structured incident diagnosis, troubleshooting, escalation management and end-to-end issue ownership."
    },

    {
    name: "ServiceNow",
    category: "IT Operations",
    level: "Strong",
    description: "Incident, request and knowledge management within an enterprise IT service environment."
    },

    {
    name: "Active Directory & Entra ID",
    category: "IT Operations",
    level: "Strong",
    description: "User lifecycle management, account provisioning, access administration and Joiner-Mover-Leaver processes."
    },

    {
    name: "Microsoft 365",
    category: "IT Operations",
    level: "Strong",
    description: "Supporting Word, Excel, Exchange Online, Teams, OneDrive and SharePoint across enterprise environments."
    }
  ],

  projects: [
    {

    title: "Laxhya - Software Venture",
    category: "Software",

    description: "A software venture I launched to turn learning, ideas and real-world problems into practical digital solutions. The first product focuses on modern portfolio pages for students, freshers and software professionals.",

    impact: "Applying software development, product thinking, cloud and DevOps skills to build and deploy a real product from idea to implementation.",

    stack: ["Next.js", "Project Management", "Git", "Web Development", "Networking"],

    image: "assets/laxhya.png",

    liveUrl: "https://www.laxhya.com",

    sourceUrl: "",

    featured: true

    },

    {

    title: "End-to-End CI/CD Deployment of Java Application on AWS EKS",
    category: "Cloud & DevOps",

    description: "Architected a complete CI/CD pipeline for a Java web application backed by MySQL, automating build-to-deploy workflows using Jenkins and Docker.",

    impact: "Reduced deployment time by 40%, improved release cadence and supported 99.9% availability with proactive monitoring and alerting.",

    stack: ["AWS", "EKS", "Terraform", "Jenkins", "Docker", "Prometheus", "Grafana", "MySQL"],

    image: "assets/project1.png",

    liveUrl: "",

    sourceUrl: "",

    featured: true

    },

    {

    title: "AWS Infrastructure with Terraform",
    category: "Cloud",

    description: "Provisioned and managed AWS infrastructure including EC2, IAM, VPC and RDS using Terraform with a focus on consistency and repeatable infrastructure deployment.",

    impact: "Improved environment parity and reduced configuration drift across development, staging and production environments.",

    stack: ["AWS", "Terraform", "IAM", "VPC", "EC2", "RDS"],

    image: "assets/project2.png",

    liveUrl: "",

    sourceUrl: ""

    },

    {

    title: "Containerised Application & Monitoring",
    category: "DevOps",

    description: "Worked with Docker and Kubernetes/EKS to manage containerised applications and implemented observability using Prometheus, Grafana, Datadog and CloudWatch.",

    impact: "Improved visibility into application and infrastructure health and supported faster incident detection.",

    stack: ["Docker", "Kubernetes", "EKS", "Prometheus", "Grafana", "Datadog", "CloudWatch"],

    image: "assets/project3.png",

    liveUrl: "",

    sourceUrl: ""

    }
  ],

  contact: {
    eyebrow: "Get in touch",
    title: "Have a problem worth solving or a role worth discussing?",
    intro: "Send a message about an opportunity, project, collaboration or technical challenge. I will get back to you as soon as I can.",
    responseTime: "Typical response: within 1-2 business days"
  },

  social: {
    linkedin: "www.linkedin.com/in/suresh-narava",
    github: "https://github.com/sureshnarava/"
  },

  emailjs: {
    serviceId: "service_d3nakcp",
    templateId: "template_opxkuye",
    publicKey: "E0DvwYrNJypi6nk_V"
  }
};

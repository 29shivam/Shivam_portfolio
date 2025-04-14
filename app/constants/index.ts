export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
	{
		name: "Java",
		icon: "/tech/java.webp",
	},
	{
		name: "AWS",
		icon: "/tech/aws.webp",
	},
	
];

const experiences = [
	{
		title: "Associate Software Engineer",
		company_name: "Ericsson",
		icon: "/company/ericsson.webp",
		iconBg: "#383E56",
		date: "2022 -  2023",
		points: [
			"Developed and optimized Java-based microservices to enhance network automation processes across telecom infrastructure.",

"Designed and maintained PL/SQL stored procedures for real-time data handling and performance analytics.",

"Built and integrated RESTful APIs to support internal toolchains, improving data retrieval efficiency by 25%.",

"Collaborated with cross-functional teams in an Agile (Scrum) environment to meet sprint goals and production deadlines.",

"Conducted unit and integration testing using JUnit and Postman to ensure system reliability.",

"Utilized GitLab CI/CD pipelines to automate code deployment and reduce manual overhead during release cycles.",

"Created internal documentation and performed code reviews to uphold engineering best practices."
		],
	},
	{
		title: "Software Developer Intern ",
		company_name: "Dell Technologies",
		icon: "/company/dell.jpg",
		iconBg: "#E6DEDD",
		date: "2021 - 2021",
		points: [
			"Designed and implemented responsive UI components using Java, Spring Boot, and SCSS, improving performance and user engagement on DellTechnologies.com.",

"Integrated Adobe Experience Manager (AEM) with Spring Boot APIs to deliver dynamic content updates, reducing page refreshes and enhancing the customer experience.",

"Collaborated in an Agile development team to plan, develop, and deploy new features, ensuring timely delivery across two major sprints.",

"Reduced load times by ~20% through frontend performance optimization and refactoring legacy components.",

"Utilized GitLab CI/CD pipelines to streamline code deployments, achieving a 40% reduction in manual errors during release cycles."
		],
	},
	{
		title: "Flutter Developer Developer",
		company_name: "Language Nectar LLC",
		icon: "/company/language.jpg",
		iconBg: "#E6DEDD",
		date: "2020 - 2021",
		points: [
			"Developed and deployed cross-platform mobile applications using Flutter and Dart, delivering seamless performance on both Android and iOS devices.",

"Designed scalable UI components and implemented state management using Provider, enhancing maintainability and modularity of the app.",

"Integrated Firebase Authentication and Cloud Firestore to support secure user login and real-time database capabilities.",

"Collaborated with the design and backend teams to align features with user requirements, reducing bug reports by 30% post-release.",

"Conducted thorough unit testing and UI testing using Flutter Test framework, improving app reliability and reducing crash rates."
		],
	},
	
];

const testimonials = [
	{
	  id: 1,
	  testimonial:
		"LinkedIn is my go-to platform for professional networking and sharing career updates. It’s where I connect with recruiters, peers, and industry professionals to stay inspired and explore opportunities.",
	  name: "Shivam Singh",
	  image: "/socialmedia/linkedin.svg",
	  link: "https://www.linkedin.com/in/29shivam/",
	},
	{
	  id: 2,
	  testimonial:
		"GitHub is where I showcase my coding journey — from personal projects to contributions. You’ll find clean code, organized repositories, and full-stack apps that reflect my growth as a developer.",
	  name: "Shivam Singh",
	  image: "/tech/github.webp",
	  link: "https://github.com/29shivam",
	},
	{
	  id: 3,
	  testimonial:
		"LeetCode is where I consistently challenge myself with coding problems. It’s helped sharpen my problem-solving skills and prepare for technical interviews through real-world algorithm practice.",
	  name: "Shivam Singh",
	  link: "https://leetcode.com/29shivam",
	  image: "/socialmedia/leetcode.svg",
	},
  ];
  
  


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "AI-Driven-Fraud-Detection-using-Blockchain-and-Twitter-Sentiment-Data",
		description:
			"Overview This project presents an AI-powered anomaly detection system that combines blockchain transaction data and real-time Twitter sentiment to identify potentially fraudulent activity. By leveraging unsupervised learning (Isolation Forest) and deep learning (Autoencoder), this system enables scalable fraud detection using public, trustless data sources.",
		tags: [
			{
				name: "Github",
				color: "blue-text-gradient",
			},
			
		],
		image: "/projectimg/output.png",
		platform: "Wordpress",
		deploy_link: "https://github.com/29shivam/AI-Driven-Fraud-Detection-using-Blockchain-and-Twitter-Sentiment-Data",
	},
	{
		name: "FireGuard is a real-time wildfire risk detection that uses AI to protect communities.",
		description:
			" Wildfires have become increasingly frequent and destructive, yet public tools often react after the damage is already done. Most weather APIs are either limited or prohibitively expensive, and few offer actionable insights at the community level. We set out to create FireGuard—a real-time wildfire risk prediction and alert system that is free, scalable, and AI-driven.",
		tags: [
			
			
			
		],
		image: "/projectimg/Fireguard.jpg",
		source_code_link: "https://devpost.com/software/fireguard-r4lv9x?ref_content=my-projects-tab&ref_feature=my_projects",
		platform: "Web",
		deploy_link: "https://devpost.com/software/fireguard-r4lv9x?ref_content=my-projects-tab&ref_feature=my_projects",
	},
	{
		name: "React MovieX Project – Movie Discovery App",
		description:
			"Built a responsive movie discovery platform using React.js and the TMDb API, enabling real-time search, trending movie display, and category-based filtering. Implemented Redux for centralized state management to optimize API calls, search states, and improve component reusability across routes. Integrated TypeScript for enhanced code quality, type safety, and robust development in large-scale UI features. Utilized Axios and React Hooks (useEffect, useState) to fetch and manage asynchronous movie data dynamically. Designed with modern UI/UX principles using CSS Modules and responsive layout techniques to ensure cross-device compatibility. Deployed the application on Vercel for seamless CI/CD integration and fast load times.",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/image.png",
		source_code_link: "https://github.com/29shivam/react-MovieX",
		platform: "Vercel",
		deploy_link: "https://react-movie-x.vercel.app/",
	},
];

export { experiences, projects, services, technologies, testimonials };


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
		title: "Software Engineer ",
		company_name: "Kofax",
		icon: "/company/kofax-sq1.jpg",
		iconBg: "#E6DEDD",
		date: "Oct 2024 - Present",
		points: [
			"Engineered backend services using Java Spring Boot to automate high-volume invoice processing and document classification workflows, reducing manual validation efforts by 40% across finance teams in client organizations handling over 500K documents monthly.",
			"Played a key role in modernizing legacy payment integration modules by refactoring microservices for B2B invoicing and AP automation, which cut exception handling time by 35% and improved transaction accuracy to over 98.5%.",
			"Built reusable, responsive React components in TypeScript to enhance user experience on document review portals; collaborated with UX teams to roll out WCAG-compliant features, boosting accessibility scores and increasing portal adoption by 22%.",
			"Migrated invoice ingestion workloads to AWS Lambda and Fargate, enabling real-time autoscaling that reduced infrastructure management hours by 30% while maintaining compliance with state-specific data residency mandates."
		],
	},
	{
		title: "Software Developer",
		company_name: "Ericsson",
		icon: "/company/ericsson.webp",
		iconBg: "#383E56",
		date: "2022 -  2023",
		points: [
			"Designed and optimized RESTful and GraphQL APIs to support real-time mobile broadband services, improving data retrieval speed by 32% and maintaining consistent delivery to over 110k active users across global 5G networks.",
			"Engineered automated ETL pipelines using Python and FastAPI to handle terabytes of daily telecom data, cutting manual intervention by 60% and reducing anomaly detection latency by 25%.",
			"Developed scalable backend services in Node.js for monitoring and auto-healing of network faults, leading to a 35% reduction in critical incident resolution time during high-traffic events.",
			"Led frontend integration using Angular and React, implementing shared component libraries that reduced UI inconsistencies and cut redundant code by over 40%, enhancing developer efficiency.",
			"Improved AWS cloud scalability by optimizing deployments across EC2, Lambda, and S3, resulting in 40% higher uptime and stable system performance during 5G signal bursts across regions",
			"Tuned relational databases (PostgreSQL and MySQL) via partitioning and indexing, achieving 35% faster query response times in backend systems used for provisioning mobile services.",
			"Spearheaded implementation of OAuth 2.0 and JWT-based authentication for internal APIs, securing access for over 150K concurrent devices in compliance with telecom-grade security benchmarks.",
			"Coordinated with global DevOps teams to build CI/CD pipelines using GitHub Actions and Jenkins, reducing deployment lead times by 50% and enabling bi-weekly production releases without service interruptions."
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
		platform: "Web",
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


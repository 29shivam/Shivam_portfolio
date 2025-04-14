"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

// Card Props
type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web";
};

// Card UI
const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	deploy_link,
	platform
}: ProjectCardProps) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
			<Tilt
				options={{
					max: 20,
					scale: 1.02,
					speed: 300,
				}}
				className="bg-white/5 backdrop-blur-md p-5 rounded-3xl sm:w-[350px] w-full shadow-xl border border-white/10 transition-all hover:shadow-2xl group"
			>
				{/* Image */}
				<div className="relative w-full h-[230px] rounded-2xl overflow-hidden">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
					/>
					{/* Overlay icons */}
					<div className="absolute inset-0 flex justify-end gap-2 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						{source_code_link && (
							<Link
								href={source_code_link}
								target="_blank"
								className="bg-black/60 backdrop-blur-md w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition-transform"
							>
								<Image src="/tech/github.webp" width={22} height={22} alt="source-code" />
							</Link>
						)}
						<Link
							href={deploy_link}
							target="_blank"
							className="bg-black/60 backdrop-blur-md w-10 h-10 rounded-full flex justify-center items-center hover:scale-110 transition-transform"
						>
							<Image
								src={
									platform === "Netlify"
										? "/tech/netlify.webp"
										: platform === "Vercel"
										? "/tech/vercel.svg"
										: platform === "Wordpress"
										? "/tech/wordpress.webp"
										: platform === "Web"
										? "/web.webp"
										: "/tech/figma.webp"
								}
								width={22}
								height={22}
								alt="platform"
							/>
						</Link>
					</div>
				</div>

				{/* Title + Description */}
				<div className="mt-5">
					<h3 className="text-white font-bold text-[20px] transition-colors group-hover:text-[#00fff7]">
						{name}
					</h3>
					<p className="mt-2 text-gray-400 text-[14px]">{description}</p>
				</div>

				{/* Tags */}
				<motion.div
					className="mt-4 flex flex-wrap gap-2"
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: index * 0.1, duration: 0.5 }}
				>
					{tags.map((tag) => (
						<span
							key={`${name}-${tag.name}`}
							className={`text-[13px] ${tag.color} font-medium`}
						>
							#{tag.name}
						</span>
					))}
				</motion.div>
			</Tilt>
		</motion.div>
	);
};

// Works section
const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">✨ Featured Projects</p>
				<h2 className="sectionHeadText">Explore My Work</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-gray-400 text-[16px] max-w-3xl leading-[28px]"
				>
					Here are some of the projects I've built, featuring real-world problems, intuitive interfaces, and interactive data or design solutions. Each one reflects my skills in full-stack engineering, UI/UX, and cloud deployment.
				</motion.p>
			</div>

			<div className="mt-16 flex flex-wrap justify-center gap-10">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");

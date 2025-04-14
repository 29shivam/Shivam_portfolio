"use client";

import { fadeIn, textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { testimonials } from "../constants";
import { SectionWrapper } from "./HigherOrderComponents";

type FeedbackCardProps = {
	index: number;
	testimonial: string;
	name: string;
	link: string;
	image: string;
};

const FeedbackCard = ({
	index,
	testimonial,
	name,
	link,
	image,
}: FeedbackCardProps) => (
	<motion.div
		variants={fadeIn("up", "spring", index * 0.4, 0.75)}
		className="bg-white/5 dark:bg-black/30 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 p-8 rounded-2xl w-full max-w-sm flex flex-col justify-between"
	>
		<div className="mb-6">
			<p className="text-5xl font-extrabold text-purple-400 leading-none">“</p>
			<p className="text-gray-200 text-[15px] mt-3 leading-relaxed">
				{testimonial}
			</p>
		</div>

		<div className="mt-6 flex items-center justify-between">
			<div className="flex flex-col">
				<p className="text-white font-semibold text-[16px]">
					<span className="text-purple-300">@</span>
					{name}
				</p>
			</div>
			<Link href={link} target="_blank">
				<Image
					src={image}
					width={24}
					height={24}
					alt={`feedback by ${name}`}
					className="w-10 h-10 rounded-full object-cover border border-purple-500 shadow-md hover:scale-110 transition-transform"
				/>
			</Link>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className="mt-16 bg-gradient-to-br from-[#1f1f2f] via-[#1a1a2e] to-black rounded-[20px] shadow-inner">
			<div className="padding bg-[#1c1c2c]/80 backdrop-blur-md rounded-2xl min-h-[280px]">
				<motion.div variants={textVariant()} className="text-center">
					<h2 className="sectionHeadText text-purple-300">Social Profiles</h2>
					<p className="sectionSubText text-gray-400">
						Click on social media icons to check out..
					</p>
				</motion.div>
			</div>

			<div className="paddingX -mt-20 pb-20 flex flex-wrap justify-center gap-10">
				{testimonials.map((testimonial, index) => (
					<FeedbackCard key={testimonial.id} index={index} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "");

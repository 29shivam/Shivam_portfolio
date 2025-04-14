"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof experiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "linear-gradient(135deg, rgba(30,30,60,0.8), rgba(20,20,40,0.8))",
        color: "#fff",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)"
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.2)" }}
      //date={<span className="text-sm text-purple-300">{experience.date}</span>}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px rgba(145, 94, 255, 0.3), 0 0 12px #915EFF",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            width={40}
            height={40}
            alt={experience.company_name}
            className="object-contain"
          />
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
        <p className="text-purple-300 text-[16px] font-semibold">
          {experience.company_name}
        </p>

        <ul className="mt-4 list-disc ml-5 space-y-2 text-gray-300">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-[14px] leading-relaxed hover:text-purple-100 transition-colors"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText text-center text-purple-300">What I have done so far</p>
        <h2 className="sectionHeadText text-center">Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#915EFF">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");

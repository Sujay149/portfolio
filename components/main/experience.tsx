import React from "react";
import { ExperienceCard } from "@/components/sub/experience-card";
import { EXPERIENCE } from "@/constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Experience
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-6xl">
        {EXPERIENCE.map((exp, idx) => (
          <ExperienceCard
            key={exp.role}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            src={idx === 0 ? "/projects/medibot.png" : "/projects/wonderkids.png"}
            productLink={idx === 0 ? "https://medibot-ai.com" : "https://wonderkids.great-site.net/"}
            companyLink={idx === 0 ? "https://asvix.com" : "https://wonderkids.com"}
            codeLink={idx === 0 ? "https://github.com/Sujay149/asvix-projects" : "https://github.com/Sujay149/wonderkids-projects"}
          />
        ))}
      </div>
    </section>
  );
};

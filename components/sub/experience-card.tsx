import Image from "next/image";
import Link from "next/link";

type ExperienceCardProps = {
  role: string;
  company: string;
  period: string;
  description: readonly string[];
  src?: string;
  companyLink?: string;
  codeLink?: string;
  productLink?: string;
};

export const ExperienceCard = ({
  role,
  company,
  period,
  description,
  src = "/projects/project-1.webp",
  companyLink,
  codeLink,
  productLink,
}: ExperienceCardProps) => {
  return (
    <div className="w-full max-w-sm relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0a0a1a]">
      <Image
        src={src}
        alt={`${role} at ${company}`}
        width={1000}
        height={1000}
        className="w-full h-60 object-cover rounded-t-lg object-left-top"
      />

      <div className="relative p-6">
        <h1 className="text-2xl font-semibold text-white mb-3">{role}</h1>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {description.join(" ")}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs rounded-full">
            {company}
          </span>
          <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs rounded-full">
            {period}
          </span>
        </div>
        
        <div className="flex flex-col gap-2 mt-4">
          {productLink && (
            <Link
              href={productLink}
              target="_blank"
              rel="noreferrer noopener"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
            >
              Live Demo
            </Link>
          )}
          <div className="flex gap-3">
            {companyLink && (
              <Link
                href={companyLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
              >
                Company
              </Link>
            )}
            {codeLink && (
              <Link
                href={codeLink}
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
              >
                View Code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

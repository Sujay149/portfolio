import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description?: string;
  technologies?: readonly string[];
  link: string;
  codeLink?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  technologies,
  link,
  codeLink,
}: ProjectCardProps) => {
  return (
    <div className="w-full max-w-sm relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#0a0a1a]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-60 object-cover rounded-t-lg object-left-top"
      />

      <div className="relative p-6">
        <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
        {description && (
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        )}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              tech && (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              )
            ))}
          </div>
        )}
        
        <div className="flex gap-3 mt-4">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center"
          >
            Live Demo
          </Link>
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
  );
};

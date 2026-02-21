import React from "react";
import {
  Github,
  ArrowUpRight,
} from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  repoUrl?: string;
  demoUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  repoUrl,
  demoUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-phthalo-500/10 hover:-translate-y-2">
      {/* Container Gambar */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Badge Teknologi (Hanya tampil di atas gambar) */}
        <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
          {tags.slice(0, 2).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/90 dark:bg-black/80 backdrop-blur-md text-neutral-800 dark:text-white rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Konten Text */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
            {title}
          </h3>
          <div className="flex gap-4">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
              >
                <Github size={18} />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-phthalo-600 hover:text-white transition-all"
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm mb-6">
          {description}
        </p>

        {/* Garis bawah tipis */}
        <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center text-[11px] font-medium text-phthalo-600 dark:text-phthalo-400 uppercase tracking-widest">
            View Project Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

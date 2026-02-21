"use client";

import React, { useState } from "react";
import {
  X,
  Github,
  ExternalLink,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

// 1. Definisikan Interface agar sesuai dengan output lib/mdx.ts
interface Project {
  title: string;
  image: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  longDescription: string;
  description?: string;
  order?: number;
  slug: string;
}

// 2. Terima 'projects' sebagai props
interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({
  projects,
}: ProjectsSectionProps) => {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <section className="py-32 bg-white dark:bg-[#050505] overflow-hidden">
      {/* --- HEADING --- */}
      <div className="container relative z-10 mb-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore my latest works and technical implementations"
        />
      </div>

      {/* --- HORIZONTAL SCROLL AREA --- */}
      <div className="flex overflow-x-auto gap-8 px-[5%] pb-12 snap-x snap-mandatory scrollbar-hide justify-center">
        {projects.map((project, index) => (
          <motion.div
            layoutId={`card-${project.slug}`}
            key={project.slug}
            onClick={() =>
              setSelectedProject(project)
            }
            className="flex-shrink-0 w-[300px] md:w-[450px] snap-center cursor-pointer group"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 transition-all duration-500 group-hover:border-phthalo-500/50">
              <motion.img
                layoutId={`image-${project.slug}`}
                src={project.image}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <motion.h3
                  layoutId={`title-${project.slug}`}
                  className="text-2xl font-bold text-white mb-2"
                >
                  {project.title}
                </motion.h3>
                <div className="flex gap-2">
                  {project.tags
                    ?.slice(0, 2)
                    .map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 bg-white/10 backdrop-blur-md text-white rounded-full border border-white/20 uppercase font-bold tracking-tighter"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- MODAL DETAIL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setSelectedProject(null)
              }
              className="absolute inset-0 backdrop-blur-xl bg-black/60"
            />

            <motion.div
              layoutId={`card-${selectedProject.slug}`}
              className="bg-white dark:bg-neutral-950 w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden relative shadow-2xl flex flex-col md:flex-row border border-neutral-200 dark:border-neutral-800 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() =>
                  setSelectedProject(null)
                }
                className="absolute top-6 right-6 z-20 p-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="dark:text-white" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <motion.img
                  layoutId={`image-${selectedProject.slug}`}
                  src={selectedProject.image}
                  className="w-full h-full object-cover"
                  alt={selectedProject.title}
                />
              </div>

              <div className="p-8 md:p-12 w-full md:w-1/2 overflow-y-auto">
                <motion.h3
                  layoutId={`title-${selectedProject.slug}`}
                  className="text-3xl font-bold dark:text-white mb-4"
                >
                  {selectedProject.title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags?.map(
                      (tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-3 py-1 bg-phthalo-500/10 text-phthalo-600 dark:text-phthalo-400 rounded-full font-bold"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 text-sm md:text-base">
                    {
                      selectedProject.longDescription
                    }
                  </p>

                  <div className="flex gap-4">
                    {selectedProject.repoUrl && (
                      <a
                        href={
                          selectedProject.repoUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform text-sm"
                      >
                        <Github size={18} /> Code
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a
                        href={
                          selectedProject.demoUrl
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 dark:text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform text-sm"
                      >
                        <ExternalLink size={18} />{" "}
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;

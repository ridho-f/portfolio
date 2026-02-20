"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  organization: string;
  date: string;
  type: string;
  description: string;
  gpa?: string | null;
  logo?: string;
}

interface WorkEducationProps {
  experiences: TimelineItem[];
  education: TimelineItem[];
}

export default function WorkEducationSection({
  experiences,
  education,
}: WorkEducationProps) {
  const [
    expandedExperience,
    setExpandedExperience,
  ] = useState<number | null>(null);
  const [
    expandedEducation,
    setExpandedEducation,
  ] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setExpandedExperience(
      expandedExperience === index ? null : index,
    );
  };

  const toggleEducation = (index: number) => {
    setExpandedEducation(
      expandedEducation === index ? null : index,
    );
  };

  return (
    <section
      id="resume"
      className="py-32 relative"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-phthalo-600 rounded-full mix-blend-multiply blur-[120px] opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title="Resume"
          subtitle="My professional and academic timeline"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-phthalo-500/10 text-phthalo-500">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6 border-l-2 border-zinc-800 ml-4 pl-8 relative">
              {experiences.map((item, index) => {
                const isExpanded =
                  expandedExperience === index;
                return (
                  <div
                    key={index}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-phthalo-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"></div>

                    <div
                      onClick={() =>
                        toggleExperience(index)
                      }
                      className="cursor-pointer group"
                    >
                      <GlassmorphicCard
                        className={cn(
                          "transition-all duration-300",
                          isExpanded
                            ? "border-phthalo-500/50"
                            : "hover:border-phthalo-500/30",
                        )}
                      >
                        <div className="flex gap-4">
                          {item.logo && (
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900/50 flex items-center justify-center">
                              <Image
                                src={item.logo}
                                alt={
                                  item.organization
                                }
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 48px, 56px"
                              />
                            </div>
                          )}

                          <div className="flex-1">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                              <h4 className="text-lg font-bold text-white group-hover:text-phthalo-400 transition-colors">
                                {item.title}
                              </h4>
                              <div className="flex items-center gap-2">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-zinc-800 text-phthalo-400 border border-zinc-700">
                                  {item.type}
                                </span>
                                <ChevronDown
                                  className={cn(
                                    "w-4 h-4 text-zinc-500 transition-transform duration-300",
                                    isExpanded &&
                                      "rotate-180 text-phthalo-400",
                                  )}
                                />
                              </div>
                            </div>

                            <p className="text-phthalo-400 text-sm font-medium mb-2">
                              {item.organization}
                            </p>
                            <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1">
                              <Calendar
                                size={14}
                              />
                              <span>
                                {item.date}
                              </span>
                            </div>

                            {/* Collapsible Content */}
                            <div
                              className={cn(
                                "grid transition-all duration-300 ease-in-out",
                                isExpanded
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0",
                              )}
                            >
                              <div className="overflow-hidden">
                                <p className="text-zinc-400 text-justify text-sm leading-relaxed whitespace-pre-line border-t border-zinc-800/50">
                                  {
                                    item.description
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </GlassmorphicCard>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Column  */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-phthalo-500/10 text-phthalo-500">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6 border-l-2 border-zinc-800 ml-4 pl-8 relative">
              {education.map((item, index) => {
                const isExpanded =
                  expandedEducation === index;
                return (
                  <div
                    key={index}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-phthalo-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"></div>

                    <div
                      onClick={() =>
                        toggleEducation(index)
                      }
                      className="cursor-pointer group"
                    >
                      <GlassmorphicCard
                        className={cn(
                          "transition-all duration-300",
                          isExpanded
                            ? "border-phthalo-500/50"
                            : "hover:border-phthalo-500/30",
                        )}
                      >
                        <div className="flex gap-4">
                          {item.logo && (
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-zinc-800 flex-shrink-0">
                              <Image
                                src={item.logo}
                                alt={
                                  item.organization
                                }
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}

                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h4 className="text-lg font-bold text-white group-hover:text-phthalo-400 transition-colors">
                                {item.title}
                              </h4>
                              <ChevronDown
                                className={cn(
                                  "w-4 h-4 text-zinc-500 transition-transform duration-300",
                                  isExpanded &&
                                    "rotate-180 text-phthalo-400",
                                )}
                              />
                            </div>
                            <p className="text-phthalo-400 text-sm font-medium mb-1">
                              {item.organization}
                            </p>
                            {item.gpa && (
                              <p className="text-zinc-500 text-xs mb-2">
                                GPA: {item.gpa}
                              </p>
                            )}
                            <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1">
                              <Calendar
                                size={14}
                              />
                              <span>
                                {item.date}
                              </span>
                            </div>

                            <div
                              className={cn(
                                "grid transition-all duration-300 ease-in-out",
                                isExpanded
                                  ? "grid-rows-[1fr] opacity-100 mt-4"
                                  : "grid-rows-[0fr] opacity-0",
                              )}
                            >
                              <div className="overflow-hidden">
                                <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line border-t border-zinc-800/50 pt-4">
                                  {
                                    item.description
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </GlassmorphicCard>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

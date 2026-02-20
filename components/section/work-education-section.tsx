"use client";

import Image from "next/image"; // Import Image
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import {
  Briefcase,
  GraduationCap,
  Calendar,
} from "lucide-react";

interface TimelineItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  gpa?: string | null; // Tambahkan properti gpa di sini
  logo?: string; // Tambahkan properti logo di sini
}

interface WorkEducationProps {
  experiences: TimelineItem[];
  education: TimelineItem[];
}

export default function WorkEducationSection({
  experiences,
  education,
}: WorkEducationProps) {
  return (
    <section
      id="resume"
      className="py-32 relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-phthalo-600 rounded-full mix-blend-multiply blur-[120px] opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title="Resume"
          subtitle="My professional and academic timeline"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Kolom Kiri: Experience */}
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
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-phthalo-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"></div>

                  <GlassmorphicCard className="hover:border-phthalo-500/30 transition-all duration-300">
                    <div className="flex gap-4">
                      {/* LOGO IMPLEMENTATION */}
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
                        <h4 className="text-lg font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="text-phthalo-400 text-sm font-medium mb-2">
                          {item.organization}
                        </p>
                        <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
                          <Calendar size={14} />
                          <span>{item.date}</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Education */}
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
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-phthalo-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]"></div>

                  <GlassmorphicCard className="hover:border-phthalo-500/30 transition-all duration-300">
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
                        <h4 className="text-lg font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="text-phthalo-400 text-sm font-medium mb-2">
                          {item.organization}
                        </p>
                        {/* buat untuk gpa */}
                        <p className="text-zinc-500 text-xs mb-2">
                          {item.gpa}
                        </p>
                        <div className="flex items-center gap-2 text-zinc-500 text-xs mb-3">
                          <Calendar size={14} />
                          <span>{item.date}</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

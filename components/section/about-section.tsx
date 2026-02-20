"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import { cdnUrl } from "@/lib/utils";
import ScrollReveal from "@/components/ScrollReveal";

interface AboutSectionProps {
  name: string;
  email: string;
  location: string;
  imageSrc: string;
  resumeUrl: string;
  description: string[];
}

export default function AboutSection({
  name,
  email,
  location,
  imageSrc,
  resumeUrl,
  description,
}: AboutSectionProps) {
  return (
    <section
      id="about"
      className="py-32 relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply blur-3xl opacity-10"></div>
      </div>

      <div className="container relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="My background and journey"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 blur-xl opacity-70"></div>

            <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
              <Image
                src={imageSrc}
                alt={name}
                fill
                className="object-cover object-[50%_30%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <GlassmorphicCard>
              {description.map(
                (paragraph, index) => (
                  <ScrollReveal
                    baseOpacity={0.3}
                    enableBlur
                    baseRotation={0}
                    blurStrength={4}
                    textClassName="!text-lg"
                  >
                    {paragraph}
                  </ScrollReveal>
                ),
              )}

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">
                    Name
                  </div>
                  <div className="font-medium">
                    {name}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">
                    Email
                  </div>
                  <div className="font-medium break-all">
                    {email}
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm text-zinc-500">
                    Location
                  </div>
                  <div className="font-medium">
                    {location}
                  </div>
                </div>
              </div>

              {/* Resume Button */}
              <div className="mt-8">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  View Resume
                </a>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
}

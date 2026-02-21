import Link from "next/link";
import {
  ArrowRight,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import { GrindSection } from "@/components/grind-section";
import { ECGProjectCard } from "@/components/ECGProjectCard";
import { LearnNavbar } from "@/components/learn-navbar";
import TextType from "@/components/TextType";
import HeroSectionDesktop from "@/components/section/hero-desktop";
import HeroMobile from "@/components/section/hero-mobile";
import AboutSection from "@/components/section/about-section";
import SkillsSection from "@/components/section/skill-section";
import WorkEducationSection from "@/components/section/work-education-section";
import { getItemsFromFolder } from "@/lib/mdx";
import { cdnUrl, getCdnUrl } from "@/lib/utils";
import { getProjects } from "@/lib/mdx";
import ProjectsSection from "@/components/section/project-section";

export default function Portfolio() {
  const experiences = getItemsFromFolder(
    "experiences",
  );
  const education =
    getItemsFromFolder("education");
  const projects = getProjects();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-zinc-900 dark:via-zinc-900 dark:to-black text-zinc-900 dark:text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative  flex items-center justify-center overflow-hidden pt-32 sm:pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-phthalo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          {/* Mobile Layout */}
          <HeroMobile
            name="Ridho"
            roles={[
              "Web Developer",
              "Network Engineer",
            ]}
            badge="Full Stack Developer | Network Engineer"
            description="A Full Stack Developer with frontend experience in HTML5, CSS3, JavaScript, Bootstrap, and Blade templating, and backend skills in PHP (Laravel), with database knowledge in MySQL and PostgreSQL. Also familiar with network configuration, including routing, VLANs, VPNs, tunneling, and managing Linux servers and VPS environments.."
            githubUrl="https"
            instagramUrl="https://instagram.com/ridhof_1"
            linkedinUrl="https://www.linkedin.com/in/ridha-f"
            email="ridh@"
          />
          {/* Desktop Layout */}
          <HeroSectionDesktop
            name="Ridho"
            roles={[
              "Web Developer",
              "Network Engineer",
            ]}
            description="A Full Stack Developer with frontend experience in HTML5, CSS3, JavaScript, Bootstrap, and Blade templating, and backend skills in PHP (Laravel), with database knowledge in MySQL and PostgreSQL. Also familiar with network configuration, including routing, VLANs, VPNs, tunneling, and managing Linux servers and VPS environments.."
            githubUrl="https"
            linkedinUrl="https://www.linkedin.com/in/ridha-f"
            instagramUrl="https://instagram.com/ridhof_1"
            email="ridho_site@icloud.com"
          />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection
        name="Muhanmmad Ridha Fatahillah"
        email="ridhofatahillah78@gmail.com"
        location="Indonesia"
        imageSrc={getCdnUrl("public/ridho.png", {
          width: 640,
          quality: 75,
          format: "webp",
        })}
        resumeUrl={cdnUrl(
          "public/resume/resume-muhammad-ridha-fatahillah.pdf",
        )}
        description={[
          "I am a Full Stack Developer and Network Engineer passionate about building scalable systems.",
          "My expertise spans Laravel, Next.js, React, database architecture, and network infrastructure.",
          "I focus on engineering solutions that are efficient, maintainable, and production-ready.",
        ]}
      />
      <SkillsSection />

      <WorkEducationSection
        experiences={experiences}
        education={education}
      />

      {/* Projects Section */}
      <ProjectsSection projects={projects} />

      {/* Grind Section */}
      <section
        className="py-32 relative"
        id="grind"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <GrindSection />
        </div>
      </section>

      {/* Knowledge Brain Section */}
      {/* <section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <KnowledgeBrain />
        </div>
      </section> */}

      {/* Experience Section */}
      <section
        id="experience"
        className="py-32 relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="py-32 relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Get In Touch"
            subtitle="Let's work together"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">
                      Email
                    </div>
                    <div className="font-medium">
                      vimaldhama0@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">
                      LinkedIn
                    </div>
                    <div className="font-medium">
                      www.linkedin.com/in/vimaldhama
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">
                      GitHub
                    </div>
                    <div className="font-medium">
                      github.com/vimal0156
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">
                  Current Status{" "}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse">
                    {" "}
                  </div>
                  <span>
                    Open to opportunities in
                    Quantitative Finance, Data
                    Science, and AI/ML
                    Engineering!
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section> */}

      {/* Learn CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Learn With Me"
            subtitle="Quant Finance & Applied Math"
          />

          <div className="max-w-3xl mx-auto mt-16">
            <GlassmorphicCard>
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-phthalo-500 to-phthalo-700 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold">
                  Want to Learn Quant Finance &
                  Math?
                </h3>

                <p className="text-lg text-zinc-600 dark:text-zinc-300">
                  I'm building courses and
                  mentorship programs on
                  quantitative finance,
                  algorithmic trading, and applied
                  mathematics. Join the waitlist
                  to get notified when they
                  launch.
                </p>

                <div className="pt-4">
                  <Link href="/learn">
                    <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0 text-lg px-8 py-3">
                      <span className="relative z-10 flex items-center">
                        Take the Quiz
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Button>
                  </Link>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link
              href="/"
              className="font-bold text-xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                Vimal
              </span>
              <span className="text-white">
                Dev
              </span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Vimal
              Dhama. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/vimal0156"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">
                  GitHub
                </span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/vimaldhama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">
                  LinkedIn
                </span>
              </Button>
            </Link>
            <Link href="mailto:vimaldhama0@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">
                  Email
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

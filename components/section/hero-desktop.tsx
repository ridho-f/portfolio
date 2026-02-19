"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TextType from "@/components/TextType";
import { CreativeHero } from "@/components/creative-hero";
import GradientText from "../GradientText";

interface HeroSectionProps {
  name: string;
  roles: string[];
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  email: string;
}

export default function HeroSectionDesktop({
  name,
  roles,
  description,
  githubUrl,
  linkedinUrl,
  instagramUrl,
  email,
}: HeroSectionProps) {
  return (
    <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-left">
        <div className="inline-block">
          <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <span className="relative z-10">
              Full Stack Web Developer | Network
              Engineer
            </span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 animate-pulse"></span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <GradientText
            colors={[
              "#00F5A0", // neon green
              "#FF00C8", // neon pink
              "#7B2FF7", // electric purple
            ]}
            animationSpeed={5}
            showBorder={false}
            direction="horizontal"
            pauseOnHover={true}
            yoyo={true}
            className="!mx-0 "
          >
            Hi, I'm
          </GradientText>

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
            <TextType
              text={[name, ...roles]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </span>
        </h1>

        <p className="text-xl text-justify text-zinc-400 max-w-[600px]">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="#projects">
            <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
              <span className="relative z-10 flex items-center">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
          </Link>

          <Link href="#contact">
            <Button
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
            >
              Contact Me
            </Button>
          </Link>
        </div>

        <div className="flex gap-4 pt-4">
          <Link href={githubUrl} target="_blank">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </Button>
          </Link>

          <Link
            href={linkedinUrl}
            target="_blank"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>

          <Link
            href={instagramUrl}
            target="_blank"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Instagram className="h-5 w-5" />
            </Button>
          </Link>

          <Link href={`mailto:${email}`}>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <CreativeHero photoUrl="/ridho.png" />
      </div>
    </div>
  );
}

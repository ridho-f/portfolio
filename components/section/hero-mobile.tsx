"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import TextType from "@/components/TextType";
import { CreativeHero } from "@/components/creative-hero";
import GradientText from "../GradientText";
import ScrollReveal from "../ScrollReveal";
import { getCdnUrl } from "@/lib/utils";

interface HeroMobileProps {
  name: string;
  roles: string[];
  badge: string;
  description: string;
  instagramUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export default function HeroMobile({
  name,
  roles,
  badge,
  description,
  instagramUrl,
  githubUrl,
  linkedinUrl,
  email,
}: HeroMobileProps) {
  return (
    <div className="lg:hidden flex flex-col items-center text-center space-y-8 px-5">
      {/* 1. Name */}
      {/* 1. Name */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight flex flex-col items-center">
        <span className="block">
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
            className="!mx-0 !p-1"
          >
            Hello, I'm
          </GradientText>
        </span>

        {/* Wrapper TextType dengan flex-col */}
        <span className="flex flex-col items-center w-full mt-2">
          <span className="inline-block text-center bg-gradient-to-r from-phthalo-400 to-phthalo-600 bg-clip-text [-webkit-background-clip:text] text-transparent">
            <TextType
              text={[name, ...roles]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              deletingSpeed={50}
              // variableSpeedEnabled={false}

              cursorBlinkDuration={0.5}
            />
          </span>
        </span>
      </h1>

      {/* 2. Profile Image */}
      <div className="flex justify-center">
        <CreativeHero
          photoUrl={getCdnUrl(
            "public/ridho-photo-1.webp",
            {
              width: 720,
              quality: 70,
              format: "webp",
            },
          )}
        />
      </div>

      {/* 3. Badge */}
      <div className="flex justify-center">
        <div className="relative px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
          <span className="relative z-10">
            {badge}
          </span>
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 animate-pulse"></span>
        </div>
      </div>

      {/* 4. Description */}

      <p className="text-xl text-justify dark:text-zinc-300 text-zinc-900 max-w-[600px]">
        {description}
      </p>

      {/* 5. Buttons */}
      <div className="flex flex-wrap gap-4 pt-4 justify-center">
        <Link href="#projects">
          <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
            <span className="relative z-10 flex items-center text-zinc-200 hover:text-white ">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Button>
        </Link>

        <Link href="#contact">
          <Button
            variant="outline"
            className="border-zinc-700 dark:text-zinc-200 hover:text-white text-zinc-950 hover:border-zinc-500 bg-transparent"
          >
            Contact Me
          </Button>
        </Link>
      </div>

      {/* 6. Social Icons */}
      <div className="flex gap-4 justify-center pb-7">
        <Link href={githubUrl} target="_blank">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
          >
            <Github className="h-5 w-5" />
          </Button>
        </Link>

        <Link href={linkedinUrl} target="_blank">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
        </Link>

        <Link href={instagramUrl} target="_blank">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
          >
            <Instagram className="h-5 w-5" />
          </Button>
        </Link>

        <Link href={`mailto:${email}`}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { LogoLoop } from "@/components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMikrotik,
  SiVmware,
  SiProxmox,
  SiLaravel,
  SiHtml5,
  SiCisco,
} from "react-icons/si";
const techLogos = [
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiMikrotik />,
    title: "MikroTik",
    href: "https://mikrotik.com",
  },
  {
    node: <SiLaravel />,
    title: "Laravel",
    href: "https://laravel.com",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiVmware />,
    title: "VMware",
    href: "https://www.vmware.com",
  },
  {
    node: <SiProxmox />,
    title: "Proxmox",
    href: "https://www.proxmox.com",
  },
  {
    node: <SiCisco />,
    title: "Cisco",
    href: "https://www.cisco.com",
  },
];
// import { techLogos } from '../data/logos';

const SkillsSection = () => {
  return (
    <section id="skills" className="relative ">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Desktop View: Horizontal Infinite Loops */}
        <div className="hidden md:block">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="left"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology partners row 1"
            />
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="right"
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology partners row 2"
            />
          </div>
        </div>

        {/* Mobile View: Vertical Infinite Loops */}
        <div className="md:hidden mt-10">
          <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden gap-8">
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="up"
              logoHeight={50}
              gap={50}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology partners column 1"
            />
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="down"
              logoHeight={50}
              gap={50}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology partners column 2"
            />

            {/* Top & Bottom Fading Gradients */}
            {/* <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-zinc-900"></div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-900"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

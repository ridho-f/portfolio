import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getCdnUrl } from "@/lib/utils"; // Gunakan satu fungsi yang konsisten

export function getItemsFromFolder(
  folderName: string,
) {
  const folderPath = path.join(
    process.cwd(),
    "content",
    folderName,
  );
  if (!fs.existsSync(folderPath)) return [];

  const files = fs.readdirSync(folderPath);

  return files
    .map((fileName) => {
      const filePath = path.join(
        folderPath,
        fileName,
      );
      const fileContent = fs.readFileSync(
        filePath,
        "utf8",
      );
      const { data, content } =
        matter(fileContent);

      return {
        title: data.degree || data.title,
        organization:
          data.institution || data.company,
        startDate: data.start_date,
        type: data.type,
        date: `${data.start_date} - ${data.end_date || "Present"}`,
        location: data.location,
        gpa: data.GPA || null,
        logo: data.logo
          ? getCdnUrl(data.logo, {
              width: 90,
              quality: 75,
              format: "webp",
            })
          : null,
        description: content.trim(),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() -
        new Date(a.startDate).getTime(),
    );
}

export function getProjects() {
  const folderPath = path.join(
    process.cwd(),
    "content/projects",
  );
  if (!fs.existsSync(folderPath)) return [];

  const files = fs.readdirSync(folderPath);

  return files
    .map((fileName) => {
      const filePath = path.join(
        folderPath,
        fileName,
      );
      const fileContent = fs.readFileSync(
        filePath,
        "utf8",
      );
      const { data, content } =
        matter(fileContent);

      return {
        title: data.title,
        image: data.image
          ? getCdnUrl(data.image, {
              width: 800,
              quality: 80,
              format: "webp",
            }) // Berikan size lebih besar untuk project image
          : null,
        tags: data.tags || [], // Pastikan ini selalu array agar .map() di UI tidak error
        repoUrl: data.repoUrl || null,
        demoUrl: data.demoUrl || null,
        order: data.order || 0,
        slug: fileName.replace(".mdx", ""),
        longDescription: content.trim(),
      };
    })
    .sort(
      (a, b) => (a.order || 0) - (b.order || 0),
    );
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cdnUrl } from "@/lib/utils"; // Import fungsi cdnUrl milikmu

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

  const items = files.map((fileName) => {
    const filePath = path.join(
      folderPath,
      fileName,
    );
    const fileContent = fs.readFileSync(
      filePath,
      "utf8",
    );
    const { data, content } = matter(fileContent);

    return {
      title: data.degree || data.title,
      organization:
        data.institution || data.company,
      startDate: data.start_date,
      date: `${data.start_date} - ${data.end_date || "Present"}`,
      location: data.location,
      gpa: data.GPA || null,
      logo: data.logo ? cdnUrl(data.logo) : null,
      description: content.trim(),
    };
  });

  return items.sort((a, b) => {
    return (
      new Date(b.startDate).getTime() -
      new Date(a.startDate).getTime()
    );
  });
}

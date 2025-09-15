import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML", level: 90, category: "frontend", image: "/skills/html.svg" },
  { name: "CSS", level: 80, category: "frontend", image: "/skills/css.svg" },
  { name: "JavaScript", level: 75, category: "frontend", image: "/skills/javascript.svg" },
  { name: "React", level: 85, category: "frontend", image: "/skills/react.svg" },
  { name: "TypeScript", level: 45, category: "frontend", image: "/skills/typescript.svg" },
  { name: "Tailwind CSS", level: 80, category: "frontend", image: "/skills/tailwindcss.svg" },
  { name: "Next.js", level: 40, category: "frontend", image: "/skills/nextjs.svg" },

  // Backend
  { name: "Node.js", level: 70, category: "backend", image: "/skills/nodejs.svg" },
  { name: "Express", level: 75, category: "backend", image: "/skills/express.svg" },
  { name: "MongoDB", level: 80, category: "backend", image: "/skills/mongodb.svg" },
  { name: "PostgreSQL", level: 65, category: "backend", image: "/skills/postgresql.svg" },
  { name: "GraphQL", level: 60, category: "backend", image: "/skills/graphql.svg" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", image: "/skills/git.svg" },
  { name: "GitHub", level: 90, category: "tools", image: "/skills/github.svg" },
  { name: "Docker", level: 70, category: "tools", image: "/skills/docker.svg" },
  { name: "Figma", level: 75, category: "tools", image: "/skills/figma.svg" },
  { name: "VS Code", level: 90, category: "tools", image: "/skills/vscode.svg" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center text-center"
            >
              {/* Skill Image */}
              <img
                src={skill.image}
                alt={skill.name}
                className="w-12 h-12 mb-4 object-contain"
              />

              {/* Skill Name */}
              <div className="mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* Skill Percentage */}
              <div className="text-right mt-1 w-full">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

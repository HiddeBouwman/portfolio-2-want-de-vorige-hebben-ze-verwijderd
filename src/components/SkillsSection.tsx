import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

const skillCategories = [
  {
    title: "Programmeertalen",
    color: "primary",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks",
    color: "secondary",
    skills: ["Laravel", "React", "Tailwind CSS"],
  },
  {
    title: "Tools & Software",
    color: "accent",
    skills: ["Git / GitHub", "Figma", "VS Code", "PHPStorm", "Miro", "Canva", "Adobe Suite"],
  },
  {
    title: "Soft Skills",
    color: "primary",
    skills: ["Teamwork", "Probleemoplossend", "Communicatie", "Creatief Denken"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <Reveal className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Skills</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Mijn <span className="text-gradient">Vaardigheden</span>
            </h2>
          </Reveal>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Reveal key={category.title} className="">
                <Card
                  key={category.title}
                  className="gradient-card shadow-card hover:shadow-glow transition-smooth overflow-hidden group"
                >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        category.color === "primary"
                          ? "bg-primary"
                          : category.color === "secondary"
                          ? "bg-secondary"
                          : "bg-accent"
                      }`}
                    />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                          category.color === "primary"
                            ? "bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                            : category.color === "secondary"
                            ? "bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground"
                            : "bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground"
                        }`}
                        style={{
                          animationDelay: `${
                            categoryIndex * 100 + skillIndex * 50
                          }ms`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-12 text-center">
            <Card className="inline-block gradient-card shadow-card">
              <CardContent className="p-6 flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇳🇱</span>
                  <div className="text-left">
                    <p className="font-semibold">Nederlands</p>
                    <p className="text-sm text-muted-foreground">
                      Moedertaal (C2)
                    </p>
                  </div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇬🇧</span>
                  <div className="text-left">
                    <p className="font-semibold">Engels</p>
                    <p className="text-sm text-muted-foreground">
                      Goed genoeg (B1)
                      </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

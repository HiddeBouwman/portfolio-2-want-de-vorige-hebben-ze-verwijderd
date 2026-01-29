import { ExternalLink, Github, Users, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

interface Project {
  title: string;
  description: string;
  problem: string;
  target: string;
  technologies: string[];
  role: "team" | "solo";
  learnings: string;
  github: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "TLE2 - Team Project",
    description:
      "Een collaboratief teamproject waarbij we een complete webapplicatie hebben gebouwd met PHP.",
    problem:
      "Het bouwen van een schaalbare applicatie in teamverband met proper version control.",
    target: "Medestudenten en docenten als eindgebruikers.",
    technologies: ["PHP", "MySQL", "CSS", "Git"],
    role: "team",
    learnings:
      "Samenwerken in een team, Git workflows, en het opzetten van een gestructureerd project.",
    github: "https://github.com/HiddeBouwman/TLE2",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    title: "Het Digitale Kookboek",
    description:
      "Een interactieve webapplicatie voor het opslaan en bekijken van recepten.",
    problem:
      "Recepten overzichtelijk digitaal bewaren en makkelijk terugvinden.",
    target: "Thuiskoks die hun favoriete recepten willen organiseren.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "solo",
    learnings:
      "Frontend development basics, responsive design en data structureren.",
    github: "https://github.com/HiddeBouwman/Het_digitale_kookboek",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
  },
  {
    title: "Kleding Site",
    description:
      "Een productcatalogus voor kleding met moderne styling en navigatie.",
    problem: "Een visueel aantrekkelijke e-commerce ervaring creëren.",
    target: "Online shoppers op zoek naar kleding.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "solo",
    learnings:
      "E-commerce UI patterns, product presentatie en gebruikerservaring.",
    github: "https://github.com/HiddeBouwman/Kleding_Site",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    title: "Front-end Development",
    description:
      "Een verzameling van frontend projecten en experimenten met moderne CSS technieken.",
    problem: "Experimenteren met geavanceerde CSS en animaties.",
    target: "Portfolio showcase en leerproces documenteren.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "solo",
    learnings:
      "Geavanceerde CSS technieken, animaties en responsive layouts.",
    github: "https://github.com/HiddeBouwman/Front-end-Development",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <Reveal className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Mijn <span className="text-gradient">Projecten</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Een selectie van projecten waar ik aan heb gewerkt tijdens mijn
              opleiding.
            </p>
          </Reveal>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.title} className="">
                <Card
                  key={project.title}
                  className="gradient-card shadow-card hover:shadow-glow transition-smooth overflow-hidden group"
                >
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image */}
                    <div className="md:col-span-2 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:bg-gradient-to-r" />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            {project.role === "team" ? (
                              <>
                                <Users className="w-4 h-4" />
                                <span className="text-sm">Teamproject</span>
                              </>
                            ) : (
                              <>
                                <User className="w-4 h-4" />
                                <span className="text-sm">
                                  Individueel project
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-1" />
                              Code
                            </a>
                          </Button>
                          {project.demo && (
                            <Button size="sm" asChild>
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="space-y-3 mb-4 text-sm">
                        <div>
                          <span className="font-medium text-foreground">
                            Probleem:{" "}
                          </span>
                          <span className="text-muted-foreground">
                            {project.problem}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">
                            Doelgroep:{" "}
                          </span>
                          <span className="text-muted-foreground">
                            {project.target}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">
                            Geleerd:{" "}
                          </span>
                          <span className="text-muted-foreground">
                            {project.learnings}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Reveal>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/HiddeBouwman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                Bekijk alle projecten op GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

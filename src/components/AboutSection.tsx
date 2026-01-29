import { MapPin, GraduationCap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "HBO Student",
      description: "Creative Media & Game Technologies aan Hogeschool Rotterdam",
    },
    {
      icon: Globe,
      title: "Internationale Ervaring",
      description: "Uitwisseling in Lahti, Finland met een multinationaal team",
    },
    {
      icon: MapPin,
      title: "Locatie",
      description: "Alphen aan den Rijn, Nederland",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Over mij</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Wie is <span className="text-gradient">Hidde</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ik ben een enthousiaste HBO-student met een passie voor het
                bouwen van moderne, gebruiksvriendelijke webapplicaties. Met
                ervaring in zowel frontend als backend development, ben ik altijd
                op zoek naar nieuwe uitdagingen.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tijdens mijn opleiding heb ik gewerkt met diverse technologieën
                zoals HTML, CSS, JavaScript, PHP en Laravel. Ik heb ook ervaring
                opgedaan met UX/UI design in tools als Figma.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Naast programmeren houd ik van sporten, koken en reizen. Deze
                hobby's helpen mij creatief en scherp te blijven.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <Card
                  key={item.title}
                  className="group gradient-card shadow-card hover:shadow-glow transition-smooth"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

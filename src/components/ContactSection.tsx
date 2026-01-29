import { Mail, MapPin, Phone, Github, Linkedin, Send, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bouwmanhidde@gmail.com",
    href: "mailto:bouwmanhidde@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "+31 6 12203698",
    href: "tel:+31612203698",
  },
  {
    icon: MapPin,
    label: "Locatie",
    value: "Alphen aan den Rijn, Nederland",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/HiddeBouwman",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hidde-bouwman-1170793a0/",
  },
];

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(
      `Naam: ${formData.name}\nEmail: ${formData.email}\n\nBericht:\n${formData.message}`
    );
    window.location.href = `mailto:bouwmanhidde@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email client geopend!",
      description: "Je kunt nu je bericht versturen via je email programma.",
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">Contact</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Neem <span className="text-gradient">Contact</span> Op
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Interesse in samenwerking of heb je vragen? Neem gerust contact op!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card
                    key={item.label}
                    className="gradient-card shadow-card hover:shadow-glow transition-smooth"
                  >
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium hover:text-primary transition-smooth"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="lg"
                    className="flex-1"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-5 h-5 mr-2" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>

              {/* CV Download */}
              <Button size="lg" className="w-full" asChild>
                <a href="/cv/Hidde_Bouwman_CV.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download mijn CV
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <Card className="gradient-card shadow-card">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Naam
                    </label>
                    <Input
                      id="name"
                      placeholder="Je naam"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="je@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Bericht
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Je bericht..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Verstuur Bericht
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

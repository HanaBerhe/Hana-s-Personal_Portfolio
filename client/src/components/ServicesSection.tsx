import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Freelance Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging communication gaps and empowering learning through professional services
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = LucideIcons[service.icon.charAt(0).toUpperCase() + service.icon.slice(1).replace(/-([a-z])/g, g => g[1].toUpperCase())] || LucideIcons['Code'];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className={`w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="text-white text-2xl h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                    <div className="space-y-6">
                      {service.features && (
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, i) => (
                            <Badge key={i} className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      )}
                      {service.subjects && (
                        <div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <LucideIcons.BookOpen className="h-4 w-4 mr-2" />
                            Subject Areas:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.subjects.map((subject) => (
                              <Badge
                                key={subject}
                                className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400 text-xs font-medium"
                              >
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {service.stats && service.stats.students && (
                        <div className="text-center p-4 bg-background rounded-xl">
                          <div className="text-2xl font-bold text-primary mb-1">{service.stats.students}</div>
                          <div className="text-sm text-muted-foreground"></div>
                        </div>
                      )}
                      {service.stats && service.stats.clients && (
                        <div className="text-center p-4 bg-background rounded-xl">
                          <div className="text-2xl font-bold text-primary mb-1">{service.stats.clients}</div>
                          <div className="text-sm text-muted-foreground">Clients Served</div>
                        </div>
                      )}
                      {service.stats && (
                        <div className="text-center p-4 bg-background rounded-xl">
                          <div className="text-2xl font-bold text-accent mb-1">{service.stats.averageRating}</div>
                          <div className="text-sm text-muted-foreground">Average Rating</div>
                        </div>
                      )}
                    </div>
                    <Button className="w-full mt-6 text-lg py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      {service.title === "Online Tutoring" ? "Book Tutoring Session" : `Request ${service.title}`}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

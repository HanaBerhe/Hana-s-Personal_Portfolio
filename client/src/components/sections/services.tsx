import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Languages, GraduationCap } from "lucide-react";
import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Freelance Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging communication gaps and empowering learning through professional translation and tutoring services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      {service.icon === "language" ? (
                        <Languages className="text-white text-2xl h-6 w-6" />
                      ) : (
                        <GraduationCap className="text-white text-2xl h-6 w-6" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {service.title === "Translation Services" ? (
                      <>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-foreground font-medium">
                                English ⟷ Amharic
                              </span>
                            </div>
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              Native
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-foreground font-medium">
                                English ⟷ Afaan Oromo
                              </span>
                            </div>
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              Fluent
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-foreground font-medium">
                                English ⟷ Aff-Somali
                              </span>
                            </div>
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              Fluent
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <span className="text-foreground font-medium">
                                English ⟷ Arabic
                              </span>
                            </div>
                            <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                              Intermediate
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-foreground font-medium">
                                Amharic ⟷ Afaan Oromo
                              </span>
                            </div>
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              Fluent
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                            <div className="flex items-center space-x-3">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-foreground font-medium">
                                Amharic ⟷ Aff-Somali
                              </span>
                            </div>
                            <span className="text-green-600 dark:text-green-400 font-medium">
                              Fluent
                            </span>
                          </div>
                        </div>

                        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                          <h4 className="font-semibold text-foreground mb-2">Specializations:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          {service.stats?.students && (
                            <div className="text-center p-4 bg-muted rounded-xl">
                              <div className="text-2xl font-bold text-primary mb-1">
                                {service.stats.students}
                              </div>
                              <div className="text-sm text-muted-foreground">Students Taught</div>
                            </div>
                          )}
                          {service.stats?.clients && (
                            <div className="text-center p-4 bg-muted rounded-xl">
                              <div className="text-2xl font-bold text-primary mb-1">
                                {service.stats.clients}
                              </div>
                              <div className="text-sm text-muted-foreground">Clients Served</div>
                            </div>
                          )}
                          {service.stats?.averageRating && (
                            <div className="text-center p-4 bg-muted rounded-xl">
                              <div className="text-2xl font-bold text-accent mb-1">
                                {service.stats.averageRating}
                              </div>
                              <div className="text-sm text-muted-foreground">Average Rating</div>
                            </div>
                          )}
                        </div>

                        {/* Remove subject area for non-tutoring services */}
                        {service.subjects && service.title === "Online Tutoring" && (
                          <div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl">
                            <h4 className="font-semibold text-foreground mb-2">Subject Areas:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.subjects.map((subject) => (
                                <Badge key={subject} variant="secondary" className="text-xs">
                                  {subject}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => {
                        const el = document.querySelector('#contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {service.title === "Translation Services" ? "Request Translation" : "Book Session"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

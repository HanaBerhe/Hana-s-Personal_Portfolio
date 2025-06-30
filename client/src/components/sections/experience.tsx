import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Contract": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Internship": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through diverse industries, building expertise in data analysis, machine learning, and system development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={getTypeColor(experience.type)}>
                          {experience.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground font-medium">
                          {experience.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {experience.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {experience.company}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Optional: Add image space for larger screens */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                    <span className="text-4xl">{index === 0 ? "🏦" : index === 1 ? "📊" : index === 2 ? "📡" : "💻"}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

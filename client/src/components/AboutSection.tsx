import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Languages } from "lucide-react";

export default function AboutSection() {
  const technicalSkills = [
    "Python", "SQL", "Machine Learning", "Data Analysis", "React.js", "Web Development"
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Amharic", level: "Native" },
    { name: "Afaan Oromo", level: "Fluent" },
    { name: "Aff-Somali", level: "Fluent" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights and bridging 
            communication gaps across cultures
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
              Passionate about transforming data into actionable insights and bridging 
            communication gaps across cultures
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Currently working as a Data Analyst and ML Engineer at the Commercial 
                Bank of Ethiopia, I've had the opportunity to work across various industries, 
                from telecommunications to healthcare, gaining valuable experience in 
                data-driven decision making and system development.
              </p>
            </div>
            
            {/* Education Card */}
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <GraduationCap className="text-primary mr-3 h-5 w-5" />
                  Education
                </h3>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">BSc in Information Systems</p>
                  <p className="text-muted-foreground">Addis Ababa University</p>
                  <p className="text-sm text-muted-foreground">Graduated: July 2024</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Technical Skills */}
            <Card className="gradient-primary p-[1px] rounded-2xl">
              <div className="bg-background rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <Code className="text-primary mr-3 h-5 w-5" />
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {technicalSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
            
            {/* Languages */}
            <Card className="gradient-secondary p-[1px] rounded-2xl">
              <div className="bg-background rounded-2xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <Languages className="text-accent mr-3 h-5 w-5" />
                    Languages
                  </h3>
                  <div className="space-y-3">
                    {languages.map((language, index) => (
                      <motion.div
                        key={language.name}
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-muted-foreground">{language.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {language.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

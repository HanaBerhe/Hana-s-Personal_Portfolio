import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap } from "lucide-react";
import { personalInfo, technicalSkills, languages } from "@/lib/data";
import { apiRequest } from "@/lib/queryClient";

export function AboutSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Hana_Berhe_Girmay_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded mb-4"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights and bridging communication gaps across cultures
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.description}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Currently working as a Data Analyst and ML Engineer at the Commercial Bank of Ethiopia, I've had the opportunity to work across various industries, from telecommunications to healthcare, gaining valuable experience in data-driven decision making and system development.
              </p>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <GraduationCap className="text-primary mr-3 h-5 w-5" />
                  Education
                </h3>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src="photohg.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
                      alt="Graduation ceremony at Addis Ababa University"
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="font-semibold text-foreground">{personalInfo.education.degree}</p>
                    <p className="text-muted-foreground">{personalInfo.education.institution}</p>
                    <p className="text-sm text-muted-foreground">Graduated: {personalInfo.education.graduationDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button onClick={handleDownloadResume} className="inline-flex items-center">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Technical Skills */}
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-muted/50 dark:to-muted/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <span className="text-primary mr-3">💻</span>
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-primary h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-muted/50 dark:to-muted/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <span className="text-accent mr-3">🌐</span>
                  Languages
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 bg-background/50 rounded-lg"
                    >
                      <h4 className="font-semibold text-foreground">{language.name}</h4>
                      <p className="text-sm text-muted-foreground">{language.level}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Yekatit 12 Medical Hospital HR System",
      description: "A comprehensive web-based human resource management system designed for healthcare institutions. Features include employee management, scheduling, payroll integration, and performance tracking with real-time analytics dashboard.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      featured: true,
      category: "Graduation Project"
    },
    {
      title: "Customer Analytics ML Model",
      description: "Machine learning model for customer behavior prediction and segmentation using advanced analytics and visualization techniques.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      featured: false
    },
    {
      title: "Multi-Language Learning Platform",
      description: "Interactive online tutoring platform supporting multiple languages with real-time video conferencing and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Vue.js", "Firebase", "WebRTC"],
      featured: false
    },
    {
      title: "Banking Risk Assessment Tool",
      description: "Advanced risk assessment algorithm for financial institutions with real-time monitoring and automated reporting capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Python", "TensorFlow", "PostgreSQL"],
      featured: false
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "React": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      "Node.js": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      "MongoDB": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      "Express": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      "Python": "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      "Scikit-learn": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      "Pandas": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      "Vue.js": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      "Firebase": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400",
      "WebRTC": "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      "TensorFlow": "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      "PostgreSQL": "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
    };
    return colors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase my expertise in data science, web development, 
            and system design
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                project.featured ? "gradient-primary p-[1px]" : ""
              }`}>
                <div className={project.featured ? "bg-background rounded-lg h-full" : "h-full"}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover ${project.featured ? "h-64" : "h-48"}`}
                  />
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      {project.featured && (
                        <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                      )}
                      {project.category && (
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className={`font-bold text-foreground mb-4 ${project.featured ? "text-2xl" : "text-xl"}`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-muted-foreground leading-relaxed mb-6 flex-grow ${
                      project.featured ? "text-base" : "text-sm"
                    }`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className={`text-xs font-medium ${getTechColor(tech)}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="sm" className="p-0">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span>View Project</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="p-0">
                        <Github className="h-4 w-4 mr-2" />
                        <span>Source Code</span>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

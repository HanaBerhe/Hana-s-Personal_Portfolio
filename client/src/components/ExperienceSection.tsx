import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Data Analyst & ML Engineer",
      company: "Commercial Bank of Ethiopia",
      period: "2024 - Present",
      status: "Current",
      description: "Leading data-driven initiatives to optimize banking operations, developing machine learning models for risk assessment, and creating automated reporting systems that improved decision-making processes by 40%.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Marketing Data Analyst",
      company: "Unilever",
      period: "2 months",
      status: "Contract",
      description: "Analyzed consumer behavior data and market trends to support strategic marketing decisions. Developed interactive dashboards that provided real-time insights into campaign performance and ROI metrics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Information Systems Intern",
      company: "Ethio Telecom",
      period: "3 months",
      status: "Internship",
      description: "Contributed to network optimization projects and customer data analysis. Gained hands-on experience with large-scale telecommunications data and learned industry best practices for system reliability.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Software Engineer Intern",
      company: "Tourism Ministry",
      period: "3 months",
      status: "Internship",
      description: "Developed web-based applications to support tourism data management and visitor analytics. Collaborated with cross-functional teams to implement user-friendly interfaces and optimize system performance.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Current": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Contract": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "Internship": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through diverse industries, building expertise in data analysis, 
            machine learning, and system development
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-background z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="hidden md:block">
                      <img
                        src={experience.image}
                        alt={`${experience.company} workspace`}
                        className="rounded-t-xl w-full h-48 object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={getStatusColor(experience.status)}>
                          {experience.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{experience.title}</h3>
                      <h4 className="text-lg font-semibold text-primary mb-3">{experience.company}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

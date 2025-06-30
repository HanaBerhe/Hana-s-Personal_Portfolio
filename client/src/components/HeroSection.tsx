import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import {hanaImage} from '../../public/portrait.jpg';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm</span>
            <span className="text-gradient block">Hana Berhe Girmay</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Data Analyst | ML Engineer |Virtual Assistant |Data Entry Operator |Translator | Tutor
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            A passionate Information Systems graduate from Addis Ababa University, 
            blending data science, software engineering, and multilingual expertise 
            to solve complex problems and drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 mt-8">
            <Button asChild variant="ghost" size="sm" className="p-2">
              <a href="https://linkedin.com/in/hana-berhe-455042333" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="p-2">
              <a href="https://github.com/hanaberhe" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="p-2">
              <a href="mailto:hananahberhe@gmail.com">
                <Mail className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-20 transform rotate-6"
              animate={{ rotate: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src={hanaImage} // use your custom image placed in client/public/portrait.jpg
              alt="Hana Berhe Girmay - Professional Portrait"
              className="relative rounded-3xl shadow-2xl w-80 h-80 object-cover transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

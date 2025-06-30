import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";

export default function Footer() {
 const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/hanaberhe", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/hanaberhe", label: "GitHub" },
  { icon: Mail, href: "mailto:hananahberhe@gmail.com", label: "Email" },
  { icon: Twitter, href: "https://twitter.com/hanaberhe", label: "Twitter" },
];


  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
  ];

  const services = [
    "Data Analysis",
    "Machine Learning",
    "Translation",
    "Online Tutoring",
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hana Berhe Girmay</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Data Analyst, ML Engineer, Translator, and Tutor committed to delivering 
              innovative solutions and empowering others through technology and education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm">
            © 2024 Hana Berhe Girmay. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

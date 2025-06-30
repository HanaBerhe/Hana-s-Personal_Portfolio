import { Github, Linkedin, Mail, X as XIcon } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
	const socialLinks = [
		{ icon: Linkedin, href: `https://${personalInfo.linkedin}`, label: "LinkedIn" },
		{ icon: Github, href: `https://${personalInfo.github}`, label: "GitHub" },
		{ icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
		{ icon: XIcon, href: "https://x.com/HanaBerheGirmay", label: "X" },
	];

	return (
		<footer className="bg-muted/50 border-t border-border py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="md:col-span-2">
						<h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
						<p className="text-muted-foreground leading-relaxed mb-6">
							Data Analyst, ML Engineer, Translator, Virtual Assistant, Data Entry Operator, and Tutor committed to delivering innovative solutions and empowering others through technology and education.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className="text-muted-foreground hover:text-primary transition-colors duration-300"
									aria-label={link.label}
								>
									<link.icon className="h-5 w-5" />
								</a>
							))}
						</div>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							{["About", "Experience", "Projects", "Services", "Certificate", "Contact Me"].map((item) => (
								<li key={item}>
									<button
										onClick={() => {
											let id = item.toLowerCase();
											if (item === "Contact Me") id = "contact";
											if (item === "Certificate") id = "certificates";
											const element = document.querySelector(`#${id.replace(/\s+/g, '')}`);
											element?.scrollIntoView({ behavior: "smooth" });
										}}
										className="text-muted-foreground hover:text-foreground transition-colors duration-300"
									>
										{item}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Services</h4>
						<ul className="space-y-2">
							{["Data Analysis", "Machine Learning", "Translation", "Online Tutoring", "Virtual Assistant", "Data Entry"].map((service) => (
								<li key={service}>
									<span className="text-muted-foreground">{service}</span>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-lg font-semibold mb-4">Resume</h4>
						<Button
							onClick={() => {
								const link = document.createElement('a');
								link.href = '/api/resume/download';
								link.download = 'Hana_Berhe_Girmay_Resume.pdf';
								document.body.appendChild(link);
								link.click();
								document.body.removeChild(link);
							}}
							className="inline-flex items-center mt-2"
						>
							<span className="mr-2">Download Resume</span>
						</Button>
					</div>
				</div>

				<div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-muted-foreground text-sm">
						© 2024 {personalInfo.name}. All rights reserved.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
							Privacy Policy
						</a>
						<a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

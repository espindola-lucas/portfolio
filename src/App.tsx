import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Code2, Layers, Cpu, Cloud, Terminal, ChevronRight, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// --- Types ---
type Language = 'en' | 'es';

interface Project {
  title: Record<Language, string>;
  description: Record<Language, string>;
  tags: string[];
  link: string;
  github?: string;
  image: string;
}

interface Experience {
  company: string;
  role: Record<Language, string>;
  period: Record<Language, string>;
  description: Record<Language, string[]>;
}

// --- Content Dictionary ---
const CONTENT = {
  nav: {
    about: { en: "About", es: "Sobre mí" },
    experience: { en: "Experience", es: "Experiencia" },
    skills: { en: "Skills", es: "Skills" },
    projects: { en: "Projects", es: "Proyectos" },
    contact: { en: "Contact", es: "Contacto" },
    hire: { en: "Hire Me", es: "Contratar" }
  },
  hero: {
    badge: { en: "Available for new challenges", es: "Disponible para nuevos desafíos" },
    subtitle: { 
      en: "Software Engineer. Specialized in scalable architectures, cloud systems, and building robust APIs.",
      es: "Software Engineer. Especializado en arquitecturas escalables, sistemas en la nube y el desarrollo de APIs robustas."
    },
    cta: { en: "View Projects", es: "Ver Proyectos" }
  },
  about: {
    title: { en: "About Me", es: "Sobre mí" },
    p1: { 
      en: "I am a passionate software engineer with over 4 years of experience pushing the boundaries of backend and infrastructure. My focus is on creating systems that aren't just functional, but scalable and maintainable.",
      es: "Soy un apasionado de la ingeniería de software con más de 4 años desafiando los límites del backend y la infraestructura. Mi enfoque se centra en crear sistemas que no solo funcionen, sino que sean escalables y mantenibles."
    },
    p2: {
      en: "As a Software Engineer, I enjoy mentoring teams, defining clean architectures, and ensuring every line of code adds real business value. My experience ranges from manual server deployments to distributed orchestration on AWS with Docker.",
      es: "Como Software Engineer, disfruto mentorizar equipos, definir arquitecturas limpias y asegurar que cada línea de código aporte valor real al negocio. Mi experiencia abarca desde el despliegue manual en servidores locales hasta la orquestación distribuida en AWS con Docker."
    },
    location: { en: "Tandil, Buenos Aires, Argentina", es: "Tandil, Buenos Aires, Argentina" },
    expBadge: { en: "4+ Yrs Exp", es: "4+ Años Exp" },
    engBadge: { en: "Engineering", es: "Ingeniería" }
  },
  contact: {
    title: { en: "Contact", es: "Contacto" },
    heading: { en: "Ready to scale your architecture?", es: "¿Listo para escalar tu arquitectura?" },
    p: {
      en: "I'm looking to participate in ambitious projects where performance and scalability are the priority.",
      es: "Estoy buscando participar en proyectos ambiciosos donde la performance y la escalabilidad sean la prioridad."
    },
    ctaEmail: { en: "Send Email", es: "Enviar Email" }
  }
};

const PROJECTS: Project[] = [
  {
    title: { en: "Cloud Scale API Gateway", es: "Cloud Scale API Gateway" },
    description: {
      en: "Design and implementation of a distributed gateway capable of handling +10k requests per second, integrating JWT authentication and dynamic rate limiting.",
      es: "Diseño e implementación de un gateway distribuido capaz de manejar +10k peticiones por segundo, integrando autenticación JWT y rate limiting dinámico."
    },
    tags: ["Node.js", "Redis", "Docker", "AWS"],
    link: "#",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: { en: "EcoSystem Monitoring Tool", es: "EcoSystem Monitoring Tool" },
    description: {
      en: "Real-time observability dashboard for microservices with distributed traceability and preventive alerts based on error patterns.",
      es: "Dashboard de observabilidad en tiempo real para microservicios con trazabilidad distribuida y alertas preventivas basadas en patrones de error."
    },
    tags: ["TypeScript", "PostgreSQL", "Grafana", "Go"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: { en: "Laravel Core Engine", es: "Laravel Core Engine" },
    description: {
      en: "Massive refactoring of a monolithic core towards a service-oriented architecture, reducing response time by 40%.",
      es: "Refactorización masiva de un core monolítico hacia una arquitectura orientada a servicios, reduciendo el tiempo de respuesta en un 40%."
    },
    tags: ["PHP", "Laravel", "PostgreSQL", "CI/CD"],
    link: "#",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
  }
];

const EXPERIENCES: Experience[] = [
  {
    company: "SIU",
    role: { en: "Senior Software Engineer", es: "Senior Software Engineer" },
    period: { en: "2021 - Present", es: "2021 - Presente" },
    description: {
      en: [
        "Technical leadership of development teams in high-scale government projects.",
        "Definition of software architecture and Clean Code standards.",
        "Performance optimization in PostgreSQL databases and robust deployments in AWS."
      ],
      es: [
        "Liderazgo técnico de equipos de desarrollo en proyectos gubernamentales de alta escala.",
        "Definición de arquitectura de software y estándares de Clean Code.",
        "Optimización de performance en bases de datos PostgreSQL y despliegues robustos en AWS."
      ]
    }
  },
  {
    company: "Freelance",
    role: { en: "Software Engineer", es: "Software Engineer" },
    period: { en: "2021 - Present", es: "2021 - Present" },
    description: {
      en: [
        "End-to-end development of custom solutions for international clients.",
        "Implementation of serverless architectures and containers using Docker.",
        "Technical consulting for modernizing legacy stacks to modern Node.js/PHP."
      ],
      es: [
        "Desarrollo end-to-end de soluciones personalizadas para clientes internacionales.",
        "Implementación de arquitecturas serverless y contenedores mediante Docker.",
        "Consultoría técnica para la modernización de stacks legados a Node.js/PHP moderno."
      ]
    }
  }
];

const SKILLS = [
  { category: "Backend", icons: <Terminal size={20} />, techs: ["PHP (Laravel)", "Node.js", "Java", "Python"] },
  { category: "Frontend", icons: <Code2 size={20} />, techs: ["TypeScript", "JavaScript", "React", "Next.js"] },
  { category: "Infrastructure", icons: <Cloud size={20} />, techs: ["AWS", "Docker", "Nginx", "CI/CD"] },
  { category: "Databases", icons: <Layers size={20} />, techs: ["PostgreSQL", "Redis", "MySQL", "MongoDB"] }
];

// --- Components ---

const Navbar = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-[#030712]/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold font-mono tracking-tighter"
        >
          LNE<span className="text-blue-500">.</span>dev
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          {Object.entries(CONTENT.nav).filter(([key]) => key !== 'hire').map(([key, value]) => (
            <a key={key} href={`#${key}`} className="hover:text-white transition-colors cursor-pointer">
              {value[lang]}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
            <button 
              onClick={() => setLang('en')}
              className={cn(
                "cursor-pointer px-2 py-1 text-[10px] font-bold rounded-full transition-all",
                lang === 'en' ? "bg-blue-600 text-white" : "text-gray-500 hover:text-white"
              )}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('es')}
              className={cn(
                "cursor-pointer px-2 py-1 text-[10px] font-bold rounded-full transition-all",
                lang === 'es' ? "bg-blue-600 text-white" : "text-gray-500 hover:text-white"
              )}
            >
              ES
            </button>
          </div>
          <a 
            href="mailto:lucas.nahuel.espindola1998@gmail.com"
            className="hidden sm:block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-all"
          >
            {CONTENT.nav.hire[lang]}
          </a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <div id={id} className="pt-24 pb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center space-x-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{children}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
    </motion.div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto z-10 w-full">
          <motion.div
            key={lang}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>{CONTENT.hero.badge[lang]}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6">
              Lucas Nahuel <br />
              <span className="text-gradient">Espindola</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-medium max-w-2xl mb-8 leading-relaxed">
              {CONTENT.hero.subtitle[lang]}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="cursor-pointer flex items-center space-x-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-transform">
                <span>{CONTENT.hero.cta[lang]}</span>
                <ChevronRight size={18} />
              </button>
              <div className="flex items-center space-x-4 px-4">
                <a target="_blank" href="https://github.com/espindola-lucas/" className="p-3 hover:text-blue-400 transition-colors"><Github /></a>
                <a target="_blank" href="https://www.linkedin.com/in/lucas-nahuel-espindola/" className="p-3 hover:text-blue-400 transition-colors"><Linkedin /></a>
                <a target="_blank" href="mailto:lucas.nahuel.espindola1998@gmail.com" className="p-3 hover:text-blue-400 transition-colors"><Mail /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Containers */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        
        {/* About Section */}
        <SectionHeading id="about">{CONTENT.about.title[lang]}</SectionHeading>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            key={`about-${lang}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>{CONTENT.about.p1[lang]}</p>
            <p>{CONTENT.about.p2[lang]}</p>
            <div className="flex items-center space-x-2 text-blue-400 font-medium font-mono text-sm">
              <MapPin size={16} />
              <span>{CONTENT.about.location[lang]}</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass-card overflow-hidden group">
               <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-80"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 flex items-center space-x-3">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full bg-blue-600 border-2 border-black flex items-center justify-center text-[10px] font-bold">
                           {i}+
                         </div>
                       ))}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{CONTENT.about.expBadge[lang]}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest">{CONTENT.about.engBadge[lang]}</div>
                    </div>
                 </div>
               </div>
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-blue-500/20 rounded-2xl"></div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <SectionHeading id="experience">{CONTENT.nav.experience[lang]}</SectionHeading>
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={`${idx}-${lang}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[200px_1fr] gap-8">
                <div className="text-sm font-mono text-blue-500 mb-2 md:mb-0 uppercase tracking-wider font-bold">
                  {exp.period[lang]}
                </div>
                <div className="glass-card p-8 group-hover:border-blue-500/30 transition-colors">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{exp.role[lang]}</h3>
                  <div className="text-gray-400 text-lg mb-6">{exp.company}</div>
                  <ul className="space-y-4">
                    {exp.description[lang].map((desc, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-300">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-0 top-0 bottom-0 md:left-[200px] md:ml-[-13px] w-[1px] bg-white/10"></div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <SectionHeading id="skills">{CONTENT.nav.skills[lang]}</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="glass-card p-6 border-b-2 border-b-transparent hover:border-b-blue-500"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                {skill.icons}
              </div>
              <h3 className="text-lg font-bold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.techs.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-md text-xs font-mono text-gray-400 transition-colors hover:text-white hover:bg-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <SectionHeading id="projects">{CONTENT.nav.projects[lang]}</SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={`${idx}-${lang}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card flex flex-col h-full overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title[lang]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title[lang]}</h3>
                  <div className="flex space-x-3">
                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-1 italic leading-relaxed">
                  "{project.description[lang]}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono tracking-widest uppercase text-blue-500/80 bg-blue-500/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <SectionHeading id="contact">{CONTENT.contact.title[lang]}</SectionHeading>
        <div className="glass-card p-12 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
          <motion.div
            key={`contact-${lang}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">{CONTENT.contact.heading[lang]}</h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
              {CONTENT.contact.p[lang]}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:lucas.nahuel.espindola1998@gmail.com"
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
              >
                {CONTENT.contact.ctaEmail[lang]}
              </a>
              <a 
                href="https://linkedin.com"
                className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:bg-white/5 font-bold rounded-2xl transition-all"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6">
          <div className="font-mono tracking-tighter">
            LNE.dev <span className="text-xs opacity-50">© 2024</span>
          </div>
          <div className="flex space-x-8">
             <a href="#" className="hover:text-white transition-colors">Github</a>
             <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <div className="italic">
            {lang === 'en' ? '"Software is a tool for building the future."' : '"El software es una herramienta para construir el futuro."'}
          </div>
        </div>
      </footer>
    </div>
  );
}

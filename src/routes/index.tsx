import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Download, Mail, Phone, Linkedin, Github, ArrowUp, Code2, Database,
  Server, Globe, GitBranch, Layers, Sparkles, GraduationCap, Award,
  Briefcase, Send, MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import profileImg from "@/assets/profile.jpg";
import { Particles } from "@/components/Particles";
import { MouseGlow } from "@/components/MouseGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Typewriter } from "@/components/Typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sonam Khopade — Java Full Stack Developer" },
      { name: "description", content: "Portfolio of Sonam Khopade, a Java Full Stack Developer specialized in Spring Boot, REST APIs, MySQL, React and Angular." },
      { property: "og:title", content: "Sonam Khopade — Java Full Stack Developer" },
      { property: "og:description", content: "Premium portfolio showcasing Java, Spring Boot, REST APIs, MySQL and modern web projects." },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SKILLS: { name: string; icon: typeof Code2 }[] = [
  { name: "Java", icon: Code2 },
  { name: "Spring Boot", icon: Server },
  { name: "Hibernate", icon: Layers },
  { name: "JPA", icon: Layers },
  { name: "MySQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Angular", icon: Globe },
  { name: "React", icon: Globe },
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "REST APIs", icon: Server },
  { name: "Git", icon: GitBranch },
];

const EXPERIENCE = [
  {
    role: "Java Developer Intern",
    company: "Interface11",
    period: "Jan 2025 – Jul 2025",
    points: [
      "Developed REST APIs using Spring Boot",
      "Worked with MySQL databases and JPA",
      "Followed Agile development practices",
      "Focused on backend development & performance",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Pravi Evolvability Tech Pvt Ltd",
    period: "Feb 2024 – May 2024",
    points: [
      "Developed the matching-answer module",
      "Improved UI using React and JavaScript",
      "Worked with MySQL and client-server communication",
    ],
  },
];

const EDUCATION = [
  { title: "M.Sc. Computer Science", org: "SPPU", year: "2025" },
  { title: "B.Sc. Computer Science", org: "SPPU", year: "2022" },
  { title: "HSC", org: "Maharashtra Board", year: "2019" },
  { title: "SSC", org: "Maharashtra Board", year: "2017" },
];

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  };
}

function Index() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ScrollProgress />
      <Particles />
      <MouseGlow />

      {/* Nav */}
      <header className="fixed left-0 right-0 top-0 z-40">
        <div className="mx-auto mt-4 max-w-6xl px-4">
          <nav className="glass flex items-center justify-between rounded-full px-5 py-3">
            <a href="#home" className="font-bold tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
              <span className="neon-text">&lt;SK/&gt;</span>
            </a>
            <ul className="hidden gap-7 text-sm md:flex">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-muted-foreground transition hover:text-[var(--neon)]">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-1.5 text-xs font-medium text-sky-300 transition hover:bg-sky-400/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center px-4 pt-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-300/80">Welcome to my portfolio</p>
            <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl" style={{ fontFamily: "Poppins, sans-serif" }}>
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Sonam Khopade
              </span>
            </h1>
            <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
              I'm a <Typewriter words={["Java Developer", "Spring Boot Developer", "Full Stack Developer"]} />
            </h2>
            <p className="mb-8 max-w-xl text-base text-muted-foreground md:text-lg">
              Passionate Java Full Stack Developer with expertise in Spring Boot, REST APIs, MySQL, and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.5)] transition hover:scale-105 hover:shadow-[0_0_45px_rgba(56,189,248,0.8)]"
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-6 py-3 font-semibold text-sky-300 transition hover:bg-sky-400/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto flex items-center justify-center"
          >
            <div className="absolute h-72 w-72 rounded-full bg-sky-400/30 blur-3xl md:h-96 md:w-96" />
            <div className="animate-float relative">
              <div className="animate-pulse-glow rounded-full p-1">
                <div className="rounded-full border-2 border-sky-400/40 bg-background/60 p-2 backdrop-blur">
                  <img
                    src={profileImg}
                    alt="Sonam Khopade"
                    width={400}
                    height={400}
                    className="h-64 w-64 rounded-full object-cover md:h-80 md:w-80"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Me" kicker="Get to know me">
        <div className="grid gap-8 md:grid-cols-5">
          <motion.div {...reveal(0)} className="glass md:col-span-3 rounded-3xl p-8">
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
              I'm an <span className="text-foreground font-semibold">M.Sc. Computer Science</span> graduate from SPPU, deeply
              passionate about building robust, scalable, and elegant software.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I bring strong knowledge of <span className="text-sky-300">Java, Spring Boot, Hibernate, SQL,
              Angular, React, HTML, CSS, and JavaScript</span> — combined with a love for problem solving and crafting clean,
              maintainable code.
            </p>
          </motion.div>
          <motion.div {...reveal(0.15)} className="md:col-span-2 grid grid-cols-2 gap-4">
            {[
              { k: "1+", v: "Years experience" },
              { k: "10+", v: "Technologies" },
              { k: "2", v: "Internships" },
              { k: "M.Sc.", v: "Computer Science" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-5 text-center transition hover:scale-105 hover:neon-border">
                <div className="text-3xl font-extrabold neon-text" style={{ fontFamily: "Poppins" }}>{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills & Tech" kicker="What I work with">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              {...reveal(i * 0.04)}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition hover:neon-border"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-sky-400/0 blur-2xl transition group-hover:bg-sky-400/30" />
              <s.icon className="mb-3 h-7 w-7 text-sky-300 transition group-hover:scale-110" />
              <div className="font-semibold">{s.name}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" kicker="My journey">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-sky-400/60 via-sky-400/20 to-transparent md:left-1/2" />
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role}
              {...reveal(i * 0.1)}
              className={`relative mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="glass rounded-2xl p-6 transition hover:neon-border">
                  <div className="mb-1 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sky-300">
                    <Briefcase className="h-3.5 w-3.5" /> {e.period}
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "Poppins" }}>{e.role}</h3>
                  <div className="mb-3 text-sm text-muted-foreground">{e.company}</div>
                  <ul className={`space-y-1 text-sm text-muted-foreground ${i % 2 || true ? "" : "md:text-right"}`}>
                    {e.points.map((p) => <li key={p}>• {p}</li>)}
                  </ul>
                </div>
              </div>
              <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.8)] md:left-1/2" />
              <div />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" kicker="Featured work">
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard />
          <motion.div {...reveal(0.1)} className="glass flex flex-col items-center justify-center rounded-3xl p-10 text-center">
            <Sparkles className="mb-3 h-8 w-8 text-sky-300" />
            <h3 className="text-xl font-semibold">More projects coming soon</h3>
            <p className="mt-2 text-sm text-muted-foreground">Currently building new Spring Boot & React projects. Stay tuned!</p>
          </motion.div>
        </div>
      </Section>

      {/* Education & Certifications */}
      <Section id="education" title="Education & Certifications" kicker="Credentials">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div {...reveal(0)} className="glass rounded-3xl p-6">
            <div className="mb-4 inline-flex items-center gap-2 text-sky-300">
              <GraduationCap className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider">Education</span>
            </div>
            <ul className="space-y-4">
              {EDUCATION.map((ed) => (
                <li key={ed.title} className="flex items-start justify-between gap-4 border-b border-white/5 pb-3 last:border-0">
                  <div>
                    <div className="font-semibold">{ed.title}</div>
                    <div className="text-xs text-muted-foreground">{ed.org}</div>
                  </div>
                  <div className="text-sm text-sky-300">{ed.year}</div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...reveal(0.15)} className="glass rounded-3xl p-6">
            <div className="mb-4 inline-flex items-center gap-2 text-sky-300">
              <Award className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider">Certifications</span>
            </div>
            <div className="glass rounded-2xl p-5 transition hover:neon-border">
              <div className="font-semibold">Certified Java Full Stack Developer</div>
              <div className="text-sm text-muted-foreground">Symbiosis, Pune</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Get In Touch" kicker="Let's work together">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div {...reveal(0)} className="space-y-4">
            <ContactRow icon={Mail} label="Email" value="sonam.khopade@example.com" href="mailto:sonam.khopade@example.com" />
            <ContactRow icon={Phone} label="Phone" value="+91 00000 00000" href="tel:+910000000000" />
            <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/sonamkhopade" href="https://linkedin.com" />
            <ContactRow icon={MapPin} label="Location" value="Pune, India" />
          </motion.div>
          <motion.form
            {...reveal(0.15)}
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! I'll get back to you soon."); }}
            className="glass rounded-3xl p-6"
          >
            <div className="grid gap-4">
              <Input label="Name" name="name" />
              <Input label="Email" name="email" type="email" />
              <div>
                <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-sky-400/60 focus:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)]"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Sonam Khopade. Crafted with ❤ & Java.</div>
          <div className="flex gap-3">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Mail, href: "mailto:sonam.khopade@example.com" },
            ].map((s, i) => (
              <a key={i} href={s.href} className="glass grid h-10 w-10 place-items-center rounded-full transition hover:neon-border hover:text-sky-300">
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.6)] transition hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div {...reveal(0)} className="mb-12 text-center">
          {kicker && <p className="mb-2 text-xs uppercase tracking-[0.3em] text-sky-300/80">{kicker}</p>}
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl" style={{ fontFamily: "Poppins, sans-serif" }}>
            <span className="bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">{title}</span>
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function ProjectCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <motion.div
      {...reveal(0)}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -8, y: ((e.clientX - r.left) / r.width - 0.5) * 8 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="glass group relative overflow-hidden rounded-3xl p-7 transition hover:neon-border"
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl transition group-hover:bg-sky-400/40" />
      <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
        <Sparkles className="h-3.5 w-3.5" /> Featured Project
      </div>
      <h3 className="mb-2 text-2xl font-bold" style={{ fontFamily: "Poppins" }}>Kisan Seva</h3>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        A C2C platform that connects farmers directly with customers, opening up marketing opportunities and enabling
        efficient communication and trade — no middlemen, more value to the grower.
      </p>
      <div className="flex flex-wrap gap-2">
        {["Java", "Spring Boot", "Hibernate", "JPA", "SQL Server"].map((t) => (
          <span key={t} className="rounded-full border border-sky-400/30 bg-sky-400/5 px-3 py-1 text-xs text-sky-300">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:neon-border">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-sky-400/10 text-sky-300">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Input({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="mb-1 block text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-sky-400/60 focus:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
      />
    </div>
  );
}

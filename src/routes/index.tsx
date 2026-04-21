import { GitHubIcon } from "@/components/icons/github"
import { LinkedInIcon } from "@/components/icons/linkedin"
import { createFileRoute } from "@tanstack/react-router"
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react"

export const Route = createFileRoute("/")({ component: Home })

const projects = [
  {
    name: "SafetyGames",
    slug: "safetygames",
    year: "2024",
    description:
      "Mobile safety training platform for industrial workplaces. Employees complete gamified scenarios — fire extinguisher usage, CPR, PPE protocols — while managers track performance and compliance through a real-time web dashboard.",
    tags: ["Mobile", "Gamification", "Dashboard", "Safety"],
    status: "active",
    href: "#",
  },
  {
    name: "EkoLibrary",
    slug: "ekolibrary",
    year: "2024",
    description:
      "A structured database and reference library for biological entities. Browse, search, and explore detailed profiles of organisms with taxonomic classification, habitat data, and ecological relationships.",
    tags: ["Database", "Biology", "Reference"],
    status: "active",
    href: "#",
  },
]

const stack = [
  { label: "C++", note: "systems & performance" },
  { label: "C#", note: "backend & tooling" },
  { label: "Python", note: "scripting & data" },
  { label: "TypeScript", note: "frontend & fullstack" },
  { label: "Rust", note: "when it matters" },
  { label: "Docker", note: "infra & deployment" },
  { label: "PostgreSQL", note: "data persistence" },
  { label: "Linux", note: "where code lives" },
]

const links = [
  { label: "GitHub", href: "https://github.com/andrej2431", icon: GitHubIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Email", href: "mailto:andrej2431@gmail.com", icon: Mail },
]

function Home() {
  return (
    <>
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-fade-up {
          animation: fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease both;
        }
        .cursor-blink::after {
          content: '|';
          animation: blink 1.1s step-end infinite;
          margin-left: 1px;
          color: oklch(0.443 0.11 240.79);
        }

        .project-card {
          position: relative;
          overflow: hidden;
        }
        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, oklch(0.443 0.11 240.79 / 0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-card:hover::before {
          opacity: 1;
        }
        .project-card .card-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: oklch(0.443 0.11 240.79);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover .card-line {
          transform: scaleY(1);
        }

        .stack-item {
          transition: background 0.2s ease;
        }
        .stack-item:hover {
          background: oklch(0.275 0.011 216.9);
        }

        .link-item {
          position: relative;
        }
        .link-item::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .link-item:hover::after {
          transform: scaleX(1);
        }

        .grid-bg {
          background-image:
            linear-gradient(oklch(1 0 0 / 0.025) 1px, transparent 1px),
            linear-gradient(90deg, oklch(1 0 0 / 0.025) 1px, transparent 1px);
          background-size: 48px 48px;
        }

        .noise-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.4;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: oklch(1 0 0 / 0.08);
        }
      `}</style>

      <div className="noise-overlay" aria-hidden="true" />

      <div className="grid-bg min-h-screen">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed left-1/2 top-0 -translate-x-1/2"
          style={{
            width: "700px",
            height: "350px",
            background:
              "radial-gradient(ellipse at 50% 0%, oklch(0.443 0.11 240.79 / 0.1) 0%, transparent 70%)",
          }}
        />

        <main className="relative mx-auto max-w-5xl px-6 py-2 md:px-16 md:py-32">
          {/* Header */}
          <section className="mb-28">
            <div
              className="animate-fade-in mb-5 flex items-center gap-2 font-mono text-xs text-muted-foreground"
              style={{ animationDelay: "0ms" }}
            >
              <span className="text-primary opacity-70">$</span>
              <span className="cursor-blink">whoami</span>
            </div>

            <h1
              className="animate-fade-up font-heading mb-6 text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              Andrej Thomas
              <br />
              <span className="text-muted-foreground/50">Dobrev</span>
            </h1>

            <p
              className="animate-fade-up mb-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              style={{ animationDelay: "160ms" }}
            >
              Software engineer building systems that outlast their deadlines.
              Fluent in C++, C#, Python, and TypeScript — comfortable at every
              layer of the stack, from embedded logic to production
              infrastructure.
            </p>

            <div
              className="animate-fade-up flex flex-wrap items-center gap-6"
              style={{ animationDelay: "240ms" }}
            >
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="link-item flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="mb-28">
            <div className="section-label mb-8">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Projects
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project, i) => (
                <a
                  key={project.slug}
                  href={project.href}
                  className="project-card animate-fade-up block rounded-lg border border-border bg-card p-6 transition-colors hover:border-border/60"
                  style={{ animationDelay: `${300 + i * 80}ms` }}
                >
                  <div className="card-line rounded-l-lg" />
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="font-medium text-foreground">
                          {project.name}
                        </h3>
                        <span className="font-mono text-xs text-muted-foreground/40">
                          {project.year}
                        </span>
                      </div>
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs ${project.status === "active"
                          ? "text-primary"
                          : "text-muted-foreground"
                          }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${project.status === "active"
                            ? "animate-pulse bg-primary"
                            : "bg-muted-foreground"
                            }`}
                        />
                        {project.status}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="mt-0.5 shrink-0 text-muted-foreground/30 transition-all"
                    />
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section className="mb-28">
            <div className="section-label mb-8">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Stack
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border md:grid-cols-4">
              {stack.map(({ label, note }, i) => (
                <div
                  key={label}
                  className="stack-item animate-fade-up bg-card px-5 py-4"
                  style={{ animationDelay: `${400 + i * 40}ms` }}
                >
                  <div className="mb-0.5 font-mono text-sm font-medium text-foreground">
                    {label}
                  </div>
                  <div className="text-xs text-muted-foreground/60">{note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Approach */}
          <section className="mb-28">
            <div className="section-label mb-8">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Approach
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "Built to last",
                  body: "Code written for longevity. Every decision considered against the question: will this still make sense in three years?",
                },
                {
                  title: "Full-stack depth",
                  body: "From low-level systems in C++ to production infrastructure in Docker — comfortable owning the entire chain.",
                },
                {
                  title: "Pragmatic craft",
                  body: "Engineering is problem-solving. The best solution is rarely the most elaborate one. Clarity, performance, reliability — in that order.",
                },
              ].map(({ title, body }, i) => (
                <div
                  key={title}
                  className="animate-fade-up"
                  style={{ animationDelay: `${400 + i * 80}ms` }}
                >
                  <div className="mb-3 h-px w-8 bg-primary/40" />
                  <h3 className="mb-2 text-sm font-medium text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="section-label mb-8">
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Contact
              </h2>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                Open to interesting problems. Reach out if you want to build
                something worth building.
              </p>
              <a
                href="mailto:andrej2431@gmail.com"
                className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
              >
                andrej2431@gmail.com
                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-24 flex items-center justify-between border-t border-border pt-8 font-mono text-xs text-muted-foreground/40">
            <span>Andrej Thomas Dobrev</span>
            <span>{new Date().getFullYear()}</span>
          </footer>
        </main>
      </div>
    </>
  )
}

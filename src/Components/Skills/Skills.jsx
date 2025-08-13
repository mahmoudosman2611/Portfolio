import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faJs,
  faReact,
  faSass,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faWind,
  faDiagramProject,
  faMobileAlt,
  faServer,
  faCloud,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const skills = [
    // Core & Frameworks
    { name: "HTML",        icon: faHtml5,          color: "text-orange-500",  percent: 99 },
    { name: "CSS",         icon: faCss3Alt,        color: "text-blue-500",    percent: 98 },
    { name: "Bootstrap",   icon: faBootstrap,      color: "text-violet-600",  percent: 97 },
    { name: "JavaScript",  icon: faJs,             color: "text-yellow-500",  percent: 98 },
    { name: "React",       icon: faReact,          color: "text-sky-500",     percent: 97 },
    { name: "Next.js",     icon: faCode,           color: "text-gray-300",    percent: 96 },
    { name: "Tailwind",    icon: faWind,           color: "text-cyan-300",    percent: 97 },
    { name: "Sass",        icon: faSass,           color: "text-pink-400",    percent: 96 },
    { name: "TypeScript",  icon: faCode,           color: "text-blue-300",    percent: 95 },
    { name: "Redux",       icon: faDiagramProject, color: "text-purple-400",  percent: 95 },

    // General / Fundamentals
    { name: "Git & GitHub",     icon: faGitAlt,     color: "text-red-400",     percent: 98 },
    { name: "Responsive Design",icon: faMobileAlt,  color: "text-emerald-300", percent: 99 },
    { name: "REST APIs",        icon: faServer,     color: "text-indigo-300",  percent: 97 },
    { name: "HTTP / JSON",      icon: faCloud,      color: "text-slate-300",   percent: 96 },
    { name: "Debugging",        icon: faBug,        color: "text-amber-300",   percent: 95 },
  ];

  return (
    <section
      id="skills"
      className="relative scroll-mt-28 bg-black text-white py-16 md:py-20 overflow-hidden"
    >
      {/* subtle grid/aurora to match the hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18), transparent 45%),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
        }}
      />
      <div className="pointer-events-none absolute -top-24 -left-24 hidden md:block h-80 w-80 rounded-full blur-3xl opacity-25"
           style={{ background: "radial-gradient(closest-side, rgba(29,78,216,0.35), transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-24 -right-24 hidden md:block h-[26rem] w-[26rem] rounded-full blur-3xl opacity-25"
           style={{ background: "radial-gradient(closest-side, rgba(59,130,246,0.28), transparent 70%)" }} />

      <div className="relative container mx-auto px-6 md:px-20">
        <h2 className="text-center font-extrabold tracking-tight 
                       text-[clamp(1.75rem,4.5vw,2.5rem)] 
                       bg-gradient-to-r from-primary-300 via-primary-200 to-primary-50 bg-clip-text text-transparent
                       drop-shadow-[0_0_14px_rgba(59,130,246,0.25)]">
          Skills
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-center text-white/70">
          A focused stack for building fast, accessible, pixel–true interfaces.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <article
              key={s.name}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md
                         shadow-[0_0_24px_rgba(59,130,246,0.08)] 
                         transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(59,130,246,0.18)]"
            >
              {/* glow ring on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                   style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(29,78,216,0.15))" }} />

              <div className="relative flex items-start gap-4">
                {/* Icon in subtle ring */}
                <div className="shrink-0">
                  <div className="grid h-12 w-12 place-items-center rounded-xl 
                                  bg-black/40 border border-white/10
                                  ring-1 ring-primary-700/40 group-hover:ring-primary-500/60 transition">
                    <FontAwesomeIcon icon={s.icon} className={`h-6 w-6 ${s.color}`} />
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base md:text-lg font-semibold text-white">{s.name}</h3>
                    <span className="text-xs md:text-sm font-medium text-primary-200">{s.percent}%</span>
                  </div>

                  {/* Progress */}
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                    <div
                      role="progressbar"
                      aria-valuenow={s.percent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="h-full rounded-full 
                                 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-300
                                 shadow-[0_0_10px_rgba(59,130,246,0.45)_inset] transition-[width] duration-500"
                      style={{ width: `${s.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* small helper note */}
        <div className="mt-8 text-center text-xs text-white/50">
          * Percentages represent confidence & experience levels across projects.
        </div>
      </div>
    </section>
  );
}

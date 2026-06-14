/**
 * Level: Detailed view of a specific level with modules, exercises, resources
 */
import Layout from "@/components/Layout";
import { useProgress } from "@/contexts/ProgressContext";
import { levels } from "@/data/curriculum";
import { useParams } from "wouter";
import { CheckCircle2, Circle, ExternalLink, BookOpen, Video, FileText, Wrench, Headphones, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const resourceIcons = {
  book: BookOpen,
  video: Video,
  article: FileText,
  tool: Wrench,
  podcast: Headphones,
};

export default function Level() {
  const params = useParams<{ id: string }>();
  const levelId = parseInt(params.id || "1");
  const level = levels.find((l) => l.id === levelId);
  const { progress, completeModule, getModuleProgress } = useProgress();
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  if (!level) {
    return (
      <Layout>
        <div className="text-center py-20">
          <p className="text-muted-foreground font-body">Nivel no encontrado</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        {/* Level header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-wider font-body font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
              Nivel {level.id}
            </span>
            <span className="text-xs text-muted-foreground font-body">{level.subtitle}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {level.title}
          </h1>
          <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {level.description}
          </p>
        </motion.div>

        {/* Referent quote */}
        <motion.div
          className="glass-card rounded-xl p-6 mb-10 border-l-4 border-l-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-primary shrink-0 mt-1" />
            <div>
              <p className="font-body text-foreground italic leading-relaxed mb-2">
                "{level.referentQuote}"
              </p>
              <p className="font-body text-sm text-primary font-semibold">— {level.referent}</p>
            </div>
          </div>
        </motion.div>

        {/* Weekly routine */}
        <motion.div
          className="glass-card rounded-xl p-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
        >
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">Rutina Semanal</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {level.weeklyRoutine.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] font-mono text-primary font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modules */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Módulos</h2>
          {level.modules.map((module, i) => {
            const moduleProgress = getModuleProgress(module.id);
            const isCompleted = moduleProgress?.completed || false;
            const isExpanded = expandedModule === module.id;

            return (
              <motion.div
                key={module.id}
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                  isCompleted ? "border-emerald-dark/30" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Module header */}
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                  className="w-full p-5 flex items-start gap-4 text-left hover:bg-secondary/30 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isCompleted ? "bg-emerald-dark/20" : "bg-secondary"
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-dark" style={{ color: "oklch(0.55 0.12 155)" }} />
                    ) : (
                      <span className="font-mono text-xs text-muted-foreground">{i + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {module.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <motion.div
                    className="px-5 pb-5 border-t border-border/50"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Key question */}
                    <div className="mt-5 mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <p className="text-xs uppercase tracking-wider font-body text-primary mb-1">Pregunta clave</p>
                      <p className="font-display text-foreground italic">{module.keyQuestion}</p>
                    </div>

                    {/* Exercises */}
                    <div className="mb-6">
                      <h4 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Ejercicios
                      </h4>
                      <div className="space-y-2">
                        {module.exercises.map((ex, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <Circle className="w-3 h-3 text-primary shrink-0 mt-1.5" />
                            <p className="font-body text-sm text-muted-foreground">{ex}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div className="mb-6">
                      <h4 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Recursos
                      </h4>
                      <div className="space-y-3">
                        {module.resources.map((res, j) => {
                          const ResIcon = resourceIcons[res.type];
                          return (
                            <div key={j} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                              <ResIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <p className="font-body text-sm font-medium text-foreground truncate">
                                    {res.title}
                                  </p>
                                  {res.url && (
                                    <a
                                      href={res.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="shrink-0"
                                    >
                                      <ExternalLink className="w-3 h-3 text-primary" />
                                    </a>
                                  )}
                                </div>
                                {res.author && (
                                  <p className="font-body text-xs text-primary">{res.author}</p>
                                )}
                                <p className="font-body text-xs text-muted-foreground mt-0.5">{res.description}</p>
                              </div>
                              <span className="text-[9px] uppercase tracking-wider font-body text-muted-foreground bg-secondary px-1.5 py-0.5 rounded shrink-0">
                                {res.type}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Complete button */}
                    {!isCompleted && (
                      <button
                        onClick={() => completeModule(module.id)}
                        className="w-full py-3 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg font-body text-sm font-semibold text-primary transition-all duration-200 active:scale-[0.98]"
                      >
                        Marcar como completado
                      </button>
                    )}
                    {isCompleted && (
                      <div className="flex items-center gap-2 py-3 justify-center">
                        <CheckCircle2 className="w-4 h-4" style={{ color: "oklch(0.55 0.12 155)" }} />
                        <span className="font-body text-sm" style={{ color: "oklch(0.55 0.12 155)" }}>
                          Módulo completado
                        </span>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

/**
 * Level: Detailed view of a specific level - Gumercindo Jiménez Branding
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
        <div className="text-center py-20 font-body">
          <p className="text-gj-mint-light">Nivel no encontrado</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto font-body">
        {/* Level header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-gj-teal px-2 py-0.5">
              Nivel {level.id}
            </span>
            <span className="text-xs text-gj-mint/60 uppercase tracking-widest font-medium">{level.subtitle}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
            {level.title}
          </h1>
          <p className="font-body text-lg text-gj-mint-light leading-relaxed max-w-3xl">
            {level.description}
          </p>
        </motion.div>

        {/* Referent quote */}
        <motion.div
          className="gj-card p-6 mb-10 border-l-4 border-l-gj-teal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex items-start gap-3">
            <Quote className="w-5 h-5 text-gj-teal shrink-0 mt-1" />
            <div>
              <p className="font-body text-white italic leading-relaxed mb-2">
                "{level.referentQuote}"
              </p>
              <p className="font-body text-sm text-gj-teal font-bold uppercase tracking-widest">— {level.referent}</p>
            </div>
          </div>
        </motion.div>

        {/* Weekly routine */}
        <motion.div
          className="gj-card p-6 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
        >
          <h3 className="font-display text-lg font-bold text-white mb-4 uppercase tracking-widest">Rutina Semanal</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {level.weeklyRoutine.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gj-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-mono text-gj-teal font-bold">{i + 1}</span>
                </div>
                <p className="font-body text-sm text-gj-mint-light/80">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Modules */}
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-white mb-6 uppercase tracking-widest">Módulos</h2>
          {level.modules.map((module, i) => {
            const moduleProgress = getModuleProgress(module.id);
            const isCompleted = moduleProgress?.completed || false;
            const isExpanded = expandedModule === module.id;

            return (
              <motion.div
                key={module.id}
                className={`gj-card p-0 overflow-hidden transition-all duration-300 ${
                  isCompleted ? "border-gj-teal/50" : "border-gj-teal/10"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.05, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Module header */}
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                  className="w-full p-5 flex items-start gap-4 text-left hover:bg-gj-teal/5 transition-colors"
                >
                  <div className={`w-10 h-10 flex items-center justify-center shrink-0 ${
                    isCompleted ? "bg-gj-teal" : "bg-gj-petrol"
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : (
                      <span className="font-mono text-sm text-gj-teal font-bold">{i + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-white mb-1 uppercase tracking-tight">
                      {module.title}
                    </h3>
                    <p className="font-body text-sm text-gj-mint-light/60">{module.description}</p>
                  </div>
                </button>

                {/* Expanded content */}
                {isExpanded && (
                  <motion.div
                    className="px-5 pb-5 border-t border-gj-teal/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Key question */}
                    <div className="mt-5 mb-6 p-4 bg-gj-teal/5 border-l-2 border-l-gj-teal">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gj-teal mb-1">Pregunta clave</p>
                      <p className="font-display text-white italic">{module.keyQuestion}</p>
                    </div>

                    {/* Exercises */}
                    <div className="mb-6">
                      <h4 className="font-body text-[10px] font-bold text-gj-mint/40 uppercase tracking-[0.2em] mb-3">
                        Ejercicios
                      </h4>
                      <div className="space-y-3">
                        {module.exercises.map((ex, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <Circle className="w-2 h-2 text-gj-teal shrink-0 mt-1.5" />
                            <p className="font-body text-sm text-gj-mint-light">{ex}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div className="mb-6">
                      <h4 className="font-body text-[10px] font-bold text-gj-mint/40 uppercase tracking-[0.2em] mb-3">
                        Recursos de estudio
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {module.resources.map((res, j) => {
                          const ResIcon = resourceIcons[res.type];
                          return (
                            <div key={j} className="flex items-start gap-3 p-3 bg-gj-petrol-dark hover:bg-gj-teal/10 transition-colors border border-gj-teal/5">
                              <ResIcon className="w-4 h-4 text-gj-teal shrink-0 mt-0.5" />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <p className="font-body text-sm font-bold text-white truncate uppercase tracking-tight">
                                    {res.title}
                                  </p>
                                  {res.url && (
                                    <a
                                      href={res.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="shrink-0"
                                    >
                                      <ExternalLink className="w-3 h-3 text-gj-teal hover:text-gj-teal-hover" />
                                    </a>
                                  )}
                                </div>
                                {res.author && (
                                  <p className="font-body text-[10px] text-gj-teal font-medium uppercase tracking-widest">{res.author}</p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Complete button */}
                    {!isCompleted && (
                      <button
                        onClick={() => completeModule(module.id)}
                        className="gj-btn w-full uppercase tracking-[0.2em]"
                      >
                        Completar módulo
                      </button>
                    )}
                    {isCompleted && (
                      <div className="flex items-center gap-2 py-3 justify-center border border-gj-teal/30">
                        <CheckCircle2 className="w-4 h-4 text-gj-teal" />
                        <span className="font-body text-[10px] font-bold text-gj-teal uppercase tracking-[0.2em]">
                          Módulo completado con éxito
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

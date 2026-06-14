/**
 * Exercises: Interactive exercises and self-assessment questions
 */
import Layout from "@/components/Layout";
import { levels, weeklyPlan } from "@/data/curriculum";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Lightbulb, Brain, Target, Layers, Diamond } from "lucide-react";

const levelIcons = [Brain, Target, Layers, Diamond];

const selfAssessment = [
  { question: "¿Quién sería yo si no necesitara demostrar nada?", category: "Identidad" },
  { question: "¿Qué hábitos mantendría aunque nadie me aplauda?", category: "Disciplina" },
  { question: "¿Qué cosas dejaría de comprar aunque pudiera pagarlas?", category: "Criterio" },
  { question: "¿Qué tipo de vida me da paz y no solo adrenalina?", category: "Serenidad" },
  { question: "Si tuviera 5 millones hoy, ¿qué protegería primero?", category: "Estrategia" },
  { question: "¿Qué porcentaje dejaría inmóvil?", category: "Paciencia" },
  { question: "¿Puedo decir no sin sentir culpa?", category: "Límites" },
  { question: "¿Puedo sostener un plan durante años?", category: "Constancia" },
  { question: "¿Puedo aprender de personas que saben más que yo?", category: "Humildad" },
  { question: "¿Puedo vivir sin urgencia?", category: "Ecuanimidad" },
  { question: "¿Qué decisión tomaría si pensara en mi yo de 80 años?", category: "Visión" },
  { question: "¿Qué aprenderías si tu prioridad fuera aprender más rápido que el resto?", category: "Velocidad" },
];

export default function Exercises() {
  const [expandedLevel, setExpandedLevel] = useState<number | null>(1);
  const [showAssessment, setShowAssessment] = useState(false);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Ejercicios de Entrenamiento
          </h1>
          <p className="font-body text-muted-foreground">
            Práctica deliberada para construir la identidad de abundancia
          </p>
        </motion.div>

        {/* Self-assessment section */}
        <motion.div
          className="glass-card rounded-xl mb-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <button
            onClick={() => setShowAssessment(!showAssessment)}
            className="w-full p-5 flex items-center justify-between hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h2 className="font-display text-xl font-semibold text-foreground">
                Autoevaluación: 12 Preguntas de Carácter
              </h2>
            </div>
            {showAssessment ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
          {showAssessment && (
            <div className="px-5 pb-5 border-t border-border/50">
              <p className="font-body text-sm text-muted-foreground mt-4 mb-6">
                Responde estas preguntas con honestidad. No hay respuestas correctas — el objetivo es observar
                dónde estás hoy y hacia dónde necesitas crecer.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {selfAssessment.map((item, i) => (
                  <div key={i} className="p-4 bg-secondary/30 rounded-lg">
                    <span className="text-[9px] uppercase tracking-wider font-body text-primary bg-primary/10 px-1.5 py-0.5 rounded mb-2 inline-block">
                      {item.category}
                    </span>
                    <p className="font-body text-sm text-foreground italic">{item.question}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Exercises by level */}
        <div className="space-y-4">
          {levels.map((level, levelIdx) => {
            const Icon = levelIcons[levelIdx];
            const isExpanded = expandedLevel === level.id;
            return (
              <motion.div
                key={level.id}
                className="glass-card rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + levelIdx * 0.05, ease: [0.23, 1, 0.32, 1] }}
              >
                <button
                  onClick={() => setExpandedLevel(isExpanded ? null : level.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-secondary/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        Nivel {level.id}: {level.title}
                      </h3>
                      <p className="font-body text-xs text-muted-foreground">
                        {level.modules.reduce((acc, m) => acc + m.exercises.length, 0)} ejercicios
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-border/50 space-y-5">
                    {level.modules.map((module) => (
                      <div key={module.id} className="mt-4">
                        <h4 className="font-body text-sm font-semibold text-primary mb-3">{module.title}</h4>
                        <div className="space-y-2">
                          {module.exercises.map((ex, j) => (
                            <div key={j} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                              <span className="font-mono text-[10px] text-muted-foreground bg-secondary px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                                {j + 1}
                              </span>
                              <p className="font-body text-sm text-muted-foreground">{ex}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Weekly plan */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Plan de 8 Semanas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {weeklyPlan.map((week) => (
              <div key={week.week} className="glass-card rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-primary font-bold">S{week.week}</span>
                  <span className="text-[9px] uppercase tracking-wider font-body text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                    Nivel {week.level}
                  </span>
                </div>
                <h4 className="font-display text-sm font-semibold text-foreground mb-1">{week.title}</h4>
                <p className="font-body text-xs text-muted-foreground">{week.focus}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

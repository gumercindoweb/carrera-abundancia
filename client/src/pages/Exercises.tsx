/**
 * Exercises: Interactive exercises - Gumercindo Jiménez Branding
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
      <div className="max-w-5xl mx-auto font-body">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2 uppercase tracking-tight">
            Ejercicios de Entrenamiento
          </h1>
          <p className="font-body text-gj-mint-light">
            Práctica deliberada para construir la identidad de abundancia
          </p>
        </motion.div>

        {/* Self-assessment section */}
        <motion.div
          className="gj-card p-0 mb-8 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <button
            onClick={() => setShowAssessment(!showAssessment)}
            className="w-full p-5 flex items-center justify-between hover:bg-gj-teal/5 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Lightbulb className="w-5 h-5 text-gj-teal" />
              <h2 className="font-display text-xl font-bold text-white uppercase tracking-widest">
                Autoevaluación: 12 Preguntas de Carácter
              </h2>
            </div>
            {showAssessment ? (
              <ChevronUp className="w-5 h-5 text-gj-mint/40" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gj-mint/40" />
            )}
          </button>
          {showAssessment && (
            <div className="px-5 pb-5 border-t border-gj-teal/10">
              <p className="font-body text-sm text-gj-mint-light/60 mt-4 mb-6">
                Respondé estas preguntas con honestidad. No hay respuestas correctas — el objetivo es que observés
                dónde estás hoy y hacia dónde necesitás crecer.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {selfAssessment.map((item, i) => (
                  <div key={i} className="p-4 bg-gj-petrol border border-gj-teal/5">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-gj-teal bg-gj-teal/10 px-1.5 py-0.5 mb-2 inline-block">
                      {item.category}
                    </span>
                    <p className="font-body text-sm text-white italic">{item.question}</p>
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
                className="gj-card p-0 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + levelIdx * 0.05, ease: [0.23, 1, 0.32, 1] }}
              >
                <button
                  onClick={() => setExpandedLevel(isExpanded ? null : level.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-gj-teal/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gj-teal/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gj-teal" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-display text-lg font-bold text-white uppercase tracking-widest">
                        Nivel {level.id}: {level.title}
                      </h3>
                      <p className="font-body text-[10px] text-gj-mint/40 uppercase tracking-widest">
                        {level.modules.reduce((acc, m) => acc + m.exercises.length, 0)} ejercicios
                      </p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gj-mint/40" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gj-mint/40" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 border-t border-gj-teal/10 space-y-5">
                    {level.modules.map((module) => (
                      <div key={module.id} className="mt-4">
                        <h4 className="font-body text-[10px] font-bold text-gj-teal uppercase tracking-[0.2em] mb-3">{module.title}</h4>
                        <div className="space-y-2">
                          {module.exercises.map((ex, j) => (
                            <div key={j} className="flex items-start gap-3 p-3 bg-gj-petrol border border-gj-teal/5">
                              <span className="font-mono text-xs text-gj-teal font-bold shrink-0 mt-0.5">
                                {j + 1}
                              </span>
                              <p className="font-body text-sm text-gj-mint-light">{ex}</p>
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
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="font-display text-2xl font-bold text-white mb-6 uppercase tracking-widest">Plan de 8 Semanas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {weeklyPlan.map((week, idx) => (
              <div key={idx} className="gj-card p-4 border-gj-teal/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs text-gj-teal font-bold">S{idx + 1}</span>
                </div>
                <h4 className="font-display text-sm font-bold text-white mb-1 uppercase tracking-tight">{week.title}</h4>
                <p className="font-body text-xs text-gj-mint-light/60">{week.focus}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

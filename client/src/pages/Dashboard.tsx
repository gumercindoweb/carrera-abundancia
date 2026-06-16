/**
 * Dashboard: Panel general de progreso - Gumercindo Jiménez Branding
 */
import Layout from "@/components/Layout";
import { useProgress } from "@/contexts/ProgressContext";
import { levels, weeklyPlan } from "@/data/curriculum";
import { Link } from "wouter";
import { Brain, Target, Layers, Diamond, CheckCircle2, Circle, Flame, BookOpen, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const levelIcons = [Brain, Target, Layers, Diamond];

export default function Dashboard() {
  const { progress, getLevelProgress, getOverallProgress, checkHabit } = useProgress();
  const overallProgress = getOverallProgress();
  const today = new Date().toISOString().split("T")[0];
  const todayHabits = progress.habits.find((h) => h.date === today);

  const habits = [
    { key: "reading" as const, label: "Lectura de referencia", icon: BookOpen },
    { key: "reflection" as const, label: "Reflexión escrita", icon: Circle },
    { key: "decision" as const, label: "Decisión consciente", icon: CheckCircle2 },
    { key: "habitReview" as const, label: "Revisión de hábito", icon: Calendar },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto font-body">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2 uppercase tracking-tight">
            Panel de Entrenamiento
          </h1>
          <p className="font-body text-gj-mint-light">
            Tu progreso hacia la identidad de abundancia
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="gj-card p-5">
            <p className="text-[10px] text-gj-mint/60 font-body uppercase tracking-widest mb-1">Progreso Total</p>
            <p className="font-mono text-2xl font-bold text-gj-teal">{overallProgress}%</p>
          </div>
          <div className="gj-card p-5">
            <p className="text-[10px] text-gj-mint/60 font-body uppercase tracking-widest mb-1">Nivel Actual</p>
            <p className="font-mono text-2xl font-bold text-white">{progress.currentLevel}/4</p>
          </div>
          <div className="gj-card p-5">
            <p className="text-[10px] text-gj-mint/60 font-body uppercase tracking-widest mb-1">Semana</p>
            <p className="font-mono text-2xl font-bold text-white">{progress.currentWeek}/8</p>
          </div>
          <div className="gj-card p-5">
            <p className="text-[10px] text-gj-mint/60 font-body uppercase tracking-widest mb-1">Puntos</p>
            <p className="font-mono text-2xl font-bold text-gj-teal flex items-center gap-1">
              <Flame className="w-5 h-5" />
              {progress.totalScore}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Levels progress */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="font-display text-xl font-bold text-white mb-4 uppercase tracking-widest">Niveles de Formación</h2>
            {levels.map((level, i) => {
              const Icon = levelIcons[i];
              const levelProgress = getLevelProgress(level.id);
              const isActive = progress.currentLevel === level.id;
              return (
                <Link key={level.id} href={`/nivel/${level.id}`}>
                  <div
                    className={`gj-card p-5 transition-all duration-300 hover:border-gj-teal cursor-pointer ${
                      isActive ? "border-gj-teal/60 bg-gj-petrol-dark/80" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 flex items-center justify-center shrink-0 ${
                        isActive ? "bg-gj-teal/20" : "bg-gj-petrol"
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? "text-gj-teal" : "text-gj-mint/40"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-lg font-bold text-white uppercase">
                            Nivel {level.id}: {level.title}
                          </h3>
                          {isActive && (
                            <span className="text-[10px] uppercase tracking-widest font-body font-bold text-white bg-gj-teal px-2 py-0.5">
                              Activo
                            </span>
                          )}
                        </div>
                        <p className="font-body text-sm text-gj-mint-light/70 mb-3 line-clamp-2">
                          {level.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 gj-progress-bar">
                            <div
                              className="gj-progress-fill"
                              style={{ width: `${levelProgress}%` }}
                            />
                          </div>
                          <span className="font-mono text-xs text-gj-teal font-bold">{levelProgress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </motion.div>

          {/* Right sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Daily habits */}
            <div className="gj-card p-5">
              <h3 className="font-display text-lg font-bold text-white mb-4 uppercase tracking-widest">Hábitos de Hoy</h3>
              <div className="space-y-3">
                {habits.map((habit) => {
                  const isChecked = todayHabits?.[habit.key] || false;
                  return (
                    <button
                      key={habit.key}
                      onClick={() => checkHabit(today, habit.key)}
                      className="w-full flex items-center gap-3 p-2 hover:bg-gj-teal/10 transition-colors group"
                    >
                      <div className={`w-5 h-5 border-2 flex items-center justify-center transition-all duration-200 ${
                        isChecked
                          ? "bg-gj-teal border-gj-teal"
                          : "border-gj-teal/30 group-hover:border-gj-teal/60"
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3 h-3 text-white" />}
                      </div>
                      <span className={`font-body text-sm ${isChecked ? "text-white/40 line-through" : "text-gj-mint-light"}`}>
                        {habit.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current week */}
            <div className="gj-card p-5 border-l-4 border-l-gj-teal">
              <h3 className="font-display text-lg font-bold text-white mb-3 uppercase tracking-widest">
                Semana {progress.currentWeek}
              </h3>
              {weeklyPlan[progress.currentWeek - 1] && (
                <>
                  <p className="font-display text-gj-teal font-bold mb-2 uppercase text-sm">
                    {weeklyPlan[progress.currentWeek - 1].title}
                  </p>
                  <p className="font-body text-sm text-gj-mint-light/80 leading-relaxed">
                    {weeklyPlan[progress.currentWeek - 1].focus}
                  </p>
                </>
              )}
            </div>

            {/* Quote / Method */}
            <div className="gj-card p-5 bg-gj-teal/5">
               <p className="text-xs text-gj-teal font-bold uppercase tracking-[0.2em] mb-2">El Método</p>
               <p className="font-body text-sm text-white italic leading-relaxed">
                 "No busques el éxito. Convertite en la persona que el éxito busca naturalmente."
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

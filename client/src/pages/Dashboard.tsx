/**
 * Dashboard: Panel general de progreso
 * Muestra progreso por nivel, hábitos semanales, estadísticas
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Panel de Entrenamiento
          </h1>
          <p className="font-body text-muted-foreground">
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
          <div className="glass-card rounded-xl p-5">
            <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Progreso Total</p>
            <p className="font-mono text-2xl font-bold text-primary">{overallProgress}%</p>
          </div>
          <div className="glass-card rounded-xl p-5">
            <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Nivel Actual</p>
            <p className="font-mono text-2xl font-bold text-foreground">{progress.currentLevel}/4</p>
          </div>
          <div className="glass-card rounded-xl p-5">
            <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Semana</p>
            <p className="font-mono text-2xl font-bold text-foreground">{progress.currentWeek}/8</p>
          </div>
          <div className="glass-card rounded-xl p-5">
            <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">Puntos</p>
            <p className="font-mono text-2xl font-bold text-primary flex items-center gap-1">
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
            <h2 className="font-display text-xl font-semibold text-foreground mb-4">Niveles de Formación</h2>
            {levels.map((level, i) => {
              const Icon = levelIcons[i];
              const levelProgress = getLevelProgress(level.id);
              const isActive = progress.currentLevel === level.id;
              return (
                <Link key={level.id} href={`/nivel/${level.id}`}>
                  <div
                    className={`glass-card rounded-xl p-5 transition-all duration-300 hover:border-primary/30 hover:-translate-y-0.5 ${
                      isActive ? "border-primary/40 amber-glow" : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? "bg-primary/20" : "bg-secondary"
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            Nivel {level.id}: {level.title}
                          </h3>
                          {isActive && (
                            <span className="text-[10px] uppercase tracking-wider font-body font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                              Activo
                            </span>
                          )}
                        </div>
                        <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">
                          {level.description}
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full forge-progress rounded-full transition-all duration-700"
                              style={{ width: `${levelProgress}%` }}
                            />
                          </div>
                          <span className="font-mono text-xs text-muted-foreground">{levelProgress}%</span>
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
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Hábitos de Hoy</h3>
              <div className="space-y-3">
                {habits.map((habit) => {
                  const isChecked = todayHabits?.[habit.key] || false;
                  return (
                    <button
                      key={habit.key}
                      onClick={() => checkHabit(today, habit.key)}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors group"
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                        isChecked
                          ? "bg-primary border-primary"
                          : "border-muted-foreground/30 group-hover:border-primary/50"
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3 h-3 text-primary-foreground" />}
                      </div>
                      <span className={`font-body text-sm ${isChecked ? "text-foreground line-through opacity-60" : "text-muted-foreground"}`}>
                        {habit.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current week */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Semana {progress.currentWeek}
              </h3>
              {weeklyPlan[progress.currentWeek - 1] && (
                <>
                  <p className="font-display text-primary font-semibold mb-2">
                    {weeklyPlan[progress.currentWeek - 1].title}
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {weeklyPlan[progress.currentWeek - 1].focus}
                  </p>
                </>
              )}
            </div>

            {/* GJ brand identity card */}
            <div
              className="rounded-xl p-6 flex flex-col items-center text-center"
              style={{ background: "#07211A", border: "1px solid rgba(184,148,85,0.18)" }}
            >
              <img
                src="/assets/gj-symbol-gold.png"
                alt="GJ"
                className="h-12 w-auto mb-4 opacity-80"
              />
              <hr className="gj-rule mx-auto mb-4" />
              <p
                className="font-display text-sm italic leading-relaxed"
                style={{ color: "rgba(248,245,238,0.70)" }}
              >
                "Forjar la mente antes que el patrimonio."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

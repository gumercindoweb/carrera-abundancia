import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface ModuleProgress {
  id: string;
  completed: boolean;
  notes: string;
  completedAt?: string;
}

export interface WeekProgress {
  weekNumber: number;
  started: boolean;
  completedModules: string[];
  reflection: string;
  startedAt?: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  level: number;
  tags: string[];
}

export interface HabitCheck {
  date: string;
  reading: boolean;
  reflection: boolean;
  decision: boolean;
  habitReview: boolean;
}

export interface ProgressState {
  currentLevel: number;
  currentWeek: number;
  modules: Record<string, ModuleProgress>;
  weeks: Record<number, WeekProgress>;
  journal: JournalEntry[];
  habits: HabitCheck[];
  totalScore: number;
  streakDays: number;
  lastActivity: string;
}

const defaultState: ProgressState = {
  currentLevel: 1,
  currentWeek: 1,
  modules: {},
  weeks: {},
  journal: [],
  habits: [],
  totalScore: 0,
  streakDays: 0,
  lastActivity: new Date().toISOString(),
};

interface ProgressContextType {
  progress: ProgressState;
  completeModule: (moduleId: string) => void;
  addJournalEntry: (entry: Omit<JournalEntry, "id" | "date">) => void;
  updateJournalEntry: (id: string, content: Partial<JournalEntry>) => void;
  deleteJournalEntry: (id: string) => void;
  checkHabit: (date: string, habit: keyof Omit<HabitCheck, "date">) => void;
  advanceWeek: () => void;
  advanceLevel: () => void;
  getModuleProgress: (moduleId: string) => ModuleProgress | undefined;
  getLevelProgress: (level: number) => number;
  getOverallProgress: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = "carrera-abundancia-progress";

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return defaultState;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeModule = (moduleId: string) => {
    setProgress((prev) => ({
      ...prev,
      modules: {
        ...prev.modules,
        [moduleId]: {
          id: moduleId,
          completed: true,
          notes: prev.modules[moduleId]?.notes || "",
          completedAt: new Date().toISOString(),
        },
      },
      totalScore: prev.totalScore + 10,
      lastActivity: new Date().toISOString(),
    }));
  };

  const addJournalEntry = (entry: Omit<JournalEntry, "id" | "date">) => {
    const newEntry: JournalEntry = {
      ...entry,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
    };
    setProgress((prev) => ({
      ...prev,
      journal: [newEntry, ...prev.journal],
      lastActivity: new Date().toISOString(),
    }));
  };

  const updateJournalEntry = (id: string, content: Partial<JournalEntry>) => {
    setProgress((prev) => ({
      ...prev,
      journal: prev.journal.map((e) => (e.id === id ? { ...e, ...content } : e)),
    }));
  };

  const deleteJournalEntry = (id: string) => {
    setProgress((prev) => ({
      ...prev,
      journal: prev.journal.filter((e) => e.id !== id),
    }));
  };

  const checkHabit = (date: string, habit: keyof Omit<HabitCheck, "date">) => {
    setProgress((prev) => {
      const existing = prev.habits.find((h) => h.date === date);
      if (existing) {
        return {
          ...prev,
          habits: prev.habits.map((h) =>
            h.date === date ? { ...h, [habit]: !h[habit] } : h
          ),
          lastActivity: new Date().toISOString(),
        };
      }
      return {
        ...prev,
        habits: [
          ...prev.habits,
          { date, reading: false, reflection: false, decision: false, habitReview: false, [habit]: true },
        ],
        lastActivity: new Date().toISOString(),
      };
    });
  };

  const advanceWeek = () => {
    setProgress((prev) => ({
      ...prev,
      currentWeek: Math.min(prev.currentWeek + 1, 8),
      lastActivity: new Date().toISOString(),
    }));
  };

  const advanceLevel = () => {
    setProgress((prev) => ({
      ...prev,
      currentLevel: Math.min(prev.currentLevel + 1, 4),
      lastActivity: new Date().toISOString(),
    }));
  };

  const getModuleProgress = (moduleId: string) => progress.modules[moduleId];

  const getLevelProgress = (level: number) => {
    const levelModules = Object.values(progress.modules).filter((m) =>
      m.id.startsWith(`level-${level}`)
    );
    if (levelModules.length === 0) return 0;
    const completed = levelModules.filter((m) => m.completed).length;
    return Math.round((completed / Math.max(levelModules.length, 6)) * 100);
  };

  const getOverallProgress = () => {
    const totalModules = Object.values(progress.modules).length;
    if (totalModules === 0) return 0;
    const completed = Object.values(progress.modules).filter((m) => m.completed).length;
    return Math.round((completed / 24) * 100);
  };

  const resetProgress = () => {
    setProgress(defaultState);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeModule,
        addJournalEntry,
        updateJournalEntry,
        deleteJournalEntry,
        checkHabit,
        advanceWeek,
        advanceLevel,
        getModuleProgress,
        getLevelProgress,
        getOverallProgress,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error("useProgress must be used within ProgressProvider");
  return context;
}

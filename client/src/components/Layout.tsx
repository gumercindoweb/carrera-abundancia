import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Brain, Target, Layers, Diamond, BookOpen, Dumbbell, NotebookPen, LayoutDashboard, Menu, X, ChevronRight } from "lucide-react";
import { useProgress } from "@/contexts/ProgressContext";

const navItems = [
  { path: "/dashboard", label: "Panel General", icon: LayoutDashboard },
  { path: "/nivel/1", label: "Nivel 1: Base Mental", icon: Brain },
  { path: "/nivel/2", label: "Nivel 2: Estrategia", icon: Target },
  { path: "/nivel/3", label: "Nivel 3: Analítica", icon: Layers },
  { path: "/nivel/4", label: "Nivel 4: Abundancia", icon: Diamond },
  { path: "/biblioteca", label: "Biblioteca", icon: BookOpen },
  { path: "/ejercicios", label: "Ejercicios", icon: Dumbbell },
  { path: "/diario", label: "Diario", icon: NotebookPen },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { getOverallProgress } = useProgress();
  const overallProgress = getOverallProgress();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 ease-out-expo ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setSidebarOpen(false)}>
            <img
              src="/assets/gj-badge-deep-gold.png"
              alt="Gumercindo Jiménez"
              className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
            />
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-widest uppercase text-sidebar-primary mb-0.5">
                Carrera de
              </p>
              <h1 className="font-display text-lg font-semibold text-sidebar-foreground leading-none">
                Abundancia
              </h1>
            </div>
          </Link>
        </div>

        {/* Progress indicator */}
        <div className="px-6 py-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans text-[10px] font-semibold tracking-widest uppercase text-sidebar-foreground/50">
              Progreso General
            </span>
            <span className="font-sans text-xs font-semibold text-sidebar-primary">{overallProgress}%</span>
          </div>
          <div className="h-1 bg-sidebar-accent rounded-full overflow-hidden">
            <div
              className="h-full forge-progress rounded-full transition-all duration-700 ease-out-expo"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = location === item.path || (item.path.startsWith("/nivel/") && location.startsWith(item.path));
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-sans transition-all duration-200 group ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-foreground"
                        : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/60"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? "text-sidebar-primary" : "text-sidebar-foreground/40 group-hover:text-sidebar-foreground/70"
                      }`}
                    />
                    <span className="flex-1">{item.label}</span>
                    {isActive && (
                      <span className="w-1 h-4 rounded-full bg-sidebar-primary shrink-0" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-5 border-t border-sidebar-border">
          <hr className="gj-rule mx-auto mb-3" style={{ margin: "0 auto 0.75rem" }} />
          <p className="font-display text-[11px] italic text-sidebar-foreground/40 text-center leading-relaxed">
            "La abundancia no llega.<br />Se construye desde adentro."
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-h-screen">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-muted transition-colors"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          <img
            src="/assets/gj-badge-deep-gold.png"
            alt="GJ"
            className="h-7 w-auto"
          />
          <span className="font-display text-sm font-semibold text-foreground">
            Carrera de Abundancia
          </span>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

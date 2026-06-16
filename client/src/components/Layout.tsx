/**
 * Layout: Gumercindo Jiménez Branding
 * Sidebar persistente + área principal
 * Fondo verde petróleo, acentos teal, tipografía Poppins
 */
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
    <div className="min-h-screen flex bg-background font-body">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-sidebar border-r border-sidebar-border flex flex-col transition-transform duration-300 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/logo-gj.webp"
              alt="Gumercindo Jiménez"
              className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-xs font-semibold text-gj-teal tracking-widest uppercase">
                Carrera de
              </span>
              <span className="font-display text-lg font-bold text-white leading-tight">
                Abundancia
              </span>
            </div>
          </Link>
        </div>

        {/* Progress indicator */}
        <div className="px-6 py-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-foreground font-body uppercase tracking-widest">Progreso General</span>
            <span className="text-xs font-mono text-gj-teal font-bold">{overallProgress}%</span>
          </div>
          <div className="gj-progress-bar">
            <div
              className="gj-progress-fill"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location === item.path || (item.path.startsWith("/nivel/") && location.startsWith(item.path));
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-3 px-3 py-3 text-sm font-medium transition-all duration-200 group ${
                      isActive
                        ? "bg-gj-teal text-white"
                        : "text-sidebar-foreground/70 hover:text-white hover:bg-gj-teal/10"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gj-teal group-hover:text-gj-teal-hover"}`} />
                    <span className="flex-1">{item.label}</span>
                    {isActive && <ChevronRight className="w-3 h-3 text-white" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-[10px] text-muted-foreground font-body text-center leading-relaxed italic">
            "El caos me busca. Yo lo convierto en método."
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-h-screen">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-30 bg-gj-petrol-dark/95 backdrop-blur-xl border-b border-gj-teal/30 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gj-teal/10 transition-colors"
          >
            <Menu className="w-5 h-5 text-gj-teal" />
          </button>
          <img
            src="/assets/logo-gj.webp"
            alt="GJ"
            className="h-8 w-auto"
          />
          <span className="font-display text-sm font-bold text-white">Carrera de Abundancia</span>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

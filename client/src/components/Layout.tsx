/**
 * Layout: Obsidiana Ejecutiva
 * Sidebar persistente + área principal con panel de contexto
 * Fondo oscuro profundo, acentos ámbar, tipografía Playfair Display
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
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663184209086/grkStG6TS38pKs5UQaFM6E/logo-ca-BQbxhPQwvAPpKBk6jfEkpY.webp"
              alt="CA"
              className="w-10 h-10 transition-transform duration-200 group-hover:scale-105"
            />
            <div>
              <h1 className="font-display text-lg font-bold text-foreground leading-tight">
                Carrera de
              </h1>
              <span className="text-gradient-amber font-display text-lg font-bold">
                Abundancia
              </span>
            </div>
          </Link>
        </div>

        {/* Progress indicator */}
        <div className="px-6 py-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">Progreso General</span>
            <span className="text-xs font-mono text-primary font-semibold">{overallProgress}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full forge-progress rounded-full transition-all duration-700 ease-out-expo"
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
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body transition-all duration-200 group ${
                      isActive
                        ? "bg-sidebar-accent text-primary amber-glow"
                        : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`} />
                    <span className="flex-1">{item.label}</span>
                    {isActive && <ChevronRight className="w-3 h-3 text-primary" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-[10px] text-muted-foreground font-body text-center leading-relaxed">
            "La abundancia no llega.<br />Se construye desde adentro."
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-h-screen">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-30 bg-background/90 backdrop-blur-xl border-b border-border px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663184209086/grkStG6TS38pKs5UQaFM6E/logo-ca-BQbxhPQwvAPpKBk6jfEkpY.webp"
            alt="CA"
            className="w-7 h-7"
          />
          <span className="font-display text-sm font-bold text-gradient-amber">Carrera de Abundancia</span>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}

/**
 * Library: All resources organized by type and level
 */
import Layout from "@/components/Layout";
import { levels } from "@/data/curriculum";
import { BookOpen, Video, FileText, Wrench, Headphones, ExternalLink, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const typeLabels = {
  book: { label: "Libros", icon: BookOpen },
  video: { label: "Videos", icon: Video },
  article: { label: "Artículos", icon: FileText },
  tool: { label: "Herramientas", icon: Wrench },
  podcast: { label: "Podcasts", icon: Headphones },
};

type ResourceType = "all" | "book" | "video" | "article" | "tool" | "podcast";

export default function Library() {
  const [filter, setFilter] = useState<ResourceType>("all");
  const [search, setSearch] = useState("");

  const allResources = useMemo(() => {
    const resources: Array<{
      title: string;
      type: "book" | "video" | "article" | "tool" | "podcast";
      url?: string;
      author?: string;
      description: string;
      level: number;
      module: string;
    }> = [];

    levels.forEach((level) => {
      level.modules.forEach((module) => {
        module.resources.forEach((res) => {
          // Avoid duplicates
          if (!resources.find((r) => r.title === res.title)) {
            resources.push({ ...res, level: level.id, module: module.title });
          }
        });
      });
    });

    return resources;
  }, []);

  const filteredResources = useMemo(() => {
    return allResources.filter((r) => {
      const matchesType = filter === "all" || r.type === filter;
      const matchesSearch = search === "" ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase()) ||
        (r.author && r.author.toLowerCase().includes(search.toLowerCase()));
      return matchesType && matchesSearch;
    });
  }, [allResources, filter, search]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: allResources.length };
    allResources.forEach((r) => { c[r.type] = (c[r.type] || 0) + 1; });
    return c;
  }, [allResources]);

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
            Biblioteca de Recursos
          </h1>
          <p className="font-body text-muted-foreground">
            {allResources.length} recursos curados para tu formación
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por título, autor o descripción..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Type filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 rounded-lg font-body text-xs font-medium transition-all ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos ({counts.all})
            </button>
            {(Object.entries(typeLabels) as [ResourceType, { label: string; icon: any }][]).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1.5 rounded-lg font-body text-xs font-medium transition-all ${
                  filter === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {label} ({counts[key] || 0})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resources grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {filteredResources.map((res, i) => {
            const ResIcon = typeLabels[res.type].icon;
            return (
              <motion.div
                key={`${res.title}-${i}`}
                className="glass-card rounded-xl p-5 hover:border-primary/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3), ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <ResIcon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-body text-sm font-semibold text-foreground truncate">{res.title}</h3>
                      {res.url && (
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                          <ExternalLink className="w-3 h-3 text-primary hover:text-primary/80" />
                        </a>
                      )}
                    </div>
                    {res.author && (
                      <p className="font-body text-xs text-primary mb-1">{res.author}</p>
                    )}
                    <p className="font-body text-xs text-muted-foreground line-clamp-2">{res.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[9px] uppercase tracking-wider font-body text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                        {typeLabels[res.type].label}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider font-body text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
                        Nivel {res.level}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-muted-foreground">No se encontraron recursos con esos filtros</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

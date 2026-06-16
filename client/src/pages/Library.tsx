/**
 * Library: All resources - Gumercindo Jiménez Branding
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
      <div className="max-w-5xl mx-auto font-body">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2 uppercase tracking-tight">
            Biblioteca de Recursos
          </h1>
          <p className="font-body text-gj-mint-light">
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
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gj-teal" />
            <input
              type="text"
              placeholder="Buscá por título, autor o descripción..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gj-petrol border border-gj-teal/20 font-body text-sm text-white placeholder:text-gj-mint/30 focus:outline-none focus:border-gj-teal focus:ring-1 focus:ring-gj-teal/20 transition-all"
            />
          </div>

          {/* Type filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 font-body text-[10px] font-bold uppercase tracking-widest transition-all ${
                filter === "all"
                  ? "bg-gj-teal text-white"
                  : "bg-gj-petrol text-gj-mint/40 hover:text-white"
              }`}
            >
              Todos ({counts.all})
            </button>
            {(Object.entries(typeLabels) as [ResourceType, { label: string; icon: any }][]).map(([key, { label }]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-4 py-2 font-body text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === key
                    ? "bg-gj-teal text-white"
                    : "bg-gj-petrol text-gj-mint/40 hover:text-white"
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
                className="gj-card p-5 hover:border-gj-teal/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3), ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gj-teal/10 flex items-center justify-center shrink-0">
                    <ResIcon className="w-5 h-5 text-gj-teal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-body text-sm font-bold text-white truncate uppercase tracking-tight">{res.title}</h3>
                      {res.url && (
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                          <ExternalLink className="w-3 h-3 text-gj-teal hover:text-gj-teal-hover" />
                        </a>
                      )}
                    </div>
                    {res.author && (
                      <p className="font-body text-[10px] text-gj-teal font-bold uppercase tracking-widest mb-2">{res.author}</p>
                    )}
                    <p className="font-body text-xs text-gj-mint-light/60 line-clamp-2 leading-relaxed">{res.description}</p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-[9px] uppercase tracking-widest font-bold text-white bg-gj-teal/20 px-2 py-0.5 border border-gj-teal/10">
                        {typeLabels[res.type].label}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest font-bold text-gj-mint/40 bg-gj-petrol px-2 py-0.5 border border-gj-teal/5">
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
          <div className="text-center py-16 border border-dashed border-gj-teal/10">
            <p className="font-body text-gj-mint/40 uppercase tracking-widest text-sm">No se encontraron recursos con esos filtros</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

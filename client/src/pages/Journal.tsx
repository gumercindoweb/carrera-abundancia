/**
 * Journal: Personal reflection diary with entries
 */
import Layout from "@/components/Layout";
import { useProgress } from "@/contexts/ProgressContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Trash2, Calendar, Tag, X } from "lucide-react";

const levelLabels = ["Base Mental", "Estrategia", "Analítica", "Abundancia"];
const tagOptions = ["reflexión", "decisión", "aprendizaje", "hábito", "meta", "error", "gratitud", "insight"];

export default function Journal() {
  const { progress, addJournalEntry, deleteJournalEntry } = useProgress();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [level, setLevel] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addJournalEntry({ title, content, level, tags: selectedTags });
    setTitle("");
    setContent("");
    setLevel(1);
    setSelectedTags([]);
    setShowForm(false);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Diario de Reflexión
            </h1>
            <p className="font-body text-muted-foreground">
              {progress.journal.length} {progress.journal.length === 1 ? "entrada" : "entradas"} registradas
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-lg hover:opacity-90 transition-all active:scale-[0.97]"
          >
            {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {showForm ? "Cancelar" : "Nueva entrada"}
          </button>
        </motion.div>

        {/* New entry form */}
        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1 block">
                  Título
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="¿Sobre qué reflexionas hoy?"
                  className="w-full px-4 py-2.5 bg-secondary/50 border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1 block">
                  Reflexión
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Escribe tu reflexión, aprendizaje o decisión..."
                  rows={6}
                  className="w-full px-4 py-2.5 bg-secondary/50 border border-border rounded-lg font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 resize-none"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1 block">
                    Nivel relacionado
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(Number(e.target.value))}
                    className="px-3 py-2 bg-secondary/50 border border-border rounded-lg font-body text-sm text-foreground focus:outline-none focus:border-primary/50"
                  >
                    {levelLabels.map((label, i) => (
                      <option key={i} value={i + 1}>Nivel {i + 1}: {label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                  Etiquetas
                </label>
                <div className="flex flex-wrap gap-2">
                  {tagOptions.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-2.5 py-1 rounded-md font-body text-xs transition-all ${
                        selectedTags.includes(tag)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={!title.trim() || !content.trim()}
                className="w-full py-3 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-lg hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Guardar reflexión
              </button>
            </div>
          </motion.form>
        )}

        {/* Journal entries */}
        <div className="space-y-4">
          {progress.journal.length === 0 && !showForm && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-muted-foreground" />
              </div>
              <p className="font-body text-muted-foreground mb-2">Tu diario está vacío</p>
              <p className="font-body text-sm text-muted-foreground/60">
                Comienza a registrar tus reflexiones, decisiones y aprendizajes
              </p>
            </motion.div>
          )}

          {progress.journal.map((entry, i) => (
            <motion.div
              key={entry.id}
              className="glass-card rounded-xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{entry.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(entry.date)}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-body text-primary bg-primary/10 px-1.5 py-0.5 rounded">
                      Nivel {entry.level}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => deleteJournalEntry(entry.id)}
                  className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors group"
                >
                  <Trash2 className="w-4 h-4 text-muted-foreground group-hover:text-destructive" />
                </button>
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {entry.content}
              </p>

              {entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-[10px] font-body text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

/**
 * Journal: Personal reflection diary - Gumercindo Jiménez Branding
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
      <div className="max-w-4xl mx-auto font-body">
        <motion.div
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2 uppercase tracking-tight">
              Diario de Reflexión
            </h1>
            <p className="font-body text-gj-mint-light">
              {progress.journal.length} {progress.journal.length === 1 ? "entrada" : "entradas"} registradas
            </p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="gj-btn px-6 py-3 flex items-center gap-2"
          >
            {showForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {showForm ? "Cancelar" : "Nueva entrada"}
          </button>
        </motion.div>

        {/* New entry form */}
        {showForm && (
          <motion.form
            onSubmit={handleSubmit}
            className="gj-card p-6 mb-8 border-gj-teal/40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <div>
                <label className="font-body text-[10px] text-gj-teal font-bold uppercase tracking-widest mb-1 block">
                  Título
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="¿Sobre qué reflexionás hoy?"
                  className="w-full px-4 py-3 bg-gj-petrol border border-gj-teal/20 font-body text-sm text-white placeholder:text-gj-mint/30 focus:outline-none focus:border-gj-teal focus:ring-1 focus:ring-gj-teal/20"
                />
              </div>

              <div>
                <label className="font-body text-[10px] text-gj-teal font-bold uppercase tracking-widest mb-1 block">
                  Reflexión
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Escribí tu reflexión, aprendizaje o decisión..."
                  rows={6}
                  className="w-full px-4 py-3 bg-gj-petrol border border-gj-teal/20 font-body text-sm text-white placeholder:text-gj-mint/30 focus:outline-none focus:border-gj-teal focus:ring-1 focus:ring-gj-teal/20 resize-none"
                />
              </div>

              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="font-body text-[10px] text-gj-teal font-bold uppercase tracking-widest mb-1 block">
                    Nivel relacionado
                  </label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(Number(e.target.value))}
                    className="px-3 py-2 bg-gj-petrol border border-gj-teal/20 font-body text-sm text-white focus:outline-none focus:border-gj-teal"
                  >
                    {levelLabels.map((label, i) => (
                      <option key={i} value={i + 1}>Nivel {i + 1}: {label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-body text-[10px] text-gj-teal font-bold uppercase tracking-widest mb-2 block">
                  Etiquetas
                </label>
                <div className="flex flex-wrap gap-2">
                  {tagOptions.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 font-body text-[10px] uppercase font-bold tracking-widest transition-all ${
                        selectedTags.includes(tag)
                          ? "bg-gj-teal text-white"
                          : "bg-gj-petrol text-gj-mint/40 hover:text-white"
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
                className="gj-btn w-full uppercase tracking-widest"
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
              className="text-center py-20 border border-dashed border-gj-teal/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gj-petrol flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-gj-teal/40" />
              </div>
              <p className="font-body text-gj-mint-light mb-2">Tu diario está vacío</p>
              <p className="font-body text-xs text-gj-mint/40 uppercase tracking-widest">
                Comenzá a registrar tus reflexiones, decisiones y aprendizajes
              </p>
            </motion.div>
          )}

          {progress.journal.map((entry, i) => (
            <motion.div
              key={entry.id}
              className="gj-card p-5 hover:border-gj-teal/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">{entry.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-body text-[10px] text-gj-mint/40 flex items-center gap-1 uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      {formatDate(entry.date)}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white bg-gj-teal/20 px-1.5 py-0.5">
                      Nivel {entry.level}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => deleteJournalEntry(entry.id)}
                  className="p-1.5 hover:bg-destructive/10 transition-colors group"
                >
                  <Trash2 className="w-4 h-4 text-gj-mint/20 group-hover:text-destructive" />
                </button>
              </div>

              <p className="font-body text-sm text-gj-mint-light leading-relaxed whitespace-pre-wrap">
                {entry.content}
              </p>

              {entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-gj-teal bg-gj-teal/5 px-2 py-0.5 border border-gj-teal/10">
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

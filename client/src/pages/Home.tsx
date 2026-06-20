import { Link } from "wouter";
import { ArrowRight, Brain, Target, Layers, Diamond } from "lucide-react";
import { motion } from "framer-motion";

const levels = [
  { icon: Brain,   num: "01", title: "Base Mental",      desc: "Autocontrol, claridad y regulación emocional" },
  { icon: Target,  num: "02", title: "Base Estratégica", desc: "Visión de largo plazo, priorización y criterio" },
  { icon: Layers,  num: "03", title: "Base Analítica",   desc: "Primeros principios y modelos mentales" },
  { icon: Diamond, num: "04", title: "Base de Abundancia", desc: "Identidad, red de valor y propósito" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero — banda verde oscura ── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: "#07211A" }}
      >
        {/* Gold accent lines decorativas */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,148,85,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,148,85,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/assets/gj-symbol-gold.png"
              alt="Gumercindo Jiménez"
              className="h-16 w-auto mx-auto mb-10"
            />
          </motion.div>

          <motion.p
            className="gj-eyebrow mb-6"
            style={{ color: "#CDAE74" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Plan de Formación Personal
          </motion.p>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-tight"
            style={{ color: "#F8F5EE", letterSpacing: "-0.02em" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            La abundancia no llega.{" "}
            <em style={{ color: "#B89455", fontStyle: "italic" }}>
              Se construye desde adentro.
            </em>
          </motion.h1>

          <motion.p
            className="font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ color: "rgba(248,245,238,0.65)" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Un plan de formación personal para desarrollar la mente, la
            personalidad y las habilidades de alguien capaz de sostener una
            vida de gran abundancia con criterio, serenidad y visión.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 font-sans font-semibold text-sm tracking-wide uppercase transition-all duration-220 active:scale-[0.985]"
              style={{
                background: "#11503D",
                color: "#F8F5EE",
                border: "1px solid rgba(184,148,85,0.35)",
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(17,80,61,0.4)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#166B4F")}
              onMouseLeave={e => (e.currentTarget.style.background = "#11503D")}
            >
              Comenzá el entrenamiento
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="w-5 h-8 flex justify-center pt-1.5"
            style={{ border: "1px solid rgba(184,148,85,0.25)", borderRadius: 99 }}
          >
            <div className="w-0.5 h-2 rounded-full" style={{ background: "#B89455" }} />
          </div>
        </motion.div>
      </section>

      {/* ── Filosofía — papel cálido ── */}
      <section className="py-24 px-6 bg-background border-b border-border">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="gj-rule" />
            <p className="gj-eyebrow mb-4">El enfoque</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-8">
              No se trata de imitar multimillonarios
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-5">
              Este plan estudia qué capacidades mentales, hábitos y marcos de decisión
              se repiten en personas que operan a gran escala. Bezos insiste en pensar
              a largo plazo y minimizar arrepentimientos. Musk destaca el razonamiento
              desde primeros principios. Zuckerberg subraya aprender más rápido que los demás.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              La meta no es acumular información motivacional, sino{" "}
              <strong className="text-foreground font-semibold">formar criterio</strong>.
              Convertirte en alguien que sabe qué hacer con grandes recursos sin perder
              elegancia interna, dirección ni serenidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 4 Niveles ── */}
      <section className="py-24 px-6 bg-muted border-b border-border">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="gj-eyebrow mb-3">La ruta</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
              4 niveles de formación
            </h2>
            <p className="font-body text-muted-foreground mt-3 max-w-md mx-auto">
              Una progresión desde el autocontrol hasta la identidad de abundancia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {levels.map((level, i) => {
              const Icon = level.icon;
              return (
                <motion.div
                  key={level.title}
                  className="glass-card rounded-lg p-6 group"
                  style={{ borderTop: "2px solid #B89455" }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3 }}
                >
                  <p
                    className="font-sans font-semibold mb-4"
                    style={{ fontSize: "0.6875rem", letterSpacing: "0.12em", color: "#B89455" }}
                  >
                    {level.num}
                  </p>
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center mb-4"
                    style={{ background: "#EAF2EE" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#11503D" }} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {level.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {level.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cita / CTA ── banda verde oscura */}
      <section
        className="py-24 px-6"
        style={{ background: "#0A2E25" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <hr className="gj-rule" style={{ margin: "0 auto 1.5rem" }} />
            <blockquote
              className="font-display text-2xl sm:text-3xl font-medium italic mb-8"
              style={{ color: "#F8F5EE", lineHeight: 1.3 }}
            >
              "Forjar la mente antes que el patrimonio."
            </blockquote>
            <p className="font-body mb-10" style={{ color: "rgba(248,245,238,0.55)" }}>
              La persona preparada para sostener riqueza no vive reaccionando al impulso.
              Sabe postergar gratificación, tolerar incertidumbre y elegir serenidad
              por encima de exhibición.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm tracking-wide uppercase transition-all duration-220 hover:gap-3"
              style={{ color: "#B89455", borderBottom: "1px solid rgba(184,148,85,0.4)", paddingBottom: 2 }}
            >
              Explorar el plan completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6 border-t border-border bg-background">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
          <img
            src="/assets/gj-symbol-green.png"
            alt="GJ"
            className="h-8 w-auto opacity-50"
          />
          <p className="font-sans text-xs text-muted-foreground tracking-wide">
            Carrera de Abundancia — Plan de formación personal
          </p>
          <p className="font-sans text-xs" style={{ color: "#B2A789" }}>
            Inspirado en los marcos mentales de Bezos, Musk y Zuckerberg
          </p>
        </div>
      </footer>
    </div>
  );
}

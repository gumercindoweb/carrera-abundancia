/**
 * Home: Landing page - Obsidiana Ejecutiva
 * Hero con imagen generada, introducción filosófica, CTA hacia dashboard
 */
import { Link } from "wouter";
import { ArrowRight, Brain, Target, Layers, Diamond } from "lucide-react";
import { motion } from "framer-motion";

const levels = [
  { icon: Brain, title: "Base Mental", desc: "Autocontrol, claridad, disciplina" },
  { icon: Target, title: "Base Estratégica", desc: "Visión, priorización, criterio" },
  { icon: Layers, title: "Base Analítica", desc: "Primeros principios, modelos mentales" },
  { icon: Diamond, title: "Base de Abundancia", desc: "Identidad, red, propósito" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663184209086/grkStG6TS38pKs5UQaFM6E/hero-banner-ZqKZBJvDRBDaN5HahzULTZ.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663184209086/grkStG6TS38pKs5UQaFM6E/logo-ca-BQbxhPQwvAPpKBk6jfEkpY.webp"
              alt="Carrera de Abundancia"
              className="w-20 h-20 mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            La abundancia no llega.{" "}
            <span className="text-gradient-amber">Se construye desde adentro.</span>
          </motion.h1>

          <motion.p
            className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Un plan de formación personal para desarrollar la mente, la personalidad y las habilidades
            de alguien capaz de sostener una vida de gran abundancia con criterio, serenidad y visión.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:opacity-90 transition-all duration-200 active:scale-[0.97] amber-glow"
            >
              Comenzar el entrenamiento
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
              No se trata de imitar multimillonarios
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Este plan estudia qué capacidades mentales, hábitos y marcos de decisión se repiten en personas
              que operan a gran escala. Bezos insiste en pensar a largo plazo y minimizar arrepentimientos.
              Musk destaca el razonamiento desde primeros principios. Zuckerberg subraya aprender más rápido
              que los demás.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              La meta no es acumular información motivacional, sino formar criterio. Convertirte en alguien
              que sabe qué hacer con grandes recursos sin perder elegancia interna, dirección ni serenidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Levels Preview */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            4 niveles de formación
          </motion.h2>
          <motion.p
            className="font-body text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            Una ruta progresiva desde el autocontrol hasta la identidad de abundancia
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, i) => {
              const Icon = level.icon;
              return (
                <motion.div
                  key={level.title}
                  className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{level.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{level.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mindset Image Section */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663184209086/grkStG6TS38pKs5UQaFM6E/mindset-forge-FiFVHSnsyJXJrcMXgvm7FC.webp"
              alt="Forja mental"
              className="rounded-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Forjar la mente antes que el patrimonio
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              El dinero no corrige la confusión; la amplifica. Por eso, antes de pensar en grandes cifras,
              hay que construir estructura interna, hábitos sólidos y una forma estable de decidir.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              La persona preparada para sostener riqueza no vive reaccionando al impulso. Sabe postergar
              gratificación, tolerar incertidumbre y elegir tranquilidad por encima de exhibición.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-200"
            >
              Explorar el plan completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663184209086/grkStG6TS38pKs5UQaFM6E/logo-ca-BQbxhPQwvAPpKBk6jfEkpY.webp"
            alt="CA"
            className="w-10 h-10 mx-auto mb-4 opacity-60"
          />
          <p className="font-body text-sm text-muted-foreground">
            Carrera de Abundancia — Plan de formación personal
          </p>
          <p className="font-body text-xs text-muted-foreground/50 mt-2">
            Inspirado en los marcos mentales de Bezos, Musk y Zuckerberg
          </p>
        </div>
      </footer>
    </div>
  );
}

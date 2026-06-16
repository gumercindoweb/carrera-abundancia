/**
 * Home: Landing page - Gumercindo Jiménez Branding
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
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient instead of external image for brand consistency */}
        <div className="absolute inset-0 bg-gj-petrol">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-gj-teal/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <img
              src="/assets/logo-gj.webp"
              alt="Gumercindo Jiménez"
              className="h-24 w-auto mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            La abundancia no llega.{" "}
            <span className="text-gj-teal">Se construye desde adentro.</span>
          </motion.h1>

          <motion.p
            className="font-body text-lg sm:text-xl text-gj-mint-light max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            Un plan de formación personal para que desarrolles la mente, la personalidad y las habilidades
            de alguien capaz de sostener una vida de gran abundancia con criterio, serenidad y visión.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <Link
              href="/dashboard"
              className="gj-btn text-lg group"
            >
              Comenzá el entrenamiento
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-gj-teal/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-gj-teal" />
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-gj-petrol-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8 uppercase">
              No se trata de imitar multimillonarios
            </h2>
            <p className="font-body text-lg text-gj-mint-light leading-relaxed mb-6">
              Este plan estudia qué capacidades mentales, hábitos y marcos de decisión se repiten en personas
              que operan a gran escala. Bezos insiste en pensar a largo plazo y minimizar arrepentimientos.
              Musk destaca el razonamiento desde primeros principios. Zuckerberg subraya aprender más rápido
              que los demás.
            </p>
            <p className="font-body text-lg text-gj-mint-light leading-relaxed">
              La meta no es que acumules información motivacional, sino que formes criterio. Convertite en alguien
              que sabe qué hacer con grandes recursos sin perder elegancia interna, dirección ni serenidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Levels Preview */}
      <section className="py-24 px-6 border-t border-gj-teal/20 bg-gj-petrol">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-center uppercase"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            4 niveles de formación
          </motion.h2>
          <motion.p
            className="font-body text-lg text-gj-mint-light text-center mb-16 max-w-2xl mx-auto"
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
                  className="gj-card hover:border-gj-teal transition-all duration-300 group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <div className="w-12 h-12 bg-gj-teal/10 flex items-center justify-center mb-4 group-hover:bg-gj-teal/20 transition-colors">
                    <Icon className="w-6 h-6 text-gj-teal" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2 uppercase">{level.title}</h3>
                  <p className="font-body text-sm text-gj-mint-light/70">{level.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mindset Image Section */}
      <section className="py-24 px-6 border-t border-gj-teal/20 bg-gj-petrol-dark">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="border border-gj-teal/30 p-2"
          >
            <div className="aspect-video bg-gj-petrol flex items-center justify-center">
               <span className="text-gj-teal font-display font-bold text-2xl uppercase tracking-widest italic">Forja Mental</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="font-display text-3xl font-bold text-white mb-6 uppercase">
              Forjá tu mente antes que tu patrimonio
            </h2>
            <p className="font-body text-lg text-gj-mint-light leading-relaxed mb-6">
              El dinero no corrige la confusión; la amplifica. Por eso, antes de pensar en grandes cifras,
              tenés que construir estructura interna, hábitos sólidos y una forma estable de decidir.
            </p>
            <p className="font-body text-lg text-gj-mint-light leading-relaxed mb-8">
              Si estás preparado para sostener riqueza, no vivís reaccionando al impulso. Sabés postergar
              gratificación, tolerar incertidumbre y elegir tranquilidad por encima de exhibición.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-gj-teal font-body font-bold uppercase tracking-widest hover:gap-3 transition-all duration-200"
            >
              Explorá el plan completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gj-teal/20 bg-gj-petrol">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/assets/logo-gj.webp"
            alt="GJ"
            className="h-12 w-auto mx-auto mb-4 opacity-80"
          />
          <p className="font-body text-sm text-gj-mint-light">
            Carrera de Abundancia — Plan de formación personal
          </p>
          <p className="font-body text-[10px] text-gj-teal/60 mt-2 uppercase tracking-widest">
            El caos me busca. Yo lo convierto en método.
          </p>
        </div>
      </footer>
    </div>
  );
}

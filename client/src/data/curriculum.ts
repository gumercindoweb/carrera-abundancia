export interface Module {
  id: string;
  title: string;
  description: string;
  keyQuestion: string;
  exercises: string[];
  resources: Resource[];
}

export interface Resource {
  title: string;
  type: "book" | "video" | "article" | "tool" | "podcast";
  url?: string;
  author?: string;
  description: string;
}

export interface LevelData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  referent: string;
  referentQuote: string;
  modules: Module[];
  weeklyRoutine: string[];
}

export const levels: LevelData[] = [
  {
    id: 1,
    title: "Fundamentos Internos",
    subtitle: "Base Mental",
    description: "Entrenas autocontrol, claridad y regulación emocional. El foco está en dejar de reaccionar por impulso y empezar a responder desde criterio. Aquí se aprende a observar el propio deseo, a distinguir necesidad de capricho y a pensar antes de actuar.",
    icon: "brain",
    referent: "Jeff Bezos",
    referentQuote: "Si puedes proyectarte a los 80 años y pensar en qué te arrepentirías, las decisiones se vuelven mucho más claras.",
    modules: [
      {
        id: "level-1-m1",
        title: "Identidad y Autoconcepto",
        description: "Define quién eres cuando no necesitas demostrar nada. Explora qué significa para ti abundancia sin ostentación.",
        keyQuestion: "¿Quién sería yo si no necesitara demostrar nada?",
        exercises: [
          "Escribe qué significa para ti vivir con abundancia sin ostentación",
          "Lista 5 hábitos que mantendrías aunque nadie te aplauda",
          "Describe tu día ideal sin restricciones económicas — enfócate en sensaciones, no en compras"
        ],
        resources: [
          { title: "The Psychology of Money", type: "book", author: "Morgan Housel", description: "Lecciones atemporales sobre riqueza, codicia y felicidad. Fundamental para entender la relación emocional con el dinero." },
          { title: "Atomic Habits", type: "book", author: "James Clear", url: "https://jamesclear.com/atomic-habits", description: "Cómo construir hábitos que definen identidad, no solo comportamiento." },
          { title: "Jeff Bezos - Regret Minimization Framework", type: "video", url: "https://www.youtube.com/watch?v=jwG_qR6XmDQ", description: "Bezos explica cómo toma decisiones proyectándose a los 80 años." }
        ]
      },
      {
        id: "level-1-m2",
        title: "Regulación Emocional",
        description: "Observa tus gatillos de gasto, miedos y tu relación con la escasez. Distingue cuándo decides desde ansiedad y cuándo desde criterio.",
        keyQuestion: "¿Cuándo gasto por ansiedad y cuándo por decisión consciente?",
        exercises: [
          "Durante una semana, registra cada gasto y marca si fue por necesidad, deseo o impulso",
          "Identifica 3 situaciones donde el miedo a la escasez te hizo actuar impulsivamente",
          "Practica 5 minutos diarios de observación sin juicio de tus pensamientos sobre dinero"
        ],
        resources: [
          { title: "Thinking, Fast and Slow", type: "book", author: "Daniel Kahneman", description: "Cómo funcionan los dos sistemas de pensamiento y por qué tomamos decisiones irracionales." },
          { title: "The Power of Now", type: "book", author: "Eckhart Tolle", description: "Presencia y observación como herramientas para no reaccionar desde el automatismo." },
          { title: "Headspace", type: "tool", url: "https://www.headspace.com", description: "App de meditación para desarrollar la capacidad de observar sin reaccionar." }
        ]
      },
      {
        id: "level-1-m3",
        title: "Autocontrol y Disciplina",
        description: "Desarrolla la capacidad de postergar gratificación sin sentir pérdida. Construye disciplina como un músculo, no como castigo.",
        keyQuestion: "¿Puedo sostener un plan durante meses sin necesitar resultados inmediatos?",
        exercises: [
          "Elige un hábito difícil y sostenlo 30 días sin excepción (ejercicio, lectura, ahorro)",
          "Identifica una compra que deseas y posterga la decisión 72 horas — escribe qué sientes",
          "Diseña una rutina matutina de 45 minutos y cúmplela 21 días seguidos"
        ],
        resources: [
          { title: "Can't Hurt Me", type: "book", author: "David Goggins", description: "Mentalidad de resistencia y disciplina extrema aplicada al crecimiento personal." },
          { title: "The Marshmallow Test", type: "book", author: "Walter Mischel", description: "La ciencia detrás de la gratificación diferida y su impacto en el éxito a largo plazo." },
          { title: "Todoist", type: "tool", url: "https://todoist.com", description: "Herramienta de gestión de tareas para construir sistemas de disciplina diaria." }
        ]
      },
      {
        id: "level-1-m4",
        title: "Paciencia y Ecuanimidad",
        description: "Aprende a vivir sin urgencia. La persona que puede sostener riqueza no confunde velocidad con progreso.",
        keyQuestion: "¿Puedo vivir sin urgencia y aún así avanzar con dirección?",
        exercises: [
          "Practica una semana sin redes sociales y observa qué emociones surgen",
          "Escribe una carta a tu yo de dentro de 10 años describiendo quién quieres ser",
          "Identifica 3 áreas donde la prisa te ha costado calidad en decisiones"
        ],
        resources: [
          { title: "Stillness Is the Key", type: "book", author: "Ryan Holiday", description: "La quietud como ventaja estratégica en un mundo de ruido constante." },
          { title: "Meditations", type: "book", author: "Marcus Aurelius", description: "Filosofía estoica aplicada: ecuanimidad ante lo que no puedes controlar." },
          { title: "Calm", type: "tool", url: "https://www.calm.com", description: "Meditación guiada enfocada en cultivar paciencia y presencia." }
        ]
      },
      {
        id: "level-1-m5",
        title: "Humildad Intelectual",
        description: "Reconoce lo que no sabes. La arrogancia es el mayor enemigo del crecimiento financiero y personal.",
        keyQuestion: "¿Puedo aprender de personas que saben más que yo sin sentirme amenazado?",
        exercises: [
          "Lista 5 áreas donde sabes que eres ignorante y diseña un plan para aprender una",
          "Busca a alguien que admires y estudia su trayectoria — no sus resultados, sino su proceso",
          "Escribe 3 veces que estuviste equivocado y qué aprendiste"
        ],
        resources: [
          { title: "Think Again", type: "book", author: "Adam Grant", description: "El poder de saber cuándo estás equivocado y cambiar de opinión con evidencia." },
          { title: "Intellectual Humility (podcast)", type: "podcast", url: "https://fs.blog/knowledge-project-podcast/", description: "Farnam Street Knowledge Project — entrevistas sobre pensamiento claro y humildad intelectual." }
        ]
      },
      {
        id: "level-1-m6",
        title: "Criterio Propio",
        description: "Desarrolla la capacidad de formar opiniones basadas en evidencia y reflexión, no en lo que otros dicen o hacen.",
        keyQuestion: "¿Mis decisiones financieras son mías o son eco de lo que escucho?",
        exercises: [
          "Toma una creencia que tengas sobre el dinero y cuestiónala con 5 preguntas 'por qué'",
          "Lee dos opiniones opuestas sobre inversión y forma tu propia posición argumentada",
          "Identifica una decisión reciente que tomaste por presión social y analiza qué habrías hecho solo"
        ],
        resources: [
          { title: "Poor Charlie's Almanack", type: "book", author: "Peter Kaufman", description: "Los modelos mentales de Charlie Munger para pensar con independencia y claridad." },
          { title: "Farnam Street Blog", type: "article", url: "https://fs.blog/mental-models/", description: "Biblioteca de modelos mentales para desarrollar pensamiento independiente." }
        ]
      }
    ],
    weeklyRoutine: [
      "Leer 30 minutos sobre psicología del dinero o autocontrol",
      "Escribir una reflexión de una página sobre tu relación con el dinero",
      "Registrar todos los gastos y clasificarlos (necesidad/deseo/impulso)",
      "Meditar 10 minutos enfocándote en observar sin reaccionar"
    ]
  },
  {
    id: 2,
    title: "Arquitectura Mental",
    subtitle: "Base Estratégica",
    description: "Desarrollas pensamiento estratégico, visión de largo plazo y tolerancia a la espera. Esta fase busca que puedas sostener objetivos grandes sin depender de gratificación inmediata. También trabajas la capacidad de elegir entornos, hábitos y relaciones que eleven tu estándar.",
    icon: "target",
    referent: "Jeff Bezos",
    referentQuote: "Si haces algo y resulta que funciona, deberías hacer más de eso. Si no funciona, no lo hagas más. Pero piensa en décadas, no en trimestres.",
    modules: [
      {
        id: "level-2-m1",
        title: "Visión de Largo Plazo",
        description: "Aprende a proyectar decisiones en horizontes de décadas. Usa el marco de minimización de arrepentimientos de Bezos.",
        keyQuestion: "¿Qué decisión tomaría si pensara en mi yo de 80 años?",
        exercises: [
          "Escribe 3 decisiones importantes usando el marco de Bezos: ¿lo lamentaría a los 80?",
          "Diseña tu visión a 10 años en 3 áreas: patrimonio, salud y relaciones",
          "Identifica qué estás haciendo hoy que tu yo futuro agradecerá"
        ],
        resources: [
          { title: "The Long Game", type: "book", author: "Dorie Clark", description: "Cómo pensar estratégicamente en un mundo obsesionado con lo inmediato." },
          { title: "Bezos Day One Philosophy", type: "article", url: "https://www.aboutamazon.com/about-us/leadership-principles", description: "Los principios de liderazgo de Amazon y la mentalidad de 'Día 1'." },
          { title: "Jeff Bezos 1997 Shareholder Letter", type: "article", url: "https://www.sec.gov/Archives/edgar/data/1018724/000119312516530910/d168744dex991.htm", description: "La carta original donde Bezos explica por qué piensa en décadas." }
        ]
      },
      {
        id: "level-2-m2",
        title: "Priorización Estratégica",
        description: "No todo importa igual. Aprende a distinguir lo urgente de lo importante y a proteger tu atención como un activo.",
        keyQuestion: "¿Estoy dedicando mi mejor energía a lo que más importa?",
        exercises: [
          "Aplica la matriz de Eisenhower a tu semana: clasifica todas tus actividades",
          "Elimina 3 compromisos que no te acercan a tu visión de 10 años",
          "Define tus 3 prioridades no negociables para los próximos 90 días"
        ],
        resources: [
          { title: "Essentialism", type: "book", author: "Greg McKeown", description: "La disciplina de hacer menos pero mejor. Eliminar lo trivial para enfocarse en lo vital." },
          { title: "Deep Work", type: "book", author: "Cal Newport", description: "Cómo proteger la atención profunda en un mundo de distracciones constantes." },
          { title: "Notion", type: "tool", url: "https://notion.so", description: "Sistema de organización personal para gestionar prioridades y proyectos de vida." }
        ]
      },
      {
        id: "level-2-m3",
        title: "Tolerancia a la Incertidumbre",
        description: "El dinero grande viene con decisiones sin respuesta clara. Aprende a actuar con información incompleta.",
        keyQuestion: "¿Puedo tomar decisiones importantes sin tener certeza absoluta?",
        exercises: [
          "Identifica una decisión que has postergado por miedo a equivocarte — tómala esta semana",
          "Estudia un caso donde Bezos tomó un riesgo calculado (AWS, Kindle) y analiza su lógica",
          "Escribe los peores 3 escenarios de una decisión pendiente y planifica respuestas para cada uno"
        ],
        resources: [
          { title: "Antifragile", type: "book", author: "Nassim Taleb", description: "Cómo beneficiarse del desorden y la incertidumbre en lugar de temerles." },
          { title: "The Black Swan", type: "book", author: "Nassim Taleb", description: "Entender eventos improbables y cómo posicionarse ante lo impredecible." },
          { title: "Principles", type: "book", author: "Ray Dalio", description: "Sistema de toma de decisiones bajo incertidumbre del fundador de Bridgewater." }
        ]
      },
      {
        id: "level-2-m4",
        title: "Diseño de Entorno",
        description: "Tu entorno determina tu estándar. Aprende a elegir relaciones, espacios y hábitos que te eleven.",
        keyQuestion: "¿Mi entorno actual me expande o me mantiene en repetición?",
        exercises: [
          "Audita tu círculo: lista 10 personas con las que más tiempo pasas y evalúa su influencia",
          "Identifica 3 entornos (físicos o digitales) que drenan tu energía y diseña alternativas",
          "Busca una comunidad o grupo donde el estándar sea más alto que el tuyo actual"
        ],
        resources: [
          { title: "Who You Spend Time With", type: "article", url: "https://jamesclear.com/average-of-five-people", description: "James Clear sobre cómo tu entorno moldea tu identidad y resultados." },
          { title: "Tribe of Mentors", type: "book", author: "Tim Ferriss", description: "Consejos de personas de alto rendimiento sobre cómo diseñar entornos de excelencia." },
          { title: "RescueTime", type: "tool", url: "https://www.rescuetime.com", description: "Monitorea cómo usas tu tiempo digital para identificar fugas de atención." }
        ]
      },
      {
        id: "level-2-m5",
        title: "Gestión del Tiempo",
        description: "El tiempo es tu activo más escaso. Aprende a invertirlo con la misma disciplina que invertirías dinero.",
        keyQuestion: "¿Si mi tiempo valiera $500/hora, seguiría haciendo lo que hago hoy?",
        exercises: [
          "Calcula el valor de tu hora ideal y evalúa si tus actividades actuales lo justifican",
          "Bloquea 2 horas diarias de 'tiempo profundo' sin interrupciones durante una semana",
          "Delega o elimina 5 tareas que no requieren tu atención directa"
        ],
        resources: [
          { title: "The 4-Hour Workweek", type: "book", author: "Tim Ferriss", description: "Rediseñar la relación con el trabajo para maximizar libertad y eficiencia." },
          { title: "Make Time", type: "book", author: "Jake Knapp & John Zeratsky", description: "Framework práctico para proteger tu tiempo de las distracciones infinitas." },
          { title: "Toggl Track", type: "tool", url: "https://toggl.com/track/", description: "Herramienta de time-tracking para auditar dónde va realmente tu tiempo." }
        ]
      },
      {
        id: "level-2-m6",
        title: "Construcción de Hábitos Financieros",
        description: "Los hábitos financieros sólidos son la infraestructura invisible de la abundancia sostenida.",
        keyQuestion: "¿Mis hábitos financieros actuales podrían sostener $5 millones?",
        exercises: [
          "Diseña un sistema de revisión financiera semanal de 30 minutos",
          "Automatiza al menos 3 decisiones financieras (ahorro, inversión, pagos)",
          "Calcula tu tasa de ahorro actual y diseña un plan para llevarla al 30%"
        ],
        resources: [
          { title: "I Will Teach You to Be Rich", type: "book", author: "Ramit Sethi", description: "Sistema práctico para automatizar finanzas personales sin obsesionarse." },
          { title: "YNAB", type: "tool", url: "https://www.ynab.com", description: "Herramienta de presupuesto basada en dar trabajo a cada peso antes de gastarlo." },
          { title: "Finanzas personales BBVA", type: "article", url: "https://www.bbva.com/es/10-habitos-manejar-mejor-finanzas-personales/", description: "10 hábitos fundamentales para manejar mejor las finanzas personales." }
        ]
      }
    ],
    weeklyRoutine: [
      "Leer sobre estrategia, visión o gestión del tiempo",
      "Revisar y ajustar prioridades de la semana con la matriz de Eisenhower",
      "Tomar una decisión pendiente con horizonte de largo plazo",
      "Evaluar si tu entorno de la semana te expandió o te distrajo"
    ]
  },
  {
    id: 3,
    title: "Pensamiento Estructural",
    subtitle: "Base Analítica",
    description: "Estudias primeros principios, modelos mentales, negociación, toma de decisiones y resolución de problemas. El objetivo es que no repitas lo que otros hacen por costumbre, sino que analices qué es verdaderamente esencial en cada situación.",
    icon: "layers",
    referent: "Elon Musk",
    referentQuote: "Es importante razonar desde primeros principios en lugar de por analogía. Con primeros principios, hierves las cosas hasta las verdades fundamentales y razonas desde ahí.",
    modules: [
      {
        id: "level-3-m1",
        title: "Primeros Principios",
        description: "Aprende a descomponer problemas hasta sus verdades fundamentales y reconstruir soluciones desde la lógica pura.",
        keyQuestion: "¿Estoy razonando desde la verdad o desde lo que otros asumen?",
        exercises: [
          "Toma un problema financiero personal y descompónlo en sus componentes fundamentales",
          "Cuestiona 5 'reglas' que sigues sobre dinero — ¿cuáles son verdades y cuáles convenciones?",
          "Estudia cómo Musk aplicó primeros principios al costo de baterías de Tesla"
        ],
        resources: [
          { title: "First Principles: Elon Musk", type: "article", url: "https://jamesclear.com/first-principles", description: "James Clear explica el método de primeros principios con ejemplos de Musk." },
          { title: "First Principles Thinking", type: "article", url: "https://fs.blog/first-principles/", description: "Farnam Street: guía completa sobre cómo pensar desde primeros principios." },
          { title: "The First Principles Method - Elon Musk", type: "video", url: "https://www.youtube.com/watch?v=NV3sBlRgzTI", description: "Musk explica en entrevista con Kevin Rose cómo aplica primeros principios." }
        ]
      },
      {
        id: "level-3-m2",
        title: "Modelos Mentales",
        description: "Construye un arsenal de marcos de pensamiento que te permitan analizar cualquier situación desde múltiples ángulos.",
        keyQuestion: "¿Cuántos lentes diferentes puedo usar para ver este problema?",
        exercises: [
          "Estudia 3 modelos mentales nuevos esta semana y aplica uno a una decisión real",
          "Analiza una inversión usando al menos 3 modelos: inversión de supuestos, segundo orden, mapa/territorio",
          "Crea tu propia 'caja de herramientas mental' con los 10 modelos que más te sirven"
        ],
        resources: [
          { title: "The Great Mental Models Vol. 1", type: "book", author: "Shane Parrish", description: "Los modelos mentales fundamentales para pensar con claridad y tomar mejores decisiones." },
          { title: "Super Thinking", type: "book", author: "Gabriel Weinberg", description: "Catálogo de modelos mentales organizados por categoría con ejemplos prácticos." },
          { title: "Farnam Street Mental Models", type: "article", url: "https://fs.blog/mental-models/", description: "Biblioteca completa de modelos mentales con explicaciones y aplicaciones." }
        ]
      },
      {
        id: "level-3-m3",
        title: "Aprendizaje Acelerado",
        description: "Diseña un sistema para aprender más rápido. Zuckerberg entiende la velocidad de aprendizaje como ventaja competitiva central.",
        keyQuestion: "¿Cómo puedo aprender esto el doble de rápido que la persona promedio?",
        exercises: [
          "Elige un tema nuevo y aprende los fundamentos en 48 horas usando técnica de Feynman",
          "Diseña tu sistema personal de aprendizaje: captura → proceso → aplicación → revisión",
          "Enseña algo que aprendiste esta semana a otra persona en 5 minutos"
        ],
        resources: [
          { title: "Ultralearning", type: "book", author: "Scott Young", description: "Estrategias agresivas de autoaprendizaje para dominar habilidades difíciles rápidamente." },
          { title: "Zuckerberg on Learning Fast", type: "video", url: "https://www.youtube.com/watch?v=YQKsdR1wgK8", description: "Zuckerberg en Tim Ferriss Show sobre velocidad de aprendizaje como estrategia." },
          { title: "Zuckerberg: Mindset Behind Meta's Wins", type: "article", url: "https://www.entrepreneur.com/business-news/mark-zuckerberg-reveals-the-mindset-behind-metas-wins/480054", description: "Cómo Zuckerberg define la estrategia de Meta alrededor del aprendizaje rápido." },
          { title: "Readwise", type: "tool", url: "https://readwise.io", description: "Herramienta para retener lo que lees mediante revisión espaciada de highlights." }
        ]
      },
      {
        id: "level-3-m4",
        title: "Toma de Decisiones",
        description: "Desarrolla frameworks para decidir bajo presión, con información incompleta y consecuencias significativas.",
        keyQuestion: "¿Tengo un sistema para tomar decisiones o decido desde la emoción del momento?",
        exercises: [
          "Documenta tu próxima decisión importante: opciones, criterios, riesgos, decisión final",
          "Estudia las decisiones 'tipo 1' vs 'tipo 2' de Bezos y clasifica tus decisiones pendientes",
          "Haz un pre-mortem: imagina que tu próxima decisión importante falló — ¿por qué habría sido?"
        ],
        resources: [
          { title: "Thinking in Bets", type: "book", author: "Annie Duke", description: "Cómo tomar decisiones como un jugador de poker profesional: probabilidades, no certezas." },
          { title: "Decisive", type: "book", author: "Chip & Dan Heath", description: "Framework WRAP para evitar los sesgos más comunes en la toma de decisiones." },
          { title: "Bezos on Type 1 vs Type 2 Decisions", type: "article", url: "https://www.aboutamazon.com/about-us/leadership-principles", description: "Bezos distingue entre decisiones irreversibles (tipo 1) y reversibles (tipo 2)." }
        ]
      },
      {
        id: "level-3-m5",
        title: "Negociación y Comunicación",
        description: "La riqueza se construye en relación con otros. Aprende a negociar, comunicar y poner límites con claridad.",
        keyQuestion: "¿Puedo pedir lo que quiero y decir no a lo que no me sirve, sin culpa?",
        exercises: [
          "Negocia algo esta semana que normalmente aceptarías sin cuestionar (precio, plazo, condición)",
          "Practica decir 'no' a 3 peticiones que no se alinean con tus prioridades",
          "Prepara un 'pitch' de 2 minutos sobre un proyecto personal como si hablaras con un inversor"
        ],
        resources: [
          { title: "Never Split the Difference", type: "book", author: "Chris Voss", description: "Técnicas de negociación del FBI aplicadas a negocios y vida personal." },
          { title: "Crucial Conversations", type: "book", author: "Patterson, Grenny et al.", description: "Cómo manejar conversaciones difíciles con calma y efectividad." },
          { title: "The Art of Saying No", type: "article", url: "https://jamesclear.com/saying-no", description: "James Clear sobre por qué decir no es la habilidad más subestimada del éxito." }
        ]
      },
      {
        id: "level-3-m6",
        title: "Resolución de Problemas Complejos",
        description: "Aprende a descomponer problemas que parecen imposibles en partes manejables y atacarlas sistemáticamente.",
        keyQuestion: "¿Puedo convertir un problema abrumador en pasos concretos y ejecutables?",
        exercises: [
          "Toma tu mayor desafío financiero actual y divídelo en 5 sub-problemas independientes",
          "Aplica el método de inversión: en lugar de preguntar cómo lograr X, pregunta cómo garantizar que X NO ocurra",
          "Estudia cómo SpaceX resolvió el problema del costo de lanzamiento espacial"
        ],
        resources: [
          { title: "Seeking Wisdom", type: "book", author: "Peter Bevelin", description: "De Darwin a Munger: cómo los grandes pensadores resuelven problemas complejos." },
          { title: "The Art of Strategy", type: "book", author: "Avinash Dixit", description: "Teoría de juegos aplicada a decisiones estratégicas en negocios y vida." },
          { title: "Musk Problem Solving", type: "video", url: "https://www.youtube.com/watch?v=ZqhN2YWTw0M", description: "Cómo Musk aplica primeros principios para resolver problemas aparentemente imposibles." }
        ]
      }
    ],
    weeklyRoutine: [
      "Estudiar un modelo mental nuevo y aplicarlo a una situación real",
      "Descomponer un problema actual usando primeros principios",
      "Practicar una negociación o conversación difícil",
      "Enseñar algo aprendido esta semana a otra persona"
    ]
  },
  {
    id: 4,
    title: "Identidad de Abundancia",
    subtitle: "Base de Abundancia",
    description: "La última fase integra dinero, tiempo, salud, prestigio y propósito. Ya no se trata solo de lograr recursos, sino de convertirte en alguien que sabe administrarlos sin perder serenidad, dirección ni elegancia interna.",
    icon: "diamond",
    referent: "Los tres referentes",
    referentQuote: "La abundancia real no empieza cuando aparece el dinero, sino cuando aparece la capacidad de sostenerlo sin perderte.",
    modules: [
      {
        id: "level-4-m1",
        title: "Integración: Dinero, Tiempo, Salud",
        description: "La verdadera riqueza incluye tiempo, salud, claridad mental y capacidad de decir no. Integra las tres dimensiones.",
        keyQuestion: "¿Mi vida actual refleja equilibrio entre patrimonio, salud y tiempo libre?",
        exercises: [
          "Evalúa del 1 al 10 tu situación en: dinero, tiempo libre, salud, relaciones, propósito",
          "Diseña tu 'portafolio de vida': cómo distribuirías 5M entre inversión, experiencias, salud y legado",
          "Identifica qué área de tu vida está subsidiando a las demás y diseña un rebalanceo"
        ],
        resources: [
          { title: "Die With Zero", type: "book", author: "Bill Perkins", description: "Cómo optimizar experiencias de vida, no solo acumulación de dinero." },
          { title: "The Almanack of Naval Ravikant", type: "book", author: "Eric Jorgenson", description: "Sabiduría sobre riqueza y felicidad del inversor Naval Ravikant." },
          { title: "Estrategia 70/30 de inversión", type: "article", url: "https://simplemoneyhabits.com/5-million-dollars/", description: "Cómo invertir $5M con la estrategia 70/30 (S&P 500 + bonos)." }
        ]
      },
      {
        id: "level-4-m2",
        title: "Red y Capital Social",
        description: "La abundancia requiere redes que expandan tu estándar. Aprende a construir relaciones de alto valor mutuo.",
        keyQuestion: "¿Mi red actual me prepara para operar al nivel de $5M?",
        exercises: [
          "Identifica 5 personas que operan al nivel donde quieres estar y diseña cómo acercarte",
          "Ofrece valor a alguien de tu red sin esperar nada a cambio esta semana",
          "Evalúa qué relaciones drenan tu energía y diseña límites claros"
        ],
        resources: [
          { title: "Never Eat Alone", type: "book", author: "Keith Ferrazzi", description: "Cómo construir relaciones genuinas que abren puertas sin manipulación." },
          { title: "Give and Take", type: "book", author: "Adam Grant", description: "Por qué los 'givers' estratégicos terminan en la cima." },
          { title: "LinkedIn", type: "tool", url: "https://linkedin.com", description: "Plataforma para construir y mantener tu red profesional de alto nivel." }
        ]
      },
      {
        id: "level-4-m3",
        title: "Administración de Patrimonio",
        description: "Comprende cómo se preserva, se hace crecer y se protege un patrimonio significativo.",
        keyQuestion: "¿Tengo la competencia técnica para administrar $5M sin depender ciegamente de otros?",
        exercises: [
          "Estudia la diferencia entre ETFs indexados (VOO, SPY) y fondos activos — calcula costos a 20 años",
          "Diseña tu portafolio ideal para $5M: % en stocks, bonos, real estate, cash",
          "Calcula cuánto necesitarías retirar mensualmente para vivir sin tocar el principal"
        ],
        resources: [
          { title: "A Random Walk Down Wall Street", type: "book", author: "Burton Malkiel", description: "Por qué la inversión pasiva supera a la activa a largo plazo." },
          { title: "The Simple Path to Wealth", type: "book", author: "JL Collins", description: "Guía simple y directa para invertir y alcanzar independencia financiera." },
          { title: "6 Tips to Invest $5 Million", type: "article", url: "https://www.moneytalksnews.com/slideshows/6-tips-to-invest-and-use-5-million/", description: "Consejos prácticos para invertir y usar $5 millones de forma inteligente." }
        ]
      },
      {
        id: "level-4-m4",
        title: "Propósito y Legado",
        description: "El dinero sin propósito es solo acumulación. Define qué impacto quieres dejar y cómo tu riqueza lo habilita.",
        keyQuestion: "¿Para qué quiero esta abundancia más allá de mi comodidad personal?",
        exercises: [
          "Escribe tu 'declaración de propósito financiero': por qué buscas abundancia y para qué la usarás",
          "Diseña cómo dedicarías el 10% de $5M a causas que te importan",
          "Imagina tu legado a 50 años: ¿qué habrás construido, enseñado o habilitado?"
        ],
        resources: [
          { title: "The Infinite Game", type: "book", author: "Simon Sinek", description: "Pensar en juegos infinitos: no ganar, sino seguir jugando con propósito." },
          { title: "Start with Why", type: "book", author: "Simon Sinek", description: "Cómo el propósito claro guía decisiones y atrae oportunidades alineadas." },
          { title: "Giving Pledge", type: "article", url: "https://givingpledge.org", description: "El compromiso de los más ricos del mundo de donar la mayoría de su riqueza." }
        ]
      },
      {
        id: "level-4-m5",
        title: "Elegancia Interna",
        description: "La persona que puede sostener riqueza no necesita mostrarla. Desarrolla la capacidad de vivir con abundancia sin ostentación.",
        keyQuestion: "¿Puedo tener acceso a todo y elegir la simplicidad?",
        exercises: [
          "Define tu concepto de 'lujo auténtico' — qué experiencias te dan paz real vs. cuáles son para otros",
          "Practica una semana de 'minimalismo selectivo': gasta solo en lo que genuinamente valoras",
          "Escribe tu manifiesto personal: quién eres, qué valoras, cómo vives"
        ],
        resources: [
          { title: "Quiet Luxury (concepto)", type: "article", url: "https://en.wikipedia.org/wiki/Quiet_luxury", description: "El concepto de lujo silencioso: riqueza que no necesita ser exhibida." },
          { title: "The Art of Living", type: "book", author: "Epictetus", description: "Filosofía estoica sobre vivir con dignidad independientemente de las circunstancias externas." },
          { title: "Sapiens", type: "book", author: "Yuval Noah Harari", description: "Perspectiva amplia sobre la humanidad que relativiza la obsesión por el estatus." }
        ]
      },
      {
        id: "level-4-m6",
        title: "Síntesis y Manifiesto Personal",
        description: "Integra todo lo aprendido en un documento vivo que define quién eres, cómo decides y hacia dónde vas.",
        keyQuestion: "¿Puedo articular con claridad quién soy y hacia dónde voy?",
        exercises: [
          "Redacta tu manifiesto de abundancia: principios, compromisos y visión en una página",
          "Diseña tu rutina ideal de 'persona de $5M': mañana, trabajo, finanzas, relaciones, descanso",
          "Crea un plan de revisión trimestral para evaluar tu alineación con este manifiesto"
        ],
        resources: [
          { title: "Principles", type: "book", author: "Ray Dalio", description: "Cómo Dalio codificó sus principios de vida y trabajo en un sistema reproducible." },
          { title: "Man's Search for Meaning", type: "book", author: "Viktor Frankl", description: "El propósito como ancla fundamental de una vida con sentido." },
          { title: "Libertad financiera BBVA", type: "article", url: "https://www.bbva.com/es/salud-financiera/que-es-la-libertad-financiera-y-como-se-puede-conseguir/", description: "Qué es la libertad financiera y cómo construirla paso a paso." }
        ]
      }
    ],
    weeklyRoutine: [
      "Revisar tu manifiesto personal y evaluar alineación",
      "Estudiar un aspecto de administración patrimonial o inversión",
      "Conectar con alguien de tu red que opere a un nivel superior",
      "Reflexionar sobre el equilibrio dinero-tiempo-salud-propósito"
    ]
  }
];

export const weeklyPlan = [
  { week: 1, title: "Identidad", level: 1, focus: "Define quién eres cuando no necesitas demostrar nada." },
  { week: 2, title: "Dinero y Emoción", level: 1, focus: "Observa cuándo gastas por ansiedad, miedo o comparación." },
  { week: 3, title: "Regret Minimization", level: 2, focus: "Trabaja decisiones desde la pregunta de Bezos: ¿qué lamentarías más a los 80?" },
  { week: 4, title: "Primeros Principios", level: 3, focus: "Descompón un problema hasta lo esencial y reconstruye desde fundamentos." },
  { week: 5, title: "Aprendizaje Acelerado", level: 3, focus: "Diseña un sistema para aprender más rápido que el promedio." },
  { week: 6, title: "Entorno", level: 2, focus: "Analiza si tu entorno te expande o te distrae." },
  { week: 7, title: "Decisión y Límites", level: 4, focus: "Practica decir no a lo que no te acerca a tu visión." },
  { week: 8, title: "Síntesis", level: 4, focus: "Redacta tu manifiesto personal de abundancia." }
];

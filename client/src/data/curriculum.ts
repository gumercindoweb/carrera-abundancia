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
    description: "Entrená tu autocontrol, claridad y regulación emocional. El foco está en que dejes de reaccionar por impulso y empieces a responder desde tu criterio. Acá vas a aprender a observar tus propios deseos, a distinguir necesidad de capricho y a pensar antes de actuar.",
    icon: "brain",
    referent: "Jeff Bezos",
    referentQuote: "Si podés proyectarte a los 80 años y pensar en qué te arrepentirías, las decisiones se vuelven mucho más claras.",
    modules: [
      {
        id: "level-1-m1",
        title: "Identidad y Autoconcepto",
        description: "Definí quién sos cuando no necesitás demostrar nada. Explorá qué significa para vos la abundancia sin ostentación.",
        keyQuestion: "¿Quién sería yo si no necesitara demostrar nada?",
        exercises: [
          "Escribí qué significa para vos vivir con abundancia sin ostentación",
          "Listá 5 hábitos que mantendrías aunque nadie te aplauda",
          "Describí tu día ideal sin restricciones económicas — enfocate en sensaciones, no en compras"
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
        description: "Observá tus gatillos de gasto, miedos y tu relación con la escasez. Distinguí cuándo decidís desde la ansiedad y cuándo desde el criterio.",
        keyQuestion: "¿Cuándo gasto por ansiedad y cuándo por decisión consciente?",
        exercises: [
          "Durante una semana, registrá cada gasto y marcá si fue por necesidad, deseo o impulso",
          "Identificá 3 situaciones donde el miedo a la escasez te hizo actuar impulsivamente",
          "Practicá 5 minutos diarios de observación sin juicio de tus pensamientos sobre el dinero"
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
        description: "Desarrollá la capacidad de postergar gratificación sin sentir pérdida. Construí tu disciplina como un músculo, no como un castigo.",
        keyQuestion: "¿Puedo sostener un plan durante meses sin necesitar resultados inmediatos?",
        exercises: [
          "Elegí un hábito difícil y sostenelo 30 días sin excepción (ejercicio, lectura, ahorro)",
          "Identificá una compra que deseás y postergá la decisión 72 horas — escribí qué sentís",
          "Diseñá una rutina matutina de 45 minutos y cumplila 21 días seguidos"
        ],
        resources: [
          { title: "Can't Hurt Me", type: "book", author: "David Goggins", description: "Mentalidad de resistencia y disciplina extrema aplicada al crecimiento personal." },
          { title: "The Marshmallow Test", type: "book", author: "Walter Mischel", description: "La ciencia detrás de la gratificación diferida y su impacto en el éxito a largo plazo." },
          { title: "Todoist", type: "tool", url: "https://todoist.com", description: "Herramienta de gestión de tareas para construir sistemas de disciplina diaria." }
        ]
      }
    ],
    weeklyRoutine: [
      "Leé 30 minutos sobre psicología del dinero o autocontrol",
      "Escribí una reflexión de una página sobre tu relación con el dinero",
      "Registrá todos los gastos y clasificalos (necesidad/deseo/impulso)",
      "Meditá 10 minutos enfocándote en observar sin reaccionar"
    ]
  },
  {
    id: 2,
    title: "Arquitectura Mental",
    subtitle: "Base Estratégica",
    description: "Desarrollá tu pensamiento estratégico, visión de largo plazo y tolerancia a la espera. Esta fase busca que puedas sostener objetivos grandes sin depender de gratificación inmediata. También trabajás la capacidad de elegir entornos, hábitos y relaciones que eleven tu estándar.",
    icon: "target",
    referent: "Jeff Bezos",
    referentQuote: "Si hacés algo y resulta que funciona, deberías hacer más de eso. Si no funciona, no lo hagás más. Pero pensá en décadas, no en trimestres.",
    modules: [
      {
        id: "level-2-m1",
        title: "Visión de Largo Plazo",
        description: "Aprendé a proyectar tus decisiones en horizontes de décadas. Usá el marco de minimización de arrepentimientos de Bezos.",
        keyQuestion: "¿Qué decisión tomaría si pensara en mi yo de 80 años?",
        exercises: [
          "Escribí 3 decisiones importantes usando el marco de Bezos: ¿lo lamentaría a los 80?",
          "Diseñá tu visión a 10 años en 3 áreas: patrimonio, salud y relaciones",
          "Identificá qué estás haciendo hoy que tu yo futuro agradecerá"
        ],
        resources: [
          { title: "The Long Game", type: "book", author: "Dorie Clark", description: "Cómo pensar estratégicamente en un mundo obsesionado con lo inmediato." },
          { title: "Bezos Day One Philosophy", type: "article", url: "https://www.aboutamazon.com/about-us/leadership-principles", description: "Los principios de liderazgo de Amazon y la mentalidad de 'Día 1'." }
        ]
      }
    ],
    weeklyRoutine: [
      "Revisá tu visión de 10 años y ajustá tus prioridades de la semana",
      "Identificá una decisión difícil y aplicale el marco de Bezos",
      "Leé sobre pensamiento estratégico o biografías de grandes constructores",
      "Practicá decir 'no' a una oportunidad que no alinea con tu visión"
    ]
  },
  {
    id: 3,
    title: "Sistemas y Criterio",
    subtitle: "Base Analítica",
    description: "Acá es donde empezás a pensar desde primeros principios. Dejás de copiar recetas y empezás a entender los mecanismos. Desarrollás tu capacidad analítica para evaluar riesgos, entender sistemas complejos y tomar decisiones basadas en datos y lógica, no en ruido.",
    icon: "layers",
    referent: "Elon Musk",
    referentQuote: "Es importante razonar desde los primeros principios en lugar de por analogía.",
    modules: [
      {
        id: "level-3-m1",
        title: "Primeros Principios",
        description: "Aprendé a desglosar problemas complejos en sus verdades fundamentales. No aceptes las cosas 'porque siempre se hicieron así'.",
        keyQuestion: "¿Cuáles son las verdades fundamentales de este problema?",
        exercises: [
          "Tomá un desafío actual y desglosalo hasta llegar a sus piezas básicas",
          "Cuestioná 3 supuestos de tu industria o negocio que todos aceptan como ciertos",
          "Diseñá una solución nueva para un problema viejo usando solo los principios básicos"
        ],
        resources: [
          { title: "First Principles Thinking", type: "article", url: "https://fs.blog/first-principles/", description: "Guía completa de Farnam Street sobre cómo pensar desde cero." }
        ]
      }
    ],
    weeklyRoutine: [
      "Analizá un sistema complejo (tu negocio, tus finanzas) desde sus piezas básicas",
      "Estudiá un modelo mental nuevo y buscale una aplicación práctica",
      "Dedicá una hora a 'pensar sin distracciones' sobre un problema difícil",
      "Auditá tus fuentes de información: eliminá el ruido, buscá la señal"
    ]
  },
  {
    id: 4,
    title: "La Nueva Identidad",
    subtitle: "Base de Abundancia",
    description: "La fase final. Acá consolidás tu identidad de abundancia. Ya no sos alguien que 'intenta' ser exitoso, sino alguien que opera desde la excelencia. Trabajás en tu red de contactos, tu propósito superior y en cómo tu presencia impacta en los demás.",
    icon: "diamond",
    referent: "Mark Zuckerberg",
    referentQuote: "El mayor riesgo es no correr ningún riesgo. En un mundo que cambia realmente rápido, la única estrategia que garantiza el fracaso es no correr riesgos.",
    modules: [
      {
        id: "level-4-m1",
        title: "Identidad de Excelencia",
        description: "Operá desde el estándar más alto en todo lo que hacés. Tu nombre es tu activo más valioso.",
        keyQuestion: "¿Esta acción es digna de la persona en la que me estoy convirtiendo?",
        exercises: [
          "Definí tus 3 valores no negociables y cómo se ven en la práctica diaria",
          "Elevá el estándar de una tarea cotidiana hasta la excelencia absoluta",
          "Escribí tu manifiesto personal de abundancia y propósito"
        ],
        resources: [
          { title: "The 15 Commitments of Conscious Leadership", type: "book", author: "Jim Dethmer", description: "Liderazgo desde la responsabilidad radical y la abundancia." }
        ]
      }
    ],
    weeklyRoutine: [
      "Conectá con una persona que admires o que esté en un nivel superior al tuyo",
      "Realizá un acto de generosidad estratégica sin esperar nada a cambio",
      "Revisá tu impacto semanal: ¿cómo mejoraste tu entorno?",
      "Meditá sobre tu propósito y cómo tu abundancia sirve a los demás"
    ]
  }
];

export const weeklyPlan = [
  { title: "Semana 1: Auditoría de Estado", focus: "Registrá todo. Mirá la verdad de tus números y hábitos sin filtro." },
  { title: "Semana 2: El Filtro del No", focus: "Eliminá lo trivial. Aprendé a decir que no para proteger tu visión." },
  { title: "Semana 3: Estructura Diaria", focus: "Diseñá tu rutina de alto rendimiento. El caos se vence con método." },
  { title: "Semana 4: Criterio Financiero", focus: "Entendé la diferencia entre activo y pasivo en tu propia vida." },
  { title: "Semana 5: Pensamiento Sistémico", focus: "Dejá de apagar incendios. Empezá a construir sistemas que funcionen solos." },
  { title: "Semana 6: Red de Valor", focus: "Auditá tu entorno social. Rodeate de gente que eleve tu estándar." },
  { title: "Semana 7: Riesgo Calculado", focus: "Aprendé a evaluar oportunidades. No le temas al riesgo, temele a la mediocridad." },
  { title: "Semana 8: Consolidación", focus: "Revisá tu transformación. Preparate para el siguiente ciclo de crecimiento." }
];

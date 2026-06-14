# Ideas de Diseño — Carrera de Abundancia

## Tres enfoques estilísticos

### 1. Obsidiana Ejecutiva
Estética oscura, densa y sofisticada inspirada en dashboards de trading institucional y salas de guerra estratégica. Transmite poder silencioso, control y profundidad intelectual.
**Probabilidad:** 0.04

### 2. Pergamino Moderno
Estética editorial-académica con tonos cálidos de papel antiguo, tipografía serif elegante y estructura de "manuscrito personal". Evoca sabiduría, reflexión y legado intelectual.
**Probabilidad:** 0.06

### 3. Arquitectura Mental
Estética geométrica y estructural inspirada en blueprints arquitectónicos y diagramas de ingeniería. Líneas precisas, espacios calculados, sensación de construir algo sólido pieza por pieza.
**Probabilidad:** 0.03

---

## Enfoque elegido: Obsidiana Ejecutiva

### Design Movement
Dark luxury meets data-driven intelligence. Inspirado en terminales financieras Bloomberg, cockpits de aviación y el minimalismo japonés oscuro (wabi-sabi digital). La oscuridad no es decorativa: representa profundidad de pensamiento y concentración.

### Core Principles
1. **Densidad controlada** — Mucha información presentada con jerarquía impecable, sin saturar.
2. **Luminosidad selectiva** — Los acentos de luz (dorado, ámbar) aparecen solo donde importa: progreso, logros, puntos de acción.
3. **Verticalidad narrativa** — El contenido fluye como una columna vertebral, con ramificaciones laterales para explorar.
4. **Gravedad visual** — Los elementos más importantes tienen más peso visual (tamaño, contraste, posición).

### Color Philosophy
La base es un negro profundo con matices azulados (no gris plano), que evoca la obsidiana volcánica. El acento principal es un dorado ámbar (no amarillo brillante) que representa la abundancia como algo que se forja con calor y presión. Acentos secundarios en verde esmeralda oscuro para estados de progreso/completado, y un rojo borgoña sutil para alertas o áreas que requieren atención.

- Fondo principal: `oklch(0.13 0.01 260)` — negro azulado profundo
- Superficie elevada: `oklch(0.18 0.012 260)` — panel oscuro
- Acento primario: `oklch(0.72 0.15 75)` — dorado ámbar
- Acento progreso: `oklch(0.55 0.12 155)` — esmeralda oscuro
- Texto principal: `oklch(0.92 0.005 80)` — blanco cálido
- Texto secundario: `oklch(0.65 0.01 260)` — gris azulado

### Layout Paradigm
Sidebar persistente a la izquierda como "columna vertebral" de navegación (los 4 niveles + secciones). Área principal con layout asimétrico: panel de contenido dominante (70%) + panel lateral de contexto/progreso (30%). Los módulos se presentan como "tarjetas de obsidiana" con bordes sutiles luminosos al hover.

### Signature Elements
1. **Barra de progreso tipo "forja"** — Una barra horizontal que se llena con un gradiente de ámbar incandescente, como metal calentándose.
2. **Indicadores orbitales** — Los 4 niveles se representan como anillos concéntricos en la vista de dashboard, mostrando progreso radial.
3. **Líneas de conexión** — Líneas finas doradas que conectan conceptos relacionados, como un mapa mental sutil en el fondo.

### Interaction Philosophy
Las interacciones son deliberadas y con peso. Nada se mueve sin propósito. Los hovers revelan información adicional con un fade suave (no pop). Los clicks producen un efecto de "presión" (scale 0.97) que transmite solidez. Las transiciones entre secciones son horizontales con un ligero parallax, como pasar páginas de un libro pesado.

### Animation
- Entrada de página: fade-in desde abajo con stagger de 50ms entre elementos
- Hover en tarjetas: elevación sutil (translateY -2px) + borde dorado que aparece
- Progreso: animación de "llenado" con easing ease-out-expo, como líquido dorado
- Transiciones de ruta: crossfade de 200ms
- Checkboxes de completado: efecto de "sello" con scale bounce sutil
- Reducir movimiento respetado vía prefers-reduced-motion

### Typography System
- Display/Títulos: **Playfair Display** (serif con personalidad, peso y elegancia)
- Body/Contenido: **Source Sans 3** (sans-serif humanista, legible en fondos oscuros)
- Monospace/Datos: **JetBrains Mono** (para métricas, porcentajes, contadores)
- Jerarquía: H1 (2.5rem/bold), H2 (1.75rem/semibold), H3 (1.25rem/medium), Body (1rem/regular), Caption (0.875rem/regular)

### Brand Essence
Una plataforma de entrenamiento mental para personas que construyen riqueza desde el carácter, no desde la prisa — seria, profunda y orientada a la acción.
Personalidad: **Estratégica. Sobria. Implacable.**

### Brand Voice
Los titulares suenan como verdades incómodas dichas con calma. Los CTAs son directos sin ser agresivos. La microcopia es precisa y sin relleno.
- Ejemplo headline: "La abundancia no llega. Se construye desde adentro."
- Ejemplo CTA: "Comenzar el entrenamiento"
- Prohibido: "Bienvenido a tu viaje", "Empieza hoy tu transformación", "Descubre tu potencial"

### Wordmark & Logo
Un monograma geométrico que combina las letras "CA" (Carrera de Abundancia) formando una estructura tipo diamante/prisma. Las líneas son angulares y precisas, evocando tanto una gema (abundancia) como una estructura arquitectónica (construcción). Renderizado en dorado ámbar sobre fondo oscuro.

### Signature Brand Color
**Ámbar Obsidiana** — `oklch(0.72 0.15 75)` — Un dorado profundo con calidez de ámbar que evoca metal precioso forjado bajo presión. No es el dorado brillante del lujo superficial, sino el tono cálido de algo que se ha trabajado con tiempo y disciplina.

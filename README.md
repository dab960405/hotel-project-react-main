🌐 Hotel SPA — Aplicación Web Accesible https://hoteldab.netlify.app/
Esta es una Single Page Application (SPA) desarrollada en React para la gestión y presentación de la información de un hotel.
La app incluye secciones de inicio, servicios, habitaciones, equipo, testimonios y formularios de contacto y reserva.

Está construida siguiendo las pautas de accesibilidad WCAG 2.1 nivel AA, logrando un puntaje de 100 en accesibilidad (Lighthouse: mobile & desktop) y 0 issues en axe DevTools ✅.

✨ Características principales
Interfaz accesible: navegación totalmente operable con teclado, foco visible y orden de tabulación lógico.
Contraste corregido: todos los elementos de texto y botones cumplen la ratio mínima AA.
Estructura semántica: uso de header, main, footer, section, article con jerarquía de headings correcta (h1 → h2 → h3).
Textos alternativos y ARIA: imágenes con alt descriptivos, íconos como decorativos (aria-hidden="true"), y aria-label en enlaces sin texto visible.
Formularios accesibles: inputs con label, campos obligatorios con required, mensajes de ayuda con aria-describedby.
Responsive: diseño responsivo utilizando React + Bootstrap, optimizado para móvil y escritorio.


🚀 Instalación y ejecución
Clona este repositorio:
bash
git clone https://github.com/dab960405/hotel-project-react-main
Instala las dependencias:
bash
npm install
Inicia el servidor en modo desarrollo:
bash
npm start
Accede en http://localhost:3000

Construir para producción:
bash
npm run build
Esto genera la carpeta /build lista para despliegue 🚀.

🧪 Pruebas de accesibilidad
La aplicación fue probada con:

Lighthouse (Chrome DevTools):
✅ Accesibilidad 100 (mobile & desktop)
axe DevTools:
✅ 0 errores detectados
WAVE:
✅ Landmarks, heading order y labels correctos
Pruebas manuales:
Navegación exclusivamente con teclado (Tab, Shift+Tab)
Lectura correcta en NVDA / VoiceOver
📜 Licencia
Este proyecto fue desarrollado como parte de la Actividad 2: Desarrollo de SPA accesible en el marco académico.
Uso libre con fines educativos y de demostración.

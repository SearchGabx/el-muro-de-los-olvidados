# El muro de los olvidados · sitio web

Sitio estático (HTML, CSS y JavaScript, sin instalar nada).

## Qué editar

Todo el contenido está en `js/contenido.js`:

- **Enlaces**: la URL va en `url` (Instagram, Documental, Dossier, Biblia Transmedia). Si queda vacío, el botón dice "Enlace pendiente".
- **Integrantes**: nombre, rol, foto (carpeta `img/`) y la frase que aparece al girar la foto.
- **Entrevistas**: título, subtítulo y resumen de cada una.

## Tipografía

Los títulos usan **Monotype Corsiva** (viene instalada en Windows y Office). En equipos que no la tienen se muestra Cormorant Garamond en cursiva, que se parece. Los textos usan Inter.

## Documentos

El Dossier y la Biblia Transmedia están en `docs/`. El Dossier se comprimió de 46 MB a 6 MB convirtiendo cada página en imagen, así que su texto no se puede seleccionar.

## Entrevistas

Cada entrevista se muestra como texto. El texto está en `contenido/entrevista-1.md` y `contenido/entrevista-2.md`; se puede editar con cualquier editor.

## Probar en el computador

Por seguridad los navegadores no cargan el texto de las entrevistas si se abre `index.html` con doble clic. Desde esta carpeta ejecuten `python3 -m http.server` y abran http://localhost:8000.

## Publicar en Vercel

1. Suban esta carpeta a un repositorio de GitHub.
2. En vercel.com → Add New → Project, importen el repositorio. No hace falta configurar nada (Framework: Other).
3. Cada cambio que suban a GitHub se publica solo.

Sin GitHub: en app.netlify.com/drop pueden arrastrar esta carpeta.

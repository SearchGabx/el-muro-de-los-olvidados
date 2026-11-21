/*
  CONTENIDO DEL SITIO
  Todo lo que se edita está aquí: textos, enlaces, integrantes y entrevistas.
  Un enlace vacío ("") muestra el botón como "Enlace pendiente".
*/
window.SITIO = {
  proyecto: "El muro de los olvidados",
  lema: "Memoria colectiva",
  lugar: "Barranquilla, Atlántico",
  objetivo:
    "Visibilizar, documentar y preservar las historias y memorias de las personas que habitan la calle en Barranquilla, para mirarlas más allá del estigma y reconocerlas como parte de nuestra historia compartida.",
  cita: {
    texto: "Mirarlos a los ojos les puede devolver, aunque sea por unos segundos, la dignidad perdida.",
    autor: "Piedad Bonnett"
  },

  dedicatoria: {
    parrafos: [
      "Este photobook es mucho más que una recopilación de fotografías: representa un proceso de aprendizaje, sensibilidad y crecimiento, en el que cada encuentro y enseñanza dejó una huella en nuestra formación como futuras comunicadoras.",
      "En primer lugar, agradecemos al Hogar de Paso para Habitantes de Calle de Barranquilla, por abrirnos sus puertas y permitirnos acercarnos a realidades que merecen ser escuchadas, comprendidas y retratadas con respeto y dignidad. Gracias por compartir con nosotras historias que nos recuerdan que cada persona tiene una voz y un mundo por contar.",
      "A nuestros docentes de las CIAS, Yair Murillo, Natalia Bayuelo, Ronny Pérez, Laura Posso, Iván Duva e Isabel Llerena, gracias por sus enseñanzas, paciencia y dedicación, por confiar en nuestras capacidades e impulsarnos a superar nuestros límites. Sus conocimientos y acompañamiento nos brindaron las bases para comunicar con propósito, sensibilidad y responsabilidad social.",
      "Al profesor Andrés Sabaagh, gracias por su motivación y por recordarnos que nuestras ideas merecen ser soñadas y llevadas a cabo. A José Gutiérrez, nuestro laboratorista, gracias por su paciencia, disposición y confianza en nuestro potencial, incluso entre equivocaciones, regaños y momentos de complicidad.",
      "Al programa de Comunicación Social y Medios Digitales y a la Universidad de la Costa, gracias por brindarnos los espacios y herramientas para explorar nuevas formas de contar historias, comprender nuestro entorno y descubrir la comunicación como instrumento de transformación social. Por ser el escenario donde crecemos como estudiantes y personas comprometidas con la realidad que nos rodea.",
      "A nuestras familias, amigos y parejas, gracias por su paciencia, confianza y apoyo incondicional; por celebrar nuestros logros, acompañarnos en los momentos difíciles y recordarnos que somos capaces de alcanzar aquello por lo que trabajamos.",
      "Finalmente, gracias a todas las personas que hicieron posible este proyecto y contribuyeron a darle vida. Que estas páginas nos recuerden que la fotografía no solo captura imágenes, sino que también despierta preguntas, genera empatía y nos acerca a historias que merecen ser contadas."
    ],
    cierre: "Porque detrás de cada fotografía hay una historia, detrás de cada historia hay una persona y detrás de cada persona hay un mundo que merece ser reconocido."
  },

  enlaces: [
    { id: "instagram", titulo: "Instagram", detalle: "@elmurodelosolvidados", url: "https://www.instagram.com/elmurodelosolvidados" },
    { id: "documental", titulo: "Documental", detalle: "Ver en Google Drive", url: "https://drive.google.com/drive/folders/1EUUbF0j8UNKTL6qYmZRK6pyZqMDNwEWH?usp=sharing" },
    { id: "dossier", titulo: "Dossier", detalle: "Investigación y propuesta · PDF", url: "docs/dossier-el-muro-de-los-olvidados.pdf" },
    { id: "biblia", titulo: "Biblia Transmedia", detalle: "Proceso creativo completo · PDF", url: "docs/biblia-transmedia-el-muro-de-los-olvidados.pdf" }
  ],

  integrantes: [
    { nombre: "Liz Gómez", rol: "Directora", foto: "img/liz-gomez.jpg",
      frase: "Somos un mosaico de todas las personas que han dejado una huella en nuestro corazón." },
    { nombre: "Thaliana Cabarcas", rol: "Productora", foto: "img/thaliana-cabarcas.jpg",
      frase: "Si miramos hacia atrás encontraremos que no hemos vivido nada de lo que la realidad del mundo nos quiere mostrar." },
    { nombre: "Nicolle Barraza", rol: "Editora", foto: "img/nicolle-barraza.jpg",
      frase: "Cuando ves a alguien que necesita ayuda, no te preguntas si puedes o no. Solo actúas." },
    { nombre: "Manuela Balanta", rol: "Directora de arte", foto: "img/manuela-balanta.jpg",
      frase: "Mi mente es una rueda de ideas que todos los días está en función, cada color es un nuevo mundo." },
    { nombre: "Marianella Montenegro", rol: "Diseñadora gráfica e interactiva", foto: "img/marianella-montenegro.jpg",
      frase: "Las estrellas y los humanos no son tan distantes como aparentan, con similitudes en brillos e historias." }
  ],
  fotoGrupo: {
    src: "img/grupo.jpg",
    pie: "El equipo con residentes del Hogar de Paso, Barranquilla, octubre de 2026."
  },

  /* ENTREVISTAS: el texto de cada una está en un archivo Markdown (contenido/entrevista-N.md). */
  entrevistas: [
    {
      slug: "entrevista-1",
      titulo: "«Si me caigo, me paro»",
      subtitulo: "Iván y Luis, dos historias que salen del muro y se levantan en Barranquilla",
      quienes: "Iván y Luis, residentes del Hogar de Paso",
      resumen: "Uno salió de siete años de calle y consumo; el otro, de un desplazamiento desde Medellín. Cuentan cómo se levantaron y qué los sostiene hoy.",
      cronica: "contenido/entrevista-1.md"
    },
    {
      slug: "entrevista-2",
      titulo: "El colchón que incomoda",
      subtitulo: "Volver a dormir en una cama después de la calle",
      quienes: "Julio Alberto Benavides Mora, funcionario del Hogar de Paso",
      resumen: "Cómo funcionan el centro de día, el centro de noche y el hogar de paso, por qué el proceso es voluntario y qué historias le han marcado.",
      cronica: "contenido/entrevista-2.md"
    }
  ],

  creditos: "Proyecto transmedia · Comunicación Social y Medios Digitales · 2026"
};


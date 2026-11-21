(function () {
  "use strict";
  var S = window.SITIO;
  var main = document.getElementById("contenido");

  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function reloj(s) {
    s = Math.max(0, Math.floor(s || 0));
    var m = Math.floor(s / 60), x = s % 60;
    return m + ":" + (x < 10 ? "0" : "") + x;
  }

  /* ---------- Libro (flipbook) ---------- */
  var HOJAS = [
    { id: "inicio", nombre: "Portada" },
    { id: "objetivo", nombre: "Objetivo" },
    { id: "entrevistas", nombre: "Entrevistas" },
    { id: "equipo", nombre: "Equipo" },
    { id: "hogar-de-paso", nombre: "Hogar de Paso" },
    { id: "dedicatoria", nombre: "Dedicatoria" }
  ];
  var libro = null; // { actual, ir(n) }

  function hojaPortada() {
    return '<div class="portada"><span class="sello">' + esc(S.lema) + " · " + esc(S.lugar) + "</span>" +
      '<h1 class="titular"><span class="t1">El muro</span><span class="t2">de los olvidados</span></h1>' +
      '<p class="portada-pie">Proyecto transmedia · 2026</p>' +
      '<button class="pasar" type="button" data-ir="1">Abrir el libro <span aria-hidden="true">→</span></button></div>';
  }
  function hojaObjetivo() {
    var enlaces = S.enlaces.map(function (e) {
      if (!e.url) return '<span class="enlace pendiente" aria-disabled="true"><b>' + esc(e.titulo) + "</b><small>Enlace pendiente</small></span>";
      return '<a class="enlace" href="' + esc(e.url) + '" target="_blank" rel="noopener"><b>' + esc(e.titulo) + "</b><small>" + esc(e.detalle) + " ↗</small></a>";
    }).join("");
    return '<div class="hoja-cab"><span class="etiqueta">Objetivo</span><h2>El muro de los olvidados</h2></div>' +
      '<p class="objetivo">' + esc(S.objetivo) + "</p>" +
      '<span class="etiqueta">Links importantes</span>' +
      '<nav class="enlaces" aria-label="Piezas del proyecto">' + enlaces + "</nav>";
  }
  function hojaEntrevistas() {
    var tarjetas = S.entrevistas.map(function (e, i) {
      return '<a class="tarjeta" href="#' + e.slug + '"><span class="num">Entrevista ' + (i + 1) + "</span><h3>" + esc(e.titulo) +
        '</h3><span class="quien">' + esc(e.quienes) + "</span><p>" + esc(e.resumen) + '</p><span class="ir">Leer la entrevista →</span></a>';
    }).join("");
    return '<div class="hoja-cab"><span class="etiqueta">Testimonios</span><h2>Las entrevistas</h2>' +
      "<p>Lee la crónica completa de cada entrevista.</p></div>" +
      '<div class="tarjetas">' + tarjetas + "</div>";
  }
  function hojaEquipo() {
    var cartas = S.integrantes.map(function (p) {
      return '<button type="button" class="carta" aria-label="' + esc(p.nombre) + ", " + esc(p.rol) + '. Ver su frase">' +
        '<span class="carta-in"><span class="cara frente"><img src="' + esc(p.foto) + '" alt="" loading="lazy" width="720" height="960">' +
        '<span class="nombre"><b>' + esc(p.nombre) + "</b><small>" + esc(p.rol) + "</small></span></span>" +
        '<span class="cara dorso"><span class="comillas" aria-hidden="true">“</span><span class="frase">' + esc(p.frase) + "</span>" +
        '<span class="firma"><b>' + esc(p.nombre) + "</b><small>" + esc(p.rol) + "</small></span></span></span></button>";
    }).join("");
    return '<div class="hoja-cab"><span class="etiqueta">Equipo</span><h2>Quiénes lo hicimos</h2><p class="pista">Pasa el cursor o toca cada foto para leer su frase.</p></div>' +
      '<div class="cartas">' + cartas + "</div>";
  }
  function hojaHogar() {
    var g = S.fotoGrupo;
    return '<div class="hoja-cab"><span class="etiqueta">Hogar de Paso</span></div>' +
      '<figure class="grupo"><img src="' + esc(g.src) + '" alt="' + esc(g.pie) + '" loading="lazy" width="1600" height="1200"><figcaption>' + esc(g.pie) + "</figcaption></figure>";
  }
  function hojaDedicatoria() {
    var d = S.dedicatoria;
    return '<div class="cita-in"><blockquote><p>“' + esc(S.cita.texto) + '”</p><cite>' + esc(S.cita.autor) + "</cite></blockquote>" +
      '<div class="dedicatoria"><h2>Dedicatoria</h2>' + d.parrafos.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
      '<p class="cierre">' + esc(d.cierre) + "</p></div></div>";
  }

  function montarLibro(inicial) {
    var cuerpos = [hojaPortada, hojaObjetivo, hojaEntrevistas, hojaEquipo, hojaHogar, hojaDedicatoria];
    var hojas = HOJAS.map(function (h, i) {
      return '<section class="hoja hoja-' + h.id + '" id="hoja-' + h.id + '" aria-label="' + esc(h.nombre) + '" data-n="' + i + '">' +
        '<div class="hoja-in">' + cuerpos[i]() + "</div>" +
        (i ? '<span class="folio">' + (i < 10 ? "0" : "") + i + " · " + esc(h.nombre) + "</span>" : "") + "</section>";
    }).join("");
    var indice = HOJAS.map(function (h, i) {
      return '<a href="#' + h.id + '" data-n="' + i + '">' + esc(h.nombre) + "</a>";
    }).join("");
    main.innerHTML =
      '<div class="escena"><div class="libro" id="libro">' + hojas + "</div>" +
      '<div class="mandos"><button class="flecha" id="atras" type="button" aria-label="Página anterior">←</button>' +
      '<nav class="indice" aria-label="Páginas del libro">' + indice + "</nav>" +
      '<span class="contador" id="contador"></span>' +
      '<button class="flecha" id="adelante" type="button" aria-label="Página siguiente">→</button></div></div>';

    var el = document.getElementById("libro"), secs = el.querySelectorAll(".hoja");
    var api = { actual: -1 };
    function pintar(n, animar) {
      el.classList.toggle("sin-animar", !animar);
      secs.forEach(function (s, i) {
        if (animar && (s.classList.contains("pasada") !== (i < n))) {
          s.classList.add("girando");
          setTimeout(function () { s.classList.remove("girando"); }, 1000);
        }
        s.classList.toggle("pasada", i < n);
        s.classList.toggle("abierta", i === n);
        s.style.zIndex = i < n ? i + 1 : HOJAS.length * 2 - i;
        s.setAttribute("aria-hidden", i === n ? "false" : "true");
        s.inert = i !== n;
      });
      main.querySelectorAll(".indice a").forEach(function (a, i) {
        if (i === n) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      });
      document.getElementById("contador").textContent = (n + 1) + " / " + HOJAS.length;
      document.getElementById("atras").disabled = n === 0;
      document.getElementById("adelante").disabled = n === HOJAS.length - 1;
      el.classList.toggle("cerrado", n === 0);
      api.actual = n;
    }
    api.ir = function (n, animar) {
      n = Math.max(0, Math.min(HOJAS.length - 1, n));
      pintar(n, animar !== false && api.actual !== -1);
      var id = HOJAS[n].id;
      if (location.hash.slice(1) !== id) history.replaceState(null, "", "#" + id);
    };
    document.getElementById("atras").addEventListener("click", function () { api.ir(api.actual - 1); });
    document.getElementById("adelante").addEventListener("click", function () { api.ir(api.actual + 1); });
    main.querySelector(".pasar").addEventListener("click", function () { api.ir(1); });
    main.querySelector(".indice").addEventListener("click", function (ev) {
      var a = ev.target.closest("a"); if (!a) return;
      ev.preventDefault(); api.ir(+a.dataset.n);
    });
    // Cartas del equipo: el giro con el mouse es CSS; tocar o Enter la deja girada
    el.addEventListener("click", function (ev) {
      var c = ev.target.closest(".carta"); if (c) c.classList.toggle("volteada");
    });
    // Deslizar para pasar página en pantallas táctiles
    var x0 = null, y0 = null;
    el.addEventListener("pointerdown", function (ev) { if (ev.pointerType !== "mouse") { x0 = ev.clientX; y0 = ev.clientY; } });
    el.addEventListener("pointerup", function (ev) {
      if (x0 === null) return;
      var dx = ev.clientX - x0, dy = ev.clientY - y0; x0 = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) api.ir(api.actual + (dx < 0 ? 1 : -1));
    });
    function teclas(ev) {
      if (ev.target.closest && ev.target.closest("input, textarea")) return;
      if (ev.key === "ArrowRight") api.ir(api.actual + 1);
      if (ev.key === "ArrowLeft") api.ir(api.actual - 1);
    }
    document.addEventListener("keydown", teclas);
    api.quitar = function () { document.removeEventListener("keydown", teclas); };
    api.ir(inicial, false);
    return api;
  }

  /* ---------- Crónica (Markdown sencillo) ---------- */
  function leerMD(md) {
    function enLinea(t) {
      return esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>");
    }
    return md.trim().split(/\n\n+/).map(function (p) {
      p = p.trim();
      if (/^# /.test(p)) return "<h1>" + enLinea(p.slice(2)) + "</h1>";
      if (/^\*\*¿/.test(p)) return '<p class="preg">' + enLinea(p.replace(/^\*\*|\*\*$/g, "")) + "</p>";
      if (/^(Por:|Barranquilla, Atlántico)/.test(p)) return '<p class="meta">' + enLinea(p) + "</p>";
      return "<p>" + enLinea(p) + "</p>";
    }).join("");
  }

  /* ---------- Página de entrevista ---------- */
  function entrevista(e) {
    var i = S.entrevistas.indexOf(e), otra = S.entrevistas[(i + 1) % S.entrevistas.length];
    main.innerHTML =
      '<section class="ent-cab"><div class="envoltura"><a class="volver" href="#entrevistas">← Volver al libro</a>' +
      '<span class="etiqueta">Entrevista ' + (i + 1) + "</span><h1>" + esc(e.titulo) + '</h1><p class="sub">' + esc(e.subtitulo) +
      '</p><p class="quien">' + esc(e.quienes) + "</p></div></section>" +
      '<div class="envoltura lectura">' +
        '<article class="cronica" id="cronica"><p class="meta">Cargando entrevista…</p></article>' +
        '<div class="otra"><a href="#' + otra.slug + '">Siguiente: ' + esc(otra.titulo) + " →</a></div>" +
      "</div>";
    var art = document.getElementById("cronica");
    fetch(e.cronica).then(function (r) { return r.text(); })
      .then(function (md) { art.innerHTML = leerMD(md.replace(/^# .*\n+/, "")); })
      .catch(function () { art.innerHTML = "<p>No se pudo cargar la entrevista.</p>"; });
  }

  /* ---------- Rutas ---------- */
  function ruta() {
    if (location.hash === "#contenido") return;
    var h = (location.hash || "").slice(1);
    var e = S.entrevistas.find(function (x) { return x.slug === h; });
    var n = HOJAS.findIndex(function (x) { return x.id === h; });
    document.querySelectorAll(".nav a").forEach(function (a) {
      if (a.dataset.ruta === h) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    if (e) {
      if (libro) { libro.quitar(); libro = null; }
      document.body.classList.remove("en-libro");
      entrevista(e); document.title = e.titulo + " · " + S.proyecto;
      window.scrollTo(0, 0);
      return;
    }
    if (n < 0) n = 0;
    document.title = S.proyecto;
    if (libro) { libro.ir(n); return; }
    document.body.classList.add("en-libro");
    libro = montarLibro(n);
    window.scrollTo(0, 0);
  }

  document.getElementById("pie").innerHTML = "<b>" + esc(S.proyecto) + "</b><span>" + esc(S.creditos) + "</span>";
  window.addEventListener("hashchange", ruta);
  ruta();
})();

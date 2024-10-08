const materiasData = [
  { name: "Expresion de Problemas y Algoritmos", id: 134 },
  { name: "Conceptos de Organizacion de Computadoras", id: 138 },
  { name: "Matematica 0", id: 144 },
  { name: "Conceptos de Algoritmos, Datos y Programas", id: 167 },
  { name: "Organizacion de Computadoras", id: 61 },
  { name: "Matematica 1", id: 62 },
  { name: "Taller de Programacion", id: 174 },
  { name: "Arquitectura", id: 63 },
  { name: "Matematica 2", id: 64 },
  { name: "Redictado - Conceptos de Algoritmos, Datos y Programas", id: 227 },
  { name: "Redictado - Matematica 2", id: 235 },
  { name: "Redictado - Taller de Programacion", id: 242 },
  { name: "Redictado - Organizacion de Computadoras", id: 126 },
  { name: "Redictado - Matematica 1", id: 121 },

  { name: "Fundamentos de Organizacion de Datos", id: 178 },
  { name: "Algoritmos y Estructuras de Datos", id: 65 },
  { name: "Seminario .NET", id: 74 },
  { name: "Seminario Android", id: 188 },
  { name: "Seminario Go", id: 312 },
  { name: "Seminario PHP", id: 73 },
  { name: "Seminario Python", id: 75 },
  { name: "Seminario Rust", id: 313 },
  { name: "Seminario JavaScript", id: 305 },
  { name: "Diseño de Bases de Datos", id: 179 },
  { name: "Ingenieria de Software 1", id: 67 },
  { name: "Orientacion a Objetos 1", id: 68 },
  { name: "Introduccion a los Sistemas Operativos", id: 69 },
  {
    name: "Taller de Lecto-Comprension y Traduccion en Ingles",
    id: 81,
  },
  { name: "Redictado - Diseño de Bases de Datos", id: 232 },
  { name: "Redictado - Ingenieria de Software 1", id: 247 },
  { name: "Redictado - Orientacion a Objetos 1", id: 157 },
  { name: "Redictado - Introduccion a los Sistemas Operativos", id: 233 },
  { name: "Redictado - Fundamentos de Organizacion de Datos", id: 243 },
  { name: "Redictado - Algoritmos y Estructuras de Datos", id: 160 },
  { name: "Redictado - Seminario .NET", id: 184 },
  {
    name: "Redictado - Seminario PHP",
    id: 181,
  },

  { name: "Matematica 3", id: 66 },
  { name: "Ingenieria de Software 2", id: 76 },
  {
    name: "Conceptos y Paradigmas de Lenguajes de Programacion",
    id: 82,
  },
  { name: "Orientacion a Objetos 1", id: 77 },
  { name: "Redes y Comunicaciones", id: 41 },
  { name: "Programacion Concurrente", id: 78 },
  { name: "Proyecto de Software", id: 79 },
  { name: "Computabilidad y Complejidad", id: 32 },
  { name: "Redictado - Programacion Concurrente", id: 292 },
  { name: "Redictado - Proyecto de Software", id: 293 },
  { name: "Redictado - Matematica 3", id: 127 },
  {
    name: "Redictado - Conceptos y Paradigmas de Lenguajes de Programacion",
    id: 317,
  },
  { name: "Redictado - Orientacion a Objetos 1", id: 237 },

  {
    name: "Teoria de la Computacion y Verificacion de Programas",
    id: 30,
  },
  { name: "Sistemas Operativos", id: 18 },
  { name: "Sistemas Paralelos", id: 38 },
  { name: "Logica e Inteligencia Artificial", id: 201 },
  { name: "Matematica 4", id: 122 },
  { name: "Laboratorio de Software", id: 27 },
  { name: "Programacion Distribuida y Tiempo Real", id: 206 },
  { name: "Redictado - Logica e Inteligencia Artificial", id: 200 },
  { name: "Redictado - Matematica 4", id: 236 },

  { name: "Diseño de Experiencia de Usuario", id: 195 },
  {
    name: "Aspectos Eticos, Sociales y Profesionales Avanzados",
    id: 315,
  },

  { name: "Programacion Concurrente ATIC", id: 238 },
  { name: "Web Semantica y Grafos de Conocimiento", id: 89 },
  { name: "Tecnologia, Ambiente y Sociedad", id: 169 },
  { name: "Taller de Programacion Orientada a Objetos 1", id: 96 },
  { name: "Aspectos Legales y Profesionales de Informatica", id: 50 },
  { name: "Redes y Servicios Avanzados", id: 199 },
  { name: "Procesamiento de Imagenes Digitales", id: 302 },
  { name: "Bases de Datos 1", id: 56 },
  { name: "Metodos Agiles para Aplicaciones Web", id: 289 },
  { name: "Programacion Funcional", id: 14 },
  { name: "Programacion Lógica", id: 85 },
  { name: "Seguridad y Privacidad en Redes", id: 47 },
  { name: "Taller de Programacion sobre GPU", id: 208 },
  { name: "Cloud Computing y Cloud Robotics", id: 249 },
  { name: "Conceptos y Aplicaciones de Big Data", id: 203 },
  {
    name: "Tecnologias Aplicadas para Business Intelligence",
    id: 131,
  },
  { name: "Teoría de Grafos", id: 93 },
  {
    name: "Deep Learning",
    id: 295,
  },
  { name: "Redictado - Programacion funcional", id: 239 },
  { name: "Redictado - Programacion Logica", id: 240 },
];

async function fetchAdvertises(id, amount = 10000) {
  const url =
    `https://gestiondocente.info.unlp.edu.ar/cartelera/data/0/${amount}?idMateria=` +
    id;
  const headers = {
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "es-419,es;q=0.9",
    Connection: "keep-alive",
    Cookie: "PHPSESSID=lqfucg1si4gjqvkdg3h79oan1c",
    Host: "gestiondocente.info.unlp.edu.ar",
    Referer: "https://gestiondocente.info.unlp.edu.ar/cartelera/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Sec-GPC": "1",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": '"Not)A;Brand";v="99", "Brave";v="127", "Chromium";v="127"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchAdvertises, materiasData };

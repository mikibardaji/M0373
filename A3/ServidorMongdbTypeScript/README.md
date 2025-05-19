# 📦 Projecte: Gestor de Productes amb Bun i MongoDB

Aquest projecte és una aplicació web senzilla que permet consultar i afegir productes a una base de dades MongoDB mitjançant un formulari HTML. Està construïda amb **Bun**, **TypeScript** i MongoDB (en local o a MongoDB Atlas). L’objectiu és oferir un exemple pràctic de com crear una API mínima amb Bun, treballar amb formularis i consultar dades en temps real.

---

## 🔧 Tecnologies utilitzades

- [Bun](https://bun.sh/) – Entorn d'execució ultraràpid per JavaScript/TypeScript.
- [MongoDB](https://www.mongodb.com/) – Base de dades NoSQL.
- HTML i CSS – Per a la interfície d’usuari.
- [TypeScript](https://www.typescriptlang.org/) – Per escriure el servidor i gestionar les rutes.

---

## 📁 Fitxers del projecte

### `server.ts`
Fitxer principal que inicialitza el servidor amb Bun. Gestiona les rutes següents:

- `/` → envia el fitxer `index.html`
- `/index.css` → serveix l’estil CSS
- `/api/elements` → consulta tots els productes des de MongoDB
- `/api/afegir` → afegeix un nou producte via `POST` (amb dades JSON)

📌 Connecta amb la base de dades `botiga` i la col·lecció `productes`.

---

### `index.html`
Interfície principal de l’usuari. Inclou:

- Un `<table>` que mostra tots els productes consultats des de MongoDB.
- Un `<form>` amb camps per afegir nous productes (`nom` i `categoria`).
- Un `<script>` que fa:
  - una crida `fetch()` a `/api/elements` per carregar la taula,
  - una crida `POST` a `/api/afegir` per afegir un nou producte.

---

### `index.css`
Fitxer d’estil separat que dona format a la pàgina web, amb:

- Estils per al cos, capçalera, taula i formulari.
- Colorejat del `<thead>`, ombrejat de files i disseny net.

---

## 🔄 Flux de funcionament

1. L’usuari accedeix a `/`, que carrega `index.html`.
2. En obrir la pàgina, es fa una petició `GET` a `/api/elements` i es mostren els productes.
3. L’usuari pot afegir un producte amb el formulari.
4. En fer clic a "Afegir", el navegador envia les dades via `POST` a `/api/afegir`.
5. El servidor guarda el nou producte a MongoDB.
6. Es recarrega automàticament la taula amb els nous resultats.

---

## ▶️ Execució

Assegura’t de tenir MongoDB en execució (local o Atlas) i després executa:

```bash
bun run server.ts
```

Accedeix a `http://localhost:3000` al navegador.

---

## ✨ Exemple de productes

```json
{
  "nom": "Portàtil",
  "categoria": "Informàtica"
}
```

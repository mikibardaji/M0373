import { MongoClient } from "mongodb";
import { serve } from "bun";

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("botiga");
const col = db.collection("productes");

serve({
  port: 3001,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api/elements" && req.method === "POST") {
      try {
        const dades = await req.json();
        const { nom, categoria } = dades;

        if (!nom || !categoria) {
          return new Response("Camp nom i categoria són obligatoris", { status: 400 });
        }

        const resultat = await col.insertOne({ nom, categoria });
        return new Response(JSON.stringify(resultat), { status: 201, headers: { "Content-Type": "application/json" } });
      } catch (error) {
        console.error("Error al inserir producte:", error);
        return new Response("Error intern del servidor", { status: 500 });
      }
    }

    if (url.pathname === "/api/elements" && req.method === "GET") {
      const resultats = await col.find().toArray();
      return Response.json(resultats);
    }

    /*Quant crides al servidor carrega la pagina que fiques aqui*/
    if (url.pathname === "/") {
      const html = await Bun.file("index.html").text();
      return new Response(html, {
        headers: { "Content-Type": "text/html" },
      });
    }

      // Serveix el fitxer CSS
      if (url.pathname === "/index.css") {
        const css = await Bun.file("index.css").text();
        return new Response(css, {
          headers: { "Content-Type": "text/css" },
        });
      }

    return new Response("No trobat", { status: 404 });
  },
});

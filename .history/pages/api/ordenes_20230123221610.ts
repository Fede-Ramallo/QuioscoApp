export default async function handler(req: , res) {
  if (req.method === "POST") {
    res.json({ metodo: "post" });
  } else {
    res.json({ hola: "mundo" });
  }
}

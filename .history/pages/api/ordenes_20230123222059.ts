export default async function handler(req, res) {
  if (req.method === "POST") {
    res.json({ metodo: "post" });

    console.log(req.body)
  }
}

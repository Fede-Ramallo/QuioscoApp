export default async function handler (req, res) {
    if (req.method === 'POST') {
        res.json()
    }
    res.json({hola: "mundo"});
}
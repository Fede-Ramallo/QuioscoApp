export default async function handler(req, res) {
    if(req.method === 'POST'){
        const {id} = req.query
        console.log('Actualizando');
    }
    res.status(200).json();
}
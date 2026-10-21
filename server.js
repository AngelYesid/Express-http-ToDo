import express from "express";   

const app = express();
app.use(express.json());

app.use((req, res, next) => {
console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
next();
});


const tareas = [
{
    "Titulo": "Leer-un-libro",
    "Descripcion": "Vas a leer un libro de tu elección",
    "Estado": "Pendiente",
    "Pasos": ["Abrir el libro", "Leer una pagina", "Cerrar el libro"]
},
{
    "Titulo": "Ver-una-película",
    "Descripcion": "Vas a ver una pelicula de tu eleccion",
    "Estado": "Hecho",
    "Pasos": ["Seleccionar la pelicula", "Iniciar la reproduccion", "Cerrar la pelicula"]
},
{
    "Titulo": "Escribir-un-diario",
    "Descripcion": "Vas a escribir en tu diario",
    "Estado": "Activo",
    "Pasos": ["Abrir el diario", "Escribir algo relacionado a tu dia a dia", "Cerrar el diario"]
}
];

app.get("/tareas", (req, res) => {
    res.json(tareas);
});


app.get("/tareas/:estado", (req, res) => {
    const estados = String()
    
});




app.get("/tareas/:titulo", (req, res) => {
    const titulo = String(req.params.titulo);

    const tarea = tareas.find((t) => t.titulo === titulo.toLowerCase());

    if (!tarea) {
        return res
        .status(404)
        .json({message:`No existe la tarea con el titulo ${titulo}`})
    }
});















































app.use((req, res) => {
    res
        .status(404)
        .json({message: `No existe la ruta ${req.method} ${req.url}`});
});

app.listen(3002, () => {
    console.log("Servidor escuchando en el puerto http://localhost:3002");
});
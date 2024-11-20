const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos para el formulario HTML y CSS
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "formulario.html"));
});

app.post("/registro", (req, res) => {
  const { nombre, edad, correo, curso } = req.body;
  console.log(req.body);

  if (!nombre || !edad || !correo || !curso) {
    return res.status(400).send("Todos los campos son requeridos");
  }

  res.send(`
        <h1>Registro Exitoso</h1>
        <p>Nombre: ${nombre}</p>
        <p>Edad: ${edad}</p>
        <p>Correo: ${correo}</p>
        <p>Curso: ${curso}</p>
    `);
});

app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
);

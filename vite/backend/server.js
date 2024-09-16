const express = require("express");
const axios = require("axios");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Ruta para verificar que el backend está funcionando
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Ruta de callback de autenticación de GitHub
app.get("/auth/callback", async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send("Missing code");
  }

  try {
    const response = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const { access_token } = response.data;

    // Configuración segura de la cookie
    res.cookie("github_token", access_token, {
      httpOnly: true, // No accesible desde JavaScript del lado del cliente
      secure: process.env.NODE_ENV === "production", // Solo se envía sobre HTTPS en producción
      sameSite: "Strict", // Mejora la seguridad al evitar solicitudes de sitios cruzados
      maxAge: 3600000, // Cookie válida por 1 hora
    });

    // Redirige a la página principal
    res.redirect("https://react-coursetk.vercel.app/FollowMe");
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    res.status(500).send("Error exchanging code for token");
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

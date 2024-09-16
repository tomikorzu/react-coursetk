import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const clientId = "Ov23liW47AA5lCtssvIj";
      const clientSecret = "2e8362c79780e4e103ed3ebcede44c04f69ead81";

      try {
        const response = await axios.post(
          "https://github.com/login/oauth/access_token",
          {
            client_id: clientId,
            client_secret: clientSecret,
            code: code,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        const { access_token } = response.data;
        // Guarda el token en algún lugar accesible, como en el estado global o en el localStorage
        localStorage.setItem("github_token", access_token);
        navigate("/followme"); // Redirige a la página deseada
      } catch (error) {
        console.error(error);
        navigate("/error"); // Redirige a una página de error
      }
    };

    fetchToken();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default AuthCallback;
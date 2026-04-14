import axios from "axios";

const API_KEY = "04e596e3bdf218647a4841e8bb043103";

async function obtenerClima() {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: "Cancun",
          appid: API_KEY,
          units: "metric", // Celsius
          lang: "es"
        }
      }
    );

    console.log("Clima:", response.data);
  } catch (error) {
    console.error("Error al consultar el clima:", error.message);
  }
}

obtenerClima();
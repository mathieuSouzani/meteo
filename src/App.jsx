import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Temperature from "./Components/Temperature/Temperature";

function App() {
  const [temperatureData, setTemperatureData] = useState();
  const [city, setCity] = useState("Paris");

  // on récupère les données sur api metéo
  useEffect(() => {
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&units=metric
      `
        )
        .then((res) => setTemperatureData(res.data.main));
    }
  }, [city]);

  console.log(temperatureData);

  return (
    <div className="global-container">
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <Temperature temperatureData={temperatureData} />
    </div>
  );
}

export default App;

import React from "react";

export default function Temperature({ temperatureData }) {
  return (
    <div>
      <div className="temp-container">
        {temperatureData ? (
          <p>{parseInt(temperatureData.temp)}°c</p>
        ) : (
          "Pas de résultats"
        )}
      </div>
    </div>
  );
}

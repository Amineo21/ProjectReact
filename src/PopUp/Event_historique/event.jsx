import React, { useState, useEffect } from 'react';
import "../../../public/assets/styles.css" ;


function EvenementsHistoriques() {
  const [evenements, setEvenements] = useState([]);

  // Appel à l'API 
  useEffect(() => {
    fetch('https://history.muffinlabs.com/date')
      .then((response) => response.json())
      .then((data) => {
        // Récupère seulement les événements
        const events = data.data.Events.slice(0, 1); // Limite à 5 événements
        setEvenements(events);
      });
  }, []);

  return (
    <div>
      <h1>Événements Historiques</h1>
      <ul>
        {evenements.map((event, index) => (
          <li key={index}>
            {event.year} - {event.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EvenementsHistoriques;

import { createRoot } from "react-dom/client";
import App from "./mocktail/App"
<<<<<<< HEAD
import AppRecette from "./Partie Recette/App"
import AppTime from "./DateHeure/DateHeure";
import AppBlague from "./Blague/App";
import AppCitation from "./Citation/App"
=======
import App from "./Partie Recette/App"
>>>>>>> 444781303e0514330349cd2223f742639722cc17

const racineProjet = createRoot(document.querySelector("#root"));


//ici
<<<<<<< HEAD
racineProjet.render(
<>
<AppTime></AppTime>
<App/>
<AppRecette></AppRecette>
<AppBlague></AppBlague>
<AppCitation></AppCitation>

</>
);
=======
racineProjet.render(<App/>);
>>>>>>> 444781303e0514330349cd2223f742639722cc17

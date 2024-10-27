import { createRoot } from "react-dom/client";
import App from "./mocktail/App"
import App from "./Partie Recette/App"

import AppRecette from "./Partie Recette/App"
import AppTime from "./DateHeure/DateHeure";
import AppBlague from "./Blague/App";
import AppCitation from "./Citation/App"


const racineProjet = createRoot(document.querySelector("#root"));





racineProjet.render(
<>
<AppTime></AppTime>
<App/>
<AppRecette></AppRecette>
<AppBlague></AppBlague>
<AppCitation></AppCitation>

</>
);


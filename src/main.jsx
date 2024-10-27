import { createRoot } from "react-dom/client";
import App from "./mocktail/App";
import AppTime from "./DateHeure/DateHeure";
import AppRecette from './Partie Recette/Recette'
import AppBlague from './Blague/App';
import AppCitation from './Citation/App'
import EventApp from "./Event_historique/EventApp"


const racineProjet = createRoot(document.querySelector("#root"));

racineProjet.render(
<>
<App/>
<AppBlague></AppBlague>
<AppCitation></AppCitation>
<AppRecette></AppRecette>
<AppTime></AppTime>
<EventApp></EventApp>
</>
)



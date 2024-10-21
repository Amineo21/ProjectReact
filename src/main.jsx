import { createRoot } from "react-dom/client";
import App from "./mocktail/App"

const racineProjet = createRoot(document.querySelector("#root"));

racineProjet.render(<App/>)
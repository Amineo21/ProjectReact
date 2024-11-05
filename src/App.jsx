// import Recette from "./PopUp/Partie Recette/Recette";
// import MocktailOfTheDay from "./PopUp/mocktail/Mocktail";
// import EvenementsHistoriques from "./PopUp/Event_historique/event";
// import Time from "./PopUp/DateHeure/DateHeure";
// import Citation from "./PopUp/Citation/Citation";
// import Blague from "./PopUp/Blague/Blague";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./Acceuil";
import MarkdownZone from "./Markdown/MarkdownZone";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/MarkdownZone" element={<MarkdownZone />} />
        </Routes>
      </Router>

      {/* <div className="Top">
        <Time></Time>
      </div>

      <div className="main">

      <div className="left">
        <Blague></Blague>
        <Citation></Citation>
      </div>

      <div className="center">
         <File></File> 
        <h1>Hey</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti, repellendus voluptatum temporibus qui quae unde illo a atque inventore, dolorem expedita ullam blanditiis ea voluptates soluta optio alias omnis?</p>
      </div>

      <div className="right">
        <MocktailOfTheDay></MocktailOfTheDay>
        <EvenementsHistoriques></EvenementsHistoriques>
        <Recette></Recette>
      </div>
      </div>
       */}
    </>
  );
}

export default App;

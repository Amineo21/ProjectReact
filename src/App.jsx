import Recette from "./Partie Recette/Recette";
import MocktailOfTheDay from "./mocktail/Mocktail";
import EvenementsHistoriques from "./Event_historique/event";
import Time from "./DateHeure/DateHeure";
import Citation from "./Citation/Citation";
import Blague from "./Blague/Blague";

function App() {
  return (
    <>
   
      
      <div className="Top">
        <Time></Time>
      </div>

      <div className="main">

      <div className="left">
        <Blague></Blague>
        <Citation></Citation>
      </div>

      <div className="center">
        <h1>Hey</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur corrupti, repellendus voluptatum temporibus qui quae unde illo a atque inventore, dolorem expedita ullam blanditiis ea voluptates soluta optio alias omnis?</p>
      </div>

      <div className="right">
        <MocktailOfTheDay></MocktailOfTheDay>
        <EvenementsHistoriques></EvenementsHistoriques>
        <Recette></Recette>
      </div>
      </div>
      
    
    </>
  );
}

export default App;

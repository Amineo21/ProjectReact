import Recette from "./Partie Recette/Recette";
import MocktailOfTheDay from "./mocktail/Mocktail";
import EvenementsHistoriques from "./Event_historique/event";
import Time from "./DateHeure/DateHeure";
import Citation from "./Citation/Citation";
import Blague from "./Blague/Blague";




function App() {
  return (
    <>
      <div className="top">
        <Time></Time>
      </div>

      <div className="main">



      <div className="left">
        <Blague></Blague>
        <Citation></Citation>
        <EvenementsHistoriques></EvenementsHistoriques>
      </div>

      <div className="center">

      </div>
      <div className="right">
        <MocktailOfTheDay></MocktailOfTheDay>
        <Recette></Recette>
      </div>
      </div>

    </>
  );
}

export default App;

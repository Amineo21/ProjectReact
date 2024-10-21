import {useEffect, useState } from "react";

function MocktailOfTheDay() {
    const[mocktail, setMocktail] = useState({
        drinks: null,
    });

    function fetchDrink() {
        fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then((res) => (res.json()))
            .then((data) => setMocktail({drinks: data.drinks}))
            .catch((err) => console.error(err));  
    }

    console.log(fetchDrink());
    

  useEffect(()=>{
    function getRandomInt(max) {
        const randomMocktail =  Math.floor(Math.random() * 10);
        return randomMocktail
      }
      
      console.log(getRandomInt(2));
     

      return ( fetchDrink()) 
  });

    return(
        <div>
            <p>le mocktail du jour est : {mocktail.drinks ? mocktail.drinks[0].strDrink : "Chargement..."} </p>
        </div>
    )
}

export default MocktailOfTheDay
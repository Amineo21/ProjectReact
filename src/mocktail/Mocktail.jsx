import { useEffect, useState } from "react";

function MocktailOfTheDay() {
    const [mocktails, setMocktails] = useState([]);
    const [randomMocktail, setRandomMocktail] = useState(null);

    function fetchDrinks() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then((res) => res.json())
            .then((data) => {
                setMocktails(data.drinks);  // Stocker toutes les boissons
                pickRandomMocktail(data.drinks);  // Sélectionner une boisson aléatoirement
            })
            .catch((err) => console.error('Erreur : ', err));  
    }

    // Fonction pour sélectionner un mocktail aléatoirement
    function pickRandomMocktail(drinks) {
        const randomIndex = Math.floor(Math.random() * drinks.length);
        setRandomMocktail(drinks[randomIndex]);
    }

    useEffect(() => {
        fetchDrinks();  // Appel API
    }, []);

    return (
        <div>
            {randomMocktail ? (
                <div>
                    <p>Le mocktail du jour est : {randomMocktail.strDrink}</p>
                    <img src={randomMocktail.strDrinkThumb} alt="" style={{ maxWidth: "200px" }}/>

                </div>

            ) : (
                'Chargement...'
            )}
        </div>
    );
}

export default MocktailOfTheDay;

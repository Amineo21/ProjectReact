import { useState, useEffect } from 'react'

function Blague (){
    const [blague, setBlague] = useState([])

    function fetchCitation(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then((res) => (res.json()))
        .then((data) => setBlague(data))
        .catch((err) => console.error(err))
    }

useEffect(() =>{
    fetchCitation()
}, []);

return(
    <div>
        <p> Blague du jour</p>
        <li> Type  : {blague.type} </li>
        <li>  Setup : {blague.setup} </li>
        <li> Punchline : {blague.punchline} </li>

    </div>
)

}
export default Blague
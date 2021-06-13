import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Planet from './Planet'
import './Planet.css';



function ControlPlanet() {
    const [planets,setPlanets]= useState([]);

    // for (let i = 1; i <= 6; i++) {
    //     fetch('https://swapi.dev/api/planets/?page=' + i).then(function (response) {
    //       response.json().then(function (data) {
    //         for(let i = 0; i < data.results.length; i++a) {
    //           list.push(data.results[i]);
    //         }
    //       });
    //     });
    //   }
    //   return takePlanets;

    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/?page=1')
        .then(res => {
            setPlanets(res.data.results); //получаем данные о планетах
            
        }).catch(error => alert('Api error'))
    }, []);

    let newPlanet = planets;


    console.log(newPlanet)


  return (
  <div>

{newPlanet.map(planet=> {
         
    return (
        
        <Planet key={planet.id} name={planet.name}url={planet.url} 
      
        climate={planet.climate}
        terrain={planet.terrain}
        surfaceWater={planet.surface_water}
        gravity={planet.gravity}
        population={planet.population}
        residents={planet.residents}
        films={planet.films}
        ></Planet>
       
    )
 
})
}  
 
        </div>
  
    )
}


export default ControlPlanet;




import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Planet from './Planet'
import './Planet.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function ControlPlanet() {

    const [planet1,setPlanet1]= useState([]);
    const [planet2,setPlanet2]= useState([]);
    const [planet3,setPlanet3]= useState([]);
    const [planet4,setPlanet4]= useState([]);
    const [planet5,setPlanet5]= useState([]);
    const [planet6,setPlanet6]= useState([]);

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

    const fetchData = () => {

    const planetPage1 ='https://swapi.dev/api/planets/?page=1';
    const planetPage2 ='https://swapi.dev/api/planets/?page=2';
    const planetPage3 ='https://swapi.dev/api/planets/?page=3';
    const planetPage4 ='https://swapi.dev/api/planets/?page=4';
    const planetPage5 ='https://swapi.dev/api/planets/?page=5';
    const planetPage6 ='https://swapi.dev/api/planets/?page=6';

    const getPlanetPage1 = axios.get(planetPage1);
    const getPlanetPage2 = axios.get(planetPage2);
    const getPlanetPage3 = axios.get(planetPage3);
    const getPlanetPage4 = axios.get(planetPage4);
    const getPlanetPage5 = axios.get(planetPage5);
    const getPlanetPage6 = axios.get(planetPage6);

    Promise.all([getPlanetPage1,getPlanetPage2,getPlanetPage3,getPlanetPage4,getPlanetPage5,getPlanetPage6]).then((res) => {
 

        setPlanet1(res[0].data.results);
        setPlanet2(res[1].data.results);
        setPlanet3(res[2].data.results);
        setPlanet4(res[3].data.results);
        setPlanet5(res[4].data.results);
        setPlanet6(res[5].data.results);
    }                );

}

    useEffect(()=>{
        fetchData()
       //получаем данные о планетах
  
    },[]);


    let newPlanet =   planet1.flat();
    let newPlanet2 =  planet2.flat();
    let newPlanet3 =  planet3.flat();
    let newPlanet4 =  planet4.flat();
    let newPlanet5 =  planet5.flat();
    let newPlanet6 =  planet6.flat();

    console.log(newPlanet)
  

  return (
    <div className='container block-all_planets'>
        <div className='row'>
            <div className="col-sm">
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
        <div className="col">
       
{newPlanet2.map(planet=> {
                
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
                <div className="col-sm">
                
{newPlanet3.map(planet=> {    
                
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

                </div>
                <div className='row'>
                <div className="col-sm">
                
{newPlanet4.map(planet=> {    
                
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
                <div className="col-sm">
                
{newPlanet5.map(planet=> {    
                
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
                <div className="col-sm">
                
{newPlanet6.map(planet=> {    
                
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

            </div>
         </div>
  
    )
}


export default ControlPlanet;




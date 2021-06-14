import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IMAGE_MAP} from './ImagePlanet';

const Planet = ({name,url,climate,gravity,terrain,surface_water,population}) => {

const img = <div className="img-block"><img src={IMAGE_MAP[name]}/></div>

    return (
        
        <div className="col-sm planet-container">
            <div className="row planet-row">
                <div className="planet">
                    <h1>{name}</h1>
                    <a className="planet-url"href={url} target='_blank'>{url}</a>

                        {img}
</div>
                <br />
                <div className="planet-data">
                    <table>
                    <tr>
                    <td>Климат:  </td> 
                    <td>{climate}</td>
                    </tr>
                    <tr>
                    <td>Местность: </td>
                    <td>{terrain}</td>
                    </tr>
                    <tr>
                    <td>Вода:  </td>
                    <td>{surface_water}</td>
                    </tr>
                    <tr>
                    <td>Гравитация:  </td>
                    <td> {gravity}</td>
                    </tr>
                    <tr>
                    <td>Население:  </td>  <td> {population}</td>
                    </tr>
                    </table>
                    <br />
                </div>
             
            </div>
            <br />
        </div>
    )
}

export default Planet

//git

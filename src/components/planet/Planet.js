import React from 'react'
import ImagePlanet from './ImagePlanet'


const Planet = ({name,url,climate,gravity,terrain,surface_water,population}) => {

const img = <ImagePlanet/>

    return (
        
        <div className="planet-container">
            <div className="planet-row">
                <div className="planet">
                    <h1>{name}</h1>
                    <br />
                    <p className="planet-url">{url}</p>
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

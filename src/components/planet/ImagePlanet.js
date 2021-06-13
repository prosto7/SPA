import React from 'react'

const ImagePlanet = ({img_json})=> {

    img_json = {
        Tatooine: {
          portfolioImage: require('./img/Tatooine.png')
        },
        Alderaan: {
          portfolioImage: require('./img/Alderaan.jpg')
        },
        Yavin: { portfolioImage: require('./img/Yavin IV.jpg') }
    };
    
        return (
            
            <div  className="img-block">
                
            {Object.keys(img_json).map(key => (
       
                     <img src={img_json[key].portfolioImage} />
            ))}
              </div>
            );
    
}  
        export default ImagePlanet

        //Test

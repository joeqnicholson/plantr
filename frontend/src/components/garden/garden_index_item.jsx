import React from 'react';
import '../garden.css';

const GardenIndexItem = props => {

    return(
        // <div className='plant-index-item' onClick={props.openShowModal}>
        //     <div className='info-and-picture'>
        //         <div className='plant-picture'>
        //             <img className="plant-img" src={props.ownedPlant.plant.imgUrl}/>
        //         </div>
        //         <div className='plant-info'>
        //             {
        //                 props.ownedPlant.nickname ? <div className='nick-name'>{props.ownedPlant.nickname}</div> :
        //                 <div className='nick-name'>{props.ownedPlant.plant.latinName}</div>
        //             }
        //         </div>
        //     </div>
        // </div>
    
        <article className='plant-item-hover' onClick={props.openShowModal}>
            <div className='plant-index-item-contents'>
                <div className='img-wrapper'>
                <img className='plant-thumb' alt="plant-thumb" src={props.ownedPlant.plant.imgUrl} height="200"/>
                </div>
                    <div className='plant-info'>
                      <div className='plant-name'>
                        {props.ownedPlant.nickname !== " " ? (
                          props.ownedPlant.nickname
                        ) : (
                          props.ownedPlant.plant.name
                        )}
                      </div>
                      <div className='plant-latin-name'>{props.ownedPlant.plant.latinName}</div>
                    </div>
            </div>
        </article>
    )
}
export default GardenIndexItem 
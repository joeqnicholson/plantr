import React from 'react';
import '../garden.css';

const GardenIndexItem= props => {
    return(
        <div className='plant-index-item' onClick={props.openShowModal}>
            <div className='info-and-picture'>
                <div className='plant-picture'>
                    <img className="plant-img" src={props.ownedPlant.plant.imgUrl}/>
                </div>
                <div className='plant-info'>
                    {
                        props.ownedPlant.nickname ? <div className='nick-name'>{props.ownedPlant.nickname}</div> :
                        <div className='nick-name'>{props.ownedPlant.plant.latinName}</div>
                    }
                </div>
            </div>
        </div>
    )
}
export default GardenIndexItem 
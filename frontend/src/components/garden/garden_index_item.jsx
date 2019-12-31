import React from 'react'

const GardenIndexItem=props=>{
    return(
        <div className='plant-index-item'>
            <div className='info-and-picture'>
                <div className='plant-picture'>
                    <img src={props.ownedPlants.plant.imgUrl}/>
                </div>
                <div className='plant-info'>
                    {
                        props.ownedPlants.nickname ? <div className='nick-name'>{props.ownedPlant.nickname}</div> :
                        <div className='nick-name'>{props.ownedPlants.name}</div>
                    }
                    <div className='latin-name'>{props.ownedPlant.plant.latin-name}</div>
                </div>
            </div>
        </div>
    )
}
export default GardenIndexItem 
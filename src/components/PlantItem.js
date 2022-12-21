import CareScale from './CareScale'
import '../styles/PlantItem.css'
import { Link } from 'react-router-dom'
import  plantList  from '../datas/plantList';
//import { Routes, Route, useParams } from 'react-router-dom';



function handleClick(e) {

    e.preventDefault();

    const id = e.target//.id;
    console.log('✨ Ceci est un clic ✨', e)
    console.log("voici id du click",id)
 };

function PlantItem({ id, title, cover, name, water, light, description }) {

  
	return (
		<li className='lmj-plant-item' onClick={handleClick}> 
                   <Link key={PlantItem.id} to={`/FicheLogement/${id}`}>
                   
    <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} id={id} />
    {title}

   
    
    <div>
      

        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
    </div>
    </Link>
</li>
	)
}

export default PlantItem
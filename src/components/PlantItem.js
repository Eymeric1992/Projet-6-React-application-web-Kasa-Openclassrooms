
import '../styles/PlantItem.css'
import { Link } from 'react-router-dom'

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
                   <Link key={PlantItem.id} to={`/FicheLogement/${id}`} className="logementlien"> 
                   
    <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} id={id} />
    <div className='logement-title'> {title}</div></Link>
   
</li>
	)
}

export default PlantItem
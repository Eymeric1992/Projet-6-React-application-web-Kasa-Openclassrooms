import CareScale from './CareScale'
import '../styles/PlantItem.css'
import { Link } from 'react-router-dom'
import { plantList } from '../datas/plantList';

function bloqueSaisie(evt) {
    evt.preventDefault();
    console.log("Une saisie a été empêchée.");
  };

function PlantItem({ id, title, cover, name, water, light }) {
  
	return (
		<li className='lmj-plant-item' onClick={bloqueSaisie}> 
                   <Link key={`${id}`} to='/FicheLogement/:id'>
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
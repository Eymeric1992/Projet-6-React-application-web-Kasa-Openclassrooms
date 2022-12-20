import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {


	return (
		<div className='images-locations'>
	 
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList

/*const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]
function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant}</li>
            ))}

        </ul>
    )
}

export default ShoppingList */

/* AFIN DE NE PAS AFFICHER D"ERREUR DANS LA CONSOLE ON DOIT REMPLACER LE CODE SUIVANT POUR LUI GENERER
UNE KEY UNIQUE. DANS NOTRE CAS ON on peut faire une combinaison entre l'index et le nom de la plante qui est une string

       {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
            */
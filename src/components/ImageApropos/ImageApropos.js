import IMG from '../../assets/montagneaprop.png'
import IMG2 from '../../assets/imageaprop2.png'
import './ImageApropos.css'

function ImageApropos(){
    return (<div className='fleximage bright'>
 <img src={IMG} alt='décord de bord de mer en hiver avec des falaises' className='Imgapropos' />
 <img src={IMG2} alt='zoom sur la prairie du décor de bord de mer en hiver avec des falaises' className='Imgapropos2' />

  </div>)
}




export default ImageApropos
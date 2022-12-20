import '../styles/Banner.css'
import logo from '../assets/logo.png'
import Navbar from '../components/Navbar/Navbar'


function Banner() {

  return (<div className='lmj-banner'>
    <img src={logo} alt='La maison de la jungle' className='lmj-logo' />
    <div>     </div>  <Navbar />
  </div>)
}

export default Banner
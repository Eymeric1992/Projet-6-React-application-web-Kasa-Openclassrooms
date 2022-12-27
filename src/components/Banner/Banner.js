import './Banner.css'
import logo from '../../assets/logo.png'
import Navbar from '../Navbar/Navbar'


function Banner() {

  return (<div className='banner'>
    <img src={logo} alt='Logo de agence kasa' className='logo' />
    <div>     </div>  <Navbar />
  </div>)
}

export default Banner
import '../components/headerr.css'
import Lolgo from '../assets/lolgo.jpg'

function HeaderPerso() {
    return (
        <div className="HeaderPerso">
            <header className='HeaderPersoANous'>
            <h1>Bienvenue chez Flowers et Co</h1>
            <img src={Lolgo} className="Header-Logo" alt="logo joli" />
            </header>
        </div>
    )
}

export default HeaderPerso
import Cactus from '../assets/cactus.jpg';

export const Objets = [
        {
            name: 'Cactus',
            CactusPrice: 3,
            description : 'hehe'
        },
        {
            name: 'Pink',
            PinkPrice: 300,
            description : 'hoho'
        },
        {
            name: 'Rose',
            RosePrice: 5,
            description : 'huhu'
        }
 
    ]


/*function Affichage() {

    return (
        
            /*{ Liste.map((plant) => (
            case cactus : 
            cactus.jpg
            break;
            case pink : 
            pink.jpg
            break;
            case rose: 
            rose.jpg
            break;
                )
                )
            }
           )*/
        


function App() {
    return <img src={Cactus} />
}

/*export default Affichage*/
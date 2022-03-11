import Cart from './components/Cart.js';

function Liste() {
    const Objets = [
        { 'Cactus': CactusPrice },
        { 'Pink': PinkPrice },
        { 'Rose': RosePrice }
 
    ]
}

function Affichage() {

    return (
        <ul>
            {
                Liste.map((Cart) => (
                    <li>{Cart}</li>
                ))
            }
        </ul>     )
}

export default Affichage
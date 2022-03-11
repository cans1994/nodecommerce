import { liste } from './plantliste';

function Cart() {
    const cactusPrice = 3
    const pinkPrice = 300
    const rosePrice = 5

return (
    <div className="ApercuPanier">
        <h2>Votre Panier</h2>
        <ul>
            <li>Cactus : {cactusPrice} €</li>
            <li>Cerisier : {pinkPrice} €</li>
            <li>Rose: {rosePrice} €</li>
        </ul>
        Total : {cactusPrice + pinkPrice + rosePrice} €
    </div>
)
}

export default Cart
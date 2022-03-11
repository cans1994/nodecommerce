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
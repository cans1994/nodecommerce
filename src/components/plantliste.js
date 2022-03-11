import Cactus from '../assets/cactus.jpg';
import Pink from '../assets/pink.jpg';
import Rose from '../assets/rose.jpg';

export const Objets = [
        {
            name: 'Cactus',
            Price: 3,
            description: 'hehe',
            image: Cactus
        },
        {
            name: 'Pink',
            Price: 300,
            description: 'hoho',
            image: Pink
        },
        {
            name: 'Rose',
            Price: 5,
            description: 'huhu',
            image: Rose
        }
    ]

// class ImgWrapper extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {hovered: false};
//     }

//     render() {
//     return (
//       <Image
//         src={this.props.assets.Cactus}
//         alt={this.props.assets.name}
//         onMouseOver={() => this.setState({hovered: false})}
//         style={{transform: ${this.state.hovered ? 'scale(1.5,1.5)' : null}}}
//       />
//     );
//   }
// }

/* class MyOtherComponent extends Component {

  render() {
    return (
      <ImageWrapper assets={Cactus}/>
    );
  }
}  */

export default function objetsofthings() {
    return (
        <ul>
            {Objets.map(({ name, description, Price, image }) => (
                <ul>
                        <li>{name}</li>
                        <img src={image}/>
                        <li>{Price} €</li>
                        <li>{description}</li>
                </ul>
            ))}
        </ul>
    )
}
    
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
        


/* function App() {
    return <img src={Cactus} />
}
 mauvaise*/
/*export default Affichage*/
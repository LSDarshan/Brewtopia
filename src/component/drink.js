
import DrinksBg from "./images/drinks-bg.webp"; // background image

// Example placeholder for drinks
import CoffeeImg from './images/coffee.webp';
import LatteImg from './images/latte.jpg';
import CappuccinoImg from './images/Capuccino.jpg';
import MochaImg from './images/mocha.jpg';
import EspressoImg from './images/espresso.webp';
import ColdBrewImg from './images/coldbrew.jpg';
import ChaiImg from './images/chai.jpg';
import HotChocolateImg from './images/hotchocolate.jpg';
import MatchaLatte from './images/matcha_latte.jpeg';
import Turkishcoffee from './images/Turkishcoffee.jpg';
import Icedcaramel from './images/IcedCaramel.jpg';
import Hazelnutlatte from './images/Hazelnutlatte.jpg';
import RoseLatte from './images/RoseLatte.jpg';
import Bobatea from './images/Bobatea.webp';
const drinksData = [
  { id: 1, title: "Espresso", description: "Strong black coffee made by forcing steam through coffee grounds.", image: EspressoImg },
  { id: 2, title: "Americano", description: "Espresso diluted with hot water.", image: CoffeeImg },
  { id: 3, title: "Cappuccino", description: "Equal parts espresso, steamed milk, and milk foam.", image: CappuccinoImg },
  { id: 4, title: "Latte", description: "Espresso with steamed milk and a small amount of foam.", image: LatteImg },
  { id: 5, title: "Mocha", description: "Espresso with steamed milk and chocolate syrup, topped with whipped cream.", image: MochaImg },
  { id: 6, title: "Flat White", description: "Similar to latte but with a higher coffee-to-milk ratio.", image: LatteImg },
  { id: 7, title: "Chai Latte", description: "Spiced tea concentrate with steamed milk.", image: ChaiImg },
  { id: 8, title: "Hot Chocolate", description: "Creamy chocolate beverage made with milk.", image: HotChocolateImg },
  { id: 9, title: "Iced Coffee", description: "Regular coffee served chilled over ice.", image: CoffeeImg },
  { id: 10, title: "Cold Brew", description: "Coffee brewed slowly with cold water over hours.", image: ColdBrewImg },
  { id: 11, title: "Iced Latte", description: "Espresso mixed with cold milk and ice.", image: LatteImg },
  { id: 12, title: "Iced Mocha", description: "Iced coffee with chocolate syrup and milk, topped with whipped cream.", image: MochaImg },
  { id: 13, title: "Matcha Latte", description: "Green tea powder mixed with steamed or cold milk.", image: MatchaLatte },
  { id: 14, title: "Caramel Macchiato", description: "Espresso with steamed milk and caramel drizzle.", image: LatteImg },
  { id: 15, title: "Affogato", description: "Vanilla ice cream topped with a shot of hot espresso.", image: EspressoImg },
  { id: 20, title: "Turkish Coffee", description: "Strong unfiltered coffee brewed with sugar in a cezve pot.", image: Turkishcoffee},
  { id: 21, title: "Iced Caramel Latte", description: "Iced latte with rich caramel syrup and milk.", image: Icedcaramel},
  { id: 22, title: "Hazelnut Latte", description: "Smooth espresso with hazelnut-flavored milk.", image: Hazelnutlatte},
  { id: 23, title: "Rose Latte", description: "Floral latte made with rose syrup and steamed milk.", image: RoseLatte},
  { id: 36, title: "Boba Tea", description: "Traditional black tea with chewy tapioca pearls and creamy milk.", image: Bobatea},
  // Add more drinks as needed...
];

const Drinks = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${DrinksBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 20px",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 0,
        }}
      ></div>

      {/* Cards container */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {drinksData.map((drink) => (
          <div
            key={drink.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              width: "250px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={drink.image}
              alt={drink.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h3>{drink.title}</h3>
            <p>{drink.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;

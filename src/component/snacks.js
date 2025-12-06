import SnacksBg from "./images/drinks-bg.webp";

import FriesImg from "./images/fries.webp";
import GarlicBreadImg from "./images/garlicbread.webp";
import SandwichImg from "./images/Sandwich.jpg";
import NachosImg from "./images/nachos.jpg";
import BurgerImg from "./images/burger.webp";
import PaneerTikkaImg from "./images/paneer.webp";
import SpringRollImg from "./images/spring.webp";
import WaffleImg from "./images/waffle.webp";
const snacksData = [
  { id: 1, title: "French Fries", description: "Crispy golden fries served hot.", image: FriesImg },
  { id: 2, title: "Garlic Bread", description: "Toasted bread topped with garlic butter.", image: GarlicBreadImg },
  { id: 3, title: "Sandwich", description: "Fresh vegetables and cheese between toasted bread.", image: SandwichImg },
  { id: 4, title: "Nachos", description: "Crispy nacho chips topped with cheese and seasoning.", image: NachosImg },
  { id: 5, title: "Veg Burger", description: "Soft bun filled with a crunchy veggie patty and sauces.", image: BurgerImg },
  { id: 6, title: "Paneer Tikka", description: "Marinated paneer grilled and served hot.", image: PaneerTikkaImg },
  { id: 7, title: "Spring Rolls", description: "Crispy fried rolls filled with vegetables.", image: SpringRollImg },
  { id: 8, title: "Chocolate Waffle", description: "Warm waffle drizzled with chocolate sauce.", image: WaffleImg },
];

const Snacks = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundImage: `url(${SnacksBg})`,
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

      {/* Cards */}
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
        {snacksData.map((snack) => (
          <div
            key={snack.id}
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
              src={snack.image}
              alt={snack.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h3>{snack.title}</h3>
            <p>{snack.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snacks;

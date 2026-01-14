import "./App.css";
import { Card } from "./components/card/card";
import { useFoodData } from "./hooks/useFoodData";

function App() {
  const { data } = useFoodData(); // data é FoodData[] | undefined

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((food) => (
          <Card
            key={food.id}
            price={food.price}
            title={food.title}
            image={food.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

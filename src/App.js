import './App.css';
import data from "./components/data";
import Card from "./components/card";

export default function App() {
  const cardElements = data.map(card => {
    return <Card 
    key={card.id}
    item={card.item}
    />
  })
  return (
    <div className="App">
      <p className="heading">my travel journal</p>
      {cardElements}
    </div>
  );
}

import Costs from "./components/Costs";

import "./App.css"


function App() {
    const costs = [
        {
            date: new Date(2023, 3, 11),
            description: "Холодильник",
            amount: 999,
        },
        {
            date: new Date(2023, 2, 9),
            description: "Телевизор",
            amount: 350,
        },
        {
            date: new Date(2023, 9, 11),
            description: "Штаны",
            amount: 49,
        },
    ];

  return (
      <div>
        <h1 className="container">Cost App</h1>
        <Costs costs = {costs}/>
      </div>
  );
}

export default App;

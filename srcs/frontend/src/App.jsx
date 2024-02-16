import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [form, setForm] = useState(false);

  const test = [
    {
      affair: "Nom de l'affaire",
      lieux: [
        {
          commune: "Commune",
          dept: "Département",
        },
      ],
      details: "Détails",
    },
  ];

  return (
    <div>
      {test.map((el) => {
        return <Card key={el.affair} data={el} form={form} setForm={setForm} />;
      })}
      <button onClick={() => setForm(true)}>Nouvelle affaire</button>
    </div>
  );
}
export default App;

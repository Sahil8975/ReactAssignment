import React from "react";
// import ExpenseItem from "./component/ExpenseItem";
import Expenses from "./component/Expenses/Expenses";

function App() {
  const expense = [
    {
      id: "item1",
      title: "toilet Paper",
      amount: 90,
      date: new Date(2020, 7, 14),
    },
    {
      id: "item2",
      title: "TV",
      amount: 190.55,
      date: new Date(2021, 7, 24),
    },
    {
      id: "item3",
      title: "insurance",
      amount: 290,
      date: new Date(2022, 5, 18),
    },
    {
      id: "item4",
      title: "Desk",
      amount: 390.55,
      date: new Date(2023, 7, 19),
    },
  ];
  return (
    <div>
      <h2>Lets Start</h2>
      <Expenses items={expense} />
    </div>
  );
}

export default App;

import React from "react";
import ExpenseItem from "./component/ExpenseItem";

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
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

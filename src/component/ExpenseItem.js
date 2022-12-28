import React from "react";

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 12, 22);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = "500";
  return (
    <>
      <div className="items_date">
        <div>{props.date.toISOString()}</div>
        <div className="items_description">
          <h2> {props.title}</h2>
          <div className="items_price">${props.amount}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;

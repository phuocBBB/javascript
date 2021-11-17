import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpenseChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  // console.log(props.items);
  let currentYear = new Date().getFullYear().toString();
  const [filteredYear, setfilteredYear] = useState(currentYear);
  const FilterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = filteredExpenses.length === 0? (<p>No expenses found.</p>):(
    filteredExpenses.map((item) => (
      <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
    ))
  );

  // let expensesContent = <p>No expenses found</p>;
  // if (filteredExpenses.length >0) {
  //   expensesContent = filteredExpenses.map((item) => (
  //     <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
  //   ));
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={FilterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;

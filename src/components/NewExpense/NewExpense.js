import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpense = (props) => {
  const saveExpenseData = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;

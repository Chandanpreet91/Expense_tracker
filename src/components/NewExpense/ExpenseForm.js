import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  
  const [visible, setVisible] = useState(false);
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const showFormHandler = () => {
    setVisible(true);
  };
  const showButtonHandler = () => {
    setVisible(false);
  };
  const enteredTitleHandler = (event) => {
    console.log(enteredTitle);
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };
  const enteredAmountHandler = (event) => {
    console.log(enteredAmount);
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };
  const enteredDateHandler = (event) => {
    console.log(enteredDate);
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(formData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  return visible ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={enteredTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={enteredAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={enteredDateHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="cancel" onClick={showButtonHandler}>
            Cancel
          </button>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  ) : (
    <div className="new-expense__action">
      <button type="button" onClick={showFormHandler}>
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseForm;

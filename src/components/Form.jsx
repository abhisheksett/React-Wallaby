import React, { Component } from "react";
import Button from "../components/Button";
import DatePicker from "react-datepicker";
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class Form extends Component {
  state = {
    notes: "",
    depositAmount: 0,
    expenseAmount: 0,
    startDate: moment()
  };

  updateBalance = operation => {
    let balance =
      operation === "add-deposit"
        ? this.state.depositAmount
        : this.state.expenseAmount;
    this.props.updateBalance(operation, balance, this.state.startDate, this.state.notes);
  };

  handleDateChange = (date) => {
    this.setState({
      startDate: date
    });
  };

  updateNote = event => {
    this.setState({
      notes: event.target.value
    });
  };

  changeDeposit = event => {
    this.setState({
      depositAmount: event.target.value
    });
  };

  changeExpense = event => {
    this.setState({
      expenseAmount: event.target.value
    });
  };

  render() {
    return (
      <div>
        <textarea
          cols="40"
          rows="2"
          id="note"
          name="note"
          placeholder="Please add a note"
          value={this.state.notes}
          onChange={this.updateNote}
        />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleDateChange}
        />
        <br />
        <Button
          className="deposit"
          click={() => this.updateBalance("add-deposit")}
        >
          Add Deposit
        </Button>
        <Button
          className="withdraw"
          click={() => this.updateBalance("add-expense")}
        >
          Add Expense
        </Button>
        <div className="controls" id="deposit">
          <div className="control" id="deposit">
            <label htmlFor="">Add {this.state.depositAmount}</label>
            <input
              type="range"
              value={this.state.depositAmount}
              max={10000}
              min={500}
              step={500}
              onChange={this.changeDeposit}
            />
          </div>
          <div className="control" id="spend">
            <label htmlFor="">Spend {this.state.expenseAmount}</label>
            <input
              type="range"
              max={3000}
              min={500}
              step={500}
              value={this.state.expenseAmount}
              onChange={this.changeExpense}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;

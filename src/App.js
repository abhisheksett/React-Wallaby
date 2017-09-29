import React, { Component } from "react";
import axios from "axios";
import Status from "./components/Status";
import Header from "./components/Header";
import Paper from "./components/Paper";
import Form from "./components/Form";
import ListView from "./components/ListView";
import { deposit, reduce } from "./API/api";

class App extends Component {
  state = {
    balance: 100000,
    transactions: []
  };

  updateBalance = (operation, updatedValue, modifiedDate, note) => {
    let updatedBalance;
    if (operation === "add-deposit") {
      updatedBalance = deposit(parseInt(updatedValue));
    } else {
      updatedBalance = reduce(parseInt(updatedValue));
    }
    axios
      .post("http://localhost:3001/transactions", {
        operation,
        amount: updatedValue,
        modifiedDate,
        note,
        updatedBalance: updatedBalance.balance
      })
      .then(data => {
        if (operation === "add-deposit") {
          this.setState(updatedBalance);
        } else {
          this.setState(updatedBalance);
        }

        this.setState(
          previousState => ({
            transactions: [
              ...this.state.transactions,
              {
                operation,
                amount: updatedValue,
                modifiedDate,
                note,
                updatedBalance: previousState.balance
              }
            ]
          }),
          () => {
            console.log(this.state.transactions);
          }
        );
      });
  };

  componentDidMount = () => {
    axios.get("http://localhost:3001/transactions").then(data => {
      this.setState({
        transactions: [...this.state.transactions, ...data.data]
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Paper>
          <Header />
          <Status balance={this.state.balance} />
          <Form updateBalance={this.updateBalance} />
          <ListView data={this.state.transactions} />
        </Paper>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Status from './components/Status'
import Header from './components/Header'
import Paper from './components/Paper'
import Form from './components/Form'
import ListView from './components/ListView'
import { deposit, reduce } from './API/api'

class App extends Component {

  state = {
    balance: 100000,
    transactions: []
  };

  updateBalance = (operation, updatedValue, modifiedDate, note) => {
    
    if (operation === 'add-deposit') {
      this.setState(deposit(parseInt(updatedValue)));
    } else {
      this.setState(reduce(parseInt(updatedValue)));
    }

    this.setState((previousState) => ({
      transactions: [...this.state.transactions, 
        {
          operation,
          amount: updatedValue,
          modifiedDate,
          note,
          updatedBalance: previousState.balance
        }]
    }), () => {
      console.log(this.state.transactions);
    });
  }

  render() {
    return (
      <div className="App">
        <Paper>
          <Header />
          <Status balance={this.state.balance}/>
          <Form updateBalance={this.updateBalance}/>
          <ListView data={this.state.transactions} />
        </Paper>
      </div>
    )
  }
}

export default App

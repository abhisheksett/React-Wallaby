import React, { Component } from "react";

class ListView extends Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.data.map(element => {
            let {
              operation,
              amount,
              modifiedDate,
              note,
              updatedBalance
            } = element;
            return (
              <tr>
                <td>{operation}</td>
                <td>{amount}</td>
                <td>{modifiedDate.toString()}</td>
                <td>{note}</td>
                <td>{updatedBalance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ListView;

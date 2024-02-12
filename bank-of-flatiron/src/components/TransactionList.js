import TransactionItem from "./TransactionItem";
import React, { useState, useEffect } from "react";
import SearchTransaction from "./SearchTransaction";
import AddTransactionForm from "./AddTransactionForm";

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  //Get transaction from db.json
  useEffect(() => {
    fetch(`http://localhost:6001/transactions`)
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions));
  }, []);

  //Posting functionality to db
  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  //For searching
  const transactionsList = transactions.filter((transaction) => {
    return transaction.description
      .toLowerCase()
      .includes(searchParam.toLowerCase());
  });

  //Delete function
  function handleTransactionDelete(deletedTransaction) {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== deletedTransaction.id
    );
    setTransactions(updatedTransactions);
  }

  
  //function filterTransactions() {

  // }

  return (
    <div>
      <SearchTransaction
        searchParam={searchParam}
        onTransactionSearch={setSearchParam}
      />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />

      <table className="ui celled striped padded table">
        <thead className="ui center aligned header">
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>DELETE?</th>
          </tr>
        </thead>
        {transactionsList.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDeleteTransaction={handleTransactionDelete}
          />
        ))}
      </table>
    </div>
  );
}

export default TransactionList;
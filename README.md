# Bank-of-flatiron

This React application allows users to view, add, and search bank transactions.

## Setup

After cloning the project:

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will start the backend on port 8001.
3. In a new terminal, run `npm start`. This will run the React app on port 8000.
4. Open http://localhost:8001/transactions in the browser to verify your backend is working.

The app uses Semantic UI for styling. If you encounter unfamiliar classNames, they are from Semantic UI and can be left untouched.

## Core Deliverables

### 1. View Transactions

- Access the transactions table at http://localhost:8000.

### 2. Add a New Transaction

- Fill out and submit the form on the page to add a new transaction.
- The new transaction will be added to the table and posted to the backend API for persistence.

### 3. Filter Transactions

- Use the search bar to filter transactions by typing in a search term.
- Only transactions with a description matching the search term will be shown in the table.

Example Response:

```json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]





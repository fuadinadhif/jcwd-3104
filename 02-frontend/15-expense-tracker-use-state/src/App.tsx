import React, { useState, useRef } from "react";

interface Expense {
  id: number;
  description: string;
  category: string;
  amount: string;
}

const CATEGORIES = [
  "Food",
  "Entertaiment",
  "Transport",
  "Education",
  "Emergency",
];

export default function App() {
  /* -------------------------------- Use State ------------------------------- */
  // Set Expenses State
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Add Expense State
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState("");

  // Edit Expense State
  const [editDescription, setEditDescription] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editExpenseID, setEditExpenseID] = useState<number | null>(null);

  // Set Total State
  const [total, setTotal] = useState(0);

  /* --------------------------------- Use Ref -------------------------------- */
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  /* -------------------------------- Functions ------------------------------- */
  // Add New Expense
  function addExpense(e: React.FormEvent) {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      description: description,
      category: selectedCategory,
      amount: amount,
    };

    setExpenses((prev) => [...prev, newExpense]);
    setDescription("");
    setSelectedCategory("");
    setAmount("");
    setTotal((prev) => prev + +amount);

    descriptionInputRef?.current?.focus();
  }

  // Edit Expense
  function startEditExpense(expense: Expense) {
    setEditExpenseID(expense.id);
    setEditDescription(expense.description);
    setEditCategory(expense.category);
    setEditAmount(expense.amount);
  }

  function saveEditExpense(e: React.FormEvent, expense: Expense) {
    e.preventDefault();

    setExpenses((prev) => {
      return prev.map((el) => {
        if (el.id === expense.id) {
          return {
            ...el,
            description: editDescription,
            category: editCategory,
            amount: editAmount,
          };
        } else {
          return el;
        }
      });
    });

    setTotal(() => {
      return expenses.reduce((acc, curr) => {
        if (curr.id === expense.id) {
          return acc + +editAmount;
        } else {
          return acc + +curr.amount;
        }
      }, 0);
    });

    setEditExpenseID(null);
  }

  // Delete Expense
  function deleteExpense(expense: Expense) {
    setExpenses((prev) => {
      const updatedExpenses = prev.filter((el) => el.id !== expense.id);
      return updatedExpenses;
    });

    setTotal((prev) => prev - +expense.amount);
  }

  return (
    <React.Fragment>
      <header></header>
      <main>
        {/* Title */}
        <h1>Expense Tracker</h1>

        {/* Form Add Expense */}
        <form onSubmit={addExpense}>
          {/* Input Description */}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ref={descriptionInputRef}
          />

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="" disabled>
              Select Category
            </option>
            {CATEGORIES.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Input Amount */}
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        {/* Total Expense */}
        <h2>Total: Rp. {total}</h2>

        {/* Expenses List */}
        <ul>
          {expenses.map((el, index) => (
            <li key={index}>
              {editExpenseID !== el.id ? (
                <div>
                  <span>Description: {el.description}</span>
                  <span> | </span>
                  <span>Category: {el.category}</span>
                  <span> | </span>
                  <span>Amount: Rp. {el.amount}</span>
                  <button onClick={() => startEditExpense(el)}>Modify</button>
                  <button onClick={() => deleteExpense(el)}>Delete</button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    // e.preventDefault()
                    saveEditExpense(e, el);
                  }}
                >
                  {/* Input Description */}
                  <input
                    type="text"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                    ref={descriptionInputRef}
                  />

                  {/* Category Dropdown */}
                  <select
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {CATEGORIES.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  {/* Input Amount */}
                  <input
                    type="number"
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                  />
                  <button type="submit">Save</button>
                </form>
              )}
            </li>
          ))}
        </ul>
      </main>
      <footer></footer>
    </React.Fragment>
  );
}

// export default function App() {
//   const arrayOfLink = [
//     { href: "https://google.com", link: "Google" },
//     { href: "https://instagram.com", link: "Instagram" },
//     { href: "https://twitter.com", link: "Twitter" },
//   ];

//   return (
//     <header>
//       <ul>
//         {arrayOfLink.map((el, index) => (
//           <li>
//             <a href={el.href}>{el.link}</a>
//           </li>
//         ))}
//       </ul>
//     </header>
//   );
// }

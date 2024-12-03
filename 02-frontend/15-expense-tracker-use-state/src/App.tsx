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
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

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

  function editExpense() {}

  return (
    <React.Fragment>
      <header></header>
      <main>
        <h1>Expense Tracker</h1>

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

        <h2>Total: Rp. {total}</h2>

        <ul>
          {expenses.map((el, index) => (
            <li key={index}>
              {/* Detail Expense */}
              <div>
                <span>Description: {el.description}</span>
                <span> | </span>
                <span>Category: {el.category}</span>
                <span> | </span>
                <span>Amount: Rp. {el.amount}</span>
                <button>Modify</button>
                <button>Delete</button>
              </div>

              {/* Edit Input */}
              <div>
                <form onSubmit={editExpense}>
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
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer></footer>
    </React.Fragment>
  );
}

/* -------------------------------------------------------------------------- */
/*                               After Splitting                              */
/* -------------------------------------------------------------------------- */
// import React, { useState, useRef } from "react";

// interface Expense {
//   id: number;
//   description: string;
//   category: string;
//   amount: string;
// }

// const CATEGORIES = [
//   "Food",
//   "Entertaiment",
//   "Transport",
//   "Education",
//   "Emergency",
// ];

// export default function App() {
//   const [expenses, setExpenses] = useState<Expense[]>([]);
//   const [total, setTotal] = useState(0);

//   function addExpense(newExpense: Expense) {
//     setExpenses((prev) => [...prev, newExpense]);
//     setTotal((prev) => prev + +newExpense.amount);
//   }

//   function editExpense() {}

//   return (
//     <React.Fragment>
//       <header></header>
//       <main>
//         <h1>Expense Tracker</h1>

//         <InputForm handleSubmit={addExpense} />

//         <h2>Total: Rp. {total}</h2>

//         <ul>
//           {expenses.map((el, index) => (
//             <li key={index}>
//               {/* Detail Expense */}
//               <div>
//                 <span>Description: {el.description}</span>
//                 <span> | </span>
//                 <span>Category: {el.category}</span>
//                 <span> | </span>
//                 <span>Amount: Rp. {el.amount}</span>
//                 <button>Modify</button>
//                 <button>Delete</button>
//               </div>

//               {/* Edit Input */}
//               <div>
//                 <InputForm handleSubmit={editExpense} />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </main>
//       <footer></footer>
//     </React.Fragment>
//   );
// }

// function InputForm(prop) {
//   const [description, setDescription] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [amount, setAmount] = useState("");
//   const descriptionInputRef = useRef<HTMLInputElement>(null);

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();

//         const newExpense = {
//           id: Date.now(),
//           description: description,
//           category: selectedCategory,
//           amount: amount,
//         };

//         prop.handleSubmit(newExpense);

//         setDescription("");
//         setSelectedCategory("");
//         setAmount("");

//         descriptionInputRef?.current?.focus();
//       }}
//     >
//       {/* Input Description */}
//       <input
//         type="text"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         ref={descriptionInputRef}
//       />

//       {/* Category Dropdown */}
//       <select
//         value={selectedCategory}
//         onChange={(e) => setSelectedCategory(e.target.value)}
//       >
//         <option value="" disabled>
//           Select Category
//         </option>
//         {CATEGORIES.map((category, index) => (
//           <option key={index} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>

//       {/* Input Amount */}
//       <input
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

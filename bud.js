let budget = 1000;

let expenses = [
  { name: "Grocery", amount: 200 },
  { name: "Electricity", amount: 150 },
  { name: "Loan", amount: 100 },
  { name: "Shopping", amount: 300 }
];

function updateDisplay() {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  document.getElementById("totalBudget").textContent =
    budget.toFixed(2);

  document.getElementById("totalExpenses").textContent =
    totalExpenses.toFixed(2);

  document.getElementById("budgetLeft").textContent =
    (budget - totalExpenses).toFixed(2);

  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach((expense, index) => {
    const row = document.createElement("div");
    row.className = "expense-row";

    row.innerHTML = `
      <span>${expense.name}</span>
      <span>${expense.amount.toFixed(2)}</span>
      <span>
        <button class="remove-btn"
          onclick="removeExpense(${index})">
          Remove
        </button>
      </span>
    `;

    list.appendChild(row);
  });
}

function addBudget() {
  const input = document.getElementById("budgetInput");
  const value = Number(input.value);

  if (value <= 0) {
    alert("Please enter a valid budget.");
    return;
  }

  budget = value;
  input.value = "";
  updateDisplay();
}

function addExpense() {
  const title = document.getElementById("expenseTitle").value.trim();
  const amount = Number(document.getElementById("expenseAmount").value);

  if (!title || amount <= 0) {
    alert("Please enter expense title and amount.");
    return;
  }

  expenses.push({
    name: title,
    amount: amount
  });

  document.getElementById("expenseTitle").value = "";
  document.getElementById("expenseAmount").value = "";

  updateDisplay();
}

function removeExpense(index) {
  expenses.splice(index, 1);
  updateDisplay();
}

function resetAll() {
  budget = 0;
  expenses = [];
  updateDisplay();
}

updateDisplay();

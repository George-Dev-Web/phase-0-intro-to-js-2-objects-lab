// Write your solution in this file!
// Create an initial employee object
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};

// Function to update employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value }; // Returns a new object with updated key-value pair
}

// Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; // Modifies the original object
  return employee;
}

// Function to delete key from employee non-destructively
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // Clone the object
  delete newEmployee[key]; // Remove the key
  return newEmployee; // Return new object
}

// Function to delete key from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; // Directly modify the original object
  return employee;
}

// A function that takes an array of numbers and returns a new array with each number doubled
function doubleNumbers(numbers) {
  //   return numbers.map((num) => num * 2); -- uncomment this line
}

const numbersArray = [1, 2, 3, 4]; //This is "numbers" abovee
const doubledArray = doubleNumbers(numbersArray); // You are calling a function that has the array passed in as a parameter (numbersArray becomes numbers)
// console.log(doubledArray); -- uncomment this line
// You are calling a function that has the array passed in as a parameter

//A function that takes an array of names and returns a new array with each name capitalized.
function capitalizeNames(names) {
  //   return names.map((name) => name.charAt(0).toUpperCase() + name.slice(1)); --uncomment line
}

const namesArray = ["john", "emma", "michael"];
const capitalizedArray = capitalizeNames(namesArray);
// console.log(capitalizedArray); --uncomment line

// !!!!!!!!!!!!!!!!!!!!!!!!!!!This one is a bit bigger and incorporates HTML!!!!!!!!!!!!!!!
function createUserCard(user) {
  const {
    name,
    age,
    email,
    address: { city, country },
  } = user;

  // Generate HTML for the card component
  const cardHTML = `
      <div class="card">
        <div class="card-header">
          <h2>${name}</h2>
          <p>Age: ${age}</p>
        </div>
        <div class="card-body">
          <p>Email: ${email}</p>
          <p>Location: ${city}, ${country}</p>
        </div>
      </div>
    `;

  return cardHTML;
}

// Example of a user object with data
const userData = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

// Insert HTML into the user-container div
document.getElementById("user-container").innerHTML = createUserCard(userData);

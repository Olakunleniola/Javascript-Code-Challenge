# JavaScript Code Challenge

## Overview

This Readme offers insights into a set of JavaScript code challenges that I tackled during my Codecademy boot camp. These challenges were designed to evaluate and reinforce my understanding of JavaScript concepts, spanning data types, methods, functions, objects, and classes.

### Challenge 1: howOld Function

```javascript
const howOld = (age, year) => {
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;

  switch (true) {
    case year > currentYear:
      return `You will be ${year - currentYear + age} in the year ${year}`;
    case year < birthYear:
      return `The year ${year} was ${birthYear - year} years before you were born`;
    case year > birthYear:
      return `You were ${year - birthYear} in the year ${year}`;
    default:
      return "Invalid Year";
  }
};

console.log(howOld(32, 2008));
```

This function provides age-related information based on the input age and target year.

### Challenge 2: isTheDinnerVegan Function

```javascript
const isTheDinnerVegan = (arr) => {
  return arr.every((item) => item.source === "plant");
};

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false
```

This function checks if all items in the dinner array have a plant source, demonstrating proficiency in array methods and logical operations.

### Challenge 3: ShiftCipher Class

```javascript
class ShiftCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encrypt(message) {
    // Implementation
  }

  decrypt(message) {
    // Implementation
  }
}

const cipher = new ShiftCipher(3);
console.log(cipher.encrypt("I love to code!"));
console.log(cipher.decrypt("K <3 OA RWRRA"));
console.log(cipher.decrypt("ABCDEF"));
```

This class represents a shift cipher, encrypting and decrypting messages based on a specified shift value. The class leverages methods like `toUpperCase()`, `toLowerCase()`, `charCodeAt()`, and `fromCharCode()`.

Feel free to explore these challenges, experiment with variations, and deepen your understanding of JavaScript.

Happy coding!
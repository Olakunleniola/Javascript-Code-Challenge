// Write your function here:
// This function return the age of a person in a particular year
const howOld = (age, year) => {
  const currentyear = new Date();
  const birthyear = currentyear.getFullYear() - age;
  switch (true) {
    case year > currentyear.getFullYear():
      return `You will be ${
        year - currentyear.getFullYear() + age
      } in the year ${year}`;
    case year < birthyear:
      return `The year ${year} was ${
        birthyear - year
      } years before you were born`;
    case year > birthyear:
      return `You were ${year - birthyear} in the year ${year}`;
    default:
      return "Invalid Year";
  }
};

console.log(howOld(32, 2008));
// console.log(howOld(process.argv[2], process.argv[3]));

// Fix The Broken Code!

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  let results = [];
  // The 'outer' for loop - loops through each element in the array
  for (let i = 0; i < arr.length; i++) {
    numb = arr[i];

    // The 'inner' while loop - searches for smallest power of 2 greater than the given number
    let a = 1;
    while (a < numb) {
      a = a * 2;
    }
    results.push(a);
  }
  return results;
};

console.log(smallestPowerOfTwo(numbers));
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

// squareNums()

const number = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

// Write your code here:
const squareNums = (arr) => {
  arr = arr.map(toSquare);
  return arr;
};

console.log(squareNums(number));

// sortYears()

// Write your code here:
const sortYears = (arr) => {
  arr.sort((a, b) => b - a);
  return arr;
};

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

// justCoolStuff()
// Write your code here:
const justCoolStuff = (arr1, arr2) => {
  let newarr = arr1.filter((itm1) => {
    return arr2.includes(itm1);
  });
  return newarr;
};

// Feel free to uncomment the code below to test your function

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

// isTheDinnerVegan()

// Write your code here:
const isTheDinnerVegan = (arr) => {
  return arr.every((itm) => itm.source === "plant");
};

// Feel free to comment out the code below to test your function

const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false

// sortSpeciesByTeeth()

const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Write your code here:
const sortSpeciesByTeeth = (arr) => {
  arr.sort((a, b) => a.numTeeth - b.numTeeth);
  return arr;
};

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray));

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

// findMyKeys()

// Write your code here:
const findMyKeys = (arr) => {
  return arr.includes("keys") ? arr.indexOf("keys") : -1;
};

// Feel free to comment out the code below to test your function

const randomStuff = [
  "credit card",
  "screwdriver",
  "receipt",
  "gum",
  "keys",
  "used gum",
  "plastic spoon",
];

console.log(findMyKeys(randomStuff));
// Should print 4

// DogFactory()

// Write your code here:
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,

    get name() {
      return this._name;
    },

    get breed() {
      return this._breed;
    },

    get weight() {
      return this._weight;
    },

    set setname(str) {
      this._name = str;
    },

    set breed(str) {
      this._breed = str;
    },

    set weight(int) {
      this._weight = int;
    },

    bark() {
      return "ruff! ruff!";
    },

    eatTooManyTreats() {
      this._weight++;
    },
  };
};

const bully = dogFactory("bully", "rotweller", 240);

console.log(bully.name);
console.log(bully.breed);
bully.name = "lucky";
console.log(bully.bark());
bully.eatTooManyTreats();
bully;

// Write function below
function groceries(arr) {
  // itm = arr.map(itm => itm.item)
  // if (arr.length > 2) {
  //   const lasttwo = arr.splice(-2);
  //   return arr.join(", ") + ", " + lasttwo.join(" and ");
  // }
  // if (arr.length === 2) {
  //   return arr.join(" and ")
  // }
  // else {
  //   return arr.join()
  // }

  //Optimized
  const items = arr.map((itm) => itm.item);
  if (items.length === 0) {
    return 0;
  }
  if (items.length === 1) {
    return items[0];
  } else {
    const lastitem = items.pop();
    return items.join(", ") + " and " + lastitem;
  }
}

console.log(
  groceries([
    { item: "Carrots" },
    { item: "Hummus" },
    { item: "Pesto" },
    { item: "Rigatoni" },
  ])
);

console.log(groceries([{ item: "Bread" }, { item: "Butter" }]));

console.log(groceries([{ item: "Cheese Balls" }]));

// Write function below
function subLength(str, char) {
  str = str.toLowerCase();
  let charcounter = 0;
  str.split("").forEach((itm) => {
    if (itm === char) {
      charcounter++;
    }
  });

  if (charcounter !== 2) {
    return 0;
  }

  const firstindex = str.indexOf(char);
  const nextindex = str.indexOf(char, firstindex + 1);
  const distance = nextindex - firstindex + 1;

  return distance;
}

console.log(subLength("Saturday", "a")); // returns 6
console.log(subLength("summer", "m")); // returns 2
console.log(subLength("digitize", "i")); // returns 0
console.log(subLength("cheesecake", "k")); // returns 0

// Write function below
function factorial(num) {
  if (num === 1 || num === 0) {
    return 1;
  }
  let count = 2;
  let total = 1;
  while (count <= num) {
    total *= count;
    count++;
  }
  return total;
}

console.log(factorial(5));

// A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

// Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

// encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
// decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
// In both methods, any character outside the alphabet should remain the same.
// But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
// Example:

// const cipher = new ShiftCipher(2);
// cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
// cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'

// Feel free to reference the Unicode Table as well as the JavaScript String methods including: toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()

// Write class below
// Write class below

class ShiftCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encrypt(message) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let encrypted = "";
    message = message.toLowerCase();
    for (let letter of message) {
      if (alphabets.includes(letter)) {
        let shifted_let = alphabets.charCodeAt(alphabets.indexOf(letter));
        if(shifted_let + this.shift > 122) {
            shifted_let = 97 + Math.abs((shifted_let +this.shift) - 123)
        }else {
          shifted_let += this.shift;
        }
        encrypted += String.fromCharCode(shifted_let);
      }else {
        encrypted += letter;
      }
    }
    return encrypted.toUpperCase();
  }

  
  decrypt(message) {
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    message = message.toLowerCase()
    let encrypted = ""
    for (let letter of message) {
      if (alphabets.includes(letter)) {
        let shifted_let = alphabets.charCodeAt(alphabets.indexOf(letter));
        if(shifted_let - this.shift < 97) {    
            shifted_let = 122 - Math.abs((shifted_let - this.shift) - 96)
        }else {
          shifted_let -= this.shift;
        }
        encrypted += String.fromCharCode(shifted_let);
      }else {
        encrypted += letter;
      }
    }
    return encrypted.toLowerCase();
  }

}


const cipher = new ShiftCipher(3);
console.log(cipher.encrypt("I love to code!"));
console.log(cipher.decrypt("K <3 OA RWRRA"));
console.log(cipher.decrypt("ABCDEF"));



"asdsvwe3456u76yrEBDeer23".replace(/[a-z]/gi, (char) => { 
  console.log(char);
})

class ShiftCipher2 {
  constructor(shift) {
    this.shift = shift;
  }

  encrypt(message) {
    return message.replace(/[a-z]/g, (char) => {
      const shiftedCode = (char.charCodeAt(0) - 97 + this.shift) % 26;
      return String.fromCharCode(shiftedCode + 97);
    }).toUpperCase();
  }

  decrypt(message) {
    return message.replace(/[a-z]/g, (char) => {
      const shiftedCode = (char.charCodeAt(0) - 97 - this.shift + 26) % 26;
      return String.fromCharCode(shiftedCode + 97);
    }).toLowerCase();
  }
}

// Example usage:
const cipher2 = new ShiftCipher(3);
const encryptedMessage = cipher2.encrypt('zello');
console.log(encryptedMessage);

const decryptedMessage = cipher2.decrypt(encryptedMessage);
console.log(cipher2.decrypt("ABCDEF"));
console.log(decryptedMessage);

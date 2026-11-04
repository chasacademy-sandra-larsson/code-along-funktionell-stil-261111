// Del 2: Ren eller oren?
//
// En ren funktion
//   1. ger alltid samma utdata för samma indata, och
//   2. har inga sidoeffekter: den ändrar inget utanför sig själv.
//
// TODO: skriv REN eller OREN ovanför varje funktion, och varför. Gissa först, kör sedan.

let taxRate = 0.25;
const cart = [{ name: 'Kaffe', price: 59 }];

// a)
const add = (a, b) => a + b;

// b)
const withTax = (price) => price * (1 + taxRate);

// c)
const addToCart = (item) => {
  cart.push(item);
  return cart;
};

// d)
const addToCartCopy = (items, item) => [...items, item];

// e)
const rollDice = () => Math.floor(Math.random() * 6) + 1;

// f)
const logTotal = (items) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  console.log(`Totalt: ${total} kr`);
};

// g)
const sortByPrice = (items) => items.sort((a, b) => a.price - b.price);

// h)
const greeting = (name) => `Hej ${name}, klockan är ${new Date().getHours()}`;

// TODO: välj två av de orena och skriv om dem så att de blir rena.
//       Tips: ta in det som ändras som en parameter, och returnera i stället för att ändra.

// TODO: diskutera. Ett program som bara har rena funktioner, vad kan det INTE göra?

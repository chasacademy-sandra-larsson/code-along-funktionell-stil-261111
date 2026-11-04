// Del 3: Closures
//
// En closure är en funktion som minns variablerna i scopet där den skapades,
// även efter att den yttre funktionen har kört klart.

// 1. Funktioner är värden. En funktion kan returnera en funktion.
const makeGreeter = (greeting) => {
  return (name) => `${greeting}, ${name}!`;
};
// TODO: skapa const hej = makeGreeter('Hej') och const hello = makeGreeter('Hello').
//       Anropa hej('Ada') och hello('Ada'). Var finns greeting när hej körs?

// 2. En räknare som minns
// TODO: skriv createCounter() som har en let count = 0 inuti och returnerar
//       ett objekt med increase(), decrease() och value().

// TODO: skapa två räknare, a och b. Öka a tre gånger och b en gång.
//       Gissa: vad ger a.value() och b.value()? Varför delar de inte count?

// TODO: kan du nå count utifrån? Prova a.count.

// 3. Samma TodoList som i tisdags, men utan klass
// I tisdags:
//
// class TodoList {
//   #todos = [];
//   add(text) { this.#todos.push(text); }
//   remove(text) { this.#todos = this.#todos.filter((t) => t !== text); }
//   get all() { return [...this.#todos]; }
// }
//
// TODO: skriv createTodoList() med samma API: add, remove och all().
//       todos ska vara en variabel i closuren, inte ett fält.
//       Skriv add och remove så att de skapar en ny array i stället för att ändra den.

// TODO: jämför. Gör samma sak med klassen och med closuren:
//       lägg till två todos, ta bort en, logga all(). Vad är skillnaden för den som använder dem?

// 4. Closures ni redan har skrivit
// TODO: titta på koden nedan. Varför vet varje knapp vilken låt den hör till,
//       fast loopen har kört klart när du klickar?
const songs = ['Dancing Queen', 'Waterloo', 'Mamma Mia'];
const main = document.querySelector('main');
for (const song of songs) {
  const button = document.createElement('button');
  button.textContent = song;
  button.addEventListener('click', () => console.log(`Spelar ${song}`));
  main.append(button);
}

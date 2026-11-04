# Modern JavaScript och funktionell stil

Code-along i fyra delar. I tisdags svarade OOP på frågan **var bor datan, och vem får ändra den?** genom att gömma datan i ett objekt och bara ändra den via metoder. I dag är det den funktionella stilens tur: datan flödar genom funktioner som inte ändrar något, och det tillstånd som ändå behövs göms i en closure.

## Kom igång

Öppna mappen i VS Code och starta Live Server i den del du arbetar med. Ha DevTools (F12) öppet med **Console** synlig.

Varje `js/main.js` har numrerade steg och `TODO`. Gör dem i ordning, och **gissa innan du kör**.

## Del 1: Modern JavaScript

`1-modern-js/`

1. Destructuring med standardvärde. När används standardvärdet?
2. Spread och rest.
3. Optional chaining `?.` när ett fält kanske saknas.
4. `??` mot `||`. När skiljer de sig?
5. `??=` sätter ett värde bara om det saknas.
6. `at(-1)` läser bakifrån.
7. `Object.entries` och `Object.fromEntries`.
8. `Object.groupBy`.
9. `toSorted`, `toReversed` och `with`, arraymetoder som inte muterar.

## Del 2: Ren eller oren?

`2-ren-eller-oren/`. Övning.

Åtta funktioner. Bestäm för var och en om den är ren eller oren, och varför. Skriv sedan om två av de orena så att de blir rena.

## Del 3: Closures

`3-closures/`

1. En funktion som returnerar en funktion.
2. `createCounter()`: två räknare, var sin `count`.
3. `createTodoList()` med samma API som tisdagens `class TodoList`, fast med closure i stället för `#`.
4. Closures ni redan har skrivit: knappar som minns vilken låt de hör till.

## Del 4: Kassan

`4-kassan/`. Övning på passet och självstudier till torsdagen.

Ett kafé har en kassa i `js/kassa-imperativ.js`. Den fungerar, en gång. Kör den två gånger med samma rabattkod och jämför kvittona.

**Del A, på passet (15 min).** Skriv rena funktioner i `js/receipt.js` och använd dem i `js/main.js` i stället för `checkout`. Funktionerna står i `main.js`. Ingen av dem får ändra `products` eller `lines`, läsa globala variabler eller logga. Det enda stället med sidoeffekter är `main.js`.

**Del B, självstudier.** Skriv `createCart(products)` i `js/cart.js`. Varukorgen minns sina rader i en closure och har:

- `add(productId, quantity = 1)`: lägger till en rad, eller ökar antalet om produkten redan finns. Kastar ett fel om produkten inte finns.
- `remove(productId)`: tar bort raden.
- `lines()`: returnerar en kopia av raderna.
- `total()`: summan, med hjälp av dina funktioner från del A.

Inga `push`, inga `splice`. Varje ändring skapar en ny array.

**Del C, självstudier.** Visa kvittot på sidan, grupperat per kategori med `Object.groupBy`. Bara `main.js` får röra DOM:en.

**Till torsdagen:** Ta med Kassan och pokern. Lägg dem i varsitt repo på GitHub, med koden i en egen branch, så att en kamrat kan granska den i en pull request. Vi går igenom hur på workshoppen.

## Begrepp

| Begrepp | Betyder |
|---|---|
| Ren funktion | Samma indata ger alltid samma utdata, och inga sidoeffekter |
| Sidoeffekt | Något funktionen ändrar eller gör utanför sig själv: muterar data, loggar, rör DOM:en, hämtar data |
| Higher-order function | En funktion som tar emot eller returnerar en funktion |
| Closure | En funktion som minns variablerna i scopet där den skapades |
| Factory-funktion | En vanlig funktion som skapar och returnerar ett objekt, ett alternativ till `class` och `new` |
| Deklarativt | Beskriv *vad* du vill ha (`filter`, `map`), inte *hur* steg för steg (`for`) |

## Efter passet

- Kassan, del B och C, till torsdagen.
- Pokern, minst del 1–4, till torsdagen.

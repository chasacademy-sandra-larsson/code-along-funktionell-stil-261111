# Funktionell stil i JavaScript

Code-along i tre delar. I tisdags svarade OOP på frågan **var bor datan, och vem får ändra den?** genom att gömma datan i ett objekt och bara ändra den via metoder. I dag är det den funktionella stilens tur: datan flödar genom funktioner som inte ändrar något, och det tillstånd som ändå behövs göms i en closure.

## Kom igång

Öppna mappen i VS Code och starta Live Server i den del du arbetar med. Ha DevTools (F12) öppet med **Console** synlig.

Varje `js/main.js` har numrerade steg och `TODO`. Gör dem i ordning, och **gissa innan du kör**.

## Del 1: Uppvärmning

`1-kopior/`

Gör en ny version i stället för att ändra: kopior med spread, och `map`, `filter` och `reduce` som bygger på samma tanke. Gissa först.

## Del 2: Ren eller oren?

`2-ren-eller-oren/`. Övning.

Åtta funktioner. Bestäm för var och en om den är ren eller oren, och varför. Skriv sedan om två av de orena så att de blir rena.

## Del 3: Closures

`3-closures/`

1. En funktion som returnerar en funktion.
2. `createCounter()`: två räknare, var sin `count`.
3. `createTodoList()` med samma API som tisdagens `class TodoList`, fast med closure i stället för `#`.
4. Closures ni redan har skrivit: knappar som minns vilken låt de hör till.

## Kassan: eget repo

Övningen Kassan ligger i ett eget repo: [js--fp-kassan](https://github.com/chasacademy-sandra-larsson/js--fp-kassan). Del A gör vi på passet, del B och C är självstudier till torsdagens workshop.

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

- Kassan ([js--fp-kassan](https://github.com/chasacademy-sandra-larsson/js--fp-kassan)), del B och C, till torsdagen.
- Pokern ([js--oop-poker](https://github.com/chasacademy-sandra-larsson/js--oop-poker)), minst del 1–4, till torsdagen.

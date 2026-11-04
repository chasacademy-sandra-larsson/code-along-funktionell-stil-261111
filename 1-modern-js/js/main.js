// Del 1: Modern JavaScript
import { order, guestOrder } from './data.js';

// --- Repetition: det här kan ni redan ---

// 1. Destructuring med standardvärde
// TODO: plocka ut id och note ur order. Ge note standardvärdet 'Ingen kommentar'.
//       Gissa: vilket värde får note? Varför?

// 2. Spread och rest
// TODO: skapa en ny order med ett extra item, utan att ändra order.items.
// TODO: skriv const [first, ...rest] = order.items. Vad är first och rest?

// --- Nytt ---

// 3. Optional chaining ?.
// TODO: logga order.customer.address.city och guestOrder.customer.address.city.
//       Vad händer med den andra? Skriv om den med ?. så att den ger undefined.

// 4. Nullish coalescing ??
// TODO: jämför order.note || 'Ingen kommentar' med order.note ?? 'Ingen kommentar'.
//       Och samma sak för priset på teet: items[2].price || 'okänt' mot ?? 'okänt'.
//       När skiljer sig || och ???

// 5. ??= sätter ett värde bara om det saknas
// TODO: skapa const settings = { theme: undefined, lang: 'sv' } och skriv
//       settings.theme ??= 'light' och settings.lang ??= 'en'. Logga settings.

// 6. at() läser bakifrån
// TODO: hämta sista varan med order.items.at(-1). Jämför med det gamla sättet.

// 7. Object.entries och Object.fromEntries
// TODO: gör om { kaffe: 59, te: 25 } till en array av par och tillbaka.
//       Höj alla priser med 10 % på vägen, med map.

// 8. Object.groupBy
// TODO: gruppera order.items efter category. Hur många varor finns i varje grupp?

// 9. Arraymetoder som inte muterar
// TODO: sortera order.items efter pris med toSorted. Är order.items orörd?
// TODO: prova också toReversed() och with(0, { name: 'Latte', price: 49 }).
//       Jämför med sort() och reverse(). Vilka ändrar på plats?

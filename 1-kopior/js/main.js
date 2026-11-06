// Del 1: Uppvärmning – gör en ny version i stället för att ändra
import { order } from './data.js';

// Tanken i funktionell stil: ändra inte det du fick. Gör en ny version med ändringen.

// 1. Kopiera ett objekt med spread
// TODO: skapa paid, en kopia av order med en ny egenskap status: 'betald'.
//       Logga order.status och paid.status. Har order ändrats?

// 2. Kopiera en lista med spread
// TODO: skapa withMuffin, en ny lista med alla items i order.items plus
//       { name: 'Muffin', price: 30, category: 'bröd' }. Använd inte push.
//       Logga längden på order.items och withMuffin.

// 3. map, filter och reduce gör samma sak
// TODO: map – skapa discounted, där varje item kostar 10 % mindre.
//       Logga det första priset i order.items och i discounted.
// TODO: filter – skapa drinks, med bara items där category är 'dryck'.
// TODO: reduce – räkna ut total, summan av alla priser.
//       Har order.items ändrats av något av det här?

// 4. Varning: en ny variabel är inte en kopia
// TODO: skriv const sameList = order.items och gör sameList.push(...) med en kaka.
//       Logga order.items.length. Vad hände, och varför?

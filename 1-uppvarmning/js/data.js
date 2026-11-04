// En beställning, som den kunde se ut från ett API.
export const order = {
  id: 1042,
  customer: {
    name: 'Ada Lovelace',
    address: { city: 'Lund' },
  },
  items: [
    { name: 'Kaffe', price: 59, category: 'dryck' },
    { name: 'Kanelbulle', price: 35, category: 'bröd' },
    { name: 'Te', price: 0, category: 'dryck' },
    { name: 'Smörgås', price: 79, category: 'mat' },
  ],
  note: '',
};

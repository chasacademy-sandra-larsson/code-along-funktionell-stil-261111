// Ett svar som det kunde se ut från ett API. Alla fält finns inte alltid.
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

export const guestOrder = {
  id: 1043,
  items: [{ name: 'Vatten', price: 15, category: 'dryck' }],
};

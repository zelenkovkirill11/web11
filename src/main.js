import { total } from './price.js';

const amount = total(450, 3);
document.querySelector('#total').textContent =
  'Итого ' + amount + ' ₸';

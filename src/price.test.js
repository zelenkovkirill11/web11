import test from 'node:test';
import assert from 'node:assert/strict';
import { total } from './price.js';

test('Стоимость нескольких товаров', () => {
  assert.equal(total(450, 3), 1350);
});

test('Пустой заказ', () => {
  assert.equal(total(450, 0), 0);
});

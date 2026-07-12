'use strict';
import { people } from './data.js';

for (const person of people) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;
  row.appendChild(nameCell);

  const sexCell = document.createElement('td');

  sexCell.textContent = person.sex === 'm' ? 'Male' : 'Female';
  row.appendChild(sexCell);

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;
  row.appendChild(bornCell);

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;
  row.appendChild(diedCell);

  const ageCell = document.createElement('td');

  ageCell.textContent = age;
  row.appendChild(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.textContent = century;
  row.appendChild(centuryCell);

  const table = document.querySelector('.dashboard');

  table.appendChild(row);
}

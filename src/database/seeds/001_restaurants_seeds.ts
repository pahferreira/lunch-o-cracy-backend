exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('restaurants').insert([
    { id: 1, name: 'MC Donalds' },
    { id: 2, name: 'China Taiwan' },
    { id: 3, name: 'Waffle House' },
    { id: 4, name: '083 Burguer' },
    { id: 5, name: 'Matterello' },
    { id: 6, name: 'Aquarius Restaurante' },
    { id: 7, name: 'Picanha do Bastos' },
    { id: 8, name: 'Sal e Brasa' },
    { id: 9, name: 'Taberna Restaurante' },
    { id: 10, name: 'Dosha Temakeria' },
    { id: 11, name: 'Hao' },
    { id: 12, name: 'The W' },
  ])
}


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user: 'Alex', password: 'hashedpassword', dept: 'dev'},
        {id: 2, user: 'Robert', password: 'hashedpassword', dept: 'dev'},
        {id: 3, user: 'Jackie', password: 'hashedpassword', dept: 'dev'},
        {id: 4, user: 'Jake', password: 'hashedpassword', dept: 'admin'},
        {id: 5, user: 'Bob', password: 'hashedpassword', dept: 'admin'},
        {id: 6, user: 'Nicholas', password: 'hashedpassword', dept: 'admin'},
        {id: 7, user: 'Nicky', password: 'hashedpassword', dept: 'hr'},
        {id: 8, user: 'Mike', password: 'hashedpassword', dept: 'hr'},
        {id: 9, user: 'Hunter', password: 'hashedpassword', dept: 'hr'}
      ]);
    });
};

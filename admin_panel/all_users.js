const form = document.querySelector('form');
const input = form.querySelector('input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userId = input.value.trim();

  if (userId !== '') {
    //search for user by ID
    const user = searchUserById(userId);

    if (user) {
      console.log(`User found: ${user.first_name},  ${user.last_name}, ${user.email}`);
    } else {
      console.log(`User not found`);
    }
  }
});

function searchUserById(userId) {
  const users = [
    { id: '1', first_name: 'Imen', last_name:'Daas', email: 'imendaas13@gmail.com' },
    { id: '2', first_name: 'Ouamima', last_name:'Saadi', email: 'oumasaadi18@gmail.com' },
  ];

  return users.find(user => user.id === userId);
}

import { render } from './render';

export const removeUsers = () => {
  const tBody = document.querySelector('#table-body');

  tBody.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.btn-remove')) {
      const tr = target.closest('tr');
      const id = tr.dataset.key;

      userService.removeUser(id).then((res) => {
        userService.getUsers().then((users) => {
          render(users);
        });
      });
    }
  });
};

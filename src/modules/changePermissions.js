import { render } from './render';

export const changePermissions = () => {
  const tBody = document.querySelector('#table-body');

  tBody.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('input[type=checkbox]')) {
      const tr = target.closest('tr');
      const input = tr.querySelector('input[type=checkbox]')
      const id = tr.dataset.key;
      
      userService.changeUser(id, {permissions: input.checked}).then((res) => {
        userService.getUsers().then((users) => {
          render(users);
        });
      });
    }
  });
};

import '../scss/main.scss';
import userTemplate from '../template/user.hbs';

const api = require('./modules/vk.api.js');
const auth = require('./modules/vk.auth.js');
const renderHtml = require('./modules/render.html.js');

let friendsObj;

window.addEventListener('load', () => {
    auth
        .then(() => {
            return api('users.get', {
                v: 5.68,
                fields: 'first_name, last_name, photo_100'
            });
        })
        .then((data) => {
            const [user] = data;
            renderHtml(user, '#user', userTemplate);

            return api('users.get', {
                v: 5.68,
                fields: 'first_name, last_name, photo_100'
            });
        })
        .catch(function(e) {
            alert('Ошибка: ' + e.message);
        });
});

export { friendsObj };
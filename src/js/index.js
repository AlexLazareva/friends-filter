import '../scss/main.scss';

const auth = require('./modules/vk.auth.js');
const api = require('./modules/vk.api.js');

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
            console.log(data);
        })
        .catch(function(e) {
            alert('Ошибка: ' + e.message);
        });
});

export { friendsObj };
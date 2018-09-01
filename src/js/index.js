import '../scss/main.scss';
import userTemplate from '../template/user.hbs';
import itemTemplate from '../template/item.hbs';

const api = require('./modules/vk.api.js');
const auth = require('./modules/vk.auth.js');
const renderHtml = require('./modules/render.html.js');
const eventButton = require('./modules/event.button')();
const dragAndDrop = require('./modules/drag.and.drop.js')();
const friendsFilter = require('./modules/filter.friends.js')();

let friendsObj;

window.addEventListener('load', () => {
    auth
        .then(() => {
            return api('users.get', {
                v: 5.68,
                fields: 'first_name, last_name, photo_100'
            });
        })
        .then(data => {
            const [user] = data;

            renderHtml(user, '#user', userTemplate);

            return api('friends.get', {
                v: 5.68,
                fields: 'first_name, last_name, photo_100'
            });
        })
        .then(data => {
            friendsObj = require('./modules/get.user.data.js')(data);
            renderHtml(friendsObj.firstList, '#friends__list_0', itemTemplate);
            renderHtml(friendsObj.secondList, '#friends__list_1', itemTemplate);
        })
        .catch(e => {
            alert('Ошибка: ' + e.message);
        });
});

const save = document.querySelector('#save');

eventButton.setSelector('.lists-friends');
dragAndDrop.setSelector('#friends__list_0');

save.addEventListener('click', () => {
    localStorage.myFriends = JSON.stringify(friendsObj);
    alert('Сохранено!');
});

export { friendsObj };
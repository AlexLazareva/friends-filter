import { friendsObj } from '../index.js';

const appendData = (item, list1, list2) => {
    let items = friendsObj[list1].items;
    let friendId = item.querySelector('.friend').dataset.id;
    let filterFriends = [];

    for (let i = 0; i < items.length; i++) {
        let itemId = items[i].id;

        if (friendId == itemId) {
            friendsObj[list2].items.push(items[i]);
        } else {
            filterFriends.push(items[i]);
        }

        friendsObj[list1].items = filterFriends;
    }
};

export { appendData };

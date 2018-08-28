import { validateData } from './validate.data.js';

module.exports = (data) => {
    let friendsObj;

    if (!localStorage.myFriends) {
        friendsObj = {
            firstList: {
                items: data.items
            },
            secondList: {
                items: []
            }
        }
    } else {
        friendsObj = validateData(data.items, JSON.parse(localStorage.myFriends));
    }

    return friendsObj;
};

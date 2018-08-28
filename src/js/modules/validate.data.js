const validateData = (data, friendsObj) => {
    let listSecondFriend = friendsObj.secondList.items,
        firstListFriends = [],
        secondListFriends = [];

    outer: for (let i = 0, length = data.length; i < length; i++) {
        let friendId = data[i].id;

        for (let j = 0; j < listSecondFriend.length; j++) {
            let listFriendId = listSecondFriend[j].id;

            if (listFriendId == friendId) {
                secondListFriends.push(listSecondFriend[j]);
                continue outer;
            }
        }
        firstListFriends.push(data[i]);
    }

    friendsObj.firstList.items = firstListFriends;
    friendsObj.secondList.items = secondListFriends;

    return friendsObj;
};

export { validateData };
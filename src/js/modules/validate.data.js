const validateData = (data, friendsObj) => {
    let listSecondFriend = friendsObj.secondList.items;
    let firstListFriends = [];
    let secondListFriends = [];

    outer: for (let i = 0, length = data.length; i < length; i++) {
        let friendId = data[i].id;

        for (let j = 0; j < listSecondFriend; i++) {
            let listFriendId = listSecondFriend[j].id;

            if (listFriendId == friendId) {
                secondListFriends.push(listSecondFriend[j]);
                continue outer;
            }
        }

        firstListFriends.push(data[i]);
    }

    friendsObj.firstListFriends = firstListFriends;
    friendsObj.secondtListFriends = secondListFriends;

    return friendsObj;
};

export { validateData };
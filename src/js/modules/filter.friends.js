module.exports = () => {
    const handlers = {
        handlerFilterFriends: event => {
            if (event.target.classList.contains('form__search')) {
                let target = event.target,
                    value = event.target.value.trim().toLowerCase(),
                    list = target.parentNode.parentNode.querySelector('.friends__list');
                 // let items = list.children;

                // for (let i = 0, length = items.length; i < length; i++) {
                //     let item = items[i],
                //         name = item.querySelector('.friend__name');
                //
                //     if (name.includes(value)) {
                //         item.style.display = 'block';
                //     } else {
                //         item.style.display = 'none';
                //     }
                // }
                console.log(list);
            }
        }
    }

    addEventListener('keyup', handlers.handlerFilterFriends);
};

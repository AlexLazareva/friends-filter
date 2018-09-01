module.exports = () => {
    const handlers = {
        handlerFilterFriends: event => {
            if (event.target.classList.contains('form__search')) {
                let target = event.target,
                    value = event.target.value.trim().toLowerCase(),
                    block = target.parentNode.parentNode.nextElementSibling.children[1],
                    list = block.firstChild.nextSibling,
                    items = list.children;

                for (let i = 0, length = items.length; i < length; i++) {
                    let item = items[i],
                        name = item.querySelector('.friend__name').textContent.toLowerCase();

                    if (name.includes(value)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            }
        }
    }

    addEventListener('keyup', handlers.handlerFilterFriends);
};

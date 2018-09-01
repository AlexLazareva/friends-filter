import { appendData } from './append.data.js';

module.exports = () => {

    let lists;
    let handlers = {
        handlerClick: (event) => {
            if (event.target.tagName == 'BUTTON') {
                let item = event.target.closest('.friends__item');
                let listAll = document.querySelectorAll('.friends__list');
                let listIndex = +item.parentNode.dataset.list;

                if (listIndex == 0) {
                    listAll[listIndex + 1].appendChild(item);
                    appendData(item, 'firstList', 'secondList');
                } else {
                    listAll[listIndex - 1].appendChild(item);
                    appendData(item, 'secondList', 'firstList');
                }

            }
        }
    };

    const addListeners = () => {
        lists.addEventListener('click', handlers.handlerClick);
    };

    return {
        setSelector: selector => {
            lists = document.querySelector(selector);
            addListeners();
        }
    }
}

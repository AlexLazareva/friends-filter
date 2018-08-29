import { appendData} from './append.data.js';

module.exports = () => {
    let list;
    let dragObj = {};
    let handlers = {
        handlerMouseDown: event => {
            if (event.target.tagName == 'BUTTON' || event.which != 1) return;

            const element = event.target.closest('.friends__item');

            if (!element) return;

            dragObj.element = element;

            document.addEventListener('mousemove', handlers.handlerMouseMove);
        },
        handlerMouseMove: event => {
            if (!dragObj.element) return;

            dragObj.item = _createItem();

            dragObj.item.style.position = 'absolute';
            dragObj.item.style.zIndex = 999;
            dragObj.item.style.top = event.pageY - dragObj.offsetHeight / 2 + 'px';
            dragObj.item.style.left = event.pageX - dragObj.offsetWidth / 2 + 'px';
        },
        handlerMouseUp: event => {
            let elem;
            let list;

            if (!dragObj.item) return;

            dragObj.item.hidden = true;
            elem = document.elementFromPoint(event.clientX, event.clientY);
            dragObj.item.hidden = false;
            list = elem.closest('#friends__list_1');

            if (list) {
                dragObj.item.rollback();
                list.appendChild(dragObj.item);
                appendData(dragObj.item, 'firstList', 'secondList');
            } else {
                dragObj.item.rollback();
            }

            document.removeEventListener('mousemove', handlers.handlerMouseMove);
            dragObj = {};
        }
    };

    const addListeners = () => {
        list.addEventListener('mousedown', handlers.handlerMouseDown);
        document.addEventListener('mouseup', handlers.handlerMouseUp);
    };

    const _createItem = () => {
        let item = dragObj.element,
            old = {
                position: item.position || '',
                left: item.left || '',
                top: item.top || '',
                zIndex: item.zIndex || ''
            };
        item.rollback = () => {
            item.style.position = old.position;
            item.style.left = old.left;
            item.style.top = old.top;
            item.style.zIndex = old.zIndex;
        };

        return item;
    };

    return {
        setSelector: (selector) => {
            list = document.querySelector(selector);
            addListeners();
        }
    };
};

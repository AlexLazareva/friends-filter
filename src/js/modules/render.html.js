module.exports = (friendsObj, selector, render) => {
    const html = render(friendsObj);
    const outer = document.querySelector(selector);

    outer.innerHTML = html;
};

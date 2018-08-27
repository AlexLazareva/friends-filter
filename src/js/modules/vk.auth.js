module.exports = new Promise((resolve, reject) => {
    VK.init({
        apiId: 6674735
    });

    VK.Auth.login(data => {
        if (data.session) {
            resolve(data);
        } else {
            reject(new Error('Не удалось авторизоваться'));
        }
    }, 2);
});

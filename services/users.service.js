mvApp.factory('UsersService', function () {
    let users = [
        {
            id: 1,
            name: "Bedos",
            firstname: "Chulee",
            mail: "bedos.chulee1@gmail.com",
            pwd: "azerty",
            level: 1,
            connected: false
        },
        {
            id: 2,
            name: "Smati",
            firstname: "Lina",
            email: "smati.lina@gmail.com",
            pwd: "pwd",
            level: 2,
            connected: false
        },
        {
            id: 3,
            name: "Hoareau",
            firstname: "Paul",
            email: "hoareau.paul@gmail.com",
            pwd: "paulo",
            level: 0,
            connected: false
        }]

    return {
        getUsers: function () {
            return users;
        },
        getUserById: function (id) {
            for (elem of users) {
                if (elem.id == id) {
                    return elem
                }
            }
        },
        getUserByEmail: function (email) {
            for (elem of users) {
                if (elem.id == id) {
                    return elem
                }
            }
        },
        isUser: function (email, pwd) {
            users.forEach(function (user) {
                if (user.mail === emailValue && user.pwd === pwdValue) {
                    user.connected = true;
                    return (user);
                }
            });
        },
        addUser: function (user) {
            users.push(user);
        }
    };
});
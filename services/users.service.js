mvApp.factory('UsersService', function () {
    let users = [
        {
            id: 1,
            name: "Bedos",
            firstname: "Chulee",
            mail: "bedos.chulee1@gmail.com",
            pwd: "azerty",
            level: 0,
            connected: false
        },
        {
            id: 2,
            name: "Smati",
            firstname: "Lina",
            mail: "smati.lina@gmail.com",
            pwd: "pwd",
            level: 2,
            connected: false
        },
        {
            id: 3,
            name: "Hoareau",
            firstname: "Paul",
            mail: "hoareau.paul@gmail.com",
            pwd: "paulo",
            level: 0,
            connected: false
        }];
    
    return {
        setCurrentUser: function(user){
            localStorage.setItem("user", JSON.stringify(user.id));
        },
        getUsers: function () {
            return users;
        },
        logout: function(){
            localStorage.removeItem("user");
        },
        getCurrentUserId: function(){
            console.log(localStorage.getItem("user"));
            return localStorage.getItem("user");
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
                if (elem.mail == email) {
                    return elem
                }
            }
        },
        isUser: function (email, pwd) {
            let userFind = null
            users.forEach(function (user) {
                if (user.mail === email && user.pwd === pwd) {
                   userFind = user 
                }
            });
            return userFind;
        },
        isAdmin: function(){
            let currentUserId = this.getCurrentUserId;
            let isAdmin = false;
            if(currentUserId){
                let user = this.getUserById(currentUserId);
                if(user && user.level == 1){
                    isAdmin = true
                }
            }
            return isAdmin;
        },
        addUser: function (user) {
            users.push(user);
        }
    };
});
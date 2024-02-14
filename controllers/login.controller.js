mvApp.controller('LoginController', ['$scope', function($scope, $location){
    $scope.showElement = false;
    $scope.users = [
        {
            id          :   1,
            name        :   "Bedos",
            firstname   :   "Chulee",
            mail        :   "bedos.chulee1@gmail.com",
            pwd         :   "azerty",
            level       :   1,
            connected   :   false
        },
        {
            id          :   2,
            name        :   "Smati",
            firstname   :   "Lina",
            email       :   "smati.lina@gmail.com",
            pwd         :   "pwd",
            level       :   2,
            connected   :   false
        },
        {
            id          :   3,
            name        :   "Hoareau",
            firstname   :   "Paul",
            email       :   "hoareau.paul@gmail.com",
            pwd         :   "paulo",
            level       :   0,
            connected   :   false
        }
    ];


    this.verifyAccount = function() {
        let pwdValue = $scope.pwd;
        let emailValue = $scope.email;

        let foundUser = null;
        $scope.users.forEach(function(user) {
            if(user.mail === emailValue && user.pwd === pwdValue) {
                user.connected = true;
                foundUser = user;
            }

        });
        if (foundUser !== null) {
            $scope.return_formconnexion = "Connexion réussie";
            if(foundUser.level === 1) {
                window.location.href = '#/';

            }
            else{

            }

        } else {
            $scope.return_formconnexion = "Utilisateur ou mot de passe incorrect.";
        }
        $scope.pwd = '';
        $scope.email = '';




    };
    this.createAccount = function() {

        let newUser = {
            id          :   $scope.users.length + 1,
            name        :   $scope.name,
            firstname   :   $scope.firstname,
            email       :   $scope.email,
            pwd         :   $scope.pwd,
            level       :   0,
            connected   :   false
        };
        $scope.users.push(newUser);
        $scope.return_formregister = "Compte créé avec succès";
        $scope.pwd = '';
        $scope.email = '';
        $scope.name = '';
        $scope.firstname = '';

    };
    this.toggleForm = function(data) {
        $scope.showElement = !$scope.showElement;

    };



}]);


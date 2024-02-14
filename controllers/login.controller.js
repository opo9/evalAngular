mvApp.controller('LoginController', ['$scope', 'UsersService',function($scope, UsersService){
    $scope.showElement = false;
    $scope.users = UsersService.getUsers();
    
    this.$onInit = function(){
        UsersService.cached();
    };

    this.verifyAccount = function() {
        let pwdValue = $scope.pwd;
        let emailValue = $scope.email;

        let foundUser = UsersService.isUser(emailValue, pwdValue);
     
        console.log(foundUser);
        if (foundUser !== null) {
            $scope.return_formconnexion = "Connexion réussie";
            console.log("test");
            UsersService.setCurrentUser(foundUser);
            if(foundUser.level === 1) {
                window.location.href = '#/admin';
            }
            else{
                window.location.href = '#/'
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
            mail       :   $scope.email,
            pwd         :   $scope.pwd,
            level       :   0,
            connected   :   false
        };
        UsersService.addUser(newUser);
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
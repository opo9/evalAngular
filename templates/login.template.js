var LoginTemplate =
`
<button ng-click="$ctrl.toggleForm('connexion')">Connexion</button>
<button ng-click="$ctrl.toggleForm('register')">S'enregistrer</button>
<div ng-show="!showElement" class=" w-75 h-50 d-flex flex-column align-self-center justify-self-center">
<h1>Login</h1>
    <form name="userForm" novalidate id="userForm">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="connexion_email" ng-model="email" name="email" required>
            <p ng-show="userForm.email.$error.required && !userForm.email.$pristine">L'email est requis.</p>
            <p ng-show="userForm.email.$error.email && !userForm.email.$pristine">L'email n'est pas valide.</p>
        </div>
        <div class="form-group">
            <label for="pwd">Password </label>
            <input type="password" class="form-control" id="connexion_pwd" ng-model="pwd" name="pwd" required>
            <p ng-show="userForm.pwd.$error.required && !userForm.pwd.$pristine">Le mot de passe est requis.</p>
        </div>
        <input type="button" value="Connexion" ng-click="$ctrl.verifyAccount()" ng-disabled="userForm.$invalid">
        <div ng-bind="return_formconnexion"></div>
    </form>
</div>


<br/>
<br/>
<br/>
<div ng-show="showElement" class="w-50 h-50 d-flex flex-column align-self-center justify-self-center">
    <h1>Register</h1>
    <form>
        <div class="form-group">
            <label for="email">Nom :</label>
            <input type="text" class="form-control" name="name" id="register_name" ng-model="name">
        </div>
        <div class="form-group">
            <label for="email">Prénom :</label>
            <input type="text" class="form-control" name="firstname" id="register_firstname" ng-model="firstname">
        </div>
        <div class="form-group">
            <label for="email">Email :</label>
            <input type="email" class="form-control" name="email" id="register_email" ng-model="email">
        </div>
        <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="register_pwd" ng-model="pwd">
        </div>
        <input type="button" value="Connexion" ng-click="$ctrl.createAccount()">
        <div ng-bind="return_formregister"></div>
    </form>
</div>
    
    
`;
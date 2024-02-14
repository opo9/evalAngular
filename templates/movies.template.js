var MoviesTemplate = `
<h1>LCP Movies</h1>

<a href="#/">Home</a>
<a href="#/login" ng-if="$ctrl.usersService.getCurrentUserId() == null">login</a>
<button ng-if="$ctrl.usersService.getCurrentUserId() != null" ng-click="$ctrl.usersService.logout()">logout</button>
<a href="#/admin" ng-if="$ctrl.usersService.isAdmin()">admin</a>

<div class="container mt-2">
    <div class="row">
        <div class="col-md-6" ng-repeat="movie in $ctrl.movies">
        <div class="card mb-3">
            <div class="card-body">
                <!--<img src="{{ movie.image }}" class="card-img-top" alt="image à rajouté">-->
                <h2 class="card-title">{{ movie.title }}</h2>
                <p class="card-text">{{ movie.desc }}</p>
                <a href="#/movie/{{movie.id}}">Voir plus</a>
            </div>
        </div>
    </div>
    </div>
</div>

`;
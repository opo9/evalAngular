var MoviesTemplate = `

<div class="container">
    <div class="row">
        <div class="col-md-6" ng-repeat="movie in $ctrl.movies">
        <div class="card mb-3">
            <div class="card-body">
                <!--<img src="{{ movie.image }}" class="card-img-top" alt="image à rajouté">-->
                <h2 class="card-title">{{ movie.title }}</h2>
                <p class="card-text">{{ movie.desc }}</p>
            </div>
        </div>
    </div>
    </div>
</div>

`;
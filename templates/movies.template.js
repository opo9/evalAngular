var MoviesTemplate = `

<div class="container">
    <div class="row">
        <div class="col-md-6" ng-repeat="movie in $ctrl.movies">
            <div class="card mb-3">
                <div class="card-body">
                    <img src="{{ movie.image }}" class="card-img-top" alt="image à rajouté">
                    <h2 class="card-title">{{ movie.title }}</h2>
                    <p class="card-text">{{ movie.description }}</p>
                    <p class="card-text">Grade :
                        <span ng-repeat="grade in movie.grade"> {{ grade.star }} </span>
                    </p>
                    <p class="card-text">Comments:</p>
                    <ul class="list-group">
                        <li class="list-group-item" ng-repeat="comment in movie.comments">{{ comment.user }}: {{ comment.data }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

`;
var MovieTemplate =
    `
    <div class="col-md-6" >
        <div class="card mb-3">
            <div class="card-body">
                <!--<img src="{{ $ctrl.movie.image }}" class="card-img-top" alt="image à rajouté">-->
                <h2 class="card-title">{{ $ctrl.movie.title }}</h2>
                <p class="card-text">{{ $ctrl.movie.description }}</p>
                <p class="card-text">Grade :
                    <span ng-repeat="grade in $ctrl.movie.grade"> {{ grade.star }} </span>
                </p>
                <p class="card-text">Comments:</p>
                <ul class="list-group">
                    <li class="list-group-item" ng-repeat="comment in $ctrl.movie.comments">{{ comment.user }}: {{ comment.data }}</li>
                </ul>
            </div>
        </div>
    </div>
    
    `
    ;


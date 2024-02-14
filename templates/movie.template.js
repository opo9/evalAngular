var MovieTemplate =
    `
    <h1>LCP Movies</h1>

    <a href="#/movie">Home</a>
    <a href="#/movies">Movies</a>
    <a href="#/login" ng-if="$ctrl.usersService.getCurrentUserId() == null">login</a>
    <button ng-if="$ctrl.usersService.getCurrentUserId() != null" ng-click="$ctrl.usersService.logout()">logout</button>
    <a href="#/admin" ng-if="$ctrl.usersService.isAdmin()">admin</a>

    <div class="col-md-6 mt-2" >
        <div class="card mb-3">
            <div class="card-body">
                <!--<img src="{{ $ctrl.movie.image }}" class="card-img-top" alt="image à rajouté">-->
                <h2 class="card-title">{{ $ctrl.movie.title }}</h2>
                <p class="card-text">{{ $ctrl.movie.desc }}</p>
                
                <p class="card-text">Average grade : </p>
                <p class="card-text">Comments:</p>
                <ul class="list-group">
                    <li class="list-group-item" ng-repeat="comment in $ctrl.movie.comments">{{ comment.user }}: {{ comment.data }}</li>
                </ul>
            </div>
        </div>
    </div>
    <form>
        <div class="form-group">
            <label for="exampleFormControlInput1">Note</label>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="1">
              <label class="" for="btnradio1"><i class="fa-regular fa-star" style="font-size: 2rem; color:#FFD43B; cursor:pointer"></i></label>
               
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="2">
              <label class="" for="btnradio1"><i class="fa-regular fa-star" style="font-size: 2rem;color:#FFD43B; cursor:pointer"></i></label>
            
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="3">
              <label class="" for="btnradio1"><i class="fa-regular fa-star" style="font-size: 2rem;color:#FFD43B; cursor:pointer"></i></label>
              
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="4">
              <label class="" for="btnradio1"><i class="fa-regular fa-star" style="font-size: 2rem;color:#FFD43B; cursor:pointer"></i></label>
              
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="5">
              <label class="" for="btnradio1"><i class="fa-regular fa-star" style="font-size: 2rem;color:#FFD43B; cursor:pointer"></i></label>
            </div>
        </div>
    </form>
    <form>
        <div class="form-group">
            <label for="exampleFormControlInput1">Commentaire</label>
            <textarea class="form-control" id="" placeholder=""></textarea>
        </div>
        <button class="btn btn-primary">Envoyer</button>
    </form>
    
`
;


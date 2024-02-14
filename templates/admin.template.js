var AdminTemplate= `
<h1>LCP Movies</h1>

<a href="#/">Home</a>
<a href="#/admin" ng-if="$ctrl.usersService.isAdmin()">admin</a>
    <table>
        <thead>
            <tr>
                <th ng-repeat="row in $ctrl.rows">{{row}}</th>
            </tr>
        </thead>

        <tbody>
            <tr ng-repeat="movie in $ctrl.movies track by $index" ng-value="{{$index}}">
                <td>{{movie.title}}</td>
                <td>{{movie.desc}}</td>
                <td>{{movie.averageGrade}}</td>
                <td>{{movie.numberOfGrade}}</td>
                <td><button ng-click=$ctrl.handleRemove($index)>Remove</button></td>
                <td><button ng-click=$ctrl.handleEdit($index)>edit</button></td>
                <td><input type="checkbox" ng-model="tache.checked" checked={{tache.checked}}></td>
            </tr>
        </tbody>
    </table>
`
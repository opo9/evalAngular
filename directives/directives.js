mvApp.directive('hide', function(){
    return {
        restrict: 'A',
        link : function(scope, element){
            element.css('display', 'none');

        }
    }
})
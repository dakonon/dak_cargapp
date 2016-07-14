angular.module('app.Directives')

.directive('blankDirective', [function(){

}])
.directive('focusMeNow', ['$timeout', function ($timeout)
{
    return {
        restrict: 'A',

        link: function (scope, element, attrs)
        {


            $timeout(function ()
            {
                element[0].focus();
            });



        }
    };
}])
;
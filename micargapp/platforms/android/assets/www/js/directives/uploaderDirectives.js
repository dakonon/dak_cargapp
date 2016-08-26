angular.module('app.Directives')


.directive('uploaderModel', ["$parse","$ionicPopup", function ($parse,$ionicPopup) {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) 
		{
			iElement.on("change", function(e)
			{
				$parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
				var alertPopup = $ionicPopup.alert({
                    title: 'Perfecto',
                    template: "Imagen cargada"
                });
			});
		}
	};
}])
.directive('appFilereader', ['$q', '$ionicPopup', function($q, $ionicPopup) {
    var slice = Array.prototype.slice;

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function() {};
                element.bind('change', function(e) {
                    var element = e.target;
                	console.log(element.files);
                	var size=0;
                	for (var i = element.files.length - 1; i >= 0; i--) {
                		size = size + element.files[i].size;
                	}
                    if (size > 5000000){
                    	var alertPopup = $ionicPopup.alert({
					    	title: 'Error!',
					     	template: 'Solo 5Mb permitidos'
		                });
		                return false;
                    }
                    if (element.files.length > 1){
                    	var alertPopup = $ionicPopup.alert({
					    	title: 'Error!',
					     	template: 'solo 1 imagen permitida'
		                });
		                return false;
                    }
                    $q.all(slice.call(element.files, 0).map(readFile))
                        .then(function(values) {
                            if (element.multiple) ngModel.$setViewValue(values);
                            else ngModel.$setViewValue(values.length ? values[0] : null);
                        });

                    function readFile(file) {
                        var deferred = $q.defer();

                        var reader = new FileReader();
                        reader.onload = function(e) {
                            deferred.resolve(e.target.result);
                        };
                        reader.onerror = function(e) {
                            deferred.reject(e);
                        };
                        reader.readAsDataURL(file);

                        return deferred.promise;
                    }

                }); //change

            } //link
    }; //return
}]);
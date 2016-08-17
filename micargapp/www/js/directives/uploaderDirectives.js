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
}]);
var app = angular.module("app", []);

app.controller("ctrLanguage", function ($scope) {
	$scope.index = "myOtherSkills";
	$scope.lang = "pl";
	$scope.setLanguage = function (data) {
		$scope.lang = data;
	};
});
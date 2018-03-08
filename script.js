var myApp = /**
* todoApp Module
*
* Description
*/
angular.module('todoApp', ['ngAnimate']).

controller('taskCon', ['$scope', function($scope){
	$scope.task='';
	$scope.tasks = ['Wake up','Get ready','Go to office'];

	$scope.insert = function(){
		$scope.tasks.push($scope.task);
		$scope.task='';
	}
	$scope.delete = function(arg){
		$scope.tasks.splice(arg,1);
	}
}]);

myApp.directive('qt', function() {
	return {
		restrict: 'E',
		templateUrl: 'dailog.html'
	};
});

myApp.directive('tAlert',function(){
	return{
		restrict: 'A',
		link: function($scope,$elem,$attr){
			$elem.click(function(){
				alert($elem[0].innerHTML);
			});
		}
	};
});
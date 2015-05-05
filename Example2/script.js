var app = angular.module('commentList', []);

app.controller('commentCtrl', function($scope){
	$scope.comments = [
		'This is the first comment!',
		'Here\'s the second one!',
		'And this is one more',
		'Here is another one!',
	];

	$scope.add = function(){
		$scope.comments.push($scope.newComment);
		$scope.newComment = '';
	};

	$scope.adding = function(e){
		if(e.which && e.which === 13){
			$scope.comments.push($scope.newComment);
			$scope.newComment = '';
		}
	};
});

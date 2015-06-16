app.controller('MainController', ['$scope', 'starwars', function($scope, starwars) {
  
  starwars.success(function(data) { 
    $scope.movies = data; 

  $scope.plusOne = function(index) { 
    data[index].likes += 1; 
  };
  $scope.minusOne = function(index) { 
    data[index].dislikes += 1; 
  };

  });

  
  }]);
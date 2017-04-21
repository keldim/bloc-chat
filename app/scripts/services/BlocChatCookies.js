(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      var modalInstance = $uibModal.open({
          templateUrl: '/templates/username.html',
          controller: function ($scope) {
              $scope.enterName = function (value) {
                  if (value) {
                    currentUser = value;
                    $cookies.put('blocChatCurrentUser', value)
                    modalInstance.dismiss(); 
                    console.log(currentUser);
                  } 
              };
            
          }
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
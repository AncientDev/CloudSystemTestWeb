app.controller('NavigationCtrl', ['$rootScope', '$scope', '$route','Socket', function($rootScope, $scope, $route, Socket) {

    $scope.$on('$routeChangeSuccess', function(next, current) {
        $scope.isActive = function(upi) {
            return upi == $route.current.upi;
        };
    });
    var json = { version: "0.0.1" };
    Socket.emit("version-req",json );

    Socket.on("version-res", function(data) {
        $scope.Version = data.version;
    });

}]);
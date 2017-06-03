app.controller('WorldCtrl', ['$rootScope', '$scope', 'Socket', '$filter', function($rootScope, $scope, Socket, $filter) {
    $scope.delete = ""
    Socket.emit("world-req","all" );
    $rootScope.setLoading(true);
	var json = { page: "worlds" };
    Socket.emit("page-req",json );

    Socket.on("page-res", function(data) {
        if(data.state == "error") {
            $rootScope.sendCallout(data.state, "An error occurred", data.message);
            $rootScope.setLoading(false);
            return;
        }

        if(data.state == "success") {
			console.log(data.content.title);
            $scope.title = data.content.title;
            $rootScope.setLoading(false);
            return;
        }

        $rootScope.sendCallout("warn", "Unexpected error", "An unexpected error occurred getting the Page-Content!");
        $rootScope.setLoading(false);

    });
    Socket.on("worldgroup-res", function(data) {
        $scope.worldgroups = data.groups;
    });
    Socket.on("worlds-res", function(data) {
        $scope.worlds = data.worlds;
    });
    $scope.isGroup = function (wg) {
        return function(world) {
            return world.groupid == wg.idg;
        }
    };
    $scope.sendDelete = function(title, message) {
        $scope.delete = "alert alert-danger";
        $scope.deleteTitle = title;
        $scope.deleteMessage = message;
    };
    $scope.removeDelete = function() {
        $scope.delete = "";
        $scope.deleteTitle = "";
        $scope.deleteMessage = "";
    }

}]);
app.controller('PluginCtrl', ['$rootScope', '$scope', 'Socket', '$filter', function($rootScope, $scope, Socket, $filter) {

    $rootScope.setLoading(true);
	var json = { page: "plugins" };
    Socket.emit("page-req",json );

    Socket.on("page-res", function(data) {
        if(data.state == "error") {
            $rootScope.sendCallout(data.state, "An error occurred", data.message);
            $rootScope.setLoading(false);
            return;
        }

        if(data.state == "success") {
            $scope.title = data.content.title;
            $rootScope.setLoading(false);
            return;
        }

        $rootScope.sendCallout("warn", "Unexpected error", "An unexpected error occurred getting the Page-Content!");
        $rootScope.setLoading(false);

    });

}]);
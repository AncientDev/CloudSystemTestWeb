app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when(('/dashboard' || '/'), {
            templateUrl: 'parts/dashboard.html',
            upi: 'mcs.page.dashboard',
        })
        .when(('/plugins' || '/'), {
            templateUrl: 'parts/plugins.html',
            upi: 'mcs.page.plugins'
        })
        .when(('/worlds'|| '/'), {
            templateUrl: 'parts/worlds.html',
            upi: 'mcs.page.worlds'
        })
        .when(('/bungeecrodgroups'|| '/'), {
            templateUrl: 'parts/groups/bungeecord.html',
            upi: 'mcs.page.groups.bcg'
        })
		.when(('/servergroups'|| '/'), {
            templateUrl: 'parts/groups/server.html',
            upi: 'mcs.page.groups.sg'
        })
		.when(('/sysgroups'|| '/'), {
            templateUrl: 'parts/groups/system.html',
            upi: 'mcs.page.groups.sysg'
        })
		.when(('/plgroups'|| '/'), {
            templateUrl: 'parts/groups/plugin.html',
            upi: 'mcs.page.groups.plg'
        })
		.when(('/worldgroups'|| '/'), {
            templateUrl: 'parts/groups/world.html',
            upi: 'mcs.page.groups.worldg'
        })
        .when(('/settings'|| '/'), {
            templateUrl: 'parts/settings.html',
            upi: 'mcs.page.settings'
        })
        .otherwise({
            templateUrl: 'parts/dashboard.html',
            upi: 'mcs.page.dashboard'
        });
        $locationProvider.hashPrefix('');
        //$locationProvider.html5Mode(true);

});

var ngApp = angular.module('ngApp', ['ui.router']);
ngApp.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('Dashboard', {
        url: '/Dashboard',
        views: {
            //template for main view -> Dashboard
            '': { templateUrl: '/App/Dashboard/Partials/Dashboard.html' },
            //child view (viewname@statename)
            'KPIAccountActivity@Dashboard': {
                templateUrl: '/App/Dashboard/Partials/KPIAccountActivity.html',
                controller: 'kpiAccountActivityController'
            },
            'KPIActiveAgents@Dashboard': {
                templateUrl: '/App/Dashboard/Partials/KPIActiveAgents.html',
                controller: 'kpiActiveAgentsController'
            },
            'KPILiveStats@Dashboard': {
                templateUrl: '/App/Dashboard/Partials/KPILiveStats.html',
                controller: 'kpiLiveStatsController'
            },
            'TaskQueue@Dashboard': {
                templateUrl: '/App/Dashboard/Partials/TaskQueue.html',
                controller: 'taskQueueController'
            }
        }
    });
}]);
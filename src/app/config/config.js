export function Config($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'LoginController',
            templateUrl: 'app/login/login.html'
        })
        .when('/app', {
            controller: 'AppController',
            templateUrl: 'app/app.html'
        });
}

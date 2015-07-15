(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = AppController;

function AppController() {}

},{}],2:[function(require,module,exports){
'use strict';

var _configConfig = require('./config/config');

var _appController = require('./app.controller');

var _loginLoginController = require('./login/login.controller');

var _youYouController = require('./you/you.controller');

var _settingsSettingsController = require('./settings/settings.controller');

var _friendsFriendsController = require('./friends/friends.controller');

var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(_configConfig.Config);
app.controller('AppController', [_appController.AppController]);
app.controller('LoginController', [_loginLoginController.LoginController]);
app.controller('YouController', [_youYouController.YouController]);
app.controller('SettingsController', ['$timeout', _settingsSettingsController.SettingsController]);
app.controller('FriendsController', ['$timeout', _friendsFriendsController.FriendsController]);

},{"./app.controller":1,"./config/config":3,"./friends/friends.controller":4,"./login/login.controller":5,"./settings/settings.controller":6,"./you/you.controller":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.Config = Config;

function Config($routeProvider) {
    $routeProvider.when('/', {
        controller: 'LoginController',
        templateUrl: 'app/login/login.html'
    }).when('/app', {
        controller: 'AppController',
        templateUrl: 'app/app.html'
    });
}

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.FriendsController = FriendsController;

function FriendsController($timeout) {
    var vm = this;

    vm.salvar = salvar;
    vm['null'] = function () {
        return;
    };
    vm.people = [{ name: 'Tiago Cedrim', avatar: 'assets/photo.jpg' }, { name: 'Diego Cedrim', avatar: 'assets/photo(1).jpg' }, { name: 'Marcos Pereira Jr', avatar: 'assets/photo(2).jpg' }];

    function salvar() {
        vm.loading = true;

        $timeout(function () {
            vm.loading = false;
            vm.confirmed = true;
        }, 3000).then(function () {
            return $timeout(function () {
                vm.confirmed = false;
                vm.selectedItem = undefined;
                vm.searchText = undefined;
            }, 3000);
        });
    }
}

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginController = LoginController;

function LoginController() {}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.SettingsController = SettingsController;

function SettingsController($timeout) {
    var vm = this;

    vm.salvar = salvar;
    vm.user = {
        name: 'Robert Luiz',
        last: 'Knowles',
        phone: '+55 (82) 99999-2345',
        email: 'rlknowles@gmail.com',
        cpf: '111.222.333-44'
    };

    function salvar() {
        vm.loading = true;

        $timeout(function () {
            vm.loading = false;
            vm.confirmed = true;
        }, 3000).then(function () {
            return $timeout(function () {
                vm.confirmed = false;
            }, 3000);
        });
    }
}

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YouController = YouController;

function YouController() {}

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbHVpei9Eb2N1bWVudHMvQ29kZS9JRkFML2xlaWFtYWlzL3NyYy9hcHAvYXBwLmNvbnRyb2xsZXIuanMiLCIvVXNlcnMvbHVpei9Eb2N1bWVudHMvQ29kZS9JRkFML2xlaWFtYWlzL3NyYy9hcHAvYXBwLmpzIiwiL1VzZXJzL2x1aXovRG9jdW1lbnRzL0NvZGUvSUZBTC9sZWlhbWFpcy9zcmMvYXBwL2NvbmZpZy9jb25maWcuanMiLCIvVXNlcnMvbHVpei9Eb2N1bWVudHMvQ29kZS9JRkFML2xlaWFtYWlzL3NyYy9hcHAvZnJpZW5kcy9mcmllbmRzLmNvbnRyb2xsZXIuanMiLCIvVXNlcnMvbHVpei9Eb2N1bWVudHMvQ29kZS9JRkFML2xlaWFtYWlzL3NyYy9hcHAvbG9naW4vbG9naW4uY29udHJvbGxlci5qcyIsIi9Vc2Vycy9sdWl6L0RvY3VtZW50cy9Db2RlL0lGQUwvbGVpYW1haXMvc3JjL2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5jb250cm9sbGVyLmpzIiwiL1VzZXJzL2x1aXovRG9jdW1lbnRzL0NvZGUvSUZBTC9sZWlhbWFpcy9zcmMvYXBwL3lvdS95b3UuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O1FDQWdCLGFBQWEsR0FBYixhQUFhOztBQUF0QixTQUFTLGFBQWEsR0FBRyxFQUUvQjs7O0FDRkQsWUFBWSxDQUFDOzs0QkFFUSxpQkFBaUI7OzZCQUNWLGtCQUFrQjs7b0NBQ2hCLDBCQUEwQjs7Z0NBQzVCLHNCQUFzQjs7MENBQ2pCLGdDQUFnQzs7d0NBQ2pDLDhCQUE4Qjs7QUFFOUQsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQzs7QUFFM0QsR0FBRyxDQUFDLE1BQU0sZUFURixN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R0FBRyxLQUFLLENBQUM7QUFDbkIsY0FBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkIsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBVztBQUNyQixtQkFBTyxRQUFRLENBQUMsWUFBVztBQUN2QixrQkFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaLENBQUMsQ0FBQztLQUNOO0NBQ0o7Ozs7Ozs7O1FDeEJlLGFBQWEsR0FBYixhQUFhOztBQUF0QixTQUFTLGFBQWEsR0FBRyxFQUUvQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gQXBwQ29udHJvbGxlcigpIHtcblxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQge0NvbmZpZ30gZnJvbSAnLi9jb25maWcvY29uZmlnJztcbmltcG9ydCB7QXBwQ29udHJvbGxlcn0gZnJvbSAnLi9hcHAuY29udHJvbGxlcic7XG5pbXBvcnQge0xvZ2luQ29udHJvbGxlcn0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb250cm9sbGVyJztcbmltcG9ydCB7WW91Q29udHJvbGxlcn0gZnJvbSAnLi95b3UveW91LmNvbnRyb2xsZXInO1xuaW1wb3J0IHtTZXR0aW5nc0NvbnRyb2xsZXJ9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MuY29udHJvbGxlcic7XG5pbXBvcnQge0ZyaWVuZHNDb250cm9sbGVyfSBmcm9tICcuL2ZyaWVuZHMvZnJpZW5kcy5jb250cm9sbGVyJztcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nTWF0ZXJpYWwnLCAnbmdSb3V0ZSddKTtcblxuYXBwLmNvbmZpZyhDb25maWcpO1xuYXBwLmNvbnRyb2xsZXIoJ0FwcENvbnRyb2xsZXInLCBbQXBwQ29udHJvbGxlcl0pO1xuYXBwLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIFtMb2dpbkNvbnRyb2xsZXJdKTtcbmFwcC5jb250cm9sbGVyKCdZb3VDb250cm9sbGVyJywgW1lvdUNvbnRyb2xsZXJdKTtcbmFwcC5jb250cm9sbGVyKCdTZXR0aW5nc0NvbnRyb2xsZXInLCBbJyR0aW1lb3V0JywgU2V0dGluZ3NDb250cm9sbGVyXSk7XG5hcHAuY29udHJvbGxlcignRnJpZW5kc0NvbnRyb2xsZXInLCBbJyR0aW1lb3V0JywgRnJpZW5kc0NvbnRyb2xsZXJdKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBDb25maWcoJHJvdXRlUHJvdmlkZXIpIHtcbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAud2hlbignLycsIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbG9naW4vbG9naW4uaHRtbCdcbiAgICAgICAgfSlcbiAgICAgICAgLndoZW4oJy9hcHAnLCB7XG4gICAgICAgICAgICBjb250cm9sbGVyOiAnQXBwQ29udHJvbGxlcicsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9hcHAuaHRtbCdcbiAgICAgICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gRnJpZW5kc0NvbnRyb2xsZXIoJHRpbWVvdXQpIHtcbiAgICBsZXQgdm0gPSB0aGlzO1xuXG4gICAgdm0uc2FsdmFyID0gc2FsdmFyO1xuICAgIHZtLm51bGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgdm0ucGVvcGxlID0gW1xuICAgICAgICB7bmFtZTogJ1RpYWdvIENlZHJpbScsIGF2YXRhcjogJ2Fzc2V0cy9waG90by5qcGcnfSxcbiAgICAgICAge25hbWU6ICdEaWVnbyBDZWRyaW0nLCBhdmF0YXI6ICdhc3NldHMvcGhvdG8oMSkuanBnJ30sXG4gICAgICAgIHtuYW1lOiAnTWFyY29zIFBlcmVpcmEgSnInLCBhdmF0YXI6ICdhc3NldHMvcGhvdG8oMikuanBnJ30sXG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIHNhbHZhcigpIHtcbiAgICAgICAgdm0ubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB2bS5jb25maXJtZWQgPSB0cnVlO1xuICAgICAgICB9LCAzMDAwKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZtLmNvbmZpcm1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZtLnNlbGVjdGVkSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2bS5zZWFyY2hUZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBMb2dpbkNvbnRyb2xsZXIoKSB7XG5cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBTZXR0aW5nc0NvbnRyb2xsZXIoJHRpbWVvdXQpIHtcbiAgICBsZXQgdm0gPSB0aGlzO1xuXG4gICAgdm0uc2FsdmFyID0gc2FsdmFyO1xuICAgIHZtLnVzZXIgPSB7XG4gICAgICAgIG5hbWU6ICdSb2JlcnQgTHVpeicsXG4gICAgICAgIGxhc3Q6ICdLbm93bGVzJyxcbiAgICAgICAgcGhvbmU6ICcrNTUgKDgyKSA5OTk5OS0yMzQ1JyxcbiAgICAgICAgZW1haWw6ICdybGtub3dsZXNAZ21haWwuY29tJyxcbiAgICAgICAgY3BmOiAnMTExLjIyMi4zMzMtNDQnXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNhbHZhcigpIHtcbiAgICAgICAgdm0ubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB2bS5jb25maXJtZWQgPSB0cnVlO1xuICAgICAgICB9LCAzMDAwKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZtLmNvbmZpcm1lZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBZb3VDb250cm9sbGVyKCkge1xuXG59XG4iXX0=

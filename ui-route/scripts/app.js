/**
 * Created by
 * User: ZzzAoo
 * Date: 2016/11/30.
 */
angular.module('bowerApp', ['ui.router'])
    .config(function ($stateProvider,$urlRouterProvider,$logProvider) {
        $logProvider.debugEnabled(true);
        // $stateProvider
        //     .state('A',{
        //         url:'/',
        //         templateUrl:'content.html'
        //     })
        //     .state('B',{
        //         url:'/',
        //         templateUrl:'B.html'
        //     })
        //     .state('C',{
        //         url:'/',
        //         templateUrl:'B.html'
        //     })
            $stateProvider
            .state('home',{
                url: "/home",
                views:{
                    "header":{
                        templateUrl:'header.html'
                    },
                    "content":{
                        templateUrl:"content.html"
                    },
                    'h1@home':{//h1@home h1为header中的view，home 为指定state名字
                        templateUrl:'h1.html'
                        // controller:'headerChildrenController'
                    }
                }
            })
            .state('home.A',{
                url:'/A',
                views:{
                    "header@home":{
                        templateUrl:'header.html'
                    },
                    "content@home":{
                        templateUrl:"content.html"
                    }
                }
            })
            .state('home.B',{
                url:'/',
                views:{
                    "header":{
                        templateUrl:'header.html'
                    },
                    "content":{
                        templateUrl:"B.html"
                    }
                }
            })
        $urlRouterProvider.when("", "/home");
        $urlRouterProvider.otherwise('/home');
    })
    .run(['$rootScope', '$log', function($rootScope, $log){
        // $rootScope.$state = $state;
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            $log.debug('successfully changed states') ;
            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });

        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
            $log.error('The request state was not found: ' + unfoundState);
        });

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
            $log.error('An error occurred while changing states: ' + error);

            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });
    }])
    // .controller('headerChildrenController',function ($scope) {
    //     $scope.h_c_modalName='ZzzAoo'
    // })
    // .state('00',{
    //     url: "/00",
    //     views:{
    //         "header":{
    //             templateUrl:'content.html'
    //         },
    //         "content":{
    //             templateUrl:"B.html"
    //         }
    //     }
    // })
;
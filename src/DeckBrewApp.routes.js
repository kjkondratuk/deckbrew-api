/**
 * Created by Administrator on 6/10/2016.
 */
(function() {
    'use strict';
    angular.module('DeckBrewApp').config(DeckBrewAppConfig);

    DeckBrewAppConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
    
    function DeckBrewAppConfig($stateProvider, $urlRouterProvider) {
        
        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    templateUrl: '/src/layout/layout.html'
                },
                "header@home": {
                    templateUrl: '/src/layout/header.html'
                },
                "sidebar@home": {
                    templateUrl: '/src/layout/sidebar.html'
                },
                "body@home": {
                    templateUrl: '/src/layout/body.html',
                    controller: 'DeckBrewAppController as deckBrew'
                },
                "footer@home": {
                    templateUrl: '/src/layout/footer.html'
                }
            }
        });

        $urlRouterProvider.otherwise('/home');
    }
})();
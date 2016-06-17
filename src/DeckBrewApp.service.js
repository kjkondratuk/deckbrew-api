/**
 * Created by Administrator on 6/13/2016.
 */
(function() {
    'use strict';
    angular.module('DeckBrewApp').service('DeckBrewAppService', DeckBrewAppService);

    DeckBrewAppService.$inject = [ '$http' ];

    function DeckBrewAppService($http) {

        return {
            getCards: getCards
        }

        function getCards() {
            return $http.get('https://api.deckbrew.com/mtg/cards?page=5');
        }
    }
})();


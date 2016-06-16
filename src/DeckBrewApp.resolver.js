(function() {
    'use strict';

    angular.module('DeckBrewApp').service('DeckBrewResolver', DeckBrewResolver);

    DeckBrewResolver.$inject = [ 'DeckBrewAppService' ];

    function DeckBrewResolver(deckBrewAppService) {
        function getCards() {
            function success(response) {
                var pageData = [];

                for (var i = 0; i < response.data.length; i += 5) {
                    var line = [];
                    pushIfPresent(line, response.data[i]);
                    pushIfPresent(line, response.data[i + 1]);
                    pushIfPresent(line, response.data[i + 2]);
                    pushIfPresent(line, response.data[i + 3]);
                    pushIfPresent(line, response.data[i + 4]);
                    console.log(line);
                    pageData.push(line);
                }

                console.log(pageData);
                return pageData;
            }

            function fail(response) {
                console.log(response);
                return [];
            }

            return deckBrewAppService.getCards().then(success, fail);
        }

        return {
            getCards: getCards
        }
    }

    function pushIfPresent(list, value) {
        if(value != null) {
            list.push(value);
        }
    }
})();
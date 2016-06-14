/**
 * Created by Administrator on 6/11/2016.
 */
(function() {
    'use strict';

    angular.module('DeckBrewApp').controller('DeckBrewAppController', DeckBrewAppController);

    DeckBrewAppController.$inject = [ 'data' ];

    function DeckBrewAppController(data) {
        var vm = this;
        vm.data = data;
    }
})();
(function(){
  'use restrict'

  angular.module('ShoppingListApp',[])
  .controller('ShoppingListController',ShoppingListController)
  .provider('ShoppingListService',ShoppingListServiceProvider)
  .config(Config);

  Config.$inject = ['ShoppingListServiceProvider'];
  function Config(ShoppingListServiceProvider) {
    ShoppingListServiceProvider.defaults.maxItem = 2;
  }

  ShoppingListController.$inject = ['ShoppingListService'];
  function ShoppingListController(ShoppingListService){
      var list = this;

      list.items = ShoppingListService.getItems();

      list.itemName = "";
      list.itemQuantity = "";

      list.addItem = function(){
        try{
            ShoppingListService.addItem(list.itemName + list.itemQuantity);
        }
        catch(error){
          list.errorMessage = error.message;
        }
      }
      list.removeItem = function(itemIndex){
        ShoppingListService.removeItem(itemIndex);
      }
  }

// if not specified,maxItem assumed unlimited
  function ShoppingListService(maxItem){
    var service = this;
    //List of Shopping items
    var items = [];
    service.addItem = function(itemName,quantity){
      if((maxItem === undefined) || (maxItem !== undefined) && (items.length < maxItem)){
      var item = {
        name: itemName,
        quantity: quantity
    };
      items.push(item);
    }
    else{
        throw new Error("Max item(" + maxItem + ") reached.")
    }
  };
    service.getItems = function(){
      return items;
    }
    service.removeItem = function(itemIndex){
      items.splice(itemIndex,1);
    }
  }

  function ShoppingListServiceProvider(){
    var provider = this;
    provider.defaults ={
      maxItem : 10
    };
    provider.$get = function () {
        var shoppingList = new ShoppingListService(provider.defaults.maxItem)
        return shoppingList;
    }

  }
})()

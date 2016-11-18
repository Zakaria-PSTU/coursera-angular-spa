var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number Array: ",numberArray);

function above5Number(value) {
 return value > 5;
}
var filteredArray = numberArray.filter(above5Number);

console.log("Filtered Array : ",filteredArray);

var shoppingList = [
  "Milk","Donuts","Cookies","Chocolate","Peanut Butter","Chocolate Cake"
]

var searchValue = "Chocolate";
function containsFilter(value){
  return value.indexOf(searchValue) !== -1;
}
 var searchShoppingList = shoppingList.filter(containsFilter);
 console.log("Search Shopping List",searchShoppingList);

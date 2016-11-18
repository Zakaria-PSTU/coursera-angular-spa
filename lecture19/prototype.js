var parent = {
  value : "parentValue",
  obj : {
    objValue: "parentObjValue"
  },
  walk : function(){
    console.log("walking!");
  }
};

var child = Object.create(parent);
console.log("Child - child.value : ",child.value)
console.log("Child - child.obj.objValue : ",child.obj.objValue)
console.log("Parent - parent.value : ",parent.value)
console.log("Parent - parent.obj.objValue : ",parent.obj.objValue)
console.log("parent : ",parent)
console.log("child : ",child)

child.value = "childValue";
child.obj.objValue = "childObjValue";

console.log("Child - child.value : ",child.value)
console.log("Child - child.obj.objValue : ",child.obj.objValue)
console.log("Parent - parent.value : ",parent.value)
console.log("Parent - parent.obj.objValue : ",parent.obj.objValue)
console.log("parent : ",parent)
console.log("child : ",child)

console.log("child.obj === parent.obj ?",child.obj === parent.obj);

var grandChild = Object.create(child);
console.log("grandChild : ",grandChild);
grandChild.walk();

function Dog(name){
  this.name = name;
  console.log("this is :",this);
}
 var myDog = new Dog("Max");
 console.log("myDog :",myDog);

 Dog("Max2");

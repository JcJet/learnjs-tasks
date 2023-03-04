//Работает:
function obj(name) {
  this.name = name;
  alert(name);
}

//Не будет работать:
function anotherObj(name) {
  this.name = name;
  alert(name);
  this.prototype = { count: 10};
}

let obj2 = new obj.constructor();
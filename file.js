function Organism(){
}
Organism.prototype.isAlive = function(){
  this.age < 110 ? true : false
}

function Creater(){
}
Creater.prototype = Object.create(Organism.prototype)
Creater.prototype.constructor = Creater;
Creater.prototype.getAge = function(){
  return this.age
}

function Persone(){
}
Persone.prototype = Object.create(Creater.prototype)
Persone.prototype.constructor = Persone;
Persone.prototype.sayHi = function(){
  return `Hello ${this.name}`;
}

const Boy = function(options){
  this.name = options.name;
  this.age = options.age;
  this.color = options.color;
}

Boy.prototype = Object.create(Persone.prototype)
Boy.prototype.constructor = Boy;
Boy.prototype.getFavoriteColor = function(){
  return this.color
}


const john = new Boy({name:'John',age: 33,color:'blue'})

console.log(john)

const Girl = function(options){
  this.name = options.name;
  this.age = options.age;
  this.color = options.color;
}

Girl.prototype = Object.create(Persone.prototype);
Girl.prototype.constructor = Girl;
Girl.prototype.getFavoriteColor = function(){
  return this.color
}

const Bella = new Girl({name:'Bella', age:12, color:'green'})
console.log(Bella)
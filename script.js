//traditional way
//constructors : Human which creates instancces
function Human(firstName, lastName, age) {
  // console.log(this);
  this.firstName = firstName; // props
  this.lastName = lastName; //props
  this.age = age; //props
  //method
  this.sayName = function() {
    console.log(`I am ${firstName} ${lastName} ${age}`);
  };
}
const praason = new Human("jhon", "payn", 28); //instances
const tra = new Human("tin", "kane", 23);

///new ways
class HumanClass {
  constructor(firstName, lastName, age) {
    this.firstName = firstName; // props
    this.lastName = lastName; //props
    this.age = age; //props
  }
  sayName = function() {
    console.log(`I am ${firstName} ${lastName} ${age}`);
  };
}

const vars = new HumanClass("vars", "son", 11);
console.log(vars.firstName);

//classses is blupring of object
//class can have many objects

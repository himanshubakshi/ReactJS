
var oldJsonObj = new Object();
oldJsonObj.name = 'oldJsonObj himanshu'
oldJsonObj.age = 12
oldJsonObj.eat = function(){
    console.log(`${this.name} aged ${this.age} is eating`);
}
oldJsonObj.eat();

var name = 'himanshu'
var age = 12

var person = {
    name,
    age,
    eat()
    {
      console.log(`${name} aged ${age} is eating`);
    }
}

person.eat();

var oldPerson = {
    name: name,
    age: age,
    eat: function()
    {
      console.log(`oldperson: ${name} aged ${age} is eating`);
    }
}

oldPerson.eat();

//
// // jQuery syntax
// $.ajax({
//   url: '',
//   success(response){},
//   error(response){},
//   beforeSend(){}
// })

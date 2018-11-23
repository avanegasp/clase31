function Persona(firstName, lastName, age, size){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.size = size
  this.info = function(){
    return `mi nombre es ${firstName} y mi apellido es ${lastName}, tengo ${age} y mido ${size}`
  }
  this.adult = function(){ // Persona.prototype.adult
    if (age > 18) {
    return "soy mayor de edad"
}else{
    return "soy menor de edad"
     }
  }
  this.age = function(){
    return age++
  }
}

person = new Persona("Angie", "Vanegas", 32, 1.60)

console.log(person)
console.log(person.info())
console.log(person.adult())
console.log(person.age())

// Persona.prototype.fullInfo = function(){
//   console.log(`mi nombre es ${this.firstName} y mi apellido es ${this.lastName}, tengo ${this.age} y mido ${this.size}`)
// }

// Persona.prototype.info = function(){
//   console.log(`mi nombre es ${firstName} y mi apellido es ${lastName}, tengo ${age} y mido ${size}`)
// }

Persona.prototype.age = function(){
  return age++
}


// console.log(person.fullInfo())
// hombre =  function(firstName, lastName, age, size){
//   this.gender = "Male"
//   Persona.call(this, firstName, lastName, age, size)
// }
//
// console.log(hombre.contructor)
//
// hombre.constructor = Persona()
//
// let yony = new Hombre("Yony", "Briñez", 29, 1.70)
// console.log(yony)

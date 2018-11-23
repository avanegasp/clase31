/*Funcion Constructora de Person*/

/*
	age es un default parameter, ojo esta al final por algo
 	leer https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Parametros_por_defecto
*/
Person = function(firstName,lastName,age=0){
	this.firstName=firstName
	this.lastName= lastName
	this.age = age
}

Person.prototype.info= function (){
	return `hola soy ${this.firstName} ${this.lastName} y tengo ${this.age} años`
}

Person.prototype.happyBirthday = function(){
	this.age= this.age +1
	return 'cumpli '+ this.age + 'años'
}

Person.prototype.isOld = function(){

	return this.age>18
}

/* Funcion constructora de Hombre*/

Hombre = function(firstName,lastName,age=0){
	Person.call(this, firstName,lastName,age)
	this.gender= 'Masculino'
}

Hombre.prototype= Person.prototype  // asignamos del prototype de Person al prototype Hombre "lo copiamos"

Hombre.prototype.info= function (){
	return `hola soy ${this.firstName} ${this.lastName}, tengo ${this.age} años y me identifico con el genero ${this.gender}`
}

Person.prototype.saiBye= function(){
	return 'bye bye'
}


ferney = new Hombre('ferney','Medina',26)

console.log(ferney.info())
console.log(ferney.isOld())
console.log(ferney.happyBirthday())
console.log(ferney.info())
console.log(ferney.happyBirthday())
console.log(ferney.info())


/* Funcion constructora de Mujer*/
Mujer = function (firstName,lastName,age=0){
	Hombre.call(this,firstName,lastName,age)
	this.gender= 'Femenino' // sobre escribimos este atributo
}

Mujer.prototype = Hombre.prototype


angie = new Mujer('angie','vanegas') // y si no le pasamos parametro ?

console.log(angie.info())
console.log('soy mayor de edad ?: '+ angie.isOld())
console.log(angie.happyBirthday())
console.log(angie.info())
console.log(angie.happyBirthday())
console.log(angie.info())

import React from 'react'

//simple class :-
class Car{
    constructor(name){
        this.brand = name;
    }
    present(){
        return 'I have a ' + this.brand;
    }
}

class Model extends Car{
    constructor(name, mod){
        super(name); //for parent constructor
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

//object creation:-
const myCar = new Car("Ford");
myCar.present();

const mycar1 = new Model("BMW", "Mustang");
mycar1.show();

const Classes = () => {
  return (
    <>
        <h2>Classes - Introduced in ES6.</h2>
        <p>A class is a type of function, but instead of using function keyword to initiate it, we use class keyword, and properties are assigned inside a constructor() method.</p>
        <p>The constructor function is called automatically when the object is initialized.</p>
        <h2>Class Inheritance</h2>
        <p>Inherited class Inherits all the methods & properties from other class.</p>
        <p>For Inheritance <b>extends</b> keyword is used.</p>
        <p>The <b>super()</b> method refers to the parent class.</p>
        <p>By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.</p>
    </>
  )
}

export default Classes;
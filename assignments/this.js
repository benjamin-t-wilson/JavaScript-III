/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - binds to the window as the outermost bindable thing when not given anything else to bind to
* 2. Implicit Binding - binds to the thing that makes the most sense
* 3. Explicit Binding - binds to what it is told
* 4. New Binding - binds to an object to be created
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
//console.log(this);

// Principle 2

// code example for Implicit Binding
const simpsonBoy = {
    name: "Bart",
    phrase: "Eat my shorts!",
    thirdPerson: function() {
        return `${this.name} says ${this.phrase}`;
    },
};
console.log(simpsonBoy.thirdPerson());

// Principle 3

// code example for New Binding
function Simpson(stuff) {
    this.name = stuff.name,
    this.phrase = stuff.phrase,
    this.thirdPerson = function() {
        return `${this.name} says ${this.phrase}`;
    }
};
const simpsonMom = new Simpson({
    name: "Marge",
    phrase: "Hmmmmmm, worriedly",
});
console.log(simpsonMom.thirdPerson());

// Principle 4

// code example for Explicit Binding
const simpsonDad = {
    name: "Homer",
    phrase: "Doh!",
};
function thirdPerson() {
    return `${this.name} says ${this.phrase}`;
};
console.log(thirdPerson.call(simpsonDad));
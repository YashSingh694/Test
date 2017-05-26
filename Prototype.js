var myFather = new person("Hira","Singh", 65, "Black")
var myMother = new person("Ganga","Devi", 60, "Brown")
var myBrother = new person("Dev","Singh", 25, "Black")
var mySister = new person("Lil","Sis", 20, "Brown")



function person(firstname,lastname,age,eyecolor)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eyecolor=eyecolor;
}

console.log(myFather);
console.log(myMother);
console.log(myBrother);
console.log(mySister);


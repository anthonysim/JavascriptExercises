/*
Coding Challenge 4

1. Create an object with properties for each person's
full name, mass, and height.
2. Add a method to each object to calculate the
BMI. save the BMI to the object and also return
it from the method. 
3. Log to the console who has the highest BMI.
Account for same BMI.
*/

let mark = {
    name: 'Mark',
    mass: 78, // in kilograms
    height: 1.69, // in meters
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2 ); // this refers to it's own object, "this" refers to mark.
        return this.bmi
    }
};

let john = {
    name: 'John',
    mass: 92, // in kilograms
    height: 1.95, // in meters
    calcBMI: function () {
        this.bmi = this.mass / (this.height ** 2 ); // this refers to it's own object, "this" refers to john.
        return this.bmi
    }
};

markBMI = mark.calcBMI();
johnBMI = john.calcBMI();

if (markBMI > johnBMI) {
    console.log('Mark has a higher BMI than John:', markBMI);
} else if (markBMI > johnBMI) {
    console.log('John has a higher BMI than Mark:', johnMBI);
} else {
    console.log('Both Mark & John have the same BMI', markBMI);
}

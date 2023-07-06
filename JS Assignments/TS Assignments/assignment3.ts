


// Create a function which accepts two arguments, (startPoint, endPoint). it would return an array. 
// check each and every number from starting point to ending point, 
// if the number the is multiple of 3 its array would print Foo and if the number is multiple of 5 then it should print Bar. 
// if the number is multiple of 3 and 5 then it should print FooBar. If the number doesn't match then print the number as it is.

// e.g
// start point = 0
// end point = 15

// return = [0, 1, 2, 'Foo', 4 , 'Bar', 'Foo', 7, 8, 'Foo', 'Bar', 11, 'Foo', 13, 14, 'FooBar']



function myFunc(startPoint: number, endPoint: number): Array<string | number> {

    let arr: Array<string | number> = [];

    for (let i = startPoint; i <= endPoint; i++) {
        
        if (i % 3 == 0 && i % 5 == 0) {
            arr.push("FooBar");
        } else if (i % 3 == 0) {
            arr.push("Foo");
        } else if (i % 5 == 0) {
            arr.push("Bar")
        } else {
            arr.push(i);
        }

    }

    return arr;
}

let arr = myFunc(5, 15);
arr.forEach(item => {
    console.log(item);
})

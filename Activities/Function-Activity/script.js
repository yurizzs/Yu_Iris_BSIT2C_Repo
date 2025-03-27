// function whatShallIWear (temp) {
//     if (temp < 60) {
//         console.log("Wear a jacket");
//     } else if (temp < 70) {
//         console.log("Wear a sweater");
//     } else {
//         console.log("Wear t-shirt");
//     }
// }

// whatShallIWear(50);
// whatShallIWear(80);
// whatShallIWear(60);


function calculateArea(r) {
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

var radius = 5.2;

var theArea = calculateArea(radius);

console.log("the area is: " + theArea);

// fullname
function named(firstName, lastName) {
    var fullNamed = firstName + " " + lastName;
    
    // fullNamed = firstName + " " + lastName;
    return fullNamed;
}

var firstName = "Iris Tiffany";
var lastName = "Yu";
var fullName = named(firstName, lastName);

console.log("My Fullname is " + fullName);
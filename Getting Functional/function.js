// var dogName = "ice";
// var dogWeight = 10;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// } else {
//     console.log(dogName + " says woof woof");
// }

// dogName = "kopiko";
// dogWeight = 23;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// } else {
//     console.log(dogName + " says woof woof");
// }

// dogName = "panda";
// dogWeight = 28;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// } else {
//     console.log(dogName + " says woof woof");
// }

// dogName = "chester";
// dogWeight = 5;
// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// } else {
//     console.log(dogName + " says woof woof");
// }

function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}

// bark(prompt("Enter dogname"), prompt("Enter dog weight"));

bark("ice", 10);
bark("kopiko", 23);
bark("panda", 28);
bark("chester", 5);
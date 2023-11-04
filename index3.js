// Create a function that takes in a single parameter and returns a new promise. Using
// setTimeout, after 500 milliseconds, the promise will either resolve or reject some value. If
// the parameter of the function is a string, the promise resolves with that same string
// uppercased. If the parameter of the function is anything but a string, it rejects with that same
// value.

function getParam (input) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if(typeof input === "string") {
                resolve(input.toUpperCase());
            } else {
                reject(input)
            }
        }, 500)
    })
}


console.log(getParam("ffghh"));
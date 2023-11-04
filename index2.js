// Create a function named squarePromise, that takes a promise that resolves with a
// number or a string. Function should return a promise such that:
// ● If the input promise resolves with a number, the output promise resolves with the
// square of that number.
// ● If the input promise resolves with a string that we can turn into a number (like
// "1234"), the output promise resolves with the square of that number (1522756 in
// this example)
// ● If the input promise resolves with a string that we cannot turn into a number (like
// "asdf"), then we reject with a message like "Cannot convert 'asdf' to a
// number!"
// ● If the input promise rejects with an error, the output promise rejects with the same
// error

function squarePromise(inputProm) {
    return new Promise((resolve, reject) => {
        inputProm
            .then((value) => {
                if (typeof value === "number") {
                    resolve(value * value);
                } else if (!isNaN(Number(value))) {
                    resolve(Number(value) * Number(value));
                } else {
                    resolve(`Cannot convert ${value}  to a number!`);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const numberPromise = Promise.resolve(5);
const stringNumberPromise = Promise.resolve("1234");
const nonNumericStringPromise = Promise.resolve("asdf");
const errorPromise = Promise.reject("Some error");

squarePromise(numberPromise)
.then(result => {console.log("Result:", result);
})
.catch(error => console.log("Error:", error));

squarePromise(stringNumberPromise)
.then(result => {console.log("Result:", result);
})
.catch(error => console.log("Error:", error));

squarePromise(nonNumericStringPromise)
.then(result => {console.log("Result:", result);
})
.catch(error => console.log("Error:", error));

squarePromise(errorPromise)
.then(result => {console.log("Result:", result);
})
.catch(error => console.log("Error:", error));
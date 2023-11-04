// Create a function named mapPromise that can take in a promise and a transformer
// function and return a new transformed promise that follows these rules:
// ● If the first promise rejects with an error, the new promise rejects with that error.
// ● If the first promise resolves with a result, it calls the transformer with the value as an
// argument.
// ○ If the transformer returns with a value, the new promise resolves with that
// value.
// ○ If the transformer throws an error, the new promise rejects with that error.

function mapPromise(promise, transformer) {
    return new Promise((resolve, reject) => {
        promise
            .then((result) => {
                try {
                    let valeu = transformer(result);
                    resolve(valeu);
                } catch (error) {
                    reject(error);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const myPromise = new Promise((resolve, reject) => {
    resolve(2);
});
const timesTwo = (val) => val * 2;
mapPromise(myPromise, timesTwo)
.then(result => console.log(result))
.catch(error => console.error(error));

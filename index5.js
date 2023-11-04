// What will be the outputs of these codes?
// Promise.resolve()
// .then(() => console.log(1))//ktpi 1 qani vor promise-y resolve.
// .catch(() => console.log(3))//Chi ashxati ays toxy qani vor irenic araj then-y texi e unecel
// .then(() => { console.log(2); throw new Error(); })//ktpi 2 ev error kta
// .then(() => console.log(4))//texi chi unenea qani vor then-y error e poxancel
// .then(() => console.log(4))//texi chi unenea qani vor then-y error e poxancel


// Promise.resolve()
// .then(() => console.log(11))//ktpi 11 qani vor promise-y resolve.
// .then(() => { console.log(12); throw new Error(); })//ktpi 12 ev error kta
// .catch(() => console.log(13))//ktpi 13 qani vor irenic araj then-y error e veradarcrel
// .catch(() => console.log(14))//chi tpi qani vor irenic araj catch-y error chi veradarcrel
// .then(() => console.log(15))//ktpi 15




// Promise.resolve()
// .then(data => {
// throw new Error('Api Error');//generacnum e error 
// return 1;//chi veradarcni 1 qani vor irenic araj error ka
// })
// .then(data => console.log('ok'))//chi ashxati qani vor irenic araj error e ekel
// .catch(error => {
// console.log(error.message);//ktpi Api Error
// return "2";
// })
// .then(data => {
// console.log(data);//ktpi 2 qani vor irenic araj catch-y 2 e veradarcrel
// })

// console.log(1)//arajiny ktpi 1 aynuhetev ktpi verjin console-n aysinqn 6,heto ktpi promise-i miji console-n aysinqn 3 qani vor setTimeout-y petq e spasi jamanaky lrana
// setTimeout(() => {
// console.log(2)
// }, 20)
// Promise.resolve()
// .then(() => {
// console.log(3)
// return 1
// })
// .catch(e => console.log(e, 4))
// .finally(res => console.log(res, 5))
// .then((res) => console.log(res))
// console.log(6)

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // ключи
    // console.log( key );  // name, age, isAdmin
    // значения ключей
    console.log( user[key] ); // John, 30, true
  }
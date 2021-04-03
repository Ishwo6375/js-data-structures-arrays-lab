// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push('Ralph');
}

function destructivelyPrependDriver(name){
   drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(name){
    drivers.pop();
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift();
}

function appendDriver(name){
    const newDrivers = [...drivers];
    newDrivers.push('Broom');
    return newDrivers;
}
 function prependDriver(name){
     const newDrivers = ['Arnold', ...drivers];
     return newDrivers;
 }

 function removeLastDriver(){
     const newDrivers = [...drivers];
     newDrivers.pop();
     return newDrivers;
 }

 function removeFirstDriver(){
     const newDrivers = [...drivers]
      newDrivers.shift();
      return newDrivers;
 }
/*setTimeout(() => {
    console.log("acabaram os dois segundos");
}, 2000);

const names =  ['Vitor', 'Tino', 'Rafael', 'Joel'];
const shortNames = names.filter((name) => {
    return name.length <= 4;
});

console.log(shortNames);

const geocode = (city, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0  
        }

    callback(data);
    }, 2000);
}

const data = geocode('Porto', (data) => {
    console.log(data);
});*/

/*const add = (num1, num2, callback) => {
    setTimeout(() => {
        const data = num1 + num2;

        callback(data);
    }, 2000);
};


const data = add(1, 4, (data) =>  {
    console.log(data);
})*/

/*
const str = 'Olá mundo, eu sou o Vitor';
const str2 = 'Mundo okoko';


console.log(str2.trim());
console.log(str.replaceAll(str, ' '));
*/
//console.log(str.substr(str.indexOf(',')));


/*const add = (num1, num2, callback) => {
    setTimeout(() => {
        const data = num1 + num2;

        callback(data);
    }, 2000);
};

const soma = add(1, 5, (soma) => {
    console.log(soma);
});*/



const concat = (str1, str2, callback) => {
    setTimeout(() => {
        //callback(str1.concat(str2));
        return str1.concat(str2);
    }, 1000);
};

concat('Olá ', 'Mundo', (print) => {
    console.log(print);
})
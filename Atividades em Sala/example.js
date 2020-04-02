'use strict';

// adicionar um executavel ao PATH: set PATH=%PATH%;C:\your\path\here\

//Tipos Basicos
console.log('Tipos\n');
console.log(typeof(1.1)); //number
console.log(typeof('oi')); //string
console.log(typeof(true));//boolean
console.log(typeof(null)) //object
console.log(typeof(undefined)); //undefined
console.log();

// definir variaveis
let a = 2;
let b = 'oi';

// Strings interpoladas
console.log(`o valor de a: ${a}`);

// Condicionais
console.log('COndicionais\n')
if(true){
    console.log('Bloco para Verdadeiro');
}

if(false){
    console.log('Não será executado');
}
else{
    console.log('Bloco Else');
}
console.log()
// operador ternario
console.log('Operador Ternario\n')
let cond = true;

let valor = cond ? 1 : 0;

console.log(`Valor: ${valor}\n`);

// estruturas de repetição
console.log('Repeticoes\n')
let stop = true;
while(stop){
    console.log('faço algo');
    stop = false;
}

for(let i=0; i< 3; i++){
    console.log(`repeticao: ${i}`);
}
console.log();
// Comparações
console.log('Comparacoes:\n')
console.log(`1 == 1 -> ${1 == '1'}`);
console.log(`1 === 1 -> ${1 === '1'}`);
console.log(`1 != 1 -> ${1 != 1}`);
console.log()
// operações matemáticas

console.log(`1/0 = ${1/0}\n`);

// Definições de funções

function soma(a, b){
    return a + b;
}

console.log(`soma(1, 1) = ${soma(1, 1)}`);

let soma2 = function(a, b){
    return a + b;
};

console.log(`soma2(1, 1) = ${soma(1, 1)}`);

let soma3 = (a, b) => {
    return a + b;
};

console.log(`soma3(1, 1) = ${soma(1, 1)}`);
console.log()

// Arrays
console.log('Arrays\n')
let array = [4, 5, 6];
console.log(`array[1] = ${array[1]}`);
array.forEach((item) =>{ console.log(item)})
console.log()

//Objetos : Dicionarios Python
console.log('Objetos\n')
let obj = {chave1: 2, chave2: 4}
console.log(obj.chave1)
console.log(obj['chave2'])
obj['chave3'] = 10
console.log('chave4' in obj)
for (let chave in obj){
    console.log(`chave: ${chave}, valor: ${obj[chave]}`)
}
console.log()
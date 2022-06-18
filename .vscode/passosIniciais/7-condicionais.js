console.log('trabalhando com condicionais');

const idadeComprador = 18;
const estaAcompanhado = true;
const estaComPassagem = true;

const listaDeDestinos = new Array(
    `sao paulo`, `salvador`, `bh`, `ponta negra`, `parajuru`
);

// if(idadeComprador >= 18) {
//     listaDeDestinos.splice(1,1);
// }else if(estaAcompanhado){
//         listaDeDestinos.splice(1,1);
//         console.log('agora posso vender');
//     }else{
//         console.log('menor de idade e não posso vender');
//     }

if(idadeComprador >= 18 || estaAcompanhado) {
    listaDeDestinos.splice(1,1);
        listaDeDestinos.splice(1,1);
        console.log('agora posso vender');
    }else{
        console.log('menor de idade e não posso vender');
    }
    if(idadeComprador >= 18 & estaComPassagem) {
        console.log('boa viajem');
    }
    

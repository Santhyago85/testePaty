console.log('trabalhando com listas');

// const saoPaulo = `sao paulo`;
// const salvador = `salvador`;
// const bh = `bh`;
// const pontaNegra = `ponta negra`;
// const parajuru = `parajuru`;

const listaDeDestinos = new Array(
    `sao paulo`, `salvador`, `bh`, `ponta negra`, `parajuru`
);

listaDeDestinos.push(`curitiba`); // add novo item a lista

listaDeDestinos.splice(1,1); //de onde se inicia a contagem e quantos pagar remove

console.log(listaDeDestinos[0]);


console.log(listaDeDestinos);
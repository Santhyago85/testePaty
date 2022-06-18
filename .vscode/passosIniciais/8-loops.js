console.log('\n trabalhando com loops');

const idadeComprador = 18;
const estaAcompanhado = true;
let estaComPassagem = false;
const destino = "bahia";
let contador = 0;

const listaDeDestinos = new Array(
    `sao paulo`, `salvador`, `bh`, `ponta negra`, `parajuru`
);

const podeComprar = idadeComprador >= 18 || estaAcompanhado;

while(contador < 4){
    contador +=1;
    for(let cont = 0; cont < 3; cont++){
        if(listaDeDestinos[contador] == destino){
            
        }else{
        console.log("destino não existe");
    };
}


}


    

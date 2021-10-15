let numeroAluno = 7;

let listaAlunos = ["Ana","Jaime","Gabriel","Alice","Any","Eva","Julia"];

for (let contador = 0; contador < listaAlunos.length; contador++){
    if(contador == 0){
        console.log(contador + ": ZERO");
    }else if(contador % 2 == 1){
        console.log(contador + ": IMPAR");
    }else{
        console.log(contador + ": Par")
    }
}

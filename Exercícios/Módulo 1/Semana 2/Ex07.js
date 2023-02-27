var salarioInicial = 2000
var salarioAtual = 2000
var metaSalarial = 4000
var percentual =  0.1 //10% de aumento
var mesInicial = 0
var mesAtual = 0


while (salarioAtual < metaSalarial) {
    console.log(salarioAtual += (salarioAtual * percentual));
    if ((mesAtual % 6 == 0)) {
        console.log(mesAtual += 6); 
    } 
};



var checkAge = 59;
var checkLab365 = false;
var checkGender = "Feminino";


if (checkAge < 18) {
    console.log('Entrada Proibida!')
        } else if ((checkLab365 === true) || (checkAge > 60)) {
            console.log('Seja bem-vindo! Entrada Gratuita!')
            } else if ((checkGender === "Masculino") && (checkAge > 18 && checkAge <= 60)) {
                console.log('Valor do Ingresso: R$80,00')
                 } else if ((checkGender === "Feminino") && (checkAge > 18 && checkAge <= 60)) {
                     console.log('Valor do Ingresso: R$50,00')
                    } 
let peso = 70; 
let altura = 1.75

let imc = peso / (altura * altura);

let classificação = 
    imc < 18.5 ? "abaixo do peso":
    imc < 25 ? "peso normal":
    imc < 30 ? "sobrepeso":
                "obesidade";

                console.log("(IMC:, imc.toFixed(2)");
                console.log("classificação:", classificação)
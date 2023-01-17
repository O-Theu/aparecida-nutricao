var pacientes = document.querySelectorAll(".paciente");

for(var i =0; i < pacientes.length; i++){
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var inserirImc = pacientes[i].querySelector(".info-imc")

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        inserirImc.textContent = "Peso inválido";
        pesoValido = false;
        pacientes[i].classList.add("paciente-invalido")
    }
    
    if(!alturaValida) { 
        inserirImc.textContent = "Altura inválida";
        alturaValida = false;
        pacientes[i].classList.add("paciente-invalido")
    }

    if(alturaValida && pesoValido){
        var imc = calcularImc(peso, altura)
        inserirImc.textContent = imc
    }

}

function validaPeso(peso) {
    if(peso > 0 && peso < 700 ) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(Altura) {
    if(Altura > 0 && Altura < 3.0 ) {
        return true;
    } else {
        return false;
    }
}

function calcularImc (peso, altura) {
    var imc = 0;
    imc = peso/(altura*altura);

    return imc.toFixed(2);;
}

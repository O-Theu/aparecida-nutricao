var btnAdicionar = document.querySelector("#buscar-paciente");

btnAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var paciente = JSON.parse(resposta);
    
            paciente.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
});
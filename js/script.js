
var nomes = ["Fred","Ramon","Andréia","Luiz"];

var materia=["PW","DS","BD","PAM"];


function nome(){
    var loopnomes = document.getElementById("loopnomes");
    loopnomes.innerHTML=nomes;
}

function materias(){
    var loopmaterias=document.getElementById("loopmaterias");
    loopmaterias.innerHTML=materia;
}
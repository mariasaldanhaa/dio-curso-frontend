function classification() {
    let heroName = document.getElementById("heroName").value;
    let heroXP = document.getElementById("heroXP").value;
    var result = document.getElementById("result");

    if (heroXP <= 10000) {
        result.innerHTML = `O herói ${heroName} está classificado como: Ferro`;
    } else if (heroXP => 1001 && heroXP <= 2000) {
        result.innerHTML = `O herói ${heroName} está classificado como: Bronze`;
    } else if (heroXP => 2001 && heroXP <= 5000) {
        result.innerHTML = `O herói ${heroName} está classificado como: Prata`;
    } else if (heroXP => 5001 && heroXP <= 7000) {
        result.innerHTML = `O herói ${heroName} está classificado como: Ouro`;
    } else if (heroXP >= 7001 && heroXP <= 8000) {
        result.innerHTML = `O herói ${heroName} está classificado como: Platina`;
    } else if (heroXP >= 8001 && heroXP <= 9000) {
        result.innerHTML = `O herói ${heroName} está classificado como: Ascendente`;
    } else {
       result.innerHTML = `O herói ${heroName} está classificado como: Radiante`;
    }
}
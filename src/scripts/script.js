// Chamada de API


async function getDigimonsAPI(){
    const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");

    return await response.json();
}


// Filtro/Busca dos digimons
async function filtroDigimons(digimonList,digimonId){
    const digimon = await digimonList.find((monster) => monster.id === digimonId);

    return digimon;
}


// Renderizador
async function renderDigimons(digimon) {
    const imgDigimonElement = document.getElementById("img__digimon");
    imgDigimonElement.src = digimon.image;

    const txtDigimonElement = document.getElementById("t-name__Digimon");
    txtDigimonElement.textContent = digimon.name;

    const hpDigimonElement = document.getElementsByClassName("d-hp__int")[0];
    hpDigimonElement.style.width = digimon.HP + "%";

    const atkDigimonElement = document.getElementsByClassName("d-atk__int")[0];
    atkDigimonElement.style.width = digimon.ATK + "%";

    const defDigimonElement = document.getElementsByClassName("d-def__int")[0];
    defDigimonElement.style.width = digimon.DEF + "%";
}


// Main
async function main() {
    const digimons = await getDigimonsAPI();

    const chooseDigimons = await filtroDigimons(digimons, 3);

    await renderDigimons(chooseDigimons);
}

main();



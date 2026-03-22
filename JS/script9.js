let fruta =  "morango";

switch (fruta) {
    case "laranja":
        console.log("Suco de laranja");
        break; // break - parar

    case "morango":
    case "banana":
        console.log("Vitamina de " + fruta);
        break;

    case "maça":
        console.log("Suco de maça");
        break;

    default: // defaut - caso não seja nenhumas das opções
        console.log("Suco genérico");
        break;
}
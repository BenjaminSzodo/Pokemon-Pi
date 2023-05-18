
const validations = (pokemonData) => {
let errors = {}
    if (!pokemonData.name){
        errors.name = 'Escriba un nombre por favor'
    }
    if (pokemonData.name) {
        const regex = /\d/; // Expresión regular para verificar si hay algún número
        if (regex.test(pokemonData.name)) {
          errors.name = "El nombre no puede contener números";
        }
    }
    if (pokemonData.hp > 1000 || !pokemonData.hp) {
            errors.hp = 'Debe tener puntos de salud y no puede superar los 1000 puntos';
    }
    
    if (pokemonData.attack > 1000 || !pokemonData.attack ) {
            errors.attack = 'Debe tener puntos de ataque y no puede superar los 1000 puntos';
    }
    
    if (pokemonData.defense > 1000 || !pokemonData.defense) {
            errors.defense = 'Debe tener puntos de defensa y no puede superar los 1000 puntos';
    }
    
    if (pokemonData.speed > 1000 || !pokemonData.speed) {
            errors.speed = 'Debe tener puntos de velocidad y no puede superar los 1000 puntos';
    }
    
    if (!pokemonData.height) {
            errors.height = 'La altura es obligatorio';
    };
    
    if (!pokemonData.weight) {
            errors.weight = 'El peso es obligatorio';
    }
    
return errors;

}

export default validations

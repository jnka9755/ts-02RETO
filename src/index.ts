import { Character } from "./interfaces/character";
import { filterCharactersById, getCharacters, saveNewCharacter } from "./services/rickAndMorty";

//Obtener info de API y gruardar en Localstorage.

getCharacters()
    .then( (result) => {
        localStorage.setItem('characters', JSON.stringify(result));
    })
    .catch(error => console.error(error));


//Obtener y mostrar elementos desde el localStorage.

const filterResult = filterCharactersById(1);

if (typeof filterResult === 'string')
    console.error(filterResult);
else  
    console.log (filterResult);


// Guardar nuevo Personaje en el LocalStorage TODO

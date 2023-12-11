import { Character, Location } from "./classes/character";
import { filterCharactersById, getCharacters, saveNewCharacter, setDataToLocalStorage, getCharactersToLocalStorage } from './services/rickAndMorty';

//Obtener info de API y gruardar en Localstorage.

getCharacters()
    .then((result) => {
        setDataToLocalStorage(result);

        //Obtener y mostrar elementos desde el localStorage.
        const filterResult = filterCharactersById(1);
        if (typeof filterResult === 'string')
            console.error(filterResult);
        else
            console.log(filterResult);

        // Guardar nuevo Personaje en el LocalStorage TODO
        const newCharacter = new Character(21, "Juan", "unknown", "Human", "Human with ants in his eyes", "Male",
            new Location("Interdimensional Cable", "https://rickandmortyapi.com/api/location/6"), new Location("Interdimensional Cable", "https://rickandmortyapi.com/api/location/6"),
            "https://rickandmortyapi.com/api/character/avatar/20.jpeg", ["https://rickandmortyapi.com/api/episode/8"], "ttps://rickandmortyapi.com/api/character/20", new Date());
        const beforeSave = getCharactersToLocalStorage();
        console.log(beforeSave);
        saveNewCharacter(newCharacter);
        const afterSave = getCharactersToLocalStorage();
        console.log(afterSave);

    })
    .catch(error => console.error(error));







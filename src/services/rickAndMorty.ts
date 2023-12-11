import axios from "axios";
import { Character, ListCharactes } from '../interfaces/character';

export const getCharacters = async(): Promise<Character[]> => {

    const response = await axios.get<ListCharactes>(`https://rickandmortyapi.com/api/character`)
    
    return response.data.results;
}


export const filterCharactersById = (idCharacter: number): Character | string => {

    const strValue = localStorage.getItem('characters');
    const characters: Character[] = strValue ? JSON.parse(strValue) : [];

    const character = characters.find( x => x.id === idCharacter);

    return character ? character : 'Personaje no encontrado';
}

export const saveNewCharacter = (character: Character): void => {
    //TODO
}
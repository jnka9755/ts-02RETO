import axios from "axios";
import { Character, ListCharactes } from '../classes/character';

export const getCharacters = async(): Promise<Character[]> => {

    const response = await axios.get<ListCharactes>(`https://rickandmortyapi.com/api/character`)
    
    return response.data.results;
}

export function setDataToLocalStorage(characters: Character[]): void {
    localStorage.setItem('characters', JSON.stringify(characters));
}

export function getCharactersToLocalStorage(): Character[] {
    const strValue = localStorage.getItem('characters');
    const characters: Character[] = strValue ? JSON.parse(strValue) : [];
    return characters;
}

export const filterCharactersById = (idCharacter: number): Character | string => {
    const characters: Character[] = getCharactersToLocalStorage();
    const character = characters.find( x => x.id === idCharacter);

    return character ? character : 'Personaje no encontrado';
}

export const saveNewCharacter = (character: Character): void => {
    const characters: Character[] = getCharactersToLocalStorage();
    characters.push(character);
    setDataToLocalStorage(characters);
}


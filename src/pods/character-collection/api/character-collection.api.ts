import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  let characterListApi = [];
  let characterListEndpoint = `/api/character/`;
  const response = await fetch(characterListEndpoint);

  if (response.ok) 
  {
    const json = await response.json();
    characterListApi = json.results;
  }

  return characterListApi;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  let charactersEndpoint = `/api/characters/${id}`;
  return fetch(charactersEndpoint, {
    method: 'DELETE',
  }).then(() => true).catch(() => false);
};

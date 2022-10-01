import { Character, LocationApi } from './character.api-model';
import { Lookup } from 'common/models';
import { mockLocations, mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: string): Promise<Character | null> => {
  let characterApi: Character | null = null;
  try {
    let characterEndpoint = `${'https://rickandmortyapi.com/api'}/character/${id}`;
    const response = await fetch(characterEndpoint);

    if (response.ok) {
      characterApi = await response.json();
    }

    return characterApi;
  } catch (ex) {
    console.log(ex);
  }
};

export const getLocations = async (): Promise<LocationApi[]> => {
  let locationsApi: LocationApi[] = [];
  try {
    let locationEndpoint = `${'https://rickandmortyapi.com/api'}/location`;
    const response = await fetch(locationEndpoint);

    if (response.ok) {
      const responseJson = await response.json();
      locationsApi = responseJson.results;
    }

    return locationsApi;
  } catch (ex) {
    console.log(ex);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};

export const getCharacterBestSentences = async (id: number): Promise<string[]> => 
  (await (await fetch(`api/bestSentences?id=${id}`)).json())[0]?.bestSentences ?? [];

  export const setCharacterBestSentences = 
  async (id: number, bestSentences: string[]): Promise<boolean> => {
    const res = await (await fetch(`api/bestSentences/${id}`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, bestSentences })
      }
    )).json()
    if (Object.keys(res).length === 0) createCharacterBestSentences(id, bestSentences)
    return true
  };

  const createCharacterBestSentences = 
  async (id: number, bestSentences: string[]): Promise<boolean> => 
  (await fetch('api/bestSentences', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, bestSentences })
    }
  )).json();



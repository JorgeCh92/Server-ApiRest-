import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi, mapLocationApiToLookup } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';
import { LocationApi } from './api';
import { mapToCollection } from '../../common/mappers';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const [locations, setLocations] = React.useState<Lookup[]>([]);
  const { id } = useParams();
  const history = useHistory();

  const handleLoadLocationCollection = async () => {
    const apiLocations: LocationApi[] = await api.getLocations();
    setLocations(mapToCollection(apiLocations, mapLocationApiToLookup));
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadLocationCollection();
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} locations={locations} onSave={handleSave} />;
};

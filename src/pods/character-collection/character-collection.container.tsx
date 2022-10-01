import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { CharacterCollection, loadCharacterCollection } = useCharacterCollection();
  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {
    history.push(linkRoutes.editCharacter(id.toString()));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection();
  };

  return (
    <CharacterCollectionComponent
      CharacterCollection={CharacterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

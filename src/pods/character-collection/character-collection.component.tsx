import * as React from 'react';
import Button from '@material-ui/core/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  CharacterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { CharacterCollection, onCreateCharacter, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add Character
      </Button>

      <ul className={classes.list}>
        {CharacterCollection.map((Character) => (
          <li key={Character.id}>
            <CharacterCard Character={Character} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

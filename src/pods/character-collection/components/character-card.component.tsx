import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  Character: CharacterEntityVm;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { Character, onEdit, onDelete } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{Character.status}</Avatar>}
        title={Character.name}
        subheader={Character.species}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia onClick={() => onEdit(Character.id)}
            image={Character.image }
            title={Character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          {Character.bestSentences.length > 0 && 
            <Typography variant="subtitle1" gutterBottom>
              { '"' + Character.bestSentences.join('", "') + '"' }
            </Typography>
          }
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(Character.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(Character.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

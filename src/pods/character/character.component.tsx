import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { Lookup } from 'common/models';

interface Props {
  character: Character;
  locations: Lookup[];
  onSave: (Character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, locations, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <SelectComponent name="location.name" label="Location" items={locations} />
          <TextFieldComponent
            name="status"
            label="Status"
          />
          <TextFieldComponent
            name="species"
            label="Species"
          />
          <TextFieldComponent
            name="gender"
            label="Gender"
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};

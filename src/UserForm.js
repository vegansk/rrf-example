import React from 'react';
import { Control, Form } from 'react-redux-form';

let UserForm = () => (
  <Form model="testForm">
    <label>Username: </label>
    <Control.text model=".user"/>
    <label>Password: </label>
    <Control type="password" model=".password"/>
  </Form>
);

export default UserForm;

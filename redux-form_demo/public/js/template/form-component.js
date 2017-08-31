import {TextField, RadioButtonGroup, SelectField, Checkbox} from 'material-ui';
import React from 'react';

const renderTextField = ({
                             input,
                             label,
                             meta: {touched, error},
                             ...custom
                         }) =>
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />;

const renderRadioGroup = ({input}) =>
    <RadioButtonGroup
        {...input}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />;

const renderSelectField = ({
                               input,
                               label,
                               meta: {touched, error},
                               children,
                           }) =>
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
    />;

const renderCheckbox = ({input, label}) =>
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
    />;

module.exports = {
    renderTextField,
    renderRadioGroup,
    renderSelectField,
    renderCheckbox
}
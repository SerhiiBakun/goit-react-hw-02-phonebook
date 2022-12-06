import PropTypes from 'prop-types';
import { Field, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Field>
      Find contacts by name
      <Input
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Field>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

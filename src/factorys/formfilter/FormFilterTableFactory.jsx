import TextInput from './TextInput';
import DateInput from './DateInput';
import SelectInput from './SelectInput';

const FormFilterTableFactory = {
  createTextInput: (props) => <TextInput {...props} />,
  createDateInput: (props) => <DateInput {...props} />,
  createSelectInput: (props) => <SelectInput {...props} />,
};

export default FormFilterTableFactory;
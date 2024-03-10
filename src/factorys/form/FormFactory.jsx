import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SendButton from './SendButton';

const FormFactory = {
  createPasswordInput: (props) => <PasswordInput {...props} />,
  createEmailInput: (props) => <EmailInput {...props} />,
  createSendButton: (props) => <SendButton {...props} />,
};

export default FormFactory;
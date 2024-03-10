import HandleSubmit from './HandleSubmit'
const HandlersFactory = {
  createChange: (setState) => (e) => setState(e.target.value),
  handleSubmit : (formData) => (e) => HandleSubmit(e,formData),
};

export default HandlersFactory;

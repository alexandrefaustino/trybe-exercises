import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .uppercase()
    .max(40, 'máximo 05 caracteres')
    .required('*'),
  email: Yup.string()
    .email().max(50).required('*'),
  cpf: Yup.string()
    .min(11).max(11).required('*')
})
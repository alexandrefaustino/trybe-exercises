import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .uppercase()
    .max(40, 'máximo 05 caracteres')
    .required('*'),
  email: Yup.string()
    .email()
    .max(50)
    .required('*'),
  cpf: Yup.string()
    .matches(/^\d+$/, 'não é um número')
    .max(11)
    .min(11)
    .required('*'),
  address: Yup.string()
    .max(200)
    .matches(/[a-z]/gi, 'apenas letras')
    .required('*'),
  city: Yup.string()
    .max(28)
    .matches(/[a-z]/gi, 'apenas letras')
    .required('*'),
  state: Yup.string()
    .required('*'),
  picked: Yup.boolean(),
  curriculum: Yup.string()
    .required('*').max(1000),
  office: Yup.string()
    .max(40).required('*'),
  jobDescription: Yup.string()
    .max(500).required('*'),
})
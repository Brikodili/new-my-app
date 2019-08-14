import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  name_customer: Yup.string()
    .min(2, 'Too Short!'),
  email: Yup.string()
    .min(2, 'Too Short!')
    .email('Invalid email')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short!')
    .required('Required'),
  role: Yup.string()
    .required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('Required'),
  password_confirmation: Yup.string()
    .min(8, 'Too Short!')
    .required('Required'),
});

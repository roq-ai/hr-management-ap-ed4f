import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  established_at: yup.date().nullable(),
  industry: yup.string().nullable(),
  location: yup.string().nullable(),
  name: yup.string().required(),
});

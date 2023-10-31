import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  joined_at: yup.date().nullable(),
  department: yup.string().nullable(),
  position: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});

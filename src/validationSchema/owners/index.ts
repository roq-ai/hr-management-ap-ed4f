import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  joined_at: yup.date().nullable(),
  position: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});

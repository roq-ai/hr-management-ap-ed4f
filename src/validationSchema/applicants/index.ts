import * as yup from 'yup';

export const applicantValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  applied_at: yup.date().nullable(),
  cv: yup.string().nullable(),
  cover_letter: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
